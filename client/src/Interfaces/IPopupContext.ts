export interface IPopupContext {
    showNewJob: boolean;
    showJobInfo: boolean;
    setShowNewJob: Function;
    setShowJobInfo: Function;
}



export const popupContextDefault: IPopupContext ={
    showNewJob: false,
    showJobInfo: false,
    setShowNewJob: undefined,
    setShowJobInfo: undefined,
}