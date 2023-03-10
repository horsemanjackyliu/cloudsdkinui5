define(["require", "exports", "@sap-cloud-sdk/odata-v2", "./SupplierWithHoldingTax"], function (require, exports, odata_v2_1, SupplierWithHoldingTax_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SupplierWithHoldingTaxRequestBuilder = void 0;
    /**
     * Request builder class for operations supported on the {@link SupplierWithHoldingTax} entity.
     */
    class SupplierWithHoldingTaxRequestBuilder extends odata_v2_1.RequestBuilder {
        /**
         * Returns a request builder for retrieving one `SupplierWithHoldingTax` entity based on its keys.
         * @param supplier Key property. See {@link SupplierWithHoldingTax.supplier}.
         * @param companyCode Key property. See {@link SupplierWithHoldingTax.companyCode}.
         * @param withholdingTaxType Key property. See {@link SupplierWithHoldingTax.withholdingTaxType}.
         * @returns A request builder for creating requests to retrieve one `SupplierWithHoldingTax` entity based on its keys.
         */
        getByKey(supplier, companyCode, withholdingTaxType) {
            return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
                Supplier: supplier,
                CompanyCode: companyCode,
                WithholdingTaxType: withholdingTaxType
            });
        }
        /**
         * Returns a request builder for querying all `SupplierWithHoldingTax` entities.
         * @returns A request builder for creating requests to retrieve all `SupplierWithHoldingTax` entities.
         */
        getAll() {
            return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
        }
        /**
         * Returns a request builder for creating a `SupplierWithHoldingTax` entity.
         * @param entity The entity to be created
         * @returns A request builder for creating requests that create an entity of type `SupplierWithHoldingTax`.
         */
        create(entity) {
            return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
        }
        /**
         * Returns a request builder for updating an entity of type `SupplierWithHoldingTax`.
         * @param entity The entity to be updated
         * @returns A request builder for creating requests that update an entity of type `SupplierWithHoldingTax`.
         */
        update(entity) {
            return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
        }
        delete(supplierOrEntity, companyCode, withholdingTaxType) {
            return new odata_v2_1.DeleteRequestBuilder(this.entityApi, supplierOrEntity instanceof SupplierWithHoldingTax_1.SupplierWithHoldingTax
                ? supplierOrEntity
                : {
                    Supplier: supplierOrEntity,
                    CompanyCode: companyCode,
                    WithholdingTaxType: withholdingTaxType
                });
        }
    }
    exports.SupplierWithHoldingTaxRequestBuilder = SupplierWithHoldingTaxRequestBuilder;
});
//# sourceMappingURL=SupplierWithHoldingTaxRequestBuilder.js.map