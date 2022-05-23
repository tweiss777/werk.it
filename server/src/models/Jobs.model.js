import { Jobs } from '../migrations/Jobs.migration.js'
import { error, exposeAttributes, translateFields } from '../utils/utils.js'

export const createJob = async (fields) => {
    const newJob = translateFields(fields)
    return await Jobs.create(newJob)
}

export const updateJob = async (fields, whereFields) => {
    const payload = translateFields(fields)
    const where = translateFields(whereFields)
    return await Jobs.update({ payload }, { where })
}

export const deleteJob = async (fields) => {
    const where = translateFields(fields)
    return await Jobs.destroy({
        where,
    })
}

export const readJob = async (fields) => {
    const where = translateFields(fields)
    console.log(where)
    const job = await Jobs.findOne({
        where,
    })
    return job
}

export const readAllJobs = async (fields) => {
    const where = translateFields(fields)
    return await Jobs.findAll(where)
}
