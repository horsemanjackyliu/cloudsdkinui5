define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SupplierPartnerFunc = void 0;
    /**
     * This class represents the entity "A_SupplierPartnerFunc" of service "API_BUSINESS_PARTNER".
     */
    class SupplierPartnerFunc extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.SupplierPartnerFunc = SupplierPartnerFunc;
    /**
     * Technical entity name for SupplierPartnerFunc.
     */
    SupplierPartnerFunc._entityName = 'A_SupplierPartnerFunc';
    /**
     * Default url path for the according service.
     */
    SupplierPartnerFunc._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the SupplierPartnerFunc entity
     */
    SupplierPartnerFunc._keys = [
        'Supplier',
        'PurchasingOrganization',
        'SupplierSubrange',
        'Plant',
        'PartnerFunction',
        'PartnerCounter'
    ];
});
//# sourceMappingURL=SupplierPartnerFunc.js.map