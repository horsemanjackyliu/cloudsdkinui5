import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { BpContactToFuncAndDeptApi } from './BpContactToFuncAndDeptApi';
/**
 * This class represents the entity "A_BPContactToFuncAndDept" of service "API_BUSINESS_PARTNER".
 */
export declare class BpContactToFuncAndDept<T extends DeSerializers = DefaultDeSerializers> extends Entity implements BpContactToFuncAndDeptType<T> {
    readonly _entityApi: BpContactToFuncAndDeptApi<T>;
    /**
     * Technical entity name for BpContactToFuncAndDept.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * All key fields of the BpContactToFuncAndDept entity
     */
    static _keys: string[];
    /**
     * BP Relationship Number.
     * Maximum length: 12.
     */
    relationshipNumber: DeserializedType<T, 'Edm.String'>;
    /**
     * Business Partner Number.
     * Maximum length: 10.
     */
    businessPartnerCompany: DeserializedType<T, 'Edm.String'>;
    /**
     * Business Partner Number.
     * Maximum length: 10.
     */
    businessPartnerPerson: DeserializedType<T, 'Edm.String'>;
    /**
     * Validity Date (Valid To).
     */
    validityEndDate: DeserializedType<T, 'Edm.DateTime'>;
    /**
     * Function of partner.
     * Maximum length: 4.
     * @nullable
     */
    contactPersonFunction?: DeserializedType<T, 'Edm.String'> | null;
    /**
     * Department.
     * Maximum length: 4.
     * @nullable
     */
    contactPersonDepartment?: DeserializedType<T, 'Edm.String'> | null;
    /**
     * Telephone No.: Dialing Code + Number.
     * Maximum length: 30.
     * @nullable
     */
    phoneNumber?: DeserializedType<T, 'Edm.String'> | null;
    /**
     * Telephone no.: Extension.
     * Maximum length: 10.
     * @nullable
     */
    phoneNumberExtension?: DeserializedType<T, 'Edm.String'> | null;
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
     * Email Address.
     * Maximum length: 241.
     * @nullable
     */
    emailAddress?: DeserializedType<T, 'Edm.String'> | null;
    /**
     * Business Partner Relationship Category.
     * Maximum length: 6.
     * @nullable
     */
    relationshipCategory?: DeserializedType<T, 'Edm.String'> | null;
    constructor(_entityApi: BpContactToFuncAndDeptApi<T>);
}
export interface BpContactToFuncAndDeptType<T extends DeSerializers = DefaultDeSerializers> {
    relationshipNumber: DeserializedType<T, 'Edm.String'>;
    businessPartnerCompany: DeserializedType<T, 'Edm.String'>;
    businessPartnerPerson: DeserializedType<T, 'Edm.String'>;
    validityEndDate: DeserializedType<T, 'Edm.DateTime'>;
    contactPersonFunction?: DeserializedType<T, 'Edm.String'> | null;
    contactPersonDepartment?: DeserializedType<T, 'Edm.String'> | null;
    phoneNumber?: DeserializedType<T, 'Edm.String'> | null;
    phoneNumberExtension?: DeserializedType<T, 'Edm.String'> | null;
    faxNumber?: DeserializedType<T, 'Edm.String'> | null;
    faxNumberExtension?: DeserializedType<T, 'Edm.String'> | null;
    emailAddress?: DeserializedType<T, 'Edm.String'> | null;
    relationshipCategory?: DeserializedType<T, 'Edm.String'> | null;
}
//# sourceMappingURL=BpContactToFuncAndDept.d.ts.map