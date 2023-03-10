define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BusinessPartnerRequestBuilder = void 0;
    /**
     * Request builder class for operations supported on the {@link BusinessPartner} entity.
     */
    class BusinessPartnerRequestBuilder extends odata_v2_1.RequestBuilder {
        /**
         * Returns a request builder for retrieving one `BusinessPartner` entity based on its keys.
         * @param businessPartner Key property. See {@link BusinessPartner.businessPartner}.
         * @returns A request builder for creating requests to retrieve one `BusinessPartner` entity based on its keys.
         */
        getByKey(businessPartner) {
            return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
                BusinessPartner: businessPartner
            });
        }
        /**
         * Returns a request builder for querying all `BusinessPartner` entities.
         * @returns A request builder for creating requests to retrieve all `BusinessPartner` entities.
         */
        getAll() {
            return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
        }
        /**
         * Returns a request builder for creating a `BusinessPartner` entity.
         * @param entity The entity to be created
         * @returns A request builder for creating requests that create an entity of type `BusinessPartner`.
         */
        create(entity) {
            return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
        }
        /**
         * Returns a request builder for updating an entity of type `BusinessPartner`.
         * @param entity The entity to be updated
         * @returns A request builder for creating requests that update an entity of type `BusinessPartner`.
         */
        update(entity) {
            return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
        }
    }
    exports.BusinessPartnerRequestBuilder = BusinessPartnerRequestBuilder;
});
//# sourceMappingURL=BusinessPartnerRequestBuilder.js.map