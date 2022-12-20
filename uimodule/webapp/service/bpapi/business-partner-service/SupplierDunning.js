define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SupplierDunning = void 0;
    /**
     * This class represents the entity "A_SupplierDunning" of service "API_BUSINESS_PARTNER".
     */
    class SupplierDunning extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.SupplierDunning = SupplierDunning;
    /**
     * Technical entity name for SupplierDunning.
     */
    SupplierDunning._entityName = 'A_SupplierDunning';
    /**
     * Default url path for the according service.
     */
    SupplierDunning._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the SupplierDunning entity
     */
    SupplierDunning._keys = ['Supplier', 'CompanyCode', 'DunningArea'];
});
//# sourceMappingURL=SupplierDunning.js.map