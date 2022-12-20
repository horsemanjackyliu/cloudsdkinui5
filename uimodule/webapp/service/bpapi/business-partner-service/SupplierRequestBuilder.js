define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SupplierRequestBuilder = void 0;
    /**
     * Request builder class for operations supported on the {@link Supplier} entity.
     */
    class SupplierRequestBuilder extends odata_v2_1.RequestBuilder {
        /**
         * Returns a request builder for retrieving one `Supplier` entity based on its keys.
         * @param supplier Key property. See {@link Supplier.supplier}.
         * @returns A request builder for creating requests to retrieve one `Supplier` entity based on its keys.
         */
        getByKey(supplier) {
            return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
                Supplier: supplier
            });
        }
        /**
         * Returns a request builder for querying all `Supplier` entities.
         * @returns A request builder for creating requests to retrieve all `Supplier` entities.
         */
        getAll() {
            return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
        }
        /**
         * Returns a request builder for updating an entity of type `Supplier`.
         * @param entity The entity to be updated
         * @returns A request builder for creating requests that update an entity of type `Supplier`.
         */
        update(entity) {
            return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
        }
    }
    exports.SupplierRequestBuilder = SupplierRequestBuilder;
});
//# sourceMappingURL=SupplierRequestBuilder.js.map