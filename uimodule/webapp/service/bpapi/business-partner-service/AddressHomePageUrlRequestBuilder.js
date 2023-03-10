define(["require", "exports", "@sap-cloud-sdk/odata-v2", "./AddressHomePageUrl"], function (require, exports, odata_v2_1, AddressHomePageUrl_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AddressHomePageUrlRequestBuilder = void 0;
    /**
     * Request builder class for operations supported on the {@link AddressHomePageUrl} entity.
     */
    class AddressHomePageUrlRequestBuilder extends odata_v2_1.RequestBuilder {
        /**
         * Returns a request builder for retrieving one `AddressHomePageUrl` entity based on its keys.
         * @param addressId Key property. See {@link AddressHomePageUrl.addressId}.
         * @param person Key property. See {@link AddressHomePageUrl.person}.
         * @param ordinalNumber Key property. See {@link AddressHomePageUrl.ordinalNumber}.
         * @param validityStartDate Key property. See {@link AddressHomePageUrl.validityStartDate}.
         * @param isDefaultUrlAddress Key property. See {@link AddressHomePageUrl.isDefaultUrlAddress}.
         * @returns A request builder for creating requests to retrieve one `AddressHomePageUrl` entity based on its keys.
         */
        getByKey(addressId, person, ordinalNumber, validityStartDate, isDefaultUrlAddress) {
            return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
                AddressID: addressId,
                Person: person,
                OrdinalNumber: ordinalNumber,
                ValidityStartDate: validityStartDate,
                IsDefaultURLAddress: isDefaultUrlAddress
            });
        }
        /**
         * Returns a request builder for querying all `AddressHomePageUrl` entities.
         * @returns A request builder for creating requests to retrieve all `AddressHomePageUrl` entities.
         */
        getAll() {
            return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
        }
        /**
         * Returns a request builder for creating a `AddressHomePageUrl` entity.
         * @param entity The entity to be created
         * @returns A request builder for creating requests that create an entity of type `AddressHomePageUrl`.
         */
        create(entity) {
            return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
        }
        /**
         * Returns a request builder for updating an entity of type `AddressHomePageUrl`.
         * @param entity The entity to be updated
         * @returns A request builder for creating requests that update an entity of type `AddressHomePageUrl`.
         */
        update(entity) {
            return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
        }
        delete(addressIdOrEntity, person, ordinalNumber, validityStartDate, isDefaultUrlAddress) {
            return new odata_v2_1.DeleteRequestBuilder(this.entityApi, addressIdOrEntity instanceof AddressHomePageUrl_1.AddressHomePageUrl
                ? addressIdOrEntity
                : {
                    AddressID: addressIdOrEntity,
                    Person: person,
                    OrdinalNumber: ordinalNumber,
                    ValidityStartDate: validityStartDate,
                    IsDefaultURLAddress: isDefaultUrlAddress
                });
        }
    }
    exports.AddressHomePageUrlRequestBuilder = AddressHomePageUrlRequestBuilder;
});
//# sourceMappingURL=AddressHomePageUrlRequestBuilder.js.map