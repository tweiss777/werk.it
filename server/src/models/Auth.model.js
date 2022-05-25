import Users from '../migrations/Auth.migration.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { error, exposeAttributes } from '../utils/utils.js'

const publicAttributes = ['id', 'email', 'firstName', 'lastName', 'is_admin']

export const readUser = async (where, isPublic = false) => {
    const user = await Users.findOne({
        where,
        ...(isPublic && { attributes: publicAttributes }),
    })
    return user
}

export const createUser = async (reqBody) => {
    const { email, password, passwordConfirm, firstName, lastName } = reqBody

    if (password !== passwordConfirm)
        return error(400, 'Password confirmation does not match')

    const emailExists = await readUser({ email })
    if (emailExists) return error(409, 'Email already exists')

    const salt = await bcrypt.genSalt()
    const hashPassword = await bcrypt.hash(password, salt)

    await Users.create({
        firstName,
        lastName,
        email,
        password: hashPassword,
    })

    return await readUser({ email }, true)
}

export const updateUser = async (userId, fields) => {
    return await Users.update(fields, { where: { id: userId } })
}

export const loginUser = async (reqBody) => {
    const user = await readUser({ email: reqBody.email })
    if (!user) return error(400, 'User does not exist')

    const { id: userId, password } = user

    const passwordOK = await bcrypt.compare(reqBody.password, password)
    if (!passwordOK) return error(400, 'Wrong Password')

    const keys = exposeAttributes(user.dataValues, publicAttributes)
    console.log(keys)
    const accessToken = jwt.sign(
        { user: keys },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: '15s',
        }
    )

    const refreshToken = jwt.sign(
        { user: keys },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: '1d',
        }
    )

    await updateUser(userId, { refresh_token: refreshToken })

    return { accessToken, refreshToken }
}

export const logoutUser = async (userId) => {
    if (!userId) return { status: 204 }

    const user = await readUser({ id: userId })
    if (!user) return { status: 204 }

    await updateUser(userId, { refresh_token: null })
    return { status: 200, clear: true }
}

export const refreshUserToken = async (refreshToken, user) => {
    return jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return error(403, 'Access token is not valid')
            const keys = exposeAttributes(user.dataValues, publicAttributes)
            const accessToken = jwt.sign(
                { user: keys },
                process.env.ACCESS_TOKEN_SECRET,
                {
                    expiresIn: '15s',
                }
            )
            return { accessToken }
        }
    )
}
