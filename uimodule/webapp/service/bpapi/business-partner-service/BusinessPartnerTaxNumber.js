define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BusinessPartnerTaxNumber = void 0;
    /**
     * This class represents the entity "A_BusinessPartnerTaxNumber" of service "API_BUSINESS_PARTNER".
     */
    class BusinessPartnerTaxNumber extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.BusinessPartnerTaxNumber = BusinessPartnerTaxNumber;
    /**
     * Technical entity name for BusinessPartnerTaxNumber.
     */
    BusinessPartnerTaxNumber._entityName = 'A_BusinessPartnerTaxNumber';
    /**
     * Default url path for the according service.
     */
    BusinessPartnerTaxNumber._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the BusinessPartnerTaxNumber entity
     */
    BusinessPartnerTaxNumber._keys = ['BusinessPartner', 'BPTaxType'];
});
//# sourceMappingURL=BusinessPartnerTaxNumber.js.map