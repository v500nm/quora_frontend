// Module
export const getModuleReadAccess = (ModuleID) => {
    const loginAccesslist = JSON.parse(localStorage.getItem('ModuleAccessList'))
    // console.log("loginAccesslist--", loginAccesslist)
    const moduleAccess = loginAccesslist.find((item) => item.ModuleID == ModuleID);
    if (moduleAccess) {
        return moduleAccess.ReadAccess;
    } else {
        return false
    }
};

export const getModuleWriteAccess = (ModuleID) => {
    const loginAccesslist = JSON.parse(localStorage.getItem('ModuleAccessList'))
    // console.log("loginAccesslist--", loginAccesslist)
    const moduleAccess = loginAccesslist.find((item) => item.ModuleID == ModuleID);
    if (moduleAccess) {
        return moduleAccess.WriteAccess;
    } else {
        return false
    }
};

export const getModuleUpdateAccess = (ModuleID) => {
    const loginAccesslist = JSON.parse(localStorage.getItem('ModuleAccessList'))
    // console.log("loginAccesslist--", loginAccesslist)
    const moduleAccess = loginAccesslist.find((item) => item.ModuleID == ModuleID);
    if (moduleAccess) {
        return moduleAccess.UpdateAccess;
    } else {
        return false
    }
};

export const getModuleDeleteAccess = (ModuleID) => {
    const loginAccesslist = JSON.parse(localStorage.getItem('ModuleAccessList'))
    // console.log("loginAccesslist--", loginAccesslist)
    const moduleAccess = loginAccesslist.find((item) => item.ModuleID == ModuleID);
    if (moduleAccess) {
        return moduleAccess.DeleteAccess;
    } else {
        return false
    }
};

export const getModuleIs_SpecialAccess = (ModuleID) => {
    const loginAccesslist = JSON.parse(localStorage.getItem('ModuleAccessList'))
    // console.log("loginAccesslist--", loginAccesslist)
    const moduleAccess = loginAccesslist.find((item) => item.ModuleID == ModuleID);
    if (moduleAccess) {
        return moduleAccess.Is_SpecialAccess;
    } else {
        return false
    }
};

export const getModuleDownloadAccess = (ModuleID) => {
    const loginAccesslist = JSON.parse(localStorage.getItem('ModuleAccessList'))
    // console.log("loginAccesslist--", loginAccesslist)
    const moduleAccess = loginAccesslist.find((item) => item.ModuleID == ModuleID);
    if (moduleAccess) {
        return moduleAccess.DownloadAccess;
    } else {
        return false
    }
};



//Report
export const getReportViewAccess = (ReportID) => {
    const ReportAccesslist = JSON.parse(localStorage.getItem('ReportAccessList'))
    // console.log("ReportAccesslist--", ReportAccesslist)
    const ReportAccess = ReportAccesslist.find((item) => item.ReportID == ReportID);
    if (ReportAccess) {
        return ReportAccess.ViewAccess;
    } else {
        return false
    }
};

export const getReportDownloadAccess = (ReportID) => {
    const ReportAccesslist = JSON.parse(localStorage.getItem('ReportAccessList'))
    // console.log("ReportAccesslist--", ReportAccesslist)
    const ReportAccess = ReportAccesslist.find((item) => item.ReportID == ReportID);
    if (ReportAccess) {
        return ReportAccess.DownloadAccess;
    } else {
        return false
    }
};