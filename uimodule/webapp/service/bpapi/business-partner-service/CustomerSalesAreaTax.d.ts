import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { CustomerSalesAreaTaxApi } from './CustomerSalesAreaTaxApi';
import { CustSlsAreaAddrDepdntTaxInfo, CustSlsAreaAddrDepdntTaxInfoType } from './CustSlsAreaAddrDepdntTaxInfo';
/**
 * This class represents the entity "A_CustomerSalesAreaTax" of service "API_BUSINESS_PARTNER".
 */
export declare class CustomerSalesAreaTax<T extends DeSerializers = DefaultDeSerializers> extends Entity implements CustomerSalesAreaTaxType<T> {
    readonly _entityApi: CustomerSalesAreaTaxApi<T>;
    /**
     * Technical entity name for CustomerSalesAreaTax.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * All key fields of the CustomerSalesAreaTax entity
     */
    static _keys: string[];
    /**
     * Customer Number.
     * Maximum length: 10.
     */
    customer: DeserializedType<T, 'Edm.String'>;
    /**
     * Sales Organization.
     * Maximum length: 4.
     */
    salesOrganization: DeserializedType<T, 'Edm.String'>;
    /**
     * Reference distrib.channel for cust.and material masters.
     * Maximum length: 2.
     */
    distributionChannel: DeserializedType<T, 'Edm.String'>;
    /**
     * Division.
     * Maximum length: 2.
     */
    division: DeserializedType<T, 'Edm.String'>;
    /**
     * Departure Country/Region (from which the goods are sent).
     * Maximum length: 3.
     */
    departureCountry: DeserializedType<T, 'Edm.String'>;
    /**
     * Tax category (sales tax, federal sales tax,...).
     * Maximum length: 4.
     */
    customerTaxCategory: DeserializedType<T, 'Edm.String'>;
    /**
     * Tax classification for customer.
     * Maximum length: 1.
     * @nullable
     */
    customerTaxClassification?: DeserializedType<T, 'Edm.String'> | null;
    /**
     * One-to-many navigation property to the {@link CustSlsAreaAddrDepdntTaxInfo} entity.
     */
    toSlsAreaAddrDepdntTax: CustSlsAreaAddrDepdntTaxInfo<T>[];
    constructor(_entityApi: CustomerSalesAreaTaxApi<T>);
}
export interface CustomerSalesAreaTaxType<T extends DeSerializers = DefaultDeSerializers> {
    customer: DeserializedType<T, 'Edm.String'>;
    salesOrganization: DeserializedType<T, 'Edm.String'>;
    distributionChannel: DeserializedType<T, 'Edm.String'>;
    division: DeserializedType<T, 'Edm.String'>;
    departureCountry: DeserializedType<T, 'Edm.String'>;
    customerTaxCategory: DeserializedType<T, 'Edm.String'>;
    customerTaxClassification?: DeserializedType<T, 'Edm.String'> | null;
    toSlsAreaAddrDepdntTax: CustSlsAreaAddrDepdntTaxInfoType<T>[];
}
//# sourceMappingURL=CustomerSalesAreaTax.d.ts.map