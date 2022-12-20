define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustomerSalesAreaTax = void 0;
    /**
     * This class represents the entity "A_CustomerSalesAreaTax" of service "API_BUSINESS_PARTNER".
     */
    class CustomerSalesAreaTax extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.CustomerSalesAreaTax = CustomerSalesAreaTax;
    /**
     * Technical entity name for CustomerSalesAreaTax.
     */
    CustomerSalesAreaTax._entityName = 'A_CustomerSalesAreaTax';
    /**
     * Default url path for the according service.
     */
    CustomerSalesAreaTax._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the CustomerSalesAreaTax entity
     */
    CustomerSalesAreaTax._keys = [
        'Customer',
        'SalesOrganization',
        'DistributionChannel',
        'Division',
        'DepartureCountry',
        'CustomerTaxCategory'
    ];
});
//# sourceMappingURL=CustomerSalesAreaTax.js.map