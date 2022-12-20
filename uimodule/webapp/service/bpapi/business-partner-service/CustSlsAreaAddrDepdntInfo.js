define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustSlsAreaAddrDepdntInfo = void 0;
    /**
     * This class represents the entity "A_CustSlsAreaAddrDepdntInfo" of service "API_BUSINESS_PARTNER".
     */
    class CustSlsAreaAddrDepdntInfo extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.CustSlsAreaAddrDepdntInfo = CustSlsAreaAddrDepdntInfo;
    /**
     * Technical entity name for CustSlsAreaAddrDepdntInfo.
     */
    CustSlsAreaAddrDepdntInfo._entityName = 'A_CustSlsAreaAddrDepdntInfo';
    /**
     * Default url path for the according service.
     */
    CustSlsAreaAddrDepdntInfo._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the CustSlsAreaAddrDepdntInfo entity
     */
    CustSlsAreaAddrDepdntInfo._keys = [
        'Customer',
        'SalesOrganization',
        'DistributionChannel',
        'Division',
        'AddressID'
    ];
});
//# sourceMappingURL=CustSlsAreaAddrDepdntInfo.js.map