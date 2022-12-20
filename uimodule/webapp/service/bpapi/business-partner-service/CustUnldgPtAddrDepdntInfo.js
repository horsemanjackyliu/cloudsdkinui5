define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustUnldgPtAddrDepdntInfo = void 0;
    /**
     * This class represents the entity "A_CustUnldgPtAddrDepdntInfo" of service "API_BUSINESS_PARTNER".
     */
    class CustUnldgPtAddrDepdntInfo extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.CustUnldgPtAddrDepdntInfo = CustUnldgPtAddrDepdntInfo;
    /**
     * Technical entity name for CustUnldgPtAddrDepdntInfo.
     */
    CustUnldgPtAddrDepdntInfo._entityName = 'A_CustUnldgPtAddrDepdntInfo';
    /**
     * Default url path for the according service.
     */
    CustUnldgPtAddrDepdntInfo._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the CustUnldgPtAddrDepdntInfo entity
     */
    CustUnldgPtAddrDepdntInfo._keys = ['Customer', 'AddressID', 'UnloadingPointName'];
});
//# sourceMappingURL=CustUnldgPtAddrDepdntInfo.js.map