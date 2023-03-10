define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustomerRequestBuilder = void 0;
    /**
     * Request builder class for operations supported on the {@link Customer} entity.
     */
    class CustomerRequestBuilder extends odata_v2_1.RequestBuilder {
        /**
         * Returns a request builder for retrieving one `Customer` entity based on its keys.
         * @param customer Key property. See {@link Customer.customer}.
         * @returns A request builder for creating requests to retrieve one `Customer` entity based on its keys.
         */
        getByKey(customer) {
            return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
                Customer: customer
            });
        }
        /**
         * Returns a request builder for querying all `Customer` entities.
         * @returns A request builder for creating requests to retrieve all `Customer` entities.
         */
        getAll() {
            return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
        }
        /**
         * Returns a request builder for updating an entity of type `Customer`.
         * @param entity The entity to be updated
         * @returns A request builder for creating requests that update an entity of type `Customer`.
         */
        update(entity) {
            return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
        }
    }
    exports.CustomerRequestBuilder = CustomerRequestBuilder;
});
//# sourceMappingURL=CustomerRequestBuilder.js.map