import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { BusinessPartnerRoleApi } from './BusinessPartnerRoleApi';
/**
 * This class represents the entity "A_BusinessPartnerRole" of service "API_BUSINESS_PARTNER".
 */
export declare class BusinessPartnerRole<T extends DeSerializers = DefaultDeSerializers> extends Entity implements BusinessPartnerRoleType<T> {
    readonly _entityApi: BusinessPartnerRoleApi<T>;
    /**
     * Technical entity name for BusinessPartnerRole.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * All key fields of the BusinessPartnerRole entity
     */
    static _keys: string[];
    /**
     * Business Partner Number.
     * Maximum length: 10.
     */
    businessPartner: DeserializedType<T, 'Edm.String'>;
    /**
     * BP Role.
     * Maximum length: 6.
     */
    businessPartnerRole: DeserializedType<T, 'Edm.String'>;
    /**
     * Validity Start of a BP Role.
     * @nullable
     */
    validFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
    /**
     * Validity End of a BP Role.
     * @nullable
     */
    validTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
    /**
     * Authorization Group.
     * Maximum length: 4.
     * @nullable
     */
    authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
    constructor(_entityApi: BusinessPartnerRoleApi<T>);
}
export interface BusinessPartnerRoleType<T extends DeSerializers = DefaultDeSerializers> {
    businessPartner: DeserializedType<T, 'Edm.String'>;
    businessPartnerRole: DeserializedType<T, 'Edm.String'>;
    validFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
    validTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
    authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
}
//# sourceMappingURL=BusinessPartnerRole.d.ts.map