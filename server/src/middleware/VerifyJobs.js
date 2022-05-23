import Ajv from 'ajv'
import movieSchema from '../data/movieSchema.js'

const ajv = new Ajv()
const validate = ajv.compile(movieSchema)

const validateJobs = (req, res, next) => {
    const valid = validate(req.body)

    if (valid) {
        next()
    } else {
        res.status(400).send(validate.errors)
    }
}

export default movieValidation
