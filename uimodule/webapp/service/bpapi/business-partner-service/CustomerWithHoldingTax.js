define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustomerWithHoldingTax = void 0;
    /**
     * This class represents the entity "A_CustomerWithHoldingTax" of service "API_BUSINESS_PARTNER".
     */
    class CustomerWithHoldingTax extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.CustomerWithHoldingTax = CustomerWithHoldingTax;
    /**
     * Technical entity name for CustomerWithHoldingTax.
     */
    CustomerWithHoldingTax._entityName = 'A_CustomerWithHoldingTax';
    /**
     * Default url path for the according service.
     */
    CustomerWithHoldingTax._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the CustomerWithHoldingTax entity
     */
    CustomerWithHoldingTax._keys = ['Customer', 'CompanyCode', 'WithholdingTaxType'];
});
//# sourceMappingURL=CustomerWithHoldingTax.js.map