define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SupplierWithHoldingTax = void 0;
    /**
     * This class represents the entity "A_SupplierWithHoldingTax" of service "API_BUSINESS_PARTNER".
     */
    class SupplierWithHoldingTax extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.SupplierWithHoldingTax = SupplierWithHoldingTax;
    /**
     * Technical entity name for SupplierWithHoldingTax.
     */
    SupplierWithHoldingTax._entityName = 'A_SupplierWithHoldingTax';
    /**
     * Default url path for the according service.
     */
    SupplierWithHoldingTax._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the SupplierWithHoldingTax entity
     */
    SupplierWithHoldingTax._keys = ['Supplier', 'CompanyCode', 'WithholdingTaxType'];
});
//# sourceMappingURL=SupplierWithHoldingTax.js.map