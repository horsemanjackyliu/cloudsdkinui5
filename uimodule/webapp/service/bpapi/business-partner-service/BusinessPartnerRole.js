define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BusinessPartnerRole = void 0;
    /**
     * This class represents the entity "A_BusinessPartnerRole" of service "API_BUSINESS_PARTNER".
     */
    class BusinessPartnerRole extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.BusinessPartnerRole = BusinessPartnerRole;
    /**
     * Technical entity name for BusinessPartnerRole.
     */
    BusinessPartnerRole._entityName = 'A_BusinessPartnerRole';
    /**
     * Default url path for the according service.
     */
    BusinessPartnerRole._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the BusinessPartnerRole entity
     */
    BusinessPartnerRole._keys = ['BusinessPartner', 'BusinessPartnerRole'];
});
//# sourceMappingURL=BusinessPartnerRole.js.map