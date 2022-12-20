define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AddressHomePageUrl = void 0;
    /**
     * This class represents the entity "A_AddressHomePageURL" of service "API_BUSINESS_PARTNER".
     */
    class AddressHomePageUrl extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.AddressHomePageUrl = AddressHomePageUrl;
    /**
     * Technical entity name for AddressHomePageUrl.
     */
    AddressHomePageUrl._entityName = 'A_AddressHomePageURL';
    /**
     * Default url path for the according service.
     */
    AddressHomePageUrl._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the AddressHomePageUrl entity
     */
    AddressHomePageUrl._keys = [
        'AddressID',
        'Person',
        'OrdinalNumber',
        'ValidityStartDate',
        'IsDefaultURLAddress'
    ];
});
//# sourceMappingURL=AddressHomePageUrl.js.map