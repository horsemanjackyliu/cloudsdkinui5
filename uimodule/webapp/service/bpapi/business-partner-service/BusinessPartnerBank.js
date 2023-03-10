define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BusinessPartnerBank = void 0;
    /**
     * This class represents the entity "A_BusinessPartnerBank" of service "API_BUSINESS_PARTNER".
     */
    class BusinessPartnerBank extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.BusinessPartnerBank = BusinessPartnerBank;
    /**
     * Technical entity name for BusinessPartnerBank.
     */
    BusinessPartnerBank._entityName = 'A_BusinessPartnerBank';
    /**
     * Default url path for the according service.
     */
    BusinessPartnerBank._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the BusinessPartnerBank entity
     */
    BusinessPartnerBank._keys = ['BusinessPartner', 'BankIdentification'];
});
//# sourceMappingURL=BusinessPartnerBank.js.map