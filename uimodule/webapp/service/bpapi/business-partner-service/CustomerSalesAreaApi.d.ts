import { CustomerSalesArea } from './CustomerSalesArea';
import { CustomerSalesAreaRequestBuilder } from './CustomerSalesAreaRequestBuilder';
import { CustSalesPartnerFuncApi } from './CustSalesPartnerFuncApi';
import { CustomerSalesAreaTaxApi } from './CustomerSalesAreaTaxApi';
import { CustomerSalesAreaTextApi } from './CustomerSalesAreaTextApi';
import { CustSlsAreaAddrDepdntInfoApi } from './CustSlsAreaAddrDepdntInfoApi';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, Link } from '@sap-cloud-sdk/odata-v2';
export declare class CustomerSalesAreaApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<CustomerSalesArea<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    constructor(deSerializers?: DeSerializersT);
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
        CustSalesPartnerFuncApi<DeSerializersT>,
        CustomerSalesAreaTaxApi<DeSerializersT>,
        CustomerSalesAreaTextApi<DeSerializersT>,
        CustSlsAreaAddrDepdntInfoApi<DeSerializersT>
    ]): this;
    entityConstructor: typeof CustomerSalesArea;
    requestBuilder(): CustomerSalesAreaRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<CustomerSalesArea<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<CustomerSalesArea<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof CustomerSalesArea, DeSerializersT>;
    private _schema?;
    get schema(): {
        CUSTOMER: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        SALES_ORGANIZATION: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        DISTRIBUTION_CHANNEL: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        DIVISION: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        ACCOUNT_BY_CUSTOMER: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        AUTHORIZATION_GROUP: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BILLING_IS_BLOCKED_FOR_CUSTOMER: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        COMPLETE_DELIVERY_IS_DEFINED: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        CURRENCY: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CUSTOMER_ABC_CLASSIFICATION: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CUSTOMER_ACCOUNT_ASSIGNMENT_GROUP: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CUSTOMER_GROUP: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CUSTOMER_PAYMENT_TERMS: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CUSTOMER_PRICE_GROUP: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CUSTOMER_PRICING_PROCEDURE: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        DELIVERY_IS_BLOCKED_FOR_CUSTOMER: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        DELIVERY_PRIORITY: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INCOTERMS_CLASSIFICATION: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INCOTERMS_LOCATION_2: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INCOTERMS_VERSION: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INCOTERMS_LOCATION_1: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        DELETION_INDICATOR: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        INCOTERMS_TRANSFER_LOCATION: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INVOICE_DATE: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ITEM_ORDER_PROBABILITY_IN_PERCENT: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ORDER_COMBINATION_IS_ALLOWED: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        ORDER_IS_BLOCKED_FOR_CUSTOMER: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PARTIAL_DELIVERY_IS_ALLOWED: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PRICE_LIST_TYPE: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SALES_GROUP: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SALES_OFFICE: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SHIPPING_CONDITION: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SUPPLYING_PLANT: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SALES_DISTRICT: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INVOICE_LIST_SCHEDULE: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        EXCHANGE_RATE_TYPE: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ADDITIONAL_CUSTOMER_GROUP_1: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ADDITIONAL_CUSTOMER_GROUP_2: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ADDITIONAL_CUSTOMER_GROUP_3: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ADDITIONAL_CUSTOMER_GROUP_4: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ADDITIONAL_CUSTOMER_GROUP_5: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PAYMENT_GUARANTEE_PROCEDURE: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CUSTOMER_ACCOUNT_GROUP: OrderableEdmTypeField<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        /**
         * Static representation of the one-to-many navigation property {@link toPartnerFunction} for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_PARTNER_FUNCTION: Link<CustomerSalesArea<DeSerializersT>, DeSerializersT, CustSalesPartnerFuncApi<DeSerializersT>>;
        /**
         * Static representation of the one-to-many navigation property {@link toSalesAreaTax} for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_SALES_AREA_TAX: Link<CustomerSalesArea<DeSerializersT>, DeSerializersT, CustomerSalesAreaTaxApi<DeSerializersT>>;
        /**
         * Static representation of the one-to-many navigation property {@link toSalesAreaText} for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_SALES_AREA_TEXT: Link<CustomerSalesArea<DeSerializersT>, DeSerializersT, CustomerSalesAreaTextApi<DeSerializersT>>;
        /**
         * Static representation of the one-to-many navigation property {@link toSlsAreaAddrDepdntInfo} for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_SLS_AREA_ADDR_DEPDNT_INFO: Link<CustomerSalesArea<DeSerializersT>, DeSerializersT, CustSlsAreaAddrDepdntInfoApi<DeSerializersT>>;
        ALL_FIELDS: AllFields<CustomerSalesArea<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
//# sourceMappingURL=CustomerSalesAreaApi.d.ts.map