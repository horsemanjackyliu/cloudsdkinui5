define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BusinessPartnerAddress = void 0;
    /**
     * This class represents the entity "A_BusinessPartnerAddress" of service "API_BUSINESS_PARTNER".
     */
    class BusinessPartnerAddress extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.BusinessPartnerAddress = BusinessPartnerAddress;
    /**
     * Technical entity name for BusinessPartnerAddress.
     */
    BusinessPartnerAddress._entityName = 'A_BusinessPartnerAddress';
    /**
     * Default url path for the according service.
     */
    BusinessPartnerAddress._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the BusinessPartnerAddress entity
     */
    BusinessPartnerAddress._keys = ['BusinessPartner', 'AddressID'];
});
//# sourceMappingURL=BusinessPartnerAddress.js.map