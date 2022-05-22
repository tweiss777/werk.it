import jwt from 'jsonwebtoken'

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET as string

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.replace('Bearer ', '')
    if (token == null)
        return res.status(401).json('No valid authorization header')
    jwt.verify(token, accessTokenSecret, (err, decoded) => {
        if (err) return res.status(403).json('Token is not valid')
        req.user = decoded.user
        next()
    })
}
