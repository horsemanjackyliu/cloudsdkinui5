define(["require", "exports", "./SupplierPurchasingOrg", "./SupplierPurchasingOrgRequestBuilder", "@sap-cloud-sdk/odata-v2"], function (require, exports, SupplierPurchasingOrg_1, SupplierPurchasingOrgRequestBuilder_1, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SupplierPurchasingOrgApi = void 0;
    class SupplierPurchasingOrgApi {
        constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
            this.entityConstructor = SupplierPurchasingOrg_1.SupplierPurchasingOrg;
            this.deSerializers = deSerializers;
        }
        _addNavigationProperties(linkedApis) {
            this.navigationPropertyFields = {
                TO_PARTNER_FUNCTION: new odata_v2_1.Link('to_PartnerFunction', this, linkedApis[0]),
                TO_PURCHASING_ORG_TEXT: new odata_v2_1.Link('to_PurchasingOrgText', this, linkedApis[1])
            };
            return this;
        }
        requestBuilder() {
            return new SupplierPurchasingOrgRequestBuilder_1.SupplierPurchasingOrgRequestBuilder(this);
        }
        entityBuilder() {
            return (0, odata_v2_1.entityBuilder)(this);
        }
        customField(fieldName, isNullable = false) {
            return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
        }
        get fieldBuilder() {
            if (!this._fieldBuilder) {
                this._fieldBuilder = new odata_v2_1.FieldBuilder(SupplierPurchasingOrg_1.SupplierPurchasingOrg, this.deSerializers);
            }
            return this._fieldBuilder;
        }
        get schema() {
            if (!this._schema) {
                const fieldBuilder = this.fieldBuilder;
                this._schema = {
                    /**
                     * Static representation of the {@link supplier} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    SUPPLIER: fieldBuilder.buildEdmTypeField('Supplier', 'Edm.String', false),
                    /**
                     * Static representation of the {@link purchasingOrganization} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    PURCHASING_ORGANIZATION: fieldBuilder.buildEdmTypeField('PurchasingOrganization', 'Edm.String', false),
                    /**
                     * Static representation of the {@link calculationSchemaGroupCode} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    CALCULATION_SCHEMA_GROUP_CODE: fieldBuilder.buildEdmTypeField('CalculationSchemaGroupCode', 'Edm.String', true),
                    /**
                     * Static representation of the {@link deletionIndicator} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    DELETION_INDICATOR: fieldBuilder.buildEdmTypeField('DeletionIndicator', 'Edm.Boolean', true),
                    /**
                     * Static representation of the {@link incotermsClassification} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    INCOTERMS_CLASSIFICATION: fieldBuilder.buildEdmTypeField('IncotermsClassification', 'Edm.String', true),
                    /**
                     * Static representation of the {@link incotermsTransferLocation} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    INCOTERMS_TRANSFER_LOCATION: fieldBuilder.buildEdmTypeField('IncotermsTransferLocation', 'Edm.String', true),
                    /**
                     * Static representation of the {@link incotermsVersion} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    INCOTERMS_VERSION: fieldBuilder.buildEdmTypeField('IncotermsVersion', 'Edm.String', true),
                    /**
                     * Static representation of the {@link incotermsLocation1} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    INCOTERMS_LOCATION_1: fieldBuilder.buildEdmTypeField('IncotermsLocation1', 'Edm.String', true),
                    /**
                     * Static representation of the {@link incotermsLocation2} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    INCOTERMS_LOCATION_2: fieldBuilder.buildEdmTypeField('IncotermsLocation2', 'Edm.String', true),
                    /**
                     * Static representation of the {@link invoiceIsGoodsReceiptBased} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    INVOICE_IS_GOODS_RECEIPT_BASED: fieldBuilder.buildEdmTypeField('InvoiceIsGoodsReceiptBased', 'Edm.Boolean', true),
                    /**
                     * Static representation of the {@link materialPlannedDeliveryDurn} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    MATERIAL_PLANNED_DELIVERY_DURN: fieldBuilder.buildEdmTypeField('MaterialPlannedDeliveryDurn', 'Edm.Decimal', true),
                    /**
                     * Static representation of the {@link minimumOrderAmount} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    MINIMUM_ORDER_AMOUNT: fieldBuilder.buildEdmTypeField('MinimumOrderAmount', 'Edm.Decimal', true),
                    /**
                     * Static representation of the {@link paymentTerms} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    PAYMENT_TERMS: fieldBuilder.buildEdmTypeField('PaymentTerms', 'Edm.String', true),
                    /**
                     * Static representation of the {@link pricingDateControl} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    PRICING_DATE_CONTROL: fieldBuilder.buildEdmTypeField('PricingDateControl', 'Edm.String', true),
                    /**
                     * Static representation of the {@link purOrdAutoGenerationIsAllowed} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    PUR_ORD_AUTO_GENERATION_IS_ALLOWED: fieldBuilder.buildEdmTypeField('PurOrdAutoGenerationIsAllowed', 'Edm.Boolean', true),
                    /**
                     * Static representation of the {@link purchaseOrderCurrency} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    PURCHASE_ORDER_CURRENCY: fieldBuilder.buildEdmTypeField('PurchaseOrderCurrency', 'Edm.String', true),
                    /**
                     * Static representation of the {@link purchasingGroup} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    PURCHASING_GROUP: fieldBuilder.buildEdmTypeField('PurchasingGroup', 'Edm.String', true),
                    /**
                     * Static representation of the {@link purchasingIsBlockedForSupplier} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    PURCHASING_IS_BLOCKED_FOR_SUPPLIER: fieldBuilder.buildEdmTypeField('PurchasingIsBlockedForSupplier', 'Edm.Boolean', true),
                    /**
                     * Static representation of the {@link shippingCondition} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    SHIPPING_CONDITION: fieldBuilder.buildEdmTypeField('ShippingCondition', 'Edm.String', true),
                    /**
                     * Static representation of the {@link supplierAbcClassificationCode} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    SUPPLIER_ABC_CLASSIFICATION_CODE: fieldBuilder.buildEdmTypeField('SupplierABCClassificationCode', 'Edm.String', true),
                    /**
                     * Static representation of the {@link supplierPhoneNumber} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    SUPPLIER_PHONE_NUMBER: fieldBuilder.buildEdmTypeField('SupplierPhoneNumber', 'Edm.String', true),
                    /**
                     * Static representation of the {@link supplierRespSalesPersonName} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    SUPPLIER_RESP_SALES_PERSON_NAME: fieldBuilder.buildEdmTypeField('SupplierRespSalesPersonName', 'Edm.String', true),
                    /**
                     * Static representation of the {@link supplierConfirmationControlKey} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    SUPPLIER_CONFIRMATION_CONTROL_KEY: fieldBuilder.buildEdmTypeField('SupplierConfirmationControlKey', 'Edm.String', true),
                    /**
                     * Static representation of the {@link isOrderAcknRqd} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    IS_ORDER_ACKN_RQD: fieldBuilder.buildEdmTypeField('IsOrderAcknRqd', 'Edm.Boolean', true),
                    /**
                     * Static representation of the {@link authorizationGroup} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    AUTHORIZATION_GROUP: fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true),
                    /**
                     * Static representation of the {@link supplierAccountGroup} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    SUPPLIER_ACCOUNT_GROUP: fieldBuilder.buildEdmTypeField('SupplierAccountGroup', 'Edm.String', true),
                    ...this.navigationPropertyFields,
                    /**
                     *
                     * All fields selector.
                     */
                    ALL_FIELDS: new odata_v2_1.AllFields('*', SupplierPurchasingOrg_1.SupplierPurchasingOrg)
                };
            }
            return this._schema;
        }
    }
    exports.SupplierPurchasingOrgApi = SupplierPurchasingOrgApi;
});
//# sourceMappingURL=SupplierPurchasingOrgApi.js.map