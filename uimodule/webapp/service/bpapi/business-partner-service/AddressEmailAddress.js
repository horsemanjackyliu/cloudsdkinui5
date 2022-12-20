define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AddressEmailAddress = void 0;
    /**
     * This class represents the entity "A_AddressEmailAddress" of service "API_BUSINESS_PARTNER".
     */
    class AddressEmailAddress extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.AddressEmailAddress = AddressEmailAddress;
    /**
     * Technical entity name for AddressEmailAddress.
     */
    AddressEmailAddress._entityName = 'A_AddressEmailAddress';
    /**
     * Default url path for the according service.
     */
    AddressEmailAddress._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the AddressEmailAddress entity
     */
    AddressEmailAddress._keys = ['AddressID', 'Person', 'OrdinalNumber'];
});
//# sourceMappingURL=AddressEmailAddress.js.map