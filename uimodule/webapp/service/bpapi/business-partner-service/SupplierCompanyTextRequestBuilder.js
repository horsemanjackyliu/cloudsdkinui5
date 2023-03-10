define(["require", "exports", "@sap-cloud-sdk/odata-v2", "./SupplierCompanyText"], function (require, exports, odata_v2_1, SupplierCompanyText_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SupplierCompanyTextRequestBuilder = void 0;
    /**
     * Request builder class for operations supported on the {@link SupplierCompanyText} entity.
     */
    class SupplierCompanyTextRequestBuilder extends odata_v2_1.RequestBuilder {
        /**
         * Returns a request builder for retrieving one `SupplierCompanyText` entity based on its keys.
         * @param supplier Key property. See {@link SupplierCompanyText.supplier}.
         * @param companyCode Key property. See {@link SupplierCompanyText.companyCode}.
         * @param language Key property. See {@link SupplierCompanyText.language}.
         * @param longTextId Key property. See {@link SupplierCompanyText.longTextId}.
         * @returns A request builder for creating requests to retrieve one `SupplierCompanyText` entity based on its keys.
         */
        getByKey(supplier, companyCode, language, longTextId) {
            return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
                Supplier: supplier,
                CompanyCode: companyCode,
                Language: language,
                LongTextID: longTextId
            });
        }
        /**
         * Returns a request builder for querying all `SupplierCompanyText` entities.
         * @returns A request builder for creating requests to retrieve all `SupplierCompanyText` entities.
         */
        getAll() {
            return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
        }
        /**
         * Returns a request builder for creating a `SupplierCompanyText` entity.
         * @param entity The entity to be created
         * @returns A request builder for creating requests that create an entity of type `SupplierCompanyText`.
         */
        create(entity) {
            return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
        }
        /**
         * Returns a request builder for updating an entity of type `SupplierCompanyText`.
         * @param entity The entity to be updated
         * @returns A request builder for creating requests that update an entity of type `SupplierCompanyText`.
         */
        update(entity) {
            return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
        }
        delete(supplierOrEntity, companyCode, language, longTextId) {
            return new odata_v2_1.DeleteRequestBuilder(this.entityApi, supplierOrEntity instanceof SupplierCompanyText_1.SupplierCompanyText
                ? supplierOrEntity
                : {
                    Supplier: supplierOrEntity,
                    CompanyCode: companyCode,
                    Language: language,
                    LongTextID: longTextId
                });
        }
    }
    exports.SupplierCompanyTextRequestBuilder = SupplierCompanyTextRequestBuilder;
});
//# sourceMappingURL=SupplierCompanyTextRequestBuilder.js.map