import jwt from 'jsonwebtoken'

const { REFRESH_TOKEN_SECRET: refreshTokenSecret } = process.env

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader?.split(' ')[1]
    console.log('!!!', token)
    if (token == null)
        return res.status(401).json('No valid authorization header')
    jwt.verify(token, refreshTokenSecret, (err, decoded) => {
        console.log('!!!', token)
        if (err) return res.status(403).json('Token is not valid')
        console.log(decoded)
        req.user = decoded.user
        next()
    })
}
