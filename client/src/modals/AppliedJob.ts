

// enum for determining the status
enum StatusColors{
    LABEL_COLOR = '#EBFDFF',
    LABEL_BG = '#1ABBB9',
    COMPLETED_COLOR = '#18AB56',
    COMPLETED_BG = '#EFFFF6',
    REJECTED_COLOR = '#C93131',
    REJECTED_BG = '#FFECEC',
    WAITING_COLOR = '#E86F00',
    WAITING_BG = '#FFF5EB',
    INACTIVE_COLOR = '#828282',
    INACTIVE_BG = '#EDEBEB'

}


// enum for determining the phase
enum PhaseColors{
    APPLICATION_COLOR = '#2A07E3',
    APPLICATION_BG = '#ECEAF4',
    TECH_INTERVIEW_COLOR = '#AF1DC8',
    TECH_INTERVIEW_BG = '#FADEFF',
    HR_INTERVIEW_COLOR = '#ED8102',
    HR_INTERVIEW_BG = '#FFFDE8',
    MGMT_INTERVIEW_COLOR = '#189D7D',
    MGMT_INTERVIEW_BG = '#E8FFE0',
    HOME_ASSIGNMENT_COLOR = '#E21A1A',
    HOME_ASSIGNMENT_BG = '#FFE8E8',
    OFFER_COLOR = '#FFFFFF',
    OFFER_BG = '#2A07E3',
}


export default class AppliedJob {
    job_id: string;
    status: string;
    phase: string;
    handed_in: string;

    constructor(job_id: string,status:string,phase: string,handed_in:string){
        this.job_id = job_id;
        this.status = status;
        this.phase = phase;
        this.handed_in = handed_in;
    }

    

    determineStatus(): string [] {
        /*
            returns [bg-color, font-color]
        */
        
        switch(this.status.toLowerCase()){
            case 'label':
                return [StatusColors.LABEL_BG,StatusColors.LABEL_COLOR];
            case 'completed':
                return [StatusColors.COMPLETED_BG,StatusColors.COMPLETED_COLOR];
            case 'rejected':
                return [StatusColors.REJECTED_BG,StatusColors.REJECTED_COLOR];
            case 'waiting':
                return [StatusColors.WAITING_BG,StatusColors.WAITING_COLOR];
            case 'inactive':
                return [StatusColors.INACTIVE_BG,StatusColors.INACTIVE_COLOR]
            default:
                throw Error("Error: Invalid Application Status")
                
        }
    }

    determinePhase(): string [] {
        /*
            returns [bg-color, font-color]
        */
        switch(this.phase.toLowerCase()){
            case 'application':
                return [PhaseColors.APPLICATION_BG,PhaseColors.APPLICATION_COLOR];
            case 'tech interview':
                return [PhaseColors.TECH_INTERVIEW_BG,PhaseColors.TECH_INTERVIEW_COLOR];
            case 'hr interview':
                return [PhaseColors.HR_INTERVIEW_BG,PhaseColors.HR_INTERVIEW_COLOR];
            case 'manager interview':
                return [PhaseColors.MGMT_INTERVIEW_BG,PhaseColors.MGMT_INTERVIEW_COLOR];
            case 'home assignment':
                return [PhaseColors.HOME_ASSIGNMENT_BG,PhaseColors.HOME_ASSIGNMENT_COLOR];
            case 'got an offer!':
                return [PhaseColors.OFFER_BG,PhaseColors.OFFER_COLOR];
            default:
                throw Error("Error: Invalid color code ")
        }        
        
    }

    




}