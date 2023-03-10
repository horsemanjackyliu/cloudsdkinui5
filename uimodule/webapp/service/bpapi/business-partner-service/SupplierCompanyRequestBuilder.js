define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SupplierCompanyRequestBuilder = void 0;
    /**
     * Request builder class for operations supported on the {@link SupplierCompany} entity.
     */
    class SupplierCompanyRequestBuilder extends odata_v2_1.RequestBuilder {
        /**
         * Returns a request builder for retrieving one `SupplierCompany` entity based on its keys.
         * @param supplier Key property. See {@link SupplierCompany.supplier}.
         * @param companyCode Key property. See {@link SupplierCompany.companyCode}.
         * @returns A request builder for creating requests to retrieve one `SupplierCompany` entity based on its keys.
         */
        getByKey(supplier, companyCode) {
            return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
                Supplier: supplier,
                CompanyCode: companyCode
            });
        }
        /**
         * Returns a request builder for querying all `SupplierCompany` entities.
         * @returns A request builder for creating requests to retrieve all `SupplierCompany` entities.
         */
        getAll() {
            return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
        }
        /**
         * Returns a request builder for creating a `SupplierCompany` entity.
         * @param entity The entity to be created
         * @returns A request builder for creating requests that create an entity of type `SupplierCompany`.
         */
        create(entity) {
            return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
        }
        /**
         * Returns a request builder for updating an entity of type `SupplierCompany`.
         * @param entity The entity to be updated
         * @returns A request builder for creating requests that update an entity of type `SupplierCompany`.
         */
        update(entity) {
            return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
        }
    }
    exports.SupplierCompanyRequestBuilder = SupplierCompanyRequestBuilder;
});
//# sourceMappingURL=SupplierCompanyRequestBuilder.js.map