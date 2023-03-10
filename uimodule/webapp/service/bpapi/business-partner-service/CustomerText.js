define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustomerText = void 0;
    /**
     * This class represents the entity "A_CustomerText" of service "API_BUSINESS_PARTNER".
     */
    class CustomerText extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.CustomerText = CustomerText;
    /**
     * Technical entity name for CustomerText.
     */
    CustomerText._entityName = 'A_CustomerText';
    /**
     * Default url path for the according service.
     */
    CustomerText._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the CustomerText entity
     */
    CustomerText._keys = ['Customer', 'Language', 'LongTextID'];
});
//# sourceMappingURL=CustomerText.js.map