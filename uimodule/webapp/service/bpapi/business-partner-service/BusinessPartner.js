define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BusinessPartner = void 0;
    /**
     * This class represents the entity "A_BusinessPartner" of service "API_BUSINESS_PARTNER".
     */
    class BusinessPartner extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.BusinessPartner = BusinessPartner;
    /**
     * Technical entity name for BusinessPartner.
     */
    BusinessPartner._entityName = 'A_BusinessPartner';
    /**
     * Default url path for the according service.
     */
    BusinessPartner._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the BusinessPartner entity
     */
    BusinessPartner._keys = ['BusinessPartner'];
});
//# sourceMappingURL=BusinessPartner.js.map