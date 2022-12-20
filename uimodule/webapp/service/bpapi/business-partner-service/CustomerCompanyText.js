define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustomerCompanyText = void 0;
    /**
     * This class represents the entity "A_CustomerCompanyText" of service "API_BUSINESS_PARTNER".
     */
    class CustomerCompanyText extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.CustomerCompanyText = CustomerCompanyText;
    /**
     * Technical entity name for CustomerCompanyText.
     */
    CustomerCompanyText._entityName = 'A_CustomerCompanyText';
    /**
     * Default url path for the according service.
     */
    CustomerCompanyText._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the CustomerCompanyText entity
     */
    CustomerCompanyText._keys = ['Customer', 'CompanyCode', 'Language', 'LongTextID'];
});
//# sourceMappingURL=CustomerCompanyText.js.map