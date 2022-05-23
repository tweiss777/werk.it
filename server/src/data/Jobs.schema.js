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
        phase: { type: 'string' },
        status: { type: 'string' },
        handedCV: { type: 'string' },
        handedAssignment: { type: 'string' },
        handedCoverLetter: { type: 'string' },
        nextEventDate: { type: 'string' },
        nextEventDescription: { type: 'string' },
    },
    required: ['name', 'runtime', 'plot', 'poster'],
    additionalProperties: false,
}

export default jobsSchema
