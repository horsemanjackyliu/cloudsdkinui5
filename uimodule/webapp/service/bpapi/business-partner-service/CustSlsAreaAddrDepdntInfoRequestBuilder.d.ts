import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { CustSlsAreaAddrDepdntInfo } from './CustSlsAreaAddrDepdntInfo';
/**
 * Request builder class for operations supported on the {@link CustSlsAreaAddrDepdntInfo} entity.
 */
export declare class CustSlsAreaAddrDepdntInfoRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<CustSlsAreaAddrDepdntInfo<T>, T> {
    /**
     * Returns a request builder for retrieving one `CustSlsAreaAddrDepdntInfo` entity based on its keys.
     * @param customer Key property. See {@link CustSlsAreaAddrDepdntInfo.customer}.
     * @param salesOrganization Key property. See {@link CustSlsAreaAddrDepdntInfo.salesOrganization}.
     * @param distributionChannel Key property. See {@link CustSlsAreaAddrDepdntInfo.distributionChannel}.
     * @param division Key property. See {@link CustSlsAreaAddrDepdntInfo.division}.
     * @param addressId Key property. See {@link CustSlsAreaAddrDepdntInfo.addressId}.
     * @returns A request builder for creating requests to retrieve one `CustSlsAreaAddrDepdntInfo` entity based on its keys.
     */
    getByKey(customer: DeserializedType<T, 'Edm.String'>, salesOrganization: DeserializedType<T, 'Edm.String'>, distributionChannel: DeserializedType<T, 'Edm.String'>, division: DeserializedType<T, 'Edm.String'>, addressId: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<CustSlsAreaAddrDepdntInfo<T>, T>;
    /**
     * Returns a request builder for querying all `CustSlsAreaAddrDepdntInfo` entities.
     * @returns A request builder for creating requests to retrieve all `CustSlsAreaAddrDepdntInfo` entities.
     */
    getAll(): GetAllRequestBuilder<CustSlsAreaAddrDepdntInfo<T>, T>;
    /**
     * Returns a request builder for creating a `CustSlsAreaAddrDepdntInfo` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustSlsAreaAddrDepdntInfo`.
     */
    create(entity: CustSlsAreaAddrDepdntInfo<T>): CreateRequestBuilder<CustSlsAreaAddrDepdntInfo<T>, T>;
    /**
     * Returns a request builder for updating an entity of type `CustSlsAreaAddrDepdntInfo`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustSlsAreaAddrDepdntInfo`.
     */
    update(entity: CustSlsAreaAddrDepdntInfo<T>): UpdateRequestBuilder<CustSlsAreaAddrDepdntInfo<T>, T>;
    /**
     * Returns a request builder for deleting an entity of type `CustSlsAreaAddrDepdntInfo`.
     * @param customer Key property. See {@link CustSlsAreaAddrDepdntInfo.customer}.
     * @param salesOrganization Key property. See {@link CustSlsAreaAddrDepdntInfo.salesOrganization}.
     * @param distributionChannel Key property. See {@link CustSlsAreaAddrDepdntInfo.distributionChannel}.
     * @param division Key property. See {@link CustSlsAreaAddrDepdntInfo.division}.
     * @param addressId Key property. See {@link CustSlsAreaAddrDepdntInfo.addressId}.
     * @returns A request builder for creating requests that delete an entity of type `CustSlsAreaAddrDepdntInfo`.
     */
    delete(customer: string, salesOrganization: string, distributionChannel: string, division: string, addressId: string): DeleteRequestBuilder<CustSlsAreaAddrDepdntInfo<T>, T>;
    /**
     * Returns a request builder for deleting an entity of type `CustSlsAreaAddrDepdntInfo`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `CustSlsAreaAddrDepdntInfo` by taking the entity as a parameter.
     */
    delete(entity: CustSlsAreaAddrDepdntInfo<T>): DeleteRequestBuilder<CustSlsAreaAddrDepdntInfo<T>, T>;
}
//# sourceMappingURL=CustSlsAreaAddrDepdntInfoRequestBuilder.d.ts.map