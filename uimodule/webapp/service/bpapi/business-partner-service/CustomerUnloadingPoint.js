define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustomerUnloadingPoint = void 0;
    /**
     * This class represents the entity "A_CustomerUnloadingPoint" of service "API_BUSINESS_PARTNER".
     */
    class CustomerUnloadingPoint extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.CustomerUnloadingPoint = CustomerUnloadingPoint;
    /**
     * Technical entity name for CustomerUnloadingPoint.
     */
    CustomerUnloadingPoint._entityName = 'A_CustomerUnloadingPoint';
    /**
     * Default url path for the according service.
     */
    CustomerUnloadingPoint._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the CustomerUnloadingPoint entity
     */
    CustomerUnloadingPoint._keys = ['Customer', 'UnloadingPointName'];
});
//# sourceMappingURL=CustomerUnloadingPoint.js.map