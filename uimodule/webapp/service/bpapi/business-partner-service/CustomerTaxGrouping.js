define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustomerTaxGrouping = void 0;
    /**
     * This class represents the entity "A_CustomerTaxGrouping" of service "API_BUSINESS_PARTNER".
     */
    class CustomerTaxGrouping extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.CustomerTaxGrouping = CustomerTaxGrouping;
    /**
     * Technical entity name for CustomerTaxGrouping.
     */
    CustomerTaxGrouping._entityName = 'A_CustomerTaxGrouping';
    /**
     * Default url path for the according service.
     */
    CustomerTaxGrouping._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the CustomerTaxGrouping entity
     */
    CustomerTaxGrouping._keys = ['Customer', 'CustomerTaxGroupingCode'];
});
//# sourceMappingURL=CustomerTaxGrouping.js.map