define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustomerCompanyRequestBuilder = void 0;
    /**
     * Request builder class for operations supported on the {@link CustomerCompany} entity.
     */
    class CustomerCompanyRequestBuilder extends odata_v2_1.RequestBuilder {
        /**
         * Returns a request builder for retrieving one `CustomerCompany` entity based on its keys.
         * @param customer Key property. See {@link CustomerCompany.customer}.
         * @param companyCode Key property. See {@link CustomerCompany.companyCode}.
         * @returns A request builder for creating requests to retrieve one `CustomerCompany` entity based on its keys.
         */
        getByKey(customer, companyCode) {
            return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
                Customer: customer,
                CompanyCode: companyCode
            });
        }
        /**
         * Returns a request builder for querying all `CustomerCompany` entities.
         * @returns A request builder for creating requests to retrieve all `CustomerCompany` entities.
         */
        getAll() {
            return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
        }
        /**
         * Returns a request builder for creating a `CustomerCompany` entity.
         * @param entity The entity to be created
         * @returns A request builder for creating requests that create an entity of type `CustomerCompany`.
         */
        create(entity) {
            return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
        }
        /**
         * Returns a request builder for updating an entity of type `CustomerCompany`.
         * @param entity The entity to be updated
         * @returns A request builder for creating requests that update an entity of type `CustomerCompany`.
         */
        update(entity) {
            return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
        }
    }
    exports.CustomerCompanyRequestBuilder = CustomerCompanyRequestBuilder;
});
//# sourceMappingURL=CustomerCompanyRequestBuilder.js.map