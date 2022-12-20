var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
define(["require", "exports", "./AddressEmailAddress", "./AddressFaxNumber", "./AddressHomePageUrl", "./AddressPhoneNumber", "./BpAddrDepdntIntlLocNumber", "./BpContactToAddress", "./BpContactToFuncAndDept", "./BuPaAddressUsage", "./BuPaIdentification", "./BuPaIndustry", "./BusinessPartner", "./BusinessPartnerAddress", "./BusinessPartnerBank", "./BusinessPartnerContact", "./BusinessPartnerRole", "./BusinessPartnerTaxNumber", "./BusPartAddrDepdntTaxNmbr", "./CustAddrDepdntExtIdentifier", "./CustAddrDepdntInformation", "./Customer", "./CustomerCompany", "./CustomerCompanyText", "./CustomerDunning", "./CustomerSalesArea", "./CustomerSalesAreaTax", "./CustomerSalesAreaText", "./CustomerTaxGrouping", "./CustomerText", "./CustomerUnloadingPoint", "./CustomerWithHoldingTax", "./CustSalesPartnerFunc", "./CustSlsAreaAddrDepdntInfo", "./CustSlsAreaAddrDepdntTaxInfo", "./CustUnldgPtAddrDepdntInfo", "./Supplier", "./SupplierCompany", "./SupplierCompanyText", "./SupplierDunning", "./SupplierPartnerFunc", "./SupplierPurchasingOrg", "./SupplierPurchasingOrgText", "./SupplierText", "./SupplierWithHoldingTax", "./AddressEmailAddressRequestBuilder", "./AddressFaxNumberRequestBuilder", "./AddressHomePageUrlRequestBuilder", "./AddressPhoneNumberRequestBuilder", "./BpAddrDepdntIntlLocNumberRequestBuilder", "./BpContactToAddressRequestBuilder", "./BpContactToFuncAndDeptRequestBuilder", "./BuPaAddressUsageRequestBuilder", "./BuPaIdentificationRequestBuilder", "./BuPaIndustryRequestBuilder", "./BusinessPartnerRequestBuilder", "./BusinessPartnerAddressRequestBuilder", "./BusinessPartnerBankRequestBuilder", "./BusinessPartnerContactRequestBuilder", "./BusinessPartnerRoleRequestBuilder", "./BusinessPartnerTaxNumberRequestBuilder", "./BusPartAddrDepdntTaxNmbrRequestBuilder", "./CustAddrDepdntExtIdentifierRequestBuilder", "./CustAddrDepdntInformationRequestBuilder", "./CustomerRequestBuilder", "./CustomerCompanyRequestBuilder", "./CustomerCompanyTextRequestBuilder", "./CustomerDunningRequestBuilder", "./CustomerSalesAreaRequestBuilder", "./CustomerSalesAreaTaxRequestBuilder", "./CustomerSalesAreaTextRequestBuilder", "./CustomerTaxGroupingRequestBuilder", "./CustomerTextRequestBuilder", "./CustomerUnloadingPointRequestBuilder", "./CustomerWithHoldingTaxRequestBuilder", "./CustSalesPartnerFuncRequestBuilder", "./CustSlsAreaAddrDepdntInfoRequestBuilder", "./CustSlsAreaAddrDepdntTaxInfoRequestBuilder", "./CustUnldgPtAddrDepdntInfoRequestBuilder", "./SupplierRequestBuilder", "./SupplierCompanyRequestBuilder", "./SupplierCompanyTextRequestBuilder", "./SupplierDunningRequestBuilder", "./SupplierPartnerFuncRequestBuilder", "./SupplierPurchasingOrgRequestBuilder", "./SupplierPurchasingOrgTextRequestBuilder", "./SupplierTextRequestBuilder", "./SupplierWithHoldingTaxRequestBuilder", "./BatchRequest", "./service"], function (require, exports, AddressEmailAddress_1, AddressFaxNumber_1, AddressHomePageUrl_1, AddressPhoneNumber_1, BpAddrDepdntIntlLocNumber_1, BpContactToAddress_1, BpContactToFuncAndDept_1, BuPaAddressUsage_1, BuPaIdentification_1, BuPaIndustry_1, BusinessPartner_1, BusinessPartnerAddress_1, BusinessPartnerBank_1, BusinessPartnerContact_1, BusinessPartnerRole_1, BusinessPartnerTaxNumber_1, BusPartAddrDepdntTaxNmbr_1, CustAddrDepdntExtIdentifier_1, CustAddrDepdntInformation_1, Customer_1, CustomerCompany_1, CustomerCompanyText_1, CustomerDunning_1, CustomerSalesArea_1, CustomerSalesAreaTax_1, CustomerSalesAreaText_1, CustomerTaxGrouping_1, CustomerText_1, CustomerUnloadingPoint_1, CustomerWithHoldingTax_1, CustSalesPartnerFunc_1, CustSlsAreaAddrDepdntInfo_1, CustSlsAreaAddrDepdntTaxInfo_1, CustUnldgPtAddrDepdntInfo_1, Supplier_1, SupplierCompany_1, SupplierCompanyText_1, SupplierDunning_1, SupplierPartnerFunc_1, SupplierPurchasingOrg_1, SupplierPurchasingOrgText_1, SupplierText_1, SupplierWithHoldingTax_1, AddressEmailAddressRequestBuilder_1, AddressFaxNumberRequestBuilder_1, AddressHomePageUrlRequestBuilder_1, AddressPhoneNumberRequestBuilder_1, BpAddrDepdntIntlLocNumberRequestBuilder_1, BpContactToAddressRequestBuilder_1, BpContactToFuncAndDeptRequestBuilder_1, BuPaAddressUsageRequestBuilder_1, BuPaIdentificationRequestBuilder_1, BuPaIndustryRequestBuilder_1, BusinessPartnerRequestBuilder_1, BusinessPartnerAddressRequestBuilder_1, BusinessPartnerBankRequestBuilder_1, BusinessPartnerContactRequestBuilder_1, BusinessPartnerRoleRequestBuilder_1, BusinessPartnerTaxNumberRequestBuilder_1, BusPartAddrDepdntTaxNmbrRequestBuilder_1, CustAddrDepdntExtIdentifierRequestBuilder_1, CustAddrDepdntInformationRequestBuilder_1, CustomerRequestBuilder_1, CustomerCompanyRequestBuilder_1, CustomerCompanyTextRequestBuilder_1, CustomerDunningRequestBuilder_1, CustomerSalesAreaRequestBuilder_1, CustomerSalesAreaTaxRequestBuilder_1, CustomerSalesAreaTextRequestBuilder_1, CustomerTaxGroupingRequestBuilder_1, CustomerTextRequestBuilder_1, CustomerUnloadingPointRequestBuilder_1, CustomerWithHoldingTaxRequestBuilder_1, CustSalesPartnerFuncRequestBuilder_1, CustSlsAreaAddrDepdntInfoRequestBuilder_1, CustSlsAreaAddrDepdntTaxInfoRequestBuilder_1, CustUnldgPtAddrDepdntInfoRequestBuilder_1, SupplierRequestBuilder_1, SupplierCompanyRequestBuilder_1, SupplierCompanyTextRequestBuilder_1, SupplierDunningRequestBuilder_1, SupplierPartnerFuncRequestBuilder_1, SupplierPurchasingOrgRequestBuilder_1, SupplierPurchasingOrgTextRequestBuilder_1, SupplierTextRequestBuilder_1, SupplierWithHoldingTaxRequestBuilder_1, BatchRequest_1, service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /*
     * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
     *
     * This is a generated file powered by the SAP Cloud SDK for JavaScript.
     */
    __exportStar(AddressEmailAddress_1, exports);
    __exportStar(AddressFaxNumber_1, exports);
    __exportStar(AddressHomePageUrl_1, exports);
    __exportStar(AddressPhoneNumber_1, exports);
    __exportStar(BpAddrDepdntIntlLocNumber_1, exports);
    __exportStar(BpContactToAddress_1, exports);
    __exportStar(BpContactToFuncAndDept_1, exports);
    __exportStar(BuPaAddressUsage_1, exports);
    __exportStar(BuPaIdentification_1, exports);
    __exportStar(BuPaIndustry_1, exports);
    __exportStar(BusinessPartner_1, exports);
    __exportStar(BusinessPartnerAddress_1, exports);
    __exportStar(BusinessPartnerBank_1, exports);
    __exportStar(BusinessPartnerContact_1, exports);
    __exportStar(BusinessPartnerRole_1, exports);
    __exportStar(BusinessPartnerTaxNumber_1, exports);
    __exportStar(BusPartAddrDepdntTaxNmbr_1, exports);
    __exportStar(CustAddrDepdntExtIdentifier_1, exports);
    __exportStar(CustAddrDepdntInformation_1, exports);
    __exportStar(Customer_1, exports);
    __exportStar(CustomerCompany_1, exports);
    __exportStar(CustomerCompanyText_1, exports);
    __exportStar(CustomerDunning_1, exports);
    __exportStar(CustomerSalesArea_1, exports);
    __exportStar(CustomerSalesAreaTax_1, exports);
    __exportStar(CustomerSalesAreaText_1, exports);
    __exportStar(CustomerTaxGrouping_1, exports);
    __exportStar(CustomerText_1, exports);
    __exportStar(CustomerUnloadingPoint_1, exports);
    __exportStar(CustomerWithHoldingTax_1, exports);
    __exportStar(CustSalesPartnerFunc_1, exports);
    __exportStar(CustSlsAreaAddrDepdntInfo_1, exports);
    __exportStar(CustSlsAreaAddrDepdntTaxInfo_1, exports);
    __exportStar(CustUnldgPtAddrDepdntInfo_1, exports);
    __exportStar(Supplier_1, exports);
    __exportStar(SupplierCompany_1, exports);
    __exportStar(SupplierCompanyText_1, exports);
    __exportStar(SupplierDunning_1, exports);
    __exportStar(SupplierPartnerFunc_1, exports);
    __exportStar(SupplierPurchasingOrg_1, exports);
    __exportStar(SupplierPurchasingOrgText_1, exports);
    __exportStar(SupplierText_1, exports);
    __exportStar(SupplierWithHoldingTax_1, exports);
    __exportStar(AddressEmailAddressRequestBuilder_1, exports);
    __exportStar(AddressFaxNumberRequestBuilder_1, exports);
    __exportStar(AddressHomePageUrlRequestBuilder_1, exports);
    __exportStar(AddressPhoneNumberRequestBuilder_1, exports);
    __exportStar(BpAddrDepdntIntlLocNumberRequestBuilder_1, exports);
    __exportStar(BpContactToAddressRequestBuilder_1, exports);
    __exportStar(BpContactToFuncAndDeptRequestBuilder_1, exports);
    __exportStar(BuPaAddressUsageRequestBuilder_1, exports);
    __exportStar(BuPaIdentificationRequestBuilder_1, exports);
    __exportStar(BuPaIndustryRequestBuilder_1, exports);
    __exportStar(BusinessPartnerRequestBuilder_1, exports);
    __exportStar(BusinessPartnerAddressRequestBuilder_1, exports);
    __exportStar(BusinessPartnerBankRequestBuilder_1, exports);
    __exportStar(BusinessPartnerContactRequestBuilder_1, exports);
    __exportStar(BusinessPartnerRoleRequestBuilder_1, exports);
    __exportStar(BusinessPartnerTaxNumberRequestBuilder_1, exports);
    __exportStar(BusPartAddrDepdntTaxNmbrRequestBuilder_1, exports);
    __exportStar(CustAddrDepdntExtIdentifierRequestBuilder_1, exports);
    __exportStar(CustAddrDepdntInformationRequestBuilder_1, exports);
    __exportStar(CustomerRequestBuilder_1, exports);
    __exportStar(CustomerCompanyRequestBuilder_1, exports);
    __exportStar(CustomerCompanyTextRequestBuilder_1, exports);
    __exportStar(CustomerDunningRequestBuilder_1, exports);
    __exportStar(CustomerSalesAreaRequestBuilder_1, exports);
    __exportStar(CustomerSalesAreaTaxRequestBuilder_1, exports);
    __exportStar(CustomerSalesAreaTextRequestBuilder_1, exports);
    __exportStar(CustomerTaxGroupingRequestBuilder_1, exports);
    __exportStar(CustomerTextRequestBuilder_1, exports);
    __exportStar(CustomerUnloadingPointRequestBuilder_1, exports);
    __exportStar(CustomerWithHoldingTaxRequestBuilder_1, exports);
    __exportStar(CustSalesPartnerFuncRequestBuilder_1, exports);
    __exportStar(CustSlsAreaAddrDepdntInfoRequestBuilder_1, exports);
    __exportStar(CustSlsAreaAddrDepdntTaxInfoRequestBuilder_1, exports);
    __exportStar(CustUnldgPtAddrDepdntInfoRequestBuilder_1, exports);
    __exportStar(SupplierRequestBuilder_1, exports);
    __exportStar(SupplierCompanyRequestBuilder_1, exports);
    __exportStar(SupplierCompanyTextRequestBuilder_1, exports);
    __exportStar(SupplierDunningRequestBuilder_1, exports);
    __exportStar(SupplierPartnerFuncRequestBuilder_1, exports);
    __exportStar(SupplierPurchasingOrgRequestBuilder_1, exports);
    __exportStar(SupplierPurchasingOrgTextRequestBuilder_1, exports);
    __exportStar(SupplierTextRequestBuilder_1, exports);
    __exportStar(SupplierWithHoldingTaxRequestBuilder_1, exports);
    __exportStar(BatchRequest_1, exports);
    __exportStar(service_1, exports);
});
//# sourceMappingURL=index.js.map