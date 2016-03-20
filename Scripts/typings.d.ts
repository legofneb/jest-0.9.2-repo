interface Window {
    analyticsHelper: any;
    buildRequestModel: any;
    canvg: any;
    ClearEmailFields: any;
    controlTemplatesPath: string;
    debugMode: boolean;
    determineSiteId: any;
    displayMessageSeconds(): number;
    downloadPolling: any;
    emailReport: any;
    encodeURIComponent(component: string): string;
    error: any;
    ga: Function;
    getBiPollSeconds: any;
    getJsonStore: any;
    getReportData: any;
    getVirtualPath(): string;
    isInternalAdmin(): boolean;
    isInternalUsingSiteAccount: any;
    isPageLoaded: boolean;
    messagebox: any;
    moment(): any;
    pad: any;
    reportInputsValid(): boolean;
    reportTypeSupportedFileExtensions: any;
    requestReport(): void;
    RetrieveOnDemandReports: any;
    RetrieveOnDemandReportsSummary: any;
    storePropertyValue: any;
    submitReportForm(): void;
    testing: any;
    validateReportingPeriod(): boolean;
}

interface SignalR {
    onDemandReportsHub: any;
}

interface JQuery {
    jsGrid(action?: any): any;
    selectpicker(options?: any): any;
}

interface JQueryAjaxSettings {
    callbackData?: any;
}

declare var jsGrid: any;

declare var error: any;

declare var timerCall: any;

declare module "react-modal" {
    var Modal: any;
    export default Modal;
}

declare var module: any;

declare var google: any;

declare var global: any;

declare var process: any;

declare var require: any;