import { BusinessPartner } from './BusinessPartner';
import { BusinessPartnerRequestBuilder } from './BusinessPartnerRequestBuilder';
import { BuPaIdentificationApi } from './BuPaIdentificationApi';
import { BuPaIndustryApi } from './BuPaIndustryApi';
import { BusinessPartnerAddressApi } from './BusinessPartnerAddressApi';
import { BusinessPartnerBankApi } from './BusinessPartnerBankApi';
import { BusinessPartnerContactApi } from './BusinessPartnerContactApi';
import { BusinessPartnerRoleApi } from './BusinessPartnerRoleApi';
import { BusinessPartnerTaxNumberApi } from './BusinessPartnerTaxNumberApi';
import { BusPartAddrDepdntTaxNmbrApi } from './BusPartAddrDepdntTaxNmbrApi';
import { CustomerApi } from './CustomerApi';
import { SupplierApi } from './SupplierApi';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, Link, OneToOneLink } from '@sap-cloud-sdk/odata-v2';
export declare class BusinessPartnerApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<BusinessPartner<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    constructor(deSerializers?: DeSerializersT);
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
        BuPaIdentificationApi<DeSerializersT>,
        BuPaIndustryApi<DeSerializersT>,
        BusinessPartnerAddressApi<DeSerializersT>,
        BusinessPartnerBankApi<DeSerializersT>,
        BusinessPartnerContactApi<DeSerializersT>,
        BusinessPartnerRoleApi<DeSerializersT>,
        BusinessPartnerTaxNumberApi<DeSerializersT>,
        BusPartAddrDepdntTaxNmbrApi<DeSerializersT>,
        CustomerApi<DeSerializersT>,
        SupplierApi<DeSerializersT>
    ]): this;
    entityConstructor: typeof BusinessPartner;
    requestBuilder(): BusinessPartnerRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<BusinessPartner<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<BusinessPartner<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof BusinessPartner, DeSerializersT>;
    private _schema?;
    get schema(): {
        BUSINESS_PARTNER: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        CUSTOMER: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SUPPLIER: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ACADEMIC_TITLE: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        AUTHORIZATION_GROUP: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BUSINESS_PARTNER_CATEGORY: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BUSINESS_PARTNER_FULL_NAME: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BUSINESS_PARTNER_GROUPING: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BUSINESS_PARTNER_NAME: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BUSINESS_PARTNER_UUID: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Guid", true, true>;
        CORRESPONDENCE_LANGUAGE: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CREATED_BY_USER: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CREATION_DATE: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        CREATION_TIME: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Time", true, true>;
        FIRST_NAME: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        FORM_OF_ADDRESS: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INDUSTRY: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INTERNATIONAL_LOCATION_NUMBER_1: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INTERNATIONAL_LOCATION_NUMBER_2: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        IS_FEMALE: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        IS_MALE: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        IS_NATURAL_PERSON: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        IS_SEX_UNKNOWN: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        GENDER_CODE_NAME: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        LANGUAGE: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        LAST_CHANGE_DATE: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        LAST_CHANGE_TIME: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Time", true, true>;
        LAST_CHANGED_BY_USER: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        LAST_NAME: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        LEGAL_FORM: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ORGANIZATION_BP_NAME_1: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ORGANIZATION_BP_NAME_2: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ORGANIZATION_BP_NAME_3: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ORGANIZATION_BP_NAME_4: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ORGANIZATION_FOUNDATION_DATE: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        ORGANIZATION_LIQUIDATION_DATE: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        SEARCH_TERM_1: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SEARCH_TERM_2: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ADDITIONAL_LAST_NAME: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BIRTH_DATE: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        BUSINESS_PARTNER_BIRTH_DATE_STATUS: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BUSINESS_PARTNER_BIRTHPLACE_NAME: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BUSINESS_PARTNER_DEATH_DATE: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        BUSINESS_PARTNER_IS_BLOCKED: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        BUSINESS_PARTNER_TYPE: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        E_TAG: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        GROUP_BUSINESS_PARTNER_NAME_1: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        GROUP_BUSINESS_PARTNER_NAME_2: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INDEPENDENT_ADDRESS_ID: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INTERNATIONAL_LOCATION_NUMBER_3: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        MIDDLE_NAME: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        NAME_COUNTRY: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        NAME_FORMAT: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PERSON_FULL_NAME: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PERSON_NUMBER: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        IS_MARKED_FOR_ARCHIVING: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        BUSINESS_PARTNER_ID_BY_EXT_SYSTEM: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BUSINESS_PARTNER_PRINT_FORMAT: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BUSINESS_PARTNER_OCCUPATION: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BUS_PART_MARITAL_STATUS: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BUS_PART_NATIONALITY: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BUSINESS_PARTNER_BIRTH_NAME: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BUSINESS_PARTNER_SUPPLEMENT_NAME: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        NATURAL_PERSON_EMPLOYER_NAME: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        LAST_NAME_PREFIX: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        LAST_NAME_SECOND_PREFIX: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INITIALS: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TRADING_PARTNER: OrderableEdmTypeField<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        /**
         * Static representation of the one-to-many navigation property {@link toBuPaIdentification} for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_BU_PA_IDENTIFICATION: Link<BusinessPartner<DeSerializersT>, DeSerializersT, BuPaIdentificationApi<DeSerializersT>>;
        /**
         * Static representation of the one-to-many navigation property {@link toBuPaIndustry} for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_BU_PA_INDUSTRY: Link<BusinessPartner<DeSerializersT>, DeSerializersT, BuPaIndustryApi<DeSerializersT>>;
        /**
         * Static representation of the one-to-many navigation property {@link toBusinessPartnerAddress} for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_BUSINESS_PARTNER_ADDRESS: Link<BusinessPartner<DeSerializersT>, DeSerializersT, BusinessPartnerAddressApi<DeSerializersT>>;
        /**
         * Static representation of the one-to-many navigation property {@link toBusinessPartnerBank} for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_BUSINESS_PARTNER_BANK: Link<BusinessPartner<DeSerializersT>, DeSerializersT, BusinessPartnerBankApi<DeSerializersT>>;
        /**
         * Static representation of the one-to-many navigation property {@link toBusinessPartnerContact} for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_BUSINESS_PARTNER_CONTACT: Link<BusinessPartner<DeSerializersT>, DeSerializersT, BusinessPartnerContactApi<DeSerializersT>>;
        /**
         * Static representation of the one-to-many navigation property {@link toBusinessPartnerRole} for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_BUSINESS_PARTNER_ROLE: Link<BusinessPartner<DeSerializersT>, DeSerializersT, BusinessPartnerRoleApi<DeSerializersT>>;
        /**
         * Static representation of the one-to-many navigation property {@link toBusinessPartnerTax} for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_BUSINESS_PARTNER_TAX: Link<BusinessPartner<DeSerializersT>, DeSerializersT, BusinessPartnerTaxNumberApi<DeSerializersT>>;
        /**
         * Static representation of the one-to-many navigation property {@link toBusPartAddrDepdntTaxNmbr} for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_BUS_PART_ADDR_DEPDNT_TAX_NMBR: Link<BusinessPartner<DeSerializersT>, DeSerializersT, BusPartAddrDepdntTaxNmbrApi<DeSerializersT>>;
        /**
         * Static representation of the one-to-one navigation property {@link toCustomer} for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_CUSTOMER: OneToOneLink<BusinessPartner<DeSerializersT>, DeSerializersT, CustomerApi<DeSerializersT>>;
        /**
         * Static representation of the one-to-one navigation property {@link toSupplier} for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_SUPPLIER: OneToOneLink<BusinessPartner<DeSerializersT>, DeSerializersT, SupplierApi<DeSerializersT>>;
        ALL_FIELDS: AllFields<BusinessPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
//# sourceMappingURL=BusinessPartnerApi.d.ts.map