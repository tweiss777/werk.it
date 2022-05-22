import {
    readUser,
    readAllUsers,
    createUser,
    loginUser,
    logoutUser,
    refreshUserToken,
} from '../models/Auth.model.js'

const { TOKEN_COOKIE: tokenCookie } = process.env

export const refreshToken = async (req, res, next) => {
    try {
        const refreshToken = req.cookies[tokenCookie]
        if (!refreshToken)
            next({ status: 401, message: 'Refresh token was not found' })
        const user = await readUser({ refresh_token: refreshToken }, true)
        if (!user)
            return next({ status: 403, message: 'Refresh token is invalid' })
        const { accessToken, error } = await refreshUserToken(
            refreshToken,
            user
        )
        if (error) next(error)
        res.json({ accessToken })
    } catch (err) {
        next(err)
    }
}

export const getUsers = async (req, res, next) => {
    try {
        const users = await readAllUsers()
        res.json(users)
    } catch (err) {
        next(err)
    }
}

export const getUser = async (req, res, next) => {
    const id  = req.params?.id || req.user?.id
    try {
        const user = await readUser({ id }, true)
        if (user) {
            const { error } = user
            next(error)
        }
        res.json(user)
    } catch (err) {
        next(err)
    }
}

export const Register = async (req, res, next) => {
    try {
        const userCreated = await createUser(req.body)
        if (userCreated) {
            const { error } = userCreated
            next(error)
        }
        res.json(userCreated)
    } catch (err) {
        next(err)
    }
}

export const Login = async (req, res, next) => {
    try {
        const { accessToken, refreshToken, error } = await loginUser(req.body)
        if (error) next(error)
        res.cookie('refreshToken', refreshToken)
        res.json({ accessToken })
    } catch (err) {
        next(err)
    }
}

export const Logout = async (req, res, next) => {
    try {
        const { status, clear } = await logoutUser(req.cookies[tokenCookie])
        if (clear) await res.clearCookie(tokenCookie)
        return res.status(status)
    } catch (err) {
        next(err)
    }
}
