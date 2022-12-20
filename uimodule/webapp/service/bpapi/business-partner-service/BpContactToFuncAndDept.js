define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BpContactToFuncAndDept = void 0;
    /**
     * This class represents the entity "A_BPContactToFuncAndDept" of service "API_BUSINESS_PARTNER".
     */
    class BpContactToFuncAndDept extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.BpContactToFuncAndDept = BpContactToFuncAndDept;
    /**
     * Technical entity name for BpContactToFuncAndDept.
     */
    BpContactToFuncAndDept._entityName = 'A_BPContactToFuncAndDept';
    /**
     * Default url path for the according service.
     */
    BpContactToFuncAndDept._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the BpContactToFuncAndDept entity
     */
    BpContactToFuncAndDept._keys = [
        'RelationshipNumber',
        'BusinessPartnerCompany',
        'BusinessPartnerPerson',
        'ValidityEndDate'
    ];
});
//# sourceMappingURL=BpContactToFuncAndDept.js.map