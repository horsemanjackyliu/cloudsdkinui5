define(["require", "exports", "@sap-cloud-sdk/odata-v2", "./BusinessPartnerContact"], function (require, exports, odata_v2_1, BusinessPartnerContact_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BusinessPartnerContactRequestBuilder = void 0;
    /**
     * Request builder class for operations supported on the {@link BusinessPartnerContact} entity.
     */
    class BusinessPartnerContactRequestBuilder extends odata_v2_1.RequestBuilder {
        /**
         * Returns a request builder for retrieving one `BusinessPartnerContact` entity based on its keys.
         * @param relationshipNumber Key property. See {@link BusinessPartnerContact.relationshipNumber}.
         * @param businessPartnerCompany Key property. See {@link BusinessPartnerContact.businessPartnerCompany}.
         * @param businessPartnerPerson Key property. See {@link BusinessPartnerContact.businessPartnerPerson}.
         * @param validityEndDate Key property. See {@link BusinessPartnerContact.validityEndDate}.
         * @returns A request builder for creating requests to retrieve one `BusinessPartnerContact` entity based on its keys.
         */
        getByKey(relationshipNumber, businessPartnerCompany, businessPartnerPerson, validityEndDate) {
            return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
                RelationshipNumber: relationshipNumber,
                BusinessPartnerCompany: businessPartnerCompany,
                BusinessPartnerPerson: businessPartnerPerson,
                ValidityEndDate: validityEndDate
            });
        }
        /**
         * Returns a request builder for querying all `BusinessPartnerContact` entities.
         * @returns A request builder for creating requests to retrieve all `BusinessPartnerContact` entities.
         */
        getAll() {
            return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
        }
        /**
         * Returns a request builder for creating a `BusinessPartnerContact` entity.
         * @param entity The entity to be created
         * @returns A request builder for creating requests that create an entity of type `BusinessPartnerContact`.
         */
        create(entity) {
            return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
        }
        /**
         * Returns a request builder for updating an entity of type `BusinessPartnerContact`.
         * @param entity The entity to be updated
         * @returns A request builder for creating requests that update an entity of type `BusinessPartnerContact`.
         */
        update(entity) {
            return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
        }
        delete(relationshipNumberOrEntity, businessPartnerCompany, businessPartnerPerson, validityEndDate) {
            return new odata_v2_1.DeleteRequestBuilder(this.entityApi, relationshipNumberOrEntity instanceof BusinessPartnerContact_1.BusinessPartnerContact
                ? relationshipNumberOrEntity
                : {
                    RelationshipNumber: relationshipNumberOrEntity,
                    BusinessPartnerCompany: businessPartnerCompany,
                    BusinessPartnerPerson: businessPartnerPerson,
                    ValidityEndDate: validityEndDate
                });
        }
    }
    exports.BusinessPartnerContactRequestBuilder = BusinessPartnerContactRequestBuilder;
});
//# sourceMappingURL=BusinessPartnerContactRequestBuilder.js.map