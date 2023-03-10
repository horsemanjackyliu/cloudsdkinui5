define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AddressFaxNumber = void 0;
    /**
     * This class represents the entity "A_AddressFaxNumber" of service "API_BUSINESS_PARTNER".
     */
    class AddressFaxNumber extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.AddressFaxNumber = AddressFaxNumber;
    /**
     * Technical entity name for AddressFaxNumber.
     */
    AddressFaxNumber._entityName = 'A_AddressFaxNumber';
    /**
     * Default url path for the according service.
     */
    AddressFaxNumber._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the AddressFaxNumber entity
     */
    AddressFaxNumber._keys = ['AddressID', 'Person', 'OrdinalNumber'];
});
//# sourceMappingURL=AddressFaxNumber.js.map