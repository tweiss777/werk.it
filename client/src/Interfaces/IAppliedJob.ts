export interface IAppliedJob {
    job_id: string;
    status: string;
    phase: string;
    handed_in: string;
    upcoming_event?: string;
}
