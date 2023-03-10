define(["require", "exports", "@sap-cloud-sdk/odata-v2", "./SupplierPartnerFunc"], function (require, exports, odata_v2_1, SupplierPartnerFunc_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SupplierPartnerFuncRequestBuilder = void 0;
    /**
     * Request builder class for operations supported on the {@link SupplierPartnerFunc} entity.
     */
    class SupplierPartnerFuncRequestBuilder extends odata_v2_1.RequestBuilder {
        /**
         * Returns a request builder for retrieving one `SupplierPartnerFunc` entity based on its keys.
         * @param supplier Key property. See {@link SupplierPartnerFunc.supplier}.
         * @param purchasingOrganization Key property. See {@link SupplierPartnerFunc.purchasingOrganization}.
         * @param supplierSubrange Key property. See {@link SupplierPartnerFunc.supplierSubrange}.
         * @param plant Key property. See {@link SupplierPartnerFunc.plant}.
         * @param partnerFunction Key property. See {@link SupplierPartnerFunc.partnerFunction}.
         * @param partnerCounter Key property. See {@link SupplierPartnerFunc.partnerCounter}.
         * @returns A request builder for creating requests to retrieve one `SupplierPartnerFunc` entity based on its keys.
         */
        getByKey(supplier, purchasingOrganization, supplierSubrange, plant, partnerFunction, partnerCounter) {
            return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
                Supplier: supplier,
                PurchasingOrganization: purchasingOrganization,
                SupplierSubrange: supplierSubrange,
                Plant: plant,
                PartnerFunction: partnerFunction,
                PartnerCounter: partnerCounter
            });
        }
        /**
         * Returns a request builder for querying all `SupplierPartnerFunc` entities.
         * @returns A request builder for creating requests to retrieve all `SupplierPartnerFunc` entities.
         */
        getAll() {
            return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
        }
        /**
         * Returns a request builder for creating a `SupplierPartnerFunc` entity.
         * @param entity The entity to be created
         * @returns A request builder for creating requests that create an entity of type `SupplierPartnerFunc`.
         */
        create(entity) {
            return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
        }
        /**
         * Returns a request builder for updating an entity of type `SupplierPartnerFunc`.
         * @param entity The entity to be updated
         * @returns A request builder for creating requests that update an entity of type `SupplierPartnerFunc`.
         */
        update(entity) {
            return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
        }
        delete(supplierOrEntity, purchasingOrganization, supplierSubrange, plant, partnerFunction, partnerCounter) {
            return new odata_v2_1.DeleteRequestBuilder(this.entityApi, supplierOrEntity instanceof SupplierPartnerFunc_1.SupplierPartnerFunc
                ? supplierOrEntity
                : {
                    Supplier: supplierOrEntity,
                    PurchasingOrganization: purchasingOrganization,
                    SupplierSubrange: supplierSubrange,
                    Plant: plant,
                    PartnerFunction: partnerFunction,
                    PartnerCounter: partnerCounter
                });
        }
    }
    exports.SupplierPartnerFuncRequestBuilder = SupplierPartnerFuncRequestBuilder;
});
//# sourceMappingURL=SupplierPartnerFuncRequestBuilder.js.map