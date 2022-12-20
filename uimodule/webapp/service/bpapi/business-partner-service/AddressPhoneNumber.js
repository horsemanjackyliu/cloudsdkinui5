define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AddressPhoneNumber = void 0;
    /**
     * This class represents the entity "A_AddressPhoneNumber" of service "API_BUSINESS_PARTNER".
     */
    class AddressPhoneNumber extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.AddressPhoneNumber = AddressPhoneNumber;
    /**
     * Technical entity name for AddressPhoneNumber.
     */
    AddressPhoneNumber._entityName = 'A_AddressPhoneNumber';
    /**
     * Default url path for the according service.
     */
    AddressPhoneNumber._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the AddressPhoneNumber entity
     */
    AddressPhoneNumber._keys = ['AddressID', 'Person', 'OrdinalNumber'];
});
//# sourceMappingURL=AddressPhoneNumber.js.map