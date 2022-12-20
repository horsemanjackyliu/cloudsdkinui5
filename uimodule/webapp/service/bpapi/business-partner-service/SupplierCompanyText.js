define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SupplierCompanyText = void 0;
    /**
     * This class represents the entity "A_SupplierCompanyText" of service "API_BUSINESS_PARTNER".
     */
    class SupplierCompanyText extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.SupplierCompanyText = SupplierCompanyText;
    /**
     * Technical entity name for SupplierCompanyText.
     */
    SupplierCompanyText._entityName = 'A_SupplierCompanyText';
    /**
     * Default url path for the according service.
     */
    SupplierCompanyText._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the SupplierCompanyText entity
     */
    SupplierCompanyText._keys = ['Supplier', 'CompanyCode', 'Language', 'LongTextID'];
});
//# sourceMappingURL=SupplierCompanyText.js.map