define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustSalesPartnerFunc = void 0;
    /**
     * This class represents the entity "A_CustSalesPartnerFunc" of service "API_BUSINESS_PARTNER".
     */
    class CustSalesPartnerFunc extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.CustSalesPartnerFunc = CustSalesPartnerFunc;
    /**
     * Technical entity name for CustSalesPartnerFunc.
     */
    CustSalesPartnerFunc._entityName = 'A_CustSalesPartnerFunc';
    /**
     * Default url path for the according service.
     */
    CustSalesPartnerFunc._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the CustSalesPartnerFunc entity
     */
    CustSalesPartnerFunc._keys = [
        'Customer',
        'SalesOrganization',
        'DistributionChannel',
        'Division',
        'PartnerCounter',
        'PartnerFunction'
    ];
});
//# sourceMappingURL=CustSalesPartnerFunc.js.map