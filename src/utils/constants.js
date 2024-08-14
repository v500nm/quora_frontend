import { axiosPost, axiosGet } from "../react_axios/Axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const BASE_URL = "http://localhost:9000";

//3.11...............................................
// export const BASE_URL = "http://192.168.3.11:9304/api";
export var REPORT_BASE_URL = `http://192.168.3.11:9201/doc`;

//UAT...............................................
// export const BASE_URL = "https://crm-uat.india-itme.com/api";
// export var REPORT_BASE_URL = `https://crm-uat.india-itme.com/doc`;

//PROD...............................................
// export const BASE_URL = "https://crm.india-itme.com/api";
// export var REPORT_BASE_URL = `https://crm.india-itme.com/doc`;
//..............................................................
export const sessionExpireMessage = "Session expired! Please login again.";
export const tokenInavlidMessage = "Token invalid";

// prod url with HTTPS.....................................................
// export var BASE_URL = `https://${window.location.host}/api`;
// prod url with HTTP only.....................................................
// export var BASE_URL = `http://${window.location.host}/api`;

// link for Download submitted undertaking for uat

export const fetchAuthReport = `${REPORT_BASE_URL}/report/SetParameterData`;
export const downloadReport = `${REPORT_BASE_URL}/WebForm/ItmeReportViewer.aspx`;

export const reportName = "ExhibitorRegistration.rpt";
export const bonafideDocName = "bonafideCertificate.rpt";
export const ParticipationCertificateDocName = "Participation_Certificate.rpt";
export const signatureDocName = "ExhibitorSignature.rpt";
export const NoDuesCertificateDoc = "NoDuesCertificate.rpt";
export const manualFormDoc = "Exhibitioncpy.rpt";
export const taxInvoiceDoc = "TaxInvoice.rpt";
// Visitor badge report
export const badgeReportName = "VisitorBadge.rpt";

//
export const paymentPortalLink =
  "https://test.ccavenue.com//transaction/transaction.do?command=initiateTransaction"; //Dev
// export const paymentPortalLink = "https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction"; //UAT

// auth
export const authUrl = `${BASE_URL}/auth/loginUser`;
export const changePasswordUrl = `${BASE_URL}/auth/changePassword`;
export const updatePasswordUrl = `${BASE_URL}/auth/updatePassword`;
// forget login password
export const forgetCheckedEmailUrl = `${BASE_URL}/auth/forgetCheckedEmail`;
export const forgetGetOtpUrl = `${BASE_URL}/auth/forgetGetOtp`;
export const forgetUpdatePasswordUrl = `${BASE_URL}/auth/forgetUpdatePassword`;

// link to share exhibiton registration
export const exhRegUrl = "/#/IA23";

// login url
export const loginUrl = `/#/login/`;

// dropdown list
export const fillListUrl = `${BASE_URL}/fillList/getDropdownList`;

//master
export const IndustrySegmentListUrl = `${BASE_URL}/industrySegment/IndustrySegmentList`;
export const IndustrySegmentAddUrl = `${BASE_URL}/industrySegment/addUpdateIndustrySegment`;
export const IndustrySegmentDetailUrl = `${BASE_URL}/industrySegment/getIndustrySegmentDetails`;
export const IndustrySegmentDeleteUrl = `${BASE_URL}/industrySegment/deleteIndustrySegment`;
export const IndustrySegmentHistoryUrl = `${BASE_URL}/industrySegment/getIndustrySegmentHistory`;
//dashboard
export const dashboardUrl = `${BASE_URL}/dashboard/getDashboardData`;
//contact import and update bulk
export const importContactUrl = `${BASE_URL}/importContact/importContactsAndBulkUpdate`;
export const importFieldsUrl = `${BASE_URL}/importContact/getImportFieldsData`;
export const bulkUpdateUrl = `${BASE_URL}/importContact/bulkUpdateContacts`;
export const importContactsListUrl = `${BASE_URL}/importContact/getImportContactList`;
//contacts
export const ContactListUrl = `${BASE_URL}/contacts/ContactList`;
export const ContactAddUrl = `${BASE_URL}/contacts/addUpdateContact`;
export const ContactRevokeUrl = `${BASE_URL}/contacts/revokeContact`;
export const ContactDetailUrl = `${BASE_URL}/contacts/getContactDetails`;
export const ContactDeleteUrl = `${BASE_URL}/contacts/deleteContact`;
export const ContactHistoryUrl = `${BASE_URL}/contacts/getContactHistory`;
//ContactGroup
export const ContactGroupListUrl = `${BASE_URL}/contactGroup/ContactGroupList`;
export const ContactGroupAddUrl = `${BASE_URL}/contactGroup/addUpdateContactGroup`;
export const ContactGroupDetailUrl = `${BASE_URL}/contactGroup/getContactGroupDetails`;
export const ContactGroupDeleteUrl = `${BASE_URL}/contactGroup/deleteContactGroup`;
export const ContactGroupHistoryUrl = `${BASE_URL}/contactGroup/contactCategoryHistory`;
//duplicate contact
export const duplicateContactListUrl = `${BASE_URL}/dupContact/dupContactList`;
export const duplicateContactDetailsUrl = `${BASE_URL}/dupContact/getDupContactDetails`;
export const duplicateContactAllowDeleteUrl = `${BASE_URL}/dupContact/allowDeleteUpdateDupContact`;
// export const duplicateContactEditUrl = `${BASE_URL}/dupContact/editDupContact`;

