const jobsSchema = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        addedBy: { type: 'string' },
        position: { type: 'string' },
        companyName: { type: 'string' },
        companyUrl: { type: 'string' },
        companyLogo: { type: 'string' },
        jobDescription: { type: 'string' },
        jobSource: { type: 'string' },
        jobPhase: { type: 'string' },
        jobStatus: { type: 'string' },
        handedCv: { type: 'string' },
        handedAsgmt: { type: 'string' },
        handedCover: { type: 'string' },
        notes: { type: 'string' },
    },
    // required: ['id', 'runtime', 'plot', 'poster'],
    additionalProperties: false,
}

export default jobsSchema
