define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SupplierCompany = void 0;
    /**
     * This class represents the entity "A_SupplierCompany" of service "API_BUSINESS_PARTNER".
     */
    class SupplierCompany extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.SupplierCompany = SupplierCompany;
    /**
     * Technical entity name for SupplierCompany.
     */
    SupplierCompany._entityName = 'A_SupplierCompany';
    /**
     * Default url path for the according service.
     */
    SupplierCompany._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the SupplierCompany entity
     */
    SupplierCompany._keys = ['Supplier', 'CompanyCode'];
});
//# sourceMappingURL=SupplierCompany.js.map