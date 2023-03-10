define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustomerSalesAreaRequestBuilder = void 0;
    /**
     * Request builder class for operations supported on the {@link CustomerSalesArea} entity.
     */
    class CustomerSalesAreaRequestBuilder extends odata_v2_1.RequestBuilder {
        /**
         * Returns a request builder for retrieving one `CustomerSalesArea` entity based on its keys.
         * @param customer Key property. See {@link CustomerSalesArea.customer}.
         * @param salesOrganization Key property. See {@link CustomerSalesArea.salesOrganization}.
         * @param distributionChannel Key property. See {@link CustomerSalesArea.distributionChannel}.
         * @param division Key property. See {@link CustomerSalesArea.division}.
         * @returns A request builder for creating requests to retrieve one `CustomerSalesArea` entity based on its keys.
         */
        getByKey(customer, salesOrganization, distributionChannel, division) {
            return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
                Customer: customer,
                SalesOrganization: salesOrganization,
                DistributionChannel: distributionChannel,
                Division: division
            });
        }
        /**
         * Returns a request builder for querying all `CustomerSalesArea` entities.
         * @returns A request builder for creating requests to retrieve all `CustomerSalesArea` entities.
         */
        getAll() {
            return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
        }
        /**
         * Returns a request builder for creating a `CustomerSalesArea` entity.
         * @param entity The entity to be created
         * @returns A request builder for creating requests that create an entity of type `CustomerSalesArea`.
         */
        create(entity) {
            return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
        }
        /**
         * Returns a request builder for updating an entity of type `CustomerSalesArea`.
         * @param entity The entity to be updated
         * @returns A request builder for creating requests that update an entity of type `CustomerSalesArea`.
         */
        update(entity) {
            return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
        }
    }
    exports.CustomerSalesAreaRequestBuilder = CustomerSalesAreaRequestBuilder;
});
//# sourceMappingURL=CustomerSalesAreaRequestBuilder.js.map