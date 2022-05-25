export interface IJobsContext{
        isLoading: boolean,
        setIsLoading: Function,
        fetchAllJobs:Function,
        fetchJobById:Function,
        addNewJob:Function,
        updateJob:Function,
        deleteJob:Function,
        fetchAllWishlistJobs:Function,
        fetchWishlistJobById:Function,
        deleteWishlistJob:Function
    
}



export const JobsContextDefaults: IJobsContext = {
    isLoading: false,
    setIsLoading: undefined,
    fetchAllJobs: undefined,
    fetchJobById: undefined,
    addNewJob: undefined,
    updateJob: undefined,
    deleteJob: undefined,
    fetchAllWishlistJobs: undefined,
    fetchWishlistJobById: undefined,
    deleteWishlistJob: undefined
}
