define(["require", "exports", "@sap-cloud-sdk/odata-v2", "./CustomerDunning"], function (require, exports, odata_v2_1, CustomerDunning_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustomerDunningRequestBuilder = void 0;
    /**
     * Request builder class for operations supported on the {@link CustomerDunning} entity.
     */
    class CustomerDunningRequestBuilder extends odata_v2_1.RequestBuilder {
        /**
         * Returns a request builder for retrieving one `CustomerDunning` entity based on its keys.
         * @param customer Key property. See {@link CustomerDunning.customer}.
         * @param companyCode Key property. See {@link CustomerDunning.companyCode}.
         * @param dunningArea Key property. See {@link CustomerDunning.dunningArea}.
         * @returns A request builder for creating requests to retrieve one `CustomerDunning` entity based on its keys.
         */
        getByKey(customer, companyCode, dunningArea) {
            return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
                Customer: customer,
                CompanyCode: companyCode,
                DunningArea: dunningArea
            });
        }
        /**
         * Returns a request builder for querying all `CustomerDunning` entities.
         * @returns A request builder for creating requests to retrieve all `CustomerDunning` entities.
         */
        getAll() {
            return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
        }
        /**
         * Returns a request builder for creating a `CustomerDunning` entity.
         * @param entity The entity to be created
         * @returns A request builder for creating requests that create an entity of type `CustomerDunning`.
         */
        create(entity) {
            return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
        }
        /**
         * Returns a request builder for updating an entity of type `CustomerDunning`.
         * @param entity The entity to be updated
         * @returns A request builder for creating requests that update an entity of type `CustomerDunning`.
         */
        update(entity) {
            return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
        }
        delete(customerOrEntity, companyCode, dunningArea) {
            return new odata_v2_1.DeleteRequestBuilder(this.entityApi, customerOrEntity instanceof CustomerDunning_1.CustomerDunning
                ? customerOrEntity
                : {
                    Customer: customerOrEntity,
                    CompanyCode: companyCode,
                    DunningArea: dunningArea
                });
        }
    }
    exports.CustomerDunningRequestBuilder = CustomerDunningRequestBuilder;
});
//# sourceMappingURL=CustomerDunningRequestBuilder.js.map