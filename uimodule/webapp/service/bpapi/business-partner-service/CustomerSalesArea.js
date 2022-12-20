define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustomerSalesArea = void 0;
    /**
     * This class represents the entity "A_CustomerSalesArea" of service "API_BUSINESS_PARTNER".
     */
    class CustomerSalesArea extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.CustomerSalesArea = CustomerSalesArea;
    /**
     * Technical entity name for CustomerSalesArea.
     */
    CustomerSalesArea._entityName = 'A_CustomerSalesArea';
    /**
     * Default url path for the according service.
     */
    CustomerSalesArea._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the CustomerSalesArea entity
     */
    CustomerSalesArea._keys = [
        'Customer',
        'SalesOrganization',
        'DistributionChannel',
        'Division'
    ];
});
//# sourceMappingURL=CustomerSalesArea.js.map