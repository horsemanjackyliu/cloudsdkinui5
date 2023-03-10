import { SupplierPurchasingOrg } from './SupplierPurchasingOrg';
import { SupplierPurchasingOrgRequestBuilder } from './SupplierPurchasingOrgRequestBuilder';
import { SupplierPartnerFuncApi } from './SupplierPartnerFuncApi';
import { SupplierPurchasingOrgTextApi } from './SupplierPurchasingOrgTextApi';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, Link } from '@sap-cloud-sdk/odata-v2';
export declare class SupplierPurchasingOrgApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<SupplierPurchasingOrg<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    constructor(deSerializers?: DeSerializersT);
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
        SupplierPartnerFuncApi<DeSerializersT>,
        SupplierPurchasingOrgTextApi<DeSerializersT>
    ]): this;
    entityConstructor: typeof SupplierPurchasingOrg;
    requestBuilder(): SupplierPurchasingOrgRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<SupplierPurchasingOrg<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<SupplierPurchasingOrg<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof SupplierPurchasingOrg, DeSerializersT>;
    private _schema?;
    get schema(): {
        SUPPLIER: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        PURCHASING_ORGANIZATION: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        CALCULATION_SCHEMA_GROUP_CODE: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        DELETION_INDICATOR: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        INCOTERMS_CLASSIFICATION: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INCOTERMS_TRANSFER_LOCATION: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INCOTERMS_VERSION: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INCOTERMS_LOCATION_1: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INCOTERMS_LOCATION_2: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INVOICE_IS_GOODS_RECEIPT_BASED: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        MATERIAL_PLANNED_DELIVERY_DURN: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        MINIMUM_ORDER_AMOUNT: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        PAYMENT_TERMS: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PRICING_DATE_CONTROL: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PUR_ORD_AUTO_GENERATION_IS_ALLOWED: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        PURCHASE_ORDER_CURRENCY: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PURCHASING_GROUP: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PURCHASING_IS_BLOCKED_FOR_SUPPLIER: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        SHIPPING_CONDITION: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SUPPLIER_ABC_CLASSIFICATION_CODE: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SUPPLIER_PHONE_NUMBER: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SUPPLIER_RESP_SALES_PERSON_NAME: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SUPPLIER_CONFIRMATION_CONTROL_KEY: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        IS_ORDER_ACKN_RQD: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        AUTHORIZATION_GROUP: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SUPPLIER_ACCOUNT_GROUP: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        /**
         * Static representation of the one-to-many navigation property {@link toPartnerFunction} for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_PARTNER_FUNCTION: Link<SupplierPurchasingOrg<DeSerializersT>, DeSerializersT, SupplierPartnerFuncApi<DeSerializersT>>;
        /**
         * Static representation of the one-to-many navigation property {@link toPurchasingOrgText} for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_PURCHASING_ORG_TEXT: Link<SupplierPurchasingOrg<DeSerializersT>, DeSerializersT, SupplierPurchasingOrgTextApi<DeSerializersT>>;
        ALL_FIELDS: AllFields<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
//# sourceMappingURL=SupplierPurchasingOrgApi.d.ts.map