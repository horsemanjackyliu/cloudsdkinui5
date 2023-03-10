define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Supplier = void 0;
    /**
     * This class represents the entity "A_Supplier" of service "API_BUSINESS_PARTNER".
     */
    class Supplier extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.Supplier = Supplier;
    /**
     * Technical entity name for Supplier.
     */
    Supplier._entityName = 'A_Supplier';
    /**
     * Default url path for the according service.
     */
    Supplier._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the Supplier entity
     */
    Supplier._keys = ['Supplier'];
});
//# sourceMappingURL=Supplier.js.map