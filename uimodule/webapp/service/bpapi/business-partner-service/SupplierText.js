define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SupplierText = void 0;
    /**
     * This class represents the entity "A_SupplierText" of service "API_BUSINESS_PARTNER".
     */
    class SupplierText extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.SupplierText = SupplierText;
    /**
     * Technical entity name for SupplierText.
     */
    SupplierText._entityName = 'A_SupplierText';
    /**
     * Default url path for the according service.
     */
    SupplierText._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the SupplierText entity
     */
    SupplierText._keys = ['Supplier', 'Language', 'LongTextID'];
});
//# sourceMappingURL=SupplierText.js.map