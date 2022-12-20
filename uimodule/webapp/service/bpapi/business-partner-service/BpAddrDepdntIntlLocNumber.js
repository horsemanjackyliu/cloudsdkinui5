define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BpAddrDepdntIntlLocNumber = void 0;
    /**
     * This class represents the entity "A_BPAddrDepdntIntlLocNumber" of service "API_BUSINESS_PARTNER".
     */
    class BpAddrDepdntIntlLocNumber extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.BpAddrDepdntIntlLocNumber = BpAddrDepdntIntlLocNumber;
    /**
     * Technical entity name for BpAddrDepdntIntlLocNumber.
     */
    BpAddrDepdntIntlLocNumber._entityName = 'A_BPAddrDepdntIntlLocNumber';
    /**
     * Default url path for the according service.
     */
    BpAddrDepdntIntlLocNumber._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the BpAddrDepdntIntlLocNumber entity
     */
    BpAddrDepdntIntlLocNumber._keys = ['BusinessPartner', 'AddressID'];
});
//# sourceMappingURL=BpAddrDepdntIntlLocNumber.js.map