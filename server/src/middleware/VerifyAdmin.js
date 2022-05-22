export const verifyAdmin = (req, res, next) => {
    if (!req.user.is_admin) return res.status(401).json('Unauthorized: user does not have administrator rights')
    else next()
}
