export const customJoin = (arr, s1, s2) =>
    arr
        .slice(0, -1)
        .join(s1)
        .concat(arr.length > 1 ? s2 : '', arr.slice(-1))

export const error = (status, message) => ({ error: { status, message } })

export const cleanObject = o => {
    for (const prop in o) {
        if (o[prop] === undefined) delete o[prop];
    }
    return o
}

export const translateFields = (fields) => {
    const {
        id,
        addedBy,
        added_by,
        position,
        companyName,
        companyUrl,
        companyLogo,
        jobDesc,
        jobSource,
        jobPhase,
        jobStatus,
        handedCv,
        handedAsgmt,
        handedCover,
        notes,
        ...rest
    } = fields
    
    const dbFields = {
        id,
        added_by: addedBy || added_by,
        position,
        company_name: companyName,
        company_url: companyUrl,
        company_logo: companyLogo,
        job_desc: jobDesc,
        job_source: jobSource,
        phase: jobPhase,
        status: jobStatus,
        handed_cv: handedCv,
        handed_asgmt: handedAsgmt,
        handed_cover: handedCover,
        notes,
        ...rest
    }
    return dbFields
    // return cleanObject(dbFields) // this was returning undefined, might want to add it later
}

export const exposeAttributes = (obj, attributes) =>
    Object.keys(obj)
        .filter((key) => attributes.includes(key))
        .reduce((cur, key) => {
            return Object.assign(cur, { [key]: obj[key] })
        }, {})