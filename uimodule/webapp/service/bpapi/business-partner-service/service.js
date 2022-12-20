define(["require", "exports", "./AddressEmailAddressApi", "./AddressFaxNumberApi", "./AddressHomePageUrlApi", "./AddressPhoneNumberApi", "./BpAddrDepdntIntlLocNumberApi", "./BpContactToAddressApi", "./BpContactToFuncAndDeptApi", "./BuPaAddressUsageApi", "./BuPaIdentificationApi", "./BuPaIndustryApi", "./BusinessPartnerApi", "./BusinessPartnerAddressApi", "./BusinessPartnerBankApi", "./BusinessPartnerContactApi", "./BusinessPartnerRoleApi", "./BusinessPartnerTaxNumberApi", "./BusPartAddrDepdntTaxNmbrApi", "./CustAddrDepdntExtIdentifierApi", "./CustAddrDepdntInformationApi", "./CustomerApi", "./CustomerCompanyApi", "./CustomerCompanyTextApi", "./CustomerDunningApi", "./CustomerSalesAreaApi", "./CustomerSalesAreaTaxApi", "./CustomerSalesAreaTextApi", "./CustomerTaxGroupingApi", "./CustomerTextApi", "./CustomerUnloadingPointApi", "./CustomerWithHoldingTaxApi", "./CustSalesPartnerFuncApi", "./CustSlsAreaAddrDepdntInfoApi", "./CustSlsAreaAddrDepdntTaxInfoApi", "./CustUnldgPtAddrDepdntInfoApi", "./SupplierApi", "./SupplierCompanyApi", "./SupplierCompanyTextApi", "./SupplierDunningApi", "./SupplierPartnerFuncApi", "./SupplierPurchasingOrgApi", "./SupplierPurchasingOrgTextApi", "./SupplierTextApi", "./SupplierWithHoldingTaxApi", "@sap-cloud-sdk/odata-v2", "./BatchRequest"], function (require, exports, AddressEmailAddressApi_1, AddressFaxNumberApi_1, AddressHomePageUrlApi_1, AddressPhoneNumberApi_1, BpAddrDepdntIntlLocNumberApi_1, BpContactToAddressApi_1, BpContactToFuncAndDeptApi_1, BuPaAddressUsageApi_1, BuPaIdentificationApi_1, BuPaIndustryApi_1, BusinessPartnerApi_1, BusinessPartnerAddressApi_1, BusinessPartnerBankApi_1, BusinessPartnerContactApi_1, BusinessPartnerRoleApi_1, BusinessPartnerTaxNumberApi_1, BusPartAddrDepdntTaxNmbrApi_1, CustAddrDepdntExtIdentifierApi_1, CustAddrDepdntInformationApi_1, CustomerApi_1, CustomerCompanyApi_1, CustomerCompanyTextApi_1, CustomerDunningApi_1, CustomerSalesAreaApi_1, CustomerSalesAreaTaxApi_1, CustomerSalesAreaTextApi_1, CustomerTaxGroupingApi_1, CustomerTextApi_1, CustomerUnloadingPointApi_1, CustomerWithHoldingTaxApi_1, CustSalesPartnerFuncApi_1, CustSlsAreaAddrDepdntInfoApi_1, CustSlsAreaAddrDepdntTaxInfoApi_1, CustUnldgPtAddrDepdntInfoApi_1, SupplierApi_1, SupplierCompanyApi_1, SupplierCompanyTextApi_1, SupplierDunningApi_1, SupplierPartnerFuncApi_1, SupplierPurchasingOrgApi_1, SupplierPurchasingOrgTextApi_1, SupplierTextApi_1, SupplierWithHoldingTaxApi_1, odata_v2_1, BatchRequest_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.businessPartnerService = void 0;
    function businessPartnerService(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new BusinessPartnerService((0, odata_v2_1.mergeDefaultDeSerializersWith)(deSerializers));
    }
    exports.businessPartnerService = businessPartnerService;
    class BusinessPartnerService {
        constructor(deSerializers) {
            this.apis = {};
            this.deSerializers = deSerializers;
        }
        initApi(key, ctor) {
            if (!this.apis[key]) {
                this.apis[key] = new ctor(this.deSerializers);
            }
            return this.apis[key];
        }
        get addressEmailAddressApi() {
            return this.initApi('addressEmailAddressApi', AddressEmailAddressApi_1.AddressEmailAddressApi);
        }
        get addressFaxNumberApi() {
            return this.initApi('addressFaxNumberApi', AddressFaxNumberApi_1.AddressFaxNumberApi);
        }
        get addressHomePageUrlApi() {
            return this.initApi('addressHomePageUrlApi', AddressHomePageUrlApi_1.AddressHomePageUrlApi);
        }
        get addressPhoneNumberApi() {
            return this.initApi('addressPhoneNumberApi', AddressPhoneNumberApi_1.AddressPhoneNumberApi);
        }
        get bpAddrDepdntIntlLocNumberApi() {
            return this.initApi('bpAddrDepdntIntlLocNumberApi', BpAddrDepdntIntlLocNumberApi_1.BpAddrDepdntIntlLocNumberApi);
        }
        get bpContactToAddressApi() {
            const api = this.initApi('bpContactToAddressApi', BpContactToAddressApi_1.BpContactToAddressApi);
            const linkedApis = [
                this.initApi('addressEmailAddressApi', AddressEmailAddressApi_1.AddressEmailAddressApi),
                this.initApi('addressFaxNumberApi', AddressFaxNumberApi_1.AddressFaxNumberApi),
                this.initApi('addressPhoneNumberApi', AddressPhoneNumberApi_1.AddressPhoneNumberApi),
                this.initApi('addressPhoneNumberApi', AddressPhoneNumberApi_1.AddressPhoneNumberApi),
                this.initApi('addressHomePageUrlApi', AddressHomePageUrlApi_1.AddressHomePageUrlApi)
            ];
            api._addNavigationProperties(linkedApis);
            return api;
        }
        get bpContactToFuncAndDeptApi() {
            return this.initApi('bpContactToFuncAndDeptApi', BpContactToFuncAndDeptApi_1.BpContactToFuncAndDeptApi);
        }
        get buPaAddressUsageApi() {
            return this.initApi('buPaAddressUsageApi', BuPaAddressUsageApi_1.BuPaAddressUsageApi);
        }
        get buPaIdentificationApi() {
            return this.initApi('buPaIdentificationApi', BuPaIdentificationApi_1.BuPaIdentificationApi);
        }
        get buPaIndustryApi() {
            return this.initApi('buPaIndustryApi', BuPaIndustryApi_1.BuPaIndustryApi);
        }
        get businessPartnerApi() {
            const api = this.initApi('businessPartnerApi', BusinessPartnerApi_1.BusinessPartnerApi);
            const linkedApis = [
                this.initApi('buPaIdentificationApi', BuPaIdentificationApi_1.BuPaIdentificationApi),
                this.initApi('buPaIndustryApi', BuPaIndustryApi_1.BuPaIndustryApi),
                this.initApi('businessPartnerAddressApi', BusinessPartnerAddressApi_1.BusinessPartnerAddressApi),
                this.initApi('businessPartnerBankApi', BusinessPartnerBankApi_1.BusinessPartnerBankApi),
                this.initApi('businessPartnerContactApi', BusinessPartnerContactApi_1.BusinessPartnerContactApi),
                this.initApi('businessPartnerRoleApi', BusinessPartnerRoleApi_1.BusinessPartnerRoleApi),
                this.initApi('businessPartnerTaxNumberApi', BusinessPartnerTaxNumberApi_1.BusinessPartnerTaxNumberApi),
                this.initApi('busPartAddrDepdntTaxNmbrApi', BusPartAddrDepdntTaxNmbrApi_1.BusPartAddrDepdntTaxNmbrApi),
                this.initApi('customerApi', CustomerApi_1.CustomerApi),
                this.initApi('supplierApi', SupplierApi_1.SupplierApi)
            ];
            api._addNavigationProperties(linkedApis);
            return api;
        }
        get businessPartnerAddressApi() {
            const api = this.initApi('businessPartnerAddressApi', BusinessPartnerAddressApi_1.BusinessPartnerAddressApi);
            const linkedApis = [
                this.initApi('buPaAddressUsageApi', BuPaAddressUsageApi_1.BuPaAddressUsageApi),
                this.initApi('bpAddrDepdntIntlLocNumberApi', BpAddrDepdntIntlLocNumberApi_1.BpAddrDepdntIntlLocNumberApi),
                this.initApi('addressEmailAddressApi', AddressEmailAddressApi_1.AddressEmailAddressApi),
                this.initApi('addressFaxNumberApi', AddressFaxNumberApi_1.AddressFaxNumberApi),
                this.initApi('addressPhoneNumberApi', AddressPhoneNumberApi_1.AddressPhoneNumberApi),
                this.initApi('addressPhoneNumberApi', AddressPhoneNumberApi_1.AddressPhoneNumberApi),
                this.initApi('addressHomePageUrlApi', AddressHomePageUrlApi_1.AddressHomePageUrlApi)
            ];
            api._addNavigationProperties(linkedApis);
            return api;
        }
        get businessPartnerBankApi() {
            return this.initApi('businessPartnerBankApi', BusinessPartnerBankApi_1.BusinessPartnerBankApi);
        }
        get businessPartnerContactApi() {
            const api = this.initApi('businessPartnerContactApi', BusinessPartnerContactApi_1.BusinessPartnerContactApi);
            const linkedApis = [
                this.initApi('bpContactToAddressApi', BpContactToAddressApi_1.BpContactToAddressApi),
                this.initApi('bpContactToFuncAndDeptApi', BpContactToFuncAndDeptApi_1.BpContactToFuncAndDeptApi)
            ];
            api._addNavigationProperties(linkedApis);
            return api;
        }
        get businessPartnerRoleApi() {
            return this.initApi('businessPartnerRoleApi', BusinessPartnerRoleApi_1.BusinessPartnerRoleApi);
        }
        get businessPartnerTaxNumberApi() {
            return this.initApi('businessPartnerTaxNumberApi', BusinessPartnerTaxNumberApi_1.BusinessPartnerTaxNumberApi);
        }
        get busPartAddrDepdntTaxNmbrApi() {
            return this.initApi('busPartAddrDepdntTaxNmbrApi', BusPartAddrDepdntTaxNmbrApi_1.BusPartAddrDepdntTaxNmbrApi);
        }
        get custAddrDepdntExtIdentifierApi() {
            return this.initApi('custAddrDepdntExtIdentifierApi', CustAddrDepdntExtIdentifierApi_1.CustAddrDepdntExtIdentifierApi);
        }
        get custAddrDepdntInformationApi() {
            return this.initApi('custAddrDepdntInformationApi', CustAddrDepdntInformationApi_1.CustAddrDepdntInformationApi);
        }
        get customerApi() {
            const api = this.initApi('customerApi', CustomerApi_1.CustomerApi);
            const linkedApis = [
                this.initApi('custAddrDepdntExtIdentifierApi', CustAddrDepdntExtIdentifierApi_1.CustAddrDepdntExtIdentifierApi),
                this.initApi('custAddrDepdntInformationApi', CustAddrDepdntInformationApi_1.CustAddrDepdntInformationApi),
                this.initApi('customerCompanyApi', CustomerCompanyApi_1.CustomerCompanyApi),
                this.initApi('customerSalesAreaApi', CustomerSalesAreaApi_1.CustomerSalesAreaApi),
                this.initApi('customerTaxGroupingApi', CustomerTaxGroupingApi_1.CustomerTaxGroupingApi),
                this.initApi('customerTextApi', CustomerTextApi_1.CustomerTextApi),
                this.initApi('customerUnloadingPointApi', CustomerUnloadingPointApi_1.CustomerUnloadingPointApi),
                this.initApi('custUnldgPtAddrDepdntInfoApi', CustUnldgPtAddrDepdntInfoApi_1.CustUnldgPtAddrDepdntInfoApi)
            ];
            api._addNavigationProperties(linkedApis);
            return api;
        }
        get customerCompanyApi() {
            const api = this.initApi('customerCompanyApi', CustomerCompanyApi_1.CustomerCompanyApi);
            const linkedApis = [
                this.initApi('customerCompanyTextApi', CustomerCompanyTextApi_1.CustomerCompanyTextApi),
                this.initApi('customerDunningApi', CustomerDunningApi_1.CustomerDunningApi),
                this.initApi('customerWithHoldingTaxApi', CustomerWithHoldingTaxApi_1.CustomerWithHoldingTaxApi)
            ];
            api._addNavigationProperties(linkedApis);
            return api;
        }
        get customerCompanyTextApi() {
            return this.initApi('customerCompanyTextApi', CustomerCompanyTextApi_1.CustomerCompanyTextApi);
        }
        get customerDunningApi() {
            return this.initApi('customerDunningApi', CustomerDunningApi_1.CustomerDunningApi);
        }
        get customerSalesAreaApi() {
            const api = this.initApi('customerSalesAreaApi', CustomerSalesAreaApi_1.CustomerSalesAreaApi);
            const linkedApis = [
                this.initApi('custSalesPartnerFuncApi', CustSalesPartnerFuncApi_1.CustSalesPartnerFuncApi),
                this.initApi('customerSalesAreaTaxApi', CustomerSalesAreaTaxApi_1.CustomerSalesAreaTaxApi),
                this.initApi('customerSalesAreaTextApi', CustomerSalesAreaTextApi_1.CustomerSalesAreaTextApi),
                this.initApi('custSlsAreaAddrDepdntInfoApi', CustSlsAreaAddrDepdntInfoApi_1.CustSlsAreaAddrDepdntInfoApi)
            ];
            api._addNavigationProperties(linkedApis);
            return api;
        }
        get customerSalesAreaTaxApi() {
            const api = this.initApi('customerSalesAreaTaxApi', CustomerSalesAreaTaxApi_1.CustomerSalesAreaTaxApi);
            const linkedApis = [
                this.initApi('custSlsAreaAddrDepdntTaxInfoApi', CustSlsAreaAddrDepdntTaxInfoApi_1.CustSlsAreaAddrDepdntTaxInfoApi)
            ];
            api._addNavigationProperties(linkedApis);
            return api;
        }
        get customerSalesAreaTextApi() {
            return this.initApi('customerSalesAreaTextApi', CustomerSalesAreaTextApi_1.CustomerSalesAreaTextApi);
        }
        get customerTaxGroupingApi() {
            return this.initApi('customerTaxGroupingApi', CustomerTaxGroupingApi_1.CustomerTaxGroupingApi);
        }
        get customerTextApi() {
            return this.initApi('customerTextApi', CustomerTextApi_1.CustomerTextApi);
        }
        get customerUnloadingPointApi() {
            return this.initApi('customerUnloadingPointApi', CustomerUnloadingPointApi_1.CustomerUnloadingPointApi);
        }
        get customerWithHoldingTaxApi() {
            return this.initApi('customerWithHoldingTaxApi', CustomerWithHoldingTaxApi_1.CustomerWithHoldingTaxApi);
        }
        get custSalesPartnerFuncApi() {
            return this.initApi('custSalesPartnerFuncApi', CustSalesPartnerFuncApi_1.CustSalesPartnerFuncApi);
        }
        get custSlsAreaAddrDepdntInfoApi() {
            return this.initApi('custSlsAreaAddrDepdntInfoApi', CustSlsAreaAddrDepdntInfoApi_1.CustSlsAreaAddrDepdntInfoApi);
        }
        get custSlsAreaAddrDepdntTaxInfoApi() {
            return this.initApi('custSlsAreaAddrDepdntTaxInfoApi', CustSlsAreaAddrDepdntTaxInfoApi_1.CustSlsAreaAddrDepdntTaxInfoApi);
        }
        get custUnldgPtAddrDepdntInfoApi() {
            return this.initApi('custUnldgPtAddrDepdntInfoApi', CustUnldgPtAddrDepdntInfoApi_1.CustUnldgPtAddrDepdntInfoApi);
        }
        get supplierApi() {
            const api = this.initApi('supplierApi', SupplierApi_1.SupplierApi);
            const linkedApis = [
                this.initApi('supplierCompanyApi', SupplierCompanyApi_1.SupplierCompanyApi),
                this.initApi('supplierPurchasingOrgApi', SupplierPurchasingOrgApi_1.SupplierPurchasingOrgApi),
                this.initApi('supplierTextApi', SupplierTextApi_1.SupplierTextApi)
            ];
            api._addNavigationProperties(linkedApis);
            return api;
        }
        get supplierCompanyApi() {
            const api = this.initApi('supplierCompanyApi', SupplierCompanyApi_1.SupplierCompanyApi);
            const linkedApis = [
                this.initApi('supplierCompanyTextApi', SupplierCompanyTextApi_1.SupplierCompanyTextApi),
                this.initApi('supplierApi', SupplierApi_1.SupplierApi),
                this.initApi('supplierDunningApi', SupplierDunningApi_1.SupplierDunningApi),
                this.initApi('supplierWithHoldingTaxApi', SupplierWithHoldingTaxApi_1.SupplierWithHoldingTaxApi)
            ];
            api._addNavigationProperties(linkedApis);
            return api;
        }
        get supplierCompanyTextApi() {
            return this.initApi('supplierCompanyTextApi', SupplierCompanyTextApi_1.SupplierCompanyTextApi);
        }
        get supplierDunningApi() {
            return this.initApi('supplierDunningApi', SupplierDunningApi_1.SupplierDunningApi);
        }
        get supplierPartnerFuncApi() {
            return this.initApi('supplierPartnerFuncApi', SupplierPartnerFuncApi_1.SupplierPartnerFuncApi);
        }
        get supplierPurchasingOrgApi() {
            const api = this.initApi('supplierPurchasingOrgApi', SupplierPurchasingOrgApi_1.SupplierPurchasingOrgApi);
            const linkedApis = [
                this.initApi('supplierPartnerFuncApi', SupplierPartnerFuncApi_1.SupplierPartnerFuncApi),
                this.initApi('supplierPurchasingOrgTextApi', SupplierPurchasingOrgTextApi_1.SupplierPurchasingOrgTextApi)
            ];
            api._addNavigationProperties(linkedApis);
            return api;
        }
        get supplierPurchasingOrgTextApi() {
            return this.initApi('supplierPurchasingOrgTextApi', SupplierPurchasingOrgTextApi_1.SupplierPurchasingOrgTextApi);
        }
        get supplierTextApi() {
            return this.initApi('supplierTextApi', SupplierTextApi_1.SupplierTextApi);
        }
        get supplierWithHoldingTaxApi() {
            return this.initApi('supplierWithHoldingTaxApi', SupplierWithHoldingTaxApi_1.SupplierWithHoldingTaxApi);
        }
        get batch() {
            return BatchRequest_1.batch;
        }
        get changeset() {
            return BatchRequest_1.changeset;
        }
    }
});
//# sourceMappingURL=service.js.map