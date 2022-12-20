define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustomerDunning = void 0;
    /**
     * This class represents the entity "A_CustomerDunning" of service "API_BUSINESS_PARTNER".
     */
    class CustomerDunning extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.CustomerDunning = CustomerDunning;
    /**
     * Technical entity name for CustomerDunning.
     */
    CustomerDunning._entityName = 'A_CustomerDunning';
    /**
     * Default url path for the according service.
     */
    CustomerDunning._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the CustomerDunning entity
     */
    CustomerDunning._keys = ['Customer', 'CompanyCode', 'DunningArea'];
});
//# sourceMappingURL=CustomerDunning.js.map