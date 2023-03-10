define(["require", "exports", "@sap-cloud-sdk/odata-v2", "./AddressEmailAddress"], function (require, exports, odata_v2_1, AddressEmailAddress_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AddressEmailAddressRequestBuilder = void 0;
    /**
     * Request builder class for operations supported on the {@link AddressEmailAddress} entity.
     */
    class AddressEmailAddressRequestBuilder extends odata_v2_1.RequestBuilder {
        /**
         * Returns a request builder for retrieving one `AddressEmailAddress` entity based on its keys.
         * @param addressId Key property. See {@link AddressEmailAddress.addressId}.
         * @param person Key property. See {@link AddressEmailAddress.person}.
         * @param ordinalNumber Key property. See {@link AddressEmailAddress.ordinalNumber}.
         * @returns A request builder for creating requests to retrieve one `AddressEmailAddress` entity based on its keys.
         */
        getByKey(addressId, person, ordinalNumber) {
            return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
                AddressID: addressId,
                Person: person,
                OrdinalNumber: ordinalNumber
            });
        }
        /**
         * Returns a request builder for querying all `AddressEmailAddress` entities.
         * @returns A request builder for creating requests to retrieve all `AddressEmailAddress` entities.
         */
        getAll() {
            return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
        }
        /**
         * Returns a request builder for creating a `AddressEmailAddress` entity.
         * @param entity The entity to be created
         * @returns A request builder for creating requests that create an entity of type `AddressEmailAddress`.
         */
        create(entity) {
            return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
        }
        /**
         * Returns a request builder for updating an entity of type `AddressEmailAddress`.
         * @param entity The entity to be updated
         * @returns A request builder for creating requests that update an entity of type `AddressEmailAddress`.
         */
        update(entity) {
            return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
        }
        delete(addressIdOrEntity, person, ordinalNumber) {
            return new odata_v2_1.DeleteRequestBuilder(this.entityApi, addressIdOrEntity instanceof AddressEmailAddress_1.AddressEmailAddress
                ? addressIdOrEntity
                : {
                    AddressID: addressIdOrEntity,
                    Person: person,
                    OrdinalNumber: ordinalNumber
                });
        }
    }
    exports.AddressEmailAddressRequestBuilder = AddressEmailAddressRequestBuilder;
});
//# sourceMappingURL=AddressEmailAddressRequestBuilder.js.map