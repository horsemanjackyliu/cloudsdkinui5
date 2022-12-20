define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SupplierPurchasingOrgText = void 0;
    /**
     * This class represents the entity "A_SupplierPurchasingOrgText" of service "API_BUSINESS_PARTNER".
     */
    class SupplierPurchasingOrgText extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.SupplierPurchasingOrgText = SupplierPurchasingOrgText;
    /**
     * Technical entity name for SupplierPurchasingOrgText.
     */
    SupplierPurchasingOrgText._entityName = 'A_SupplierPurchasingOrgText';
    /**
     * Default url path for the according service.
     */
    SupplierPurchasingOrgText._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the SupplierPurchasingOrgText entity
     */
    SupplierPurchasingOrgText._keys = [
        'Supplier',
        'PurchasingOrganization',
        'Language',
        'LongTextID'
    ];
});
//# sourceMappingURL=SupplierPurchasingOrgText.js.map