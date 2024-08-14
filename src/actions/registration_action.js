import { axiosPost, axiosGet } from "../react_axios/Axios"
import {
  platform, headers,
  REGISTRATION_FORM_ADD_ACTION_TYPE, registrationFormAddUrl, REGISTRATION_FORM_UPDATE_ACTION_TYPE, registrationFormUpdateUrl,
  REGISTRATION_DETAILS_ACTION_TYPE, REGISTRATION_PENDING_DETAILS_ACTION_TYPE, REGISTRATION_AGENT_DETAILS_ACTION_TYPE, getregistrationDetailsUrl, getPendingRegistrationDetailsUrl, getregistrationAgentDetailsUrl
} from "../utils/constants"


export const registrationOneAdd_action = (countryId, countryName, registerMobileNo, companyName, companyId, fasciaName, address1,
  address2, cityId, cityName, stateId, stateName, pinCode, inchargeFirstName, designation,
  registerAlternateMobileNo, registerTelephoneNo, registerTelephoneNo1, registerTelefaxNo, primaryEmailId,
  secondaryEmailId, website, nameOfOwner, lastName, ownerMobileNo, ownerDesignation, ownerEmailId,

  invoicecompanyName, invoicecompanyId, invoicecountryName, invoicecountryid, invoicefasciaName, invoiceaddress1, invoiceaddress2, invoicecityId,
  invoicecityName, invoicestateId, invoicestateName, invoicepinCode, invoiceinchargeFirstName, invoicedesignation,
  invoiceregisterMobileNo, invoiceregisterAlternateMobileNo, invoiceregisterTelephoneNo, invoiceregisterTelephoneNo1, invoiceregisterTelefaxNo,
  invoiceprimaryEmailId, invoicesecondaryEmailId, invoicewebsite, invoicenameOfOwner, invoicelastName,
  invoiceownerMobileNo, invoiceownerEmailId,

  compInfoNameOnPanCard, compInfoPanNo, compInfoTAN, compInfoGstNo, compInfoRegistrationNo, compInfoIecCode,
  bankDtlAccountName, bankDtlAccountNo, bankDtlAccountType, bankDtlBankName, bankDtlBranchName, bankDtlIfscCode,
  isCorrespondenceDetails, formFile, trcFile, declarationFile, exhibitionID, formFileType, declarationFileType,
  trcFileType, title_inchargeFirstName,
  title_name_Of_CEO_MD_President_Owner,
  title_InvPersonIncharge,
  invLastNamePersonIncharge, lastNamePersonIncharge,

) => async (dispatch) => {
  try {
    console.log("title_inchargeFirstName : ", title_inchargeFirstName)
    const mapdata = {
      CompanyName: companyName,
      FasciaName: fasciaName,
      Address1: address1,
      Address2: address2,
      City: cityName,
      State: stateName,
      Pin: pinCode,
      CountryID: countryId,
      PersonIncharge: inchargeFirstName,
      Designation: designation,
      MobileNo: `+${localStorage.getItem('sessionCountryNamePreRegisterMobileNo')}-${registerMobileNo}`,
      AlternateMobileNo: `+${localStorage.getItem('sessionCountryNamePreRegisterAlternateMobileNo')}-${registerAlternateMobileNo}`,
      Telephone: `${localStorage.getItem('sessionregisterTelephoneNoPre')}-${registerTelephoneNo}`,
      Telephone1: `${localStorage.getItem('sessionregisterTelephoneNo1Pre')}-${registerTelephoneNo1}`,
      TeleFax: registerTelefaxNo,
      PrimaryEmail: primaryEmailId,
      SecondaryEmail: secondaryEmailId,
      Website: website,
      Name_Of_CEO_MD_President_Owner: nameOfOwner,
      LastName: lastName,
      Mobile: `+${localStorage.getItem('sessionCountryNamePreOwnerMobileNo')}-${ownerMobileNo}`,
      OwnerDesignation: ownerDesignation,
      Email: ownerEmailId,
      SameAsCorrespondence: isCorrespondenceDetails,
      InvCompanyName: invoicecompanyName,
      InvAddress1: invoiceaddress1,
      InvAddress2: invoiceaddress2,
      InvCity: invoicecityName,
      InvState: invoicestateName,
      InvPin: invoicepinCode,
      InvCountryID: invoicecountryid,
      InvDesignation: invoicedesignation,
      InvPersonIncharge: invoiceinchargeFirstName,
      InvMobileNo: `+${localStorage.getItem('sessionCountryNamePreInvoiceregisterMobileNo')}-${invoiceregisterMobileNo}`,
      InvAlternateMobileNo: `+${localStorage.getItem('sessionCountryNamePreInvoiceregisterAlternateMobileNo')}-${invoiceregisterAlternateMobileNo}`,
      InvTelephone: `${localStorage.getItem('sessioninvoiceregisterTelephoneNoPre')}-${invoiceregisterTelephoneNo}`,
      InvTelephone1: `${localStorage.getItem('sessioninvoiceregisterTelephoneNo1Pre')}-${invoiceregisterTelephoneNo1}`,
      InvTeleFax: invoiceregisterTelefaxNo,
      InvPrimaryEmail: invoiceprimaryEmailId,
      InvSecondaryEmail: invoicesecondaryEmailId,
      InvWebsite: invoicewebsite,
      NameOnPanCard: compInfoNameOnPanCard,
      PanNo: compInfoPanNo,
      Tan: compInfoTAN,
      GSTNo: compInfoGstNo,
      CompanyRegistrationNo: compInfoRegistrationNo,
      IECCode: compInfoIecCode,
      AccountName: bankDtlAccountName,
      AccountNo: bankDtlAccountNo,
      AccountType: bankDtlAccountType,
      BankName: bankDtlBankName,
      BranchName: bankDtlBranchName,
      SwiftCode_IFSCCode: bankDtlIfscCode,

      // OpenSides: '',
      StatusID: null,
      Form10filepath: formFile,
      Declarationfilepath: declarationFile,
      Taxfilepath: trcFile,
      ExhRegistrationID: 0,
      ExhibitionID: exhibitionID,
      ExhRegistrationNo: null,
      ExhRegistrationDate: null,
      formFileType: formFileType,
      declarationFileType: declarationFileType,
      trcFileType: trcFileType,

      Title_PersonIncharge: title_inchargeFirstName,
      Title_Name_Of_CEO_MD_President_Owner: title_name_Of_CEO_MD_President_Owner,
      Title_InvPersonIncharge: title_InvPersonIncharge,

      InvLastNamePersonIncharge: invLastNamePersonIncharge,
      lastNamePersonIncharge: lastNamePersonIncharge,
      AccountID: '',
      AgentCode: localStorage.getItem("agentCode")

    }
    console.log("registrationFormAddUrl", registrationFormAddUrl)
    console.log("mapdata", mapdata)

    const res = await axiosPost(registrationFormAddUrl, mapdata);
    console.log("registrationOneAdd_action res", res)

    dispatch({
      type: REGISTRATION_FORM_ADD_ACTION_TYPE,
      payload: res,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const registrationOneUpdate_action = (countryId, countryName, registerMobileNo, companyName, companyId, fasciaName, address1,
  address2, cityId, cityName, stateId, stateName, pinCode, inchargeFirstName, designation,
  registerAlternateMobileNo, registerTelephoneNo, registerTelephoneNo1, registerTelefaxNo, primaryEmailId,
  secondaryEmailId, website, nameOfOwner, lastName, ownerMobileNo, ownerDesignation, ownerEmailId,

  invoicecompanyName, invoicecompanyId, invoicecountryName, invoicecountryid, invoicefasciaName, invoiceaddress1, invoiceaddress2, invoicecityId,
  invoicecityName, invoicestateId, invoicestateName, invoicepinCode, invoiceinchargeFirstName, invoicedesignation,
  invoiceregisterMobileNo, invoiceregisterAlternateMobileNo, invoiceregisterTelephoneNo, invoiceregisterTelephoneNo1, invoiceregisterTelefaxNo,
  invoiceprimaryEmailId, invoicesecondaryEmailId, invoicewebsite, invoicenameOfOwner, invoicelastName,
  invoiceownerMobileNo, invoiceownerEmailId,

  compInfoNameOnPanCard, compInfoPanNo, compInfoTAN, compInfoGstNo, compInfoRegistrationNo, compInfoIecCode,
  bankDtlAccountName, bankDtlAccountNo, bankDtlAccountType, bankDtlBankName, bankDtlBranchName, bankDtlIfscCode,
  isCorrespondenceDetails, formFile, trcFile, declarationFile,
  exhibitionID, formFileType, declarationFileType, trcFileType,
  title_inchargeFirstName,
  title_name_Of_CEO_MD_President_Owner,
  title_InvPersonIncharge,
  invLastNamePersonIncharge, lastNamePersonIncharge

) => async (dispatch) => {
  try {
    const mapdata = {
      CompanyName: companyName,
      FasciaName: fasciaName,
      Address1: address1,
      Address2: address2,
      City: cityName,

      State: stateName,
      Pin: pinCode,
      CountryID: countryId,
      PersonIncharge: inchargeFirstName,
      Designation: designation,

      MobileNo: `${localStorage.getItem('sessionCountryNamePreRegisterMobileNo')}-${registerMobileNo}`,
      AlternateMobileNo: `${localStorage.getItem('sessionCountryNamePreRegisterAlternateMobileNo')}-${registerAlternateMobileNo}`,
      Telephone: `${localStorage.getItem('sessionregisterTelephoneNoPre')}-${registerTelephoneNo}`,
      Telephone1: `${localStorage.getItem('sessionregisterTelephoneNo1Pre')}-${registerTelephoneNo1}`,
      TeleFax: registerTelefaxNo,

      PrimaryEmail: primaryEmailId,
      SecondaryEmail: secondaryEmailId,
      Website: website,
      Name_Of_CEO_MD_President_Owner: nameOfOwner,
      LastName: lastName,

      Mobile: `${localStorage.getItem('sessionCountryNamePreOwnerMobileNo')}-${ownerMobileNo}`,
      OwnerDesignation: ownerDesignation,
      Email: ownerEmailId,
      SameAsCorrespondence: isCorrespondenceDetails,
      InvCompanyName: invoicecompanyName,
      InvAddress1: invoiceaddress1,

      InvAddress2: invoiceaddress2,
      InvCity: invoicecityName,
      InvState: invoicestateName,
      InvPin: invoicepinCode,
      InvCountryID: invoicecountryid,

      InvDesignation: invoicedesignation,
      InvPersonIncharge: invoiceinchargeFirstName,
      InvMobileNo: `${localStorage.getItem('sessionCountryNamePreInvoiceregisterMobileNo')}-${invoiceregisterMobileNo}`,
      InvAlternateMobileNo: `${localStorage.getItem('sessionCountryNamePreInvoiceregisterAlternateMobileNo')}-${invoiceregisterAlternateMobileNo}`,
      InvTelephone: `${localStorage.getItem('sessioninvoiceregisterTelephoneNoPre')}-${invoiceregisterTelephoneNo}`,

      InvTelephone1: `${localStorage.getItem('sessioninvoiceregisterTelephoneNo1Pre')}-${invoiceregisterTelephoneNo1}`,
      InvTeleFax: invoiceregisterTelefaxNo,
      InvPrimaryEmail: invoiceprimaryEmailId,
      InvSecondaryEmail: invoicesecondaryEmailId,
      InvWebsite: invoicewebsite,

      NameOnPanCard: compInfoNameOnPanCard,
      PanNo: compInfoPanNo,
      Tan: compInfoTAN,
      GSTNo: compInfoGstNo,
      CompanyRegistrationNo: compInfoRegistrationNo,

      IECCode: compInfoIecCode,
      AccountName: bankDtlAccountName,
      AccountNo: bankDtlAccountNo,
      AccountType: bankDtlAccountType,
      BankName: bankDtlBankName,

      BranchName: bankDtlBranchName,
      SwiftCode_IFSCCode: bankDtlIfscCode,

      StatusID: null,
      Form10filepath: formFile,
      Declarationfilepath: declarationFile,
      Taxfilepath: trcFile,

      ExhibitionID: localStorage.getItem('sessionExhibitionID'),
      ExhRegistrationID: localStorage.getItem('sessionExhRegistrationID'),
      formFileType: formFileType,
      declarationFileType: declarationFileType,
      trcFileType: trcFileType,

      Title_PersonIncharge: title_inchargeFirstName,
      Title_Name_Of_CEO_MD_President_Owner: title_name_Of_CEO_MD_President_Owner,
      Title_InvPersonIncharge: title_InvPersonIncharge,

      // ExhRegistrationNo : exhRegistrationNo,

      InvLastNamePersonIncharge: invLastNamePersonIncharge,
      lastNamePersonIncharge: lastNamePersonIncharge,


    }

    const res = await axiosPost(registrationFormUpdateUrl, mapdata, headers);
    console.log(mapdata)
    console.log(res)
    dispatch({
      type: REGISTRATION_FORM_UPDATE_ACTION_TYPE,
      payload: res,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getregistrationDetails_action = (exhRegistrationID, exhibitionID) => async (dispatch) => {

  try {
    const param = {
      exhRegistrationID: exhRegistrationID,
      exhibitionID: exhibitionID,
    }

    const res = await axiosGet(getregistrationDetailsUrl, param);
    dispatch({
      type: REGISTRATION_DETAILS_ACTION_TYPE,
      payload: res,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getAgentDetails_action = (Code) => async (dispatch) => {

  try {
    const param = {
      agentCode: Code
    }

    const res = await axiosGet(getregistrationAgentDetailsUrl, param);
    dispatch({
      type: REGISTRATION_AGENT_DETAILS_ACTION_TYPE,
      payload: res,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getPendingRegDetails_action = (code) => async (dispatch) => {

  try {
    const param = {
      UUID: code
    }

    const res = await axiosGet(getPendingRegistrationDetailsUrl, param);
    dispatch({
      type: REGISTRATION_PENDING_DETAILS_ACTION_TYPE,
      payload: res,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};