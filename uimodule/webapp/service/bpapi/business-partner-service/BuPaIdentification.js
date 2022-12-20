define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BuPaIdentification = void 0;
    /**
     * This class represents the entity "A_BuPaIdentification" of service "API_BUSINESS_PARTNER".
     */
    class BuPaIdentification extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.BuPaIdentification = BuPaIdentification;
    /**
     * Technical entity name for BuPaIdentification.
     */
    BuPaIdentification._entityName = 'A_BuPaIdentification';
    /**
     * Default url path for the according service.
     */
    BuPaIdentification._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the BuPaIdentification entity
     */
    BuPaIdentification._keys = [
        'BusinessPartner',
        'BPIdentificationType',
        'BPIdentificationNumber'
    ];
});
//# sourceMappingURL=BuPaIdentification.js.map