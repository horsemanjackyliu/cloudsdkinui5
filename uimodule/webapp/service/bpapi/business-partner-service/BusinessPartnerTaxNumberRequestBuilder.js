define(["require", "exports", "@sap-cloud-sdk/odata-v2", "./BusinessPartnerTaxNumber"], function (require, exports, odata_v2_1, BusinessPartnerTaxNumber_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BusinessPartnerTaxNumberRequestBuilder = void 0;
    /**
     * Request builder class for operations supported on the {@link BusinessPartnerTaxNumber} entity.
     */
    class BusinessPartnerTaxNumberRequestBuilder extends odata_v2_1.RequestBuilder {
        /**
         * Returns a request builder for retrieving one `BusinessPartnerTaxNumber` entity based on its keys.
         * @param businessPartner Key property. See {@link BusinessPartnerTaxNumber.businessPartner}.
         * @param bpTaxType Key property. See {@link BusinessPartnerTaxNumber.bpTaxType}.
         * @returns A request builder for creating requests to retrieve one `BusinessPartnerTaxNumber` entity based on its keys.
         */
        getByKey(businessPartner, bpTaxType) {
            return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
                BusinessPartner: businessPartner,
                BPTaxType: bpTaxType
            });
        }
        /**
         * Returns a request builder for querying all `BusinessPartnerTaxNumber` entities.
         * @returns A request builder for creating requests to retrieve all `BusinessPartnerTaxNumber` entities.
         */
        getAll() {
            return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
        }
        /**
         * Returns a request builder for creating a `BusinessPartnerTaxNumber` entity.
         * @param entity The entity to be created
         * @returns A request builder for creating requests that create an entity of type `BusinessPartnerTaxNumber`.
         */
        create(entity) {
            return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
        }
        /**
         * Returns a request builder for updating an entity of type `BusinessPartnerTaxNumber`.
         * @param entity The entity to be updated
         * @returns A request builder for creating requests that update an entity of type `BusinessPartnerTaxNumber`.
         */
        update(entity) {
            return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
        }
        delete(businessPartnerOrEntity, bpTaxType) {
            return new odata_v2_1.DeleteRequestBuilder(this.entityApi, businessPartnerOrEntity instanceof BusinessPartnerTaxNumber_1.BusinessPartnerTaxNumber
                ? businessPartnerOrEntity
                : {
                    BusinessPartner: businessPartnerOrEntity,
                    BPTaxType: bpTaxType
                });
        }
    }
    exports.BusinessPartnerTaxNumberRequestBuilder = BusinessPartnerTaxNumberRequestBuilder;
});
//# sourceMappingURL=BusinessPartnerTaxNumberRequestBuilder.js.map