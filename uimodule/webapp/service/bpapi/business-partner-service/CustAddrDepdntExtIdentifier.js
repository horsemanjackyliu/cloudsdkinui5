define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustAddrDepdntExtIdentifier = void 0;
    /**
     * This class represents the entity "A_CustAddrDepdntExtIdentifier" of service "API_BUSINESS_PARTNER".
     */
    class CustAddrDepdntExtIdentifier extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.CustAddrDepdntExtIdentifier = CustAddrDepdntExtIdentifier;
    /**
     * Technical entity name for CustAddrDepdntExtIdentifier.
     */
    CustAddrDepdntExtIdentifier._entityName = 'A_CustAddrDepdntExtIdentifier';
    /**
     * Default url path for the according service.
     */
    CustAddrDepdntExtIdentifier._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the CustAddrDepdntExtIdentifier entity
     */
    CustAddrDepdntExtIdentifier._keys = ['Customer', 'AddressID'];
});
//# sourceMappingURL=CustAddrDepdntExtIdentifier.js.map