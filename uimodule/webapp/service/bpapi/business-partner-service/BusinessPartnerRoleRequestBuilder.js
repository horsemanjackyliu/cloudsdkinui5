define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BusinessPartnerRoleRequestBuilder = void 0;
    /**
     * Request builder class for operations supported on the {@link BusinessPartnerRole} entity.
     */
    class BusinessPartnerRoleRequestBuilder extends odata_v2_1.RequestBuilder {
        /**
         * Returns a request builder for retrieving one `BusinessPartnerRole` entity based on its keys.
         * @param businessPartner Key property. See {@link BusinessPartnerRole.businessPartner}.
         * @param businessPartnerRole Key property. See {@link BusinessPartnerRole.businessPartnerRole}.
         * @returns A request builder for creating requests to retrieve one `BusinessPartnerRole` entity based on its keys.
         */
        getByKey(businessPartner, businessPartnerRole) {
            return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
                BusinessPartner: businessPartner,
                BusinessPartnerRole: businessPartnerRole
            });
        }
        /**
         * Returns a request builder for querying all `BusinessPartnerRole` entities.
         * @returns A request builder for creating requests to retrieve all `BusinessPartnerRole` entities.
         */
        getAll() {
            return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
        }
        /**
         * Returns a request builder for creating a `BusinessPartnerRole` entity.
         * @param entity The entity to be created
         * @returns A request builder for creating requests that create an entity of type `BusinessPartnerRole`.
         */
        create(entity) {
            return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
        }
        /**
         * Returns a request builder for updating an entity of type `BusinessPartnerRole`.
         * @param entity The entity to be updated
         * @returns A request builder for creating requests that update an entity of type `BusinessPartnerRole`.
         */
        update(entity) {
            return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
        }
    }
    exports.BusinessPartnerRoleRequestBuilder = BusinessPartnerRoleRequestBuilder;
});
//# sourceMappingURL=BusinessPartnerRoleRequestBuilder.js.map