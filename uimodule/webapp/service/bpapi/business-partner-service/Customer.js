define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Customer = void 0;
    /**
     * This class represents the entity "A_Customer" of service "API_BUSINESS_PARTNER".
     */
    class Customer extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.Customer = Customer;
    /**
     * Technical entity name for Customer.
     */
    Customer._entityName = 'A_Customer';
    /**
     * Default url path for the according service.
     */
    Customer._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the Customer entity
     */
    Customer._keys = ['Customer'];
});
//# sourceMappingURL=Customer.js.map