// contact with error
export const getContactWithErrorListUrl = `${BASE_URL}/contactWithError/getContactWithErrorList`;
export const contactWithErrorAUUrl = `${BASE_URL}/contactWithError/contactWithErrorAU`;
export const getContactWithErrorDetailsUrl = `${BASE_URL}/contactWithError/getContactWithErrorDetails`;
export const deleteContactWithErrorUrl = `${BASE_URL}/contactWithError/deleteContactWithError`;
export const getContactWithErrModifyHistoryListUrl = `${BASE_URL}/contactWithError/getContactWithErrModifyHistoryList`;
// templateGenerator
export const templateGeneratorListUrl = `${BASE_URL}/templateGenerator/getTemplateGeneratorList`;
export const templateGeneratorAddUpdateUrl = `${BASE_URL}/templateGenerator/insertUpdateTemplateGenerator`;
export const templateGeneratorDetailUrl = `${BASE_URL}/templateGenerator/getTemplateGeneratorDetails`;
export const templateGeneratorDeleteUrl = `${BASE_URL}/templateGenerator/deleteTemplateGenerator`;

//viewCampaign
export const viewCampaignListUrl = `${BASE_URL}/viewCampaign/getViewCampaignList`;
export const viewCampaignUpdateUrl = `${BASE_URL}/viewCampaign/updateViewCampaign`;
export const viewCampaignHistoryUrl = `${BASE_URL}/viewCampaign/getCampaignHistoryData`;
export const viewCampaignDetailUrl = `${BASE_URL}/viewCampaign/getViewCampaignDetails`;
export const viewCampaignDeleteUrl = `${BASE_URL}/viewCampaign/handleDeleteCampaign`;
//sendCampaign
export const sendCampaignAddUpdateUrl = `${BASE_URL}/sendCampaign/addUpdateSendCampaign`;
export const sendCampaignTestReleaseUrl = `${BASE_URL}/sendCampaign/sendCampaignTestRelease`;
//report
export const reportListUrl = `${BASE_URL}/reports/getReportList`;
export const reportDtlList = `${BASE_URL}/reports/getReportDtlList`;
export const reportGenerateList = `${BASE_URL}/reports/getReportGenerateList`;
//  platform  name  const platform = window.navigator.platform
export const platform = window.navigator.platform;

//get user manual pdf download...............
export const userManualDownloadUrl = `${BASE_URL}/userManualDownload`;

export const headers = {
  Accept: "application/json, text/plain, */*", // It can be used to overcome cors errors
  "Content-Type": "application/json",
};

// registrationDeskListUrl, platform, REGISTRATION_DESK_LIST_ACTION_TYPE,

//action type start.....................

// login
export const LOGIN_ACTION_TYPE = "LOGIN";
export const CHANGE_PASSWORD_ACTION_TYPE = "CHANGE_PASSWORD_ACTION_TYPE";
export const UPDATE_PASSWORD_ACTION_TYPE = "UPDATE_PASSWORD_ACTION_TYPE";
export const FILL_LIST_ACTION_TYPE = "FILL_LIST_ACTION_TYPE";
// forget login password
export const FORGET_CHECKED_EMAIL_ACTION_TYPE =
  "FORGET_CHECKED_EMAIL_ACTION_TYPE";
export const FORGET_GET_OTP_ACTION_TYPE = "FORGET_GET_OTP_ACTION_TYPE";
export const FORGET_UPDATE_PASSWORD_ACTION_TYPE =
  "FORGET_UPDATE_PASSWORD_ACTION_TYPE";
//dashboard
export const DASHBOARD_ACTION_TYPE = "DASHBOARD_ACTION_TYPE";
//master
export const INDUSTRYSEGMENT_LIST_ACTION_TYPE = "INDUSTRYSEGMENT_LIST";
export const INDUSTRYSEGMENT_ADD_ACTION_TYPE = "INDUSTRYSEGMENT_ADD";
export const INDUSTRYSEGMENT_DETAIL_ACTION_TYPE = "INDUSTRYSEGMENT_DETAIL";
export const INDUSTRYSEGMENT_DELETE_ACTION_TYPE = "INDUSTRYSEGMENT_DELETE";
export const INDUSTRYSEGMENT_HISTORY_ACTION_TYPE = "INDUSTRYSEGMENT_HISTORY";

//contact import and update
export const IMPORT_CONTACT_ACTION_TYPE = "IMPORT_CONTACT";
export const IMPORT_FIELDS_ACTION_TYPE = "IMPORT_FIELDS";
//bulk update contact
export const CONTACT_BULK_UPDATE_ACTION_TYPE = "CONTACT_BULK_UPDATE";
export const IMPORT_CONTACT_LIST_ACTION_TYPE = "IMPORT_CONTACT_LIST";
//contacts
export const CONTACTS_LIST_ACTION_TYPE = "CONTACTS_LIST";
export const CONTACTS_ADD_ACTION_TYPE = "CONTACTS_ADD";
export const CONTACTS_DETAIL_ACTION_TYPE = "CONTACTS_DETAIL";
export const CONTACTS_DELETE_ACTION_TYPE = "CONTACTS_DELETE";
export const CONTACTS_HISTORY_ACTION_TYPE = "CONTACTS_HISTORY";
export const CONTACTS_REVOKE_ACTION_TYPE = "CONTACTS_REVOKE";

//contactGroup
export const CONTACTGROUP_LIST_ACTION_TYPE = "CONTACTGROUP_LIST";
export const CONTACTGROUP_ADD_ACTION_TYPE = "CONTACTGROUP_ADD";
export const CONTACTGROUP_DETAIL_ACTION_TYPE = "CONTACTGROUP_DETAIL";
export const CONTACTGROUP_DELETE_ACTION_TYPE = "CONTACTGROUP_DELETE";
export const CONTACTGROUP_HISTORY_ACTION_TYPE = "CONTACTGROUP_HISTORY";
//contact duplicate
export const DUPLICATE_CONTACT_LIST_ACTION_TYPE = "DUPLICATECONTACT_LIST";
export const DUPLICATE_CONTACT_DETAILS_ACTION_TYPE = "DUPLICATECONTACT_DETAILS";
export const DUPLICATE_CONTACT_ALLOW_DELETE_ACTION_TYPE =
  "DUPLICATECONTACT_ALLOW_DELETE";
export const DUPLICATE_CONTACT_EDIT_ACTION_TYPE = "DUPLICATECONTACT_EDIT";
//contact Error
export const CONTACT_WITH_ERROR_LIST = "CONTACT_WITH_ERROR_LIST";
export const CONTACT_WITH_ERROR_DETAILS = "CONTACT_WITH_ERROR_DETAILS";
export const ADD_UPDATE_CONTACT_WITH_ERROR = "ADD_UPDATE_CONTACT_WITH_ERROR";
export const CONTACT_WITH_ERROR_DELETE = "CONTACT_WITH_ERROR_DELETE";
export const CONTACT_WITH_ERROR_MODIFY_HISTORY =
  "CONTACT_WITH_ERROR_MODIFY_HISTORY";
// templateGenerator
export const TEMPLATE_GENERATOR_LIST_ACTION_TYPE =
  "TEMPLATE_GENERATOR_LIST_ACTION_TYPE";
export const TEMPLATE_GENERATOR_ADD_UPDATE_ACTION_TYPE =
  "TEMPLATE_GENERATOR_ADD_UPDATE_ACTION_TYPE";
export const TEMPLATE_GENERATOR_DETAIL_ACTION_TYPE =
  "TEMPLATE_GENERATOR_DETAIL_ACTION_TYPE";
export const TEMPLATE_GENERATOR_DELETE_ACTION_TYPE =
  "TEMPLATE_GENERATOR_DELETE_ACTION_TYPE";
//viewCampaign
export const VIEWCAMPAIGN_LIST_ACTION_TYPE = "VIEWCAMPAIGN_LIST_ACTION_TYPE";
export const VIEWCAMPAIGN_UPDATE_ACTION_TYPE =
  "VIEWCAMPAIGN_UPDATE_ACTION_TYPE";
export const VIEWCAMPAIGN_DETAIL_ACTION_TYPE =
  "VIEWCAMPAIGN_DETAIL_ACTION_TYPE";
export const VIEWCAMPAIGN_DELETE_ACTION_TYPE =
  "VIEWCAMPAIGN_DELETE_ACTION_TYPE";
export const VIEWCAMPAIGN_HISTORY_ACTION_TYPE =
  "VIEWCAMPAIGN_HISTORY_ACTION_TYPE";
//sendCampaign
export const SENDCAMPAIGN_ADD_UPDATE_ACTION_TYPE =
  "SENDCAMPAIGN_ADD_UPDATE_ACTION_TYPE";
export const SENDCAMPAIGN_TEST_RELEASE_ACTION_TYPE =
  "SENDCAMPAIGN_TEST_RELEASE_ACTION_TYPE";
//Report
export const REPORT_LIST_ACTION_TYPE = "REPORT_LIST_ACTION_TYPE";
export const REPORT_DTL_LIST_ACTION_TYPE = "REPORT_DTL_LIST_ACTION_TYPE";
export const REPORT_GENERATE_LIST_ACTION_TYPE =
  "REPORT_GENERATE_LIST_ACTION_TYPE";
//TALLY
export const GET_ACCOUNT_TALLY_DATA = `GET_ACCOUNT_TALLY_DATA`;
//action type end..........................

// action ID name
export const cityActionId = "1";
export const countryActionId = "2";
export const stateActionId = "3";
export const industrySegmentActionID = "4";
export const contactCategoryActionID = "5";
export const channelTypeActionID = "6";
export const invalidTypeActionID = "7";
export const enteredByActionID = "8";
export const keywordActionID = "15";
export const sourceActionID = "16";
export const templateActionID = "13";
export const agentActionID = "17";
export const exhibitorActionID = "18";
export const visitorActionID = "19";
export const senderEmailActionID = "20";
export const regionContinentActionID = "21";
export const timeZoneActionID = "22";
export const countrycodeMActionID = "23";
export const countrycodeTActionID = "24";
export const areacodeActionID = "25";
export const dataEntryByActionID = "26";
export const duplicateTypeActionID = "27";

export const appVersion = "1.0.0";
export const buildNumber = "20220511";
export const NA = "NA";

// for clear search fields
export const clearlocalStorage = (pageName) => {
  if (pageName === "registrationDesk") {
  }
};

const registrationDeskSS = () => {
  localStorage.setItem("campIdRDSS", "Select");
  localStorage.setItem("campDateRDSS", "");
};

export const sort = (list, tableValue, isSort) => {
  isSort = !isSort;
  if (!isSort) {
    // sorting
    var sort = list.sort((a, b) => {
      const nameA = tableValue.toUpperCase(); // ignore upper and lowercase
      const nameB = tableValue.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    // this.setState({list : sort})
    var data = [sort, !sort];
    return data;
  } else {
    // reverse
    var sort = list.sort((a, b) => {
      const nameA = tableValue.toUpperCase(); // ignore upper and lowercase
      const nameB = tableValue.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      return 0;
    });
    // this.setState({list : sort})
    var data = [sort, !sort];
    return data;
  }
  // this.setState({isToDateSort : !isToDateSort})
};

export const toastError = (msg) => {
  toast.error(msg, {
    theme: "colored",
    autoClose: 3000,
    hideProgressBar: true,
    position: "top-center",
  });
};

export const toastSuccess = (msg) => {
  toast.success(msg, {
    theme: "colored",
    autoClose: 1000,
    hideProgressBar: true,
  });
};

export function timeout(delay) {
  return new Promise((res) => setTimeout(res, delay));
}

//Role and report module id's
export const Dashboard = 30;
export const Contact = 31;
export const Campaign = 32;
export const Report = 33;
export const Master = 34;
