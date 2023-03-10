define(["require", "exports", "@sap-cloud-sdk/odata-v2", "./AddressPhoneNumber"], function (require, exports, odata_v2_1, AddressPhoneNumber_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AddressPhoneNumberRequestBuilder = void 0;
    /**
     * Request builder class for operations supported on the {@link AddressPhoneNumber} entity.
     */
    class AddressPhoneNumberRequestBuilder extends odata_v2_1.RequestBuilder {
        /**
         * Returns a request builder for retrieving one `AddressPhoneNumber` entity based on its keys.
         * @param addressId Key property. See {@link AddressPhoneNumber.addressId}.
         * @param person Key property. See {@link AddressPhoneNumber.person}.
         * @param ordinalNumber Key property. See {@link AddressPhoneNumber.ordinalNumber}.
         * @returns A request builder for creating requests to retrieve one `AddressPhoneNumber` entity based on its keys.
         */
        getByKey(addressId, person, ordinalNumber) {
            return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
                AddressID: addressId,
                Person: person,
                OrdinalNumber: ordinalNumber
            });
        }
        /**
         * Returns a request builder for querying all `AddressPhoneNumber` entities.
         * @returns A request builder for creating requests to retrieve all `AddressPhoneNumber` entities.
         */
        getAll() {
            return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
        }
        /**
         * Returns a request builder for creating a `AddressPhoneNumber` entity.
         * @param entity The entity to be created
         * @returns A request builder for creating requests that create an entity of type `AddressPhoneNumber`.
         */
        create(entity) {
            return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
        }
        /**
         * Returns a request builder for updating an entity of type `AddressPhoneNumber`.
         * @param entity The entity to be updated
         * @returns A request builder for creating requests that update an entity of type `AddressPhoneNumber`.
         */
        update(entity) {
            return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
        }
        delete(addressIdOrEntity, person, ordinalNumber) {
            return new odata_v2_1.DeleteRequestBuilder(this.entityApi, addressIdOrEntity instanceof AddressPhoneNumber_1.AddressPhoneNumber
                ? addressIdOrEntity
                : {
                    AddressID: addressIdOrEntity,
                    Person: person,
                    OrdinalNumber: ordinalNumber
                });
        }
    }
    exports.AddressPhoneNumberRequestBuilder = AddressPhoneNumberRequestBuilder;
});
//# sourceMappingURL=AddressPhoneNumberRequestBuilder.js.map