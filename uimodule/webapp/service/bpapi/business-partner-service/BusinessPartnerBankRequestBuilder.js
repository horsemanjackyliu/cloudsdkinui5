define(["require", "exports", "@sap-cloud-sdk/odata-v2", "./BusinessPartnerBank"], function (require, exports, odata_v2_1, BusinessPartnerBank_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BusinessPartnerBankRequestBuilder = void 0;
    /**
     * Request builder class for operations supported on the {@link BusinessPartnerBank} entity.
     */
    class BusinessPartnerBankRequestBuilder extends odata_v2_1.RequestBuilder {
        /**
         * Returns a request builder for retrieving one `BusinessPartnerBank` entity based on its keys.
         * @param businessPartner Key property. See {@link BusinessPartnerBank.businessPartner}.
         * @param bankIdentification Key property. See {@link BusinessPartnerBank.bankIdentification}.
         * @returns A request builder for creating requests to retrieve one `BusinessPartnerBank` entity based on its keys.
         */
        getByKey(businessPartner, bankIdentification) {
            return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
                BusinessPartner: businessPartner,
                BankIdentification: bankIdentification
            });
        }
        /**
         * Returns a request builder for querying all `BusinessPartnerBank` entities.
         * @returns A request builder for creating requests to retrieve all `BusinessPartnerBank` entities.
         */
        getAll() {
            return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
        }
        /**
         * Returns a request builder for creating a `BusinessPartnerBank` entity.
         * @param entity The entity to be created
         * @returns A request builder for creating requests that create an entity of type `BusinessPartnerBank`.
         */
        create(entity) {
            return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
        }
        /**
         * Returns a request builder for updating an entity of type `BusinessPartnerBank`.
         * @param entity The entity to be updated
         * @returns A request builder for creating requests that update an entity of type `BusinessPartnerBank`.
         */
        update(entity) {
            return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
        }
        delete(businessPartnerOrEntity, bankIdentification) {
            return new odata_v2_1.DeleteRequestBuilder(this.entityApi, businessPartnerOrEntity instanceof BusinessPartnerBank_1.BusinessPartnerBank
                ? businessPartnerOrEntity
                : {
                    BusinessPartner: businessPartnerOrEntity,
                    BankIdentification: bankIdentification
                });
        }
    }
    exports.BusinessPartnerBankRequestBuilder = BusinessPartnerBankRequestBuilder;
});
//# sourceMappingURL=BusinessPartnerBankRequestBuilder.js.map