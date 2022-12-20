define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustSlsAreaAddrDepdntTaxInfo = void 0;
    /**
     * This class represents the entity "A_CustSlsAreaAddrDepdntTaxInfo" of service "API_BUSINESS_PARTNER".
     */
    class CustSlsAreaAddrDepdntTaxInfo extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.CustSlsAreaAddrDepdntTaxInfo = CustSlsAreaAddrDepdntTaxInfo;
    /**
     * Technical entity name for CustSlsAreaAddrDepdntTaxInfo.
     */
    CustSlsAreaAddrDepdntTaxInfo._entityName = 'A_CustSlsAreaAddrDepdntTaxInfo';
    /**
     * Default url path for the according service.
     */
    CustSlsAreaAddrDepdntTaxInfo._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the CustSlsAreaAddrDepdntTaxInfo entity
     */
    CustSlsAreaAddrDepdntTaxInfo._keys = [
        'Customer',
        'SalesOrganization',
        'DistributionChannel',
        'Division',
        'AddressID',
        'DepartureCountry',
        'CustomerTaxCategory'
    ];
});
//# sourceMappingURL=CustSlsAreaAddrDepdntTaxInfo.js.map