import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { BuPaIdentification } from './BuPaIdentification';
/**
 * Request builder class for operations supported on the {@link BuPaIdentification} entity.
 */
export declare class BuPaIdentificationRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<BuPaIdentification<T>, T> {
    /**
     * Returns a request builder for retrieving one `BuPaIdentification` entity based on its keys.
     * @param businessPartner Key property. See {@link BuPaIdentification.businessPartner}.
     * @param bpIdentificationType Key property. See {@link BuPaIdentification.bpIdentificationType}.
     * @param bpIdentificationNumber Key property. See {@link BuPaIdentification.bpIdentificationNumber}.
     * @returns A request builder for creating requests to retrieve one `BuPaIdentification` entity based on its keys.
     */
    getByKey(businessPartner: DeserializedType<T, 'Edm.String'>, bpIdentificationType: DeserializedType<T, 'Edm.String'>, bpIdentificationNumber: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<BuPaIdentification<T>, T>;
    /**
     * Returns a request builder for querying all `BuPaIdentification` entities.
     * @returns A request builder for creating requests to retrieve all `BuPaIdentification` entities.
     */
    getAll(): GetAllRequestBuilder<BuPaIdentification<T>, T>;
    /**
     * Returns a request builder for creating a `BuPaIdentification` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BuPaIdentification`.
     */
    create(entity: BuPaIdentification<T>): CreateRequestBuilder<BuPaIdentification<T>, T>;
    /**
     * Returns a request builder for updating an entity of type `BuPaIdentification`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BuPaIdentification`.
     */
    update(entity: BuPaIdentification<T>): UpdateRequestBuilder<BuPaIdentification<T>, T>;
    /**
     * Returns a request builder for deleting an entity of type `BuPaIdentification`.
     * @param businessPartner Key property. See {@link BuPaIdentification.businessPartner}.
     * @param bpIdentificationType Key property. See {@link BuPaIdentification.bpIdentificationType}.
     * @param bpIdentificationNumber Key property. See {@link BuPaIdentification.bpIdentificationNumber}.
     * @returns A request builder for creating requests that delete an entity of type `BuPaIdentification`.
     */
    delete(businessPartner: string, bpIdentificationType: string, bpIdentificationNumber: string): DeleteRequestBuilder<BuPaIdentification<T>, T>;
    /**
     * Returns a request builder for deleting an entity of type `BuPaIdentification`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `BuPaIdentification` by taking the entity as a parameter.
     */
    delete(entity: BuPaIdentification<T>): DeleteRequestBuilder<BuPaIdentification<T>, T>;
}
//# sourceMappingURL=BuPaIdentificationRequestBuilder.d.ts.map