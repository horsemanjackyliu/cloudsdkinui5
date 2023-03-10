import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { AddressFaxNumberApi } from './AddressFaxNumberApi';
/**
 * This class represents the entity "A_AddressFaxNumber" of service "API_BUSINESS_PARTNER".
 */
export declare class AddressFaxNumber<T extends DeSerializers = DefaultDeSerializers> extends Entity implements AddressFaxNumberType<T> {
    readonly _entityApi: AddressFaxNumberApi<T>;
    /**
     * Technical entity name for AddressFaxNumber.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * All key fields of the AddressFaxNumber entity
     */
    static _keys: string[];
    /**
     * Address Number.
     * Maximum length: 10.
     */
    addressId: DeserializedType<T, 'Edm.String'>;
    /**
     * Person Number.
     * Maximum length: 10.
     */
    person: DeserializedType<T, 'Edm.String'>;
    /**
     * Sequence Number.
     * Maximum length: 3.
     */
    ordinalNumber: DeserializedType<T, 'Edm.String'>;
    /**
     * Standard Sender Address in this Communication Type.
     * @nullable
     */
    isDefaultFaxNumber?: DeserializedType<T, 'Edm.Boolean'> | null;
    /**
     * Country/Region for Telephone/Fax Number.
     * Maximum length: 3.
     * @nullable
     */
    faxCountry?: DeserializedType<T, 'Edm.String'> | null;
    /**
     * Fax Number: Dialing Code+Number.
     * Maximum length: 30.
     * @nullable
     */
    faxNumber?: DeserializedType<T, 'Edm.String'> | null;
    /**
     * Fax no.: Extension.
     * Maximum length: 10.
     * @nullable
     */
    faxNumberExtension?: DeserializedType<T, 'Edm.String'> | null;
    /**
     * Complete Number: Dialing Code+Number+Extension.
     * Maximum length: 30.
     * @nullable
     */
    internationalFaxNumber?: DeserializedType<T, 'Edm.String'> | null;
    /**
     * Communication link notes.
     * Maximum length: 50.
     * @nullable
     */
    addressCommunicationRemarkText?: DeserializedType<T, 'Edm.String'> | null;
    constructor(_entityApi: AddressFaxNumberApi<T>);
}
export interface AddressFaxNumberType<T extends DeSerializers = DefaultDeSerializers> {
    addressId: DeserializedType<T, 'Edm.String'>;
    person: DeserializedType<T, 'Edm.String'>;
    ordinalNumber: DeserializedType<T, 'Edm.String'>;
    isDefaultFaxNumber?: DeserializedType<T, 'Edm.Boolean'> | null;
    faxCountry?: DeserializedType<T, 'Edm.String'> | null;
    faxNumber?: DeserializedType<T, 'Edm.String'> | null;
    faxNumberExtension?: DeserializedType<T, 'Edm.String'> | null;
    internationalFaxNumber?: DeserializedType<T, 'Edm.String'> | null;
    addressCommunicationRemarkText?: DeserializedType<T, 'Edm.String'> | null;
}
//# sourceMappingURL=AddressFaxNumber.d.ts.map