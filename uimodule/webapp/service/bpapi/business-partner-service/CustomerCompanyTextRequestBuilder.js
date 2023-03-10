define(["require", "exports", "@sap-cloud-sdk/odata-v2", "./CustomerCompanyText"], function (require, exports, odata_v2_1, CustomerCompanyText_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustomerCompanyTextRequestBuilder = void 0;
    /**
     * Request builder class for operations supported on the {@link CustomerCompanyText} entity.
     */
    class CustomerCompanyTextRequestBuilder extends odata_v2_1.RequestBuilder {
        /**
         * Returns a request builder for retrieving one `CustomerCompanyText` entity based on its keys.
         * @param customer Key property. See {@link CustomerCompanyText.customer}.
         * @param companyCode Key property. See {@link CustomerCompanyText.companyCode}.
         * @param language Key property. See {@link CustomerCompanyText.language}.
         * @param longTextId Key property. See {@link CustomerCompanyText.longTextId}.
         * @returns A request builder for creating requests to retrieve one `CustomerCompanyText` entity based on its keys.
         */
        getByKey(customer, companyCode, language, longTextId) {
            return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
                Customer: customer,
                CompanyCode: companyCode,
                Language: language,
                LongTextID: longTextId
            });
        }
        /**
         * Returns a request builder for querying all `CustomerCompanyText` entities.
         * @returns A request builder for creating requests to retrieve all `CustomerCompanyText` entities.
         */
        getAll() {
            return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
        }
        /**
         * Returns a request builder for creating a `CustomerCompanyText` entity.
         * @param entity The entity to be created
         * @returns A request builder for creating requests that create an entity of type `CustomerCompanyText`.
         */
        create(entity) {
            return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
        }
        /**
         * Returns a request builder for updating an entity of type `CustomerCompanyText`.
         * @param entity The entity to be updated
         * @returns A request builder for creating requests that update an entity of type `CustomerCompanyText`.
         */
        update(entity) {
            return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
        }
        delete(customerOrEntity, companyCode, language, longTextId) {
            return new odata_v2_1.DeleteRequestBuilder(this.entityApi, customerOrEntity instanceof CustomerCompanyText_1.CustomerCompanyText
                ? customerOrEntity
                : {
                    Customer: customerOrEntity,
                    CompanyCode: companyCode,
                    Language: language,
                    LongTextID: longTextId
                });
        }
    }
    exports.CustomerCompanyTextRequestBuilder = CustomerCompanyTextRequestBuilder;
});
//# sourceMappingURL=CustomerCompanyTextRequestBuilder.js.map