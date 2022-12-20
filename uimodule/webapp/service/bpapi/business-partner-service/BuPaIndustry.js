define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BuPaIndustry = void 0;
    /**
     * This class represents the entity "A_BuPaIndustry" of service "API_BUSINESS_PARTNER".
     */
    class BuPaIndustry extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.BuPaIndustry = BuPaIndustry;
    /**
     * Technical entity name for BuPaIndustry.
     */
    BuPaIndustry._entityName = 'A_BuPaIndustry';
    /**
     * Default url path for the according service.
     */
    BuPaIndustry._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the BuPaIndustry entity
     */
    BuPaIndustry._keys = ['IndustrySector', 'IndustrySystemType', 'BusinessPartner'];
});
//# sourceMappingURL=BuPaIndustry.js.map