import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { CustAddrDepdntExtIdentifier } from './CustAddrDepdntExtIdentifier';
/**
 * Request builder class for operations supported on the {@link CustAddrDepdntExtIdentifier} entity.
 */
export declare class CustAddrDepdntExtIdentifierRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<CustAddrDepdntExtIdentifier<T>, T> {
    /**
     * Returns a request builder for retrieving one `CustAddrDepdntExtIdentifier` entity based on its keys.
     * @param customer Key property. See {@link CustAddrDepdntExtIdentifier.customer}.
     * @param addressId Key property. See {@link CustAddrDepdntExtIdentifier.addressId}.
     * @returns A request builder for creating requests to retrieve one `CustAddrDepdntExtIdentifier` entity based on its keys.
     */
    getByKey(customer: DeserializedType<T, 'Edm.String'>, addressId: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<CustAddrDepdntExtIdentifier<T>, T>;
    /**
     * Returns a request builder for querying all `CustAddrDepdntExtIdentifier` entities.
     * @returns A request builder for creating requests to retrieve all `CustAddrDepdntExtIdentifier` entities.
     */
    getAll(): GetAllRequestBuilder<CustAddrDepdntExtIdentifier<T>, T>;
    /**
     * Returns a request builder for creating a `CustAddrDepdntExtIdentifier` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustAddrDepdntExtIdentifier`.
     */
    create(entity: CustAddrDepdntExtIdentifier<T>): CreateRequestBuilder<CustAddrDepdntExtIdentifier<T>, T>;
    /**
     * Returns a request builder for updating an entity of type `CustAddrDepdntExtIdentifier`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustAddrDepdntExtIdentifier`.
     */
    update(entity: CustAddrDepdntExtIdentifier<T>): UpdateRequestBuilder<CustAddrDepdntExtIdentifier<T>, T>;
    /**
     * Returns a request builder for deleting an entity of type `CustAddrDepdntExtIdentifier`.
     * @param customer Key property. See {@link CustAddrDepdntExtIdentifier.customer}.
     * @param addressId Key property. See {@link CustAddrDepdntExtIdentifier.addressId}.
     * @returns A request builder for creating requests that delete an entity of type `CustAddrDepdntExtIdentifier`.
     */
    delete(customer: string, addressId: string): DeleteRequestBuilder<CustAddrDepdntExtIdentifier<T>, T>;
    /**
     * Returns a request builder for deleting an entity of type `CustAddrDepdntExtIdentifier`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `CustAddrDepdntExtIdentifier` by taking the entity as a parameter.
     */
    delete(entity: CustAddrDepdntExtIdentifier<T>): DeleteRequestBuilder<CustAddrDepdntExtIdentifier<T>, T>;
}
//# sourceMappingURL=CustAddrDepdntExtIdentifierRequestBuilder.d.ts.map