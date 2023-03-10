define(["require", "exports", "@sap-cloud-sdk/odata-v2", "./CustomerTaxGrouping"], function (require, exports, odata_v2_1, CustomerTaxGrouping_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustomerTaxGroupingRequestBuilder = void 0;
    /**
     * Request builder class for operations supported on the {@link CustomerTaxGrouping} entity.
     */
    class CustomerTaxGroupingRequestBuilder extends odata_v2_1.RequestBuilder {
        /**
         * Returns a request builder for retrieving one `CustomerTaxGrouping` entity based on its keys.
         * @param customer Key property. See {@link CustomerTaxGrouping.customer}.
         * @param customerTaxGroupingCode Key property. See {@link CustomerTaxGrouping.customerTaxGroupingCode}.
         * @returns A request builder for creating requests to retrieve one `CustomerTaxGrouping` entity based on its keys.
         */
        getByKey(customer, customerTaxGroupingCode) {
            return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
                Customer: customer,
                CustomerTaxGroupingCode: customerTaxGroupingCode
            });
        }
        /**
         * Returns a request builder for querying all `CustomerTaxGrouping` entities.
         * @returns A request builder for creating requests to retrieve all `CustomerTaxGrouping` entities.
         */
        getAll() {
            return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
        }
        /**
         * Returns a request builder for updating an entity of type `CustomerTaxGrouping`.
         * @param entity The entity to be updated
         * @returns A request builder for creating requests that update an entity of type `CustomerTaxGrouping`.
         */
        update(entity) {
            return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
        }
        delete(customerOrEntity, customerTaxGroupingCode) {
            return new odata_v2_1.DeleteRequestBuilder(this.entityApi, customerOrEntity instanceof CustomerTaxGrouping_1.CustomerTaxGrouping
                ? customerOrEntity
                : {
                    Customer: customerOrEntity,
                    CustomerTaxGroupingCode: customerTaxGroupingCode
                });
        }
    }
    exports.CustomerTaxGroupingRequestBuilder = CustomerTaxGroupingRequestBuilder;
});
//# sourceMappingURL=CustomerTaxGroupingRequestBuilder.js.map