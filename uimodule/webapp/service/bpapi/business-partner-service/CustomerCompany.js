define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustomerCompany = void 0;
    /**
     * This class represents the entity "A_CustomerCompany" of service "API_BUSINESS_PARTNER".
     */
    class CustomerCompany extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.CustomerCompany = CustomerCompany;
    /**
     * Technical entity name for CustomerCompany.
     */
    CustomerCompany._entityName = 'A_CustomerCompany';
    /**
     * Default url path for the according service.
     */
    CustomerCompany._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the CustomerCompany entity
     */
    CustomerCompany._keys = ['Customer', 'CompanyCode'];
});
//# sourceMappingURL=CustomerCompany.js.map