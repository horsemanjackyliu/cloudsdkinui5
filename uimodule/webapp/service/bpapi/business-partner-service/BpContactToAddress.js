define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BpContactToAddress = void 0;
    /**
     * This class represents the entity "A_BPContactToAddress" of service "API_BUSINESS_PARTNER".
     */
    class BpContactToAddress extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.BpContactToAddress = BpContactToAddress;
    /**
     * Technical entity name for BpContactToAddress.
     */
    BpContactToAddress._entityName = 'A_BPContactToAddress';
    /**
     * Default url path for the according service.
     */
    BpContactToAddress._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the BpContactToAddress entity
     */
    BpContactToAddress._keys = [
        'RelationshipNumber',
        'BusinessPartnerCompany',
        'BusinessPartnerPerson',
        'ValidityEndDate',
        'AddressID'
    ];
});
//# sourceMappingURL=BpContactToAddress.js.map