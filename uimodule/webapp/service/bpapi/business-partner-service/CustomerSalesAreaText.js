define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustomerSalesAreaText = void 0;
    /**
     * This class represents the entity "A_CustomerSalesAreaText" of service "API_BUSINESS_PARTNER".
     */
    class CustomerSalesAreaText extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.CustomerSalesAreaText = CustomerSalesAreaText;
    /**
     * Technical entity name for CustomerSalesAreaText.
     */
    CustomerSalesAreaText._entityName = 'A_CustomerSalesAreaText';
    /**
     * Default url path for the according service.
     */
    CustomerSalesAreaText._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the CustomerSalesAreaText entity
     */
    CustomerSalesAreaText._keys = [
        'Customer',
        'SalesOrganization',
        'DistributionChannel',
        'Division',
        'Language',
        'LongTextID'
    ];
});
//# sourceMappingURL=CustomerSalesAreaText.js.map