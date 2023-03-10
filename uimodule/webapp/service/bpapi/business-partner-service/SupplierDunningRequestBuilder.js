define(["require", "exports", "@sap-cloud-sdk/odata-v2", "./SupplierDunning"], function (require, exports, odata_v2_1, SupplierDunning_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SupplierDunningRequestBuilder = void 0;
    /**
     * Request builder class for operations supported on the {@link SupplierDunning} entity.
     */
    class SupplierDunningRequestBuilder extends odata_v2_1.RequestBuilder {
        /**
         * Returns a request builder for retrieving one `SupplierDunning` entity based on its keys.
         * @param supplier Key property. See {@link SupplierDunning.supplier}.
         * @param companyCode Key property. See {@link SupplierDunning.companyCode}.
         * @param dunningArea Key property. See {@link SupplierDunning.dunningArea}.
         * @returns A request builder for creating requests to retrieve one `SupplierDunning` entity based on its keys.
         */
        getByKey(supplier, companyCode, dunningArea) {
            return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
                Supplier: supplier,
                CompanyCode: companyCode,
                DunningArea: dunningArea
            });
        }
        /**
         * Returns a request builder for querying all `SupplierDunning` entities.
         * @returns A request builder for creating requests to retrieve all `SupplierDunning` entities.
         */
        getAll() {
            return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
        }
        /**
         * Returns a request builder for creating a `SupplierDunning` entity.
         * @param entity The entity to be created
         * @returns A request builder for creating requests that create an entity of type `SupplierDunning`.
         */
        create(entity) {
            return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
        }
        /**
         * Returns a request builder for updating an entity of type `SupplierDunning`.
         * @param entity The entity to be updated
         * @returns A request builder for creating requests that update an entity of type `SupplierDunning`.
         */
        update(entity) {
            return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
        }
        delete(supplierOrEntity, companyCode, dunningArea) {
            return new odata_v2_1.DeleteRequestBuilder(this.entityApi, supplierOrEntity instanceof SupplierDunning_1.SupplierDunning
                ? supplierOrEntity
                : {
                    Supplier: supplierOrEntity,
                    CompanyCode: companyCode,
                    DunningArea: dunningArea
                });
        }
    }
    exports.SupplierDunningRequestBuilder = SupplierDunningRequestBuilder;
});
//# sourceMappingURL=SupplierDunningRequestBuilder.js.map