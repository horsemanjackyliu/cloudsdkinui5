define(["require", "exports", "@sap-cloud-sdk/odata-v2", "./AddressFaxNumber"], function (require, exports, odata_v2_1, AddressFaxNumber_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AddressFaxNumberRequestBuilder = void 0;
    /**
     * Request builder class for operations supported on the {@link AddressFaxNumber} entity.
     */
    class AddressFaxNumberRequestBuilder extends odata_v2_1.RequestBuilder {
        /**
         * Returns a request builder for retrieving one `AddressFaxNumber` entity based on its keys.
         * @param addressId Key property. See {@link AddressFaxNumber.addressId}.
         * @param person Key property. See {@link AddressFaxNumber.person}.
         * @param ordinalNumber Key property. See {@link AddressFaxNumber.ordinalNumber}.
         * @returns A request builder for creating requests to retrieve one `AddressFaxNumber` entity based on its keys.
         */
        getByKey(addressId, person, ordinalNumber) {
            return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
                AddressID: addressId,
                Person: person,
                OrdinalNumber: ordinalNumber
            });
        }
        /**
         * Returns a request builder for querying all `AddressFaxNumber` entities.
         * @returns A request builder for creating requests to retrieve all `AddressFaxNumber` entities.
         */
        getAll() {
            return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
        }
        /**
         * Returns a request builder for creating a `AddressFaxNumber` entity.
         * @param entity The entity to be created
         * @returns A request builder for creating requests that create an entity of type `AddressFaxNumber`.
         */
        create(entity) {
            return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
        }
        /**
         * Returns a request builder for updating an entity of type `AddressFaxNumber`.
         * @param entity The entity to be updated
         * @returns A request builder for creating requests that update an entity of type `AddressFaxNumber`.
         */
        update(entity) {
            return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
        }
        delete(addressIdOrEntity, person, ordinalNumber) {
            return new odata_v2_1.DeleteRequestBuilder(this.entityApi, addressIdOrEntity instanceof AddressFaxNumber_1.AddressFaxNumber
                ? addressIdOrEntity
                : {
                    AddressID: addressIdOrEntity,
                    Person: person,
                    OrdinalNumber: ordinalNumber
                });
        }
    }
    exports.AddressFaxNumberRequestBuilder = AddressFaxNumberRequestBuilder;
});
//# sourceMappingURL=AddressFaxNumberRequestBuilder.js.map