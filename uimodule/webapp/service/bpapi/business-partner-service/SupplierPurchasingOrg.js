define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SupplierPurchasingOrg = void 0;
    /**
     * This class represents the entity "A_SupplierPurchasingOrg" of service "API_BUSINESS_PARTNER".
     */
    class SupplierPurchasingOrg extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.SupplierPurchasingOrg = SupplierPurchasingOrg;
    /**
     * Technical entity name for SupplierPurchasingOrg.
     */
    SupplierPurchasingOrg._entityName = 'A_SupplierPurchasingOrg';
    /**
     * Default url path for the according service.
     */
    SupplierPurchasingOrg._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the SupplierPurchasingOrg entity
     */
    SupplierPurchasingOrg._keys = ['Supplier', 'PurchasingOrganization'];
});
//# sourceMappingURL=SupplierPurchasingOrg.js.map