define(["require", "exports", "./Supplier", "./SupplierRequestBuilder", "@sap-cloud-sdk/odata-v2"], function (require, exports, Supplier_1, SupplierRequestBuilder_1, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SupplierApi = void 0;
    class SupplierApi {
        constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
            this.entityConstructor = Supplier_1.Supplier;
            this.deSerializers = deSerializers;
        }
        _addNavigationProperties(linkedApis) {
            this.navigationPropertyFields = {
                TO_SUPPLIER_COMPANY: new odata_v2_1.Link('to_SupplierCompany', this, linkedApis[0]),
                TO_SUPPLIER_PURCHASING_ORG: new odata_v2_1.Link('to_SupplierPurchasingOrg', this, linkedApis[1]),
                TO_SUPPLIER_TEXT: new odata_v2_1.Link('to_SupplierText', this, linkedApis[2])
            };
            return this;
        }
        requestBuilder() {
            return new SupplierRequestBuilder_1.SupplierRequestBuilder(this);
        }
        entityBuilder() {
            return (0, odata_v2_1.entityBuilder)(this);
        }
        customField(fieldName, isNullable = false) {
            return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
        }
        get fieldBuilder() {
            if (!this._fieldBuilder) {
                this._fieldBuilder = new odata_v2_1.FieldBuilder(Supplier_1.Supplier, this.deSerializers);
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
                     * Static representation of the {@link alternativePayeeAccountNumber} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    ALTERNATIVE_PAYEE_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField('AlternativePayeeAccountNumber', 'Edm.String', true),
                    /**
                     * Static representation of the {@link authorizationGroup} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    AUTHORIZATION_GROUP: fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true),
                    /**
                     * Static representation of the {@link createdByUser} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    CREATED_BY_USER: fieldBuilder.buildEdmTypeField('CreatedByUser', 'Edm.String', true),
                    /**
                     * Static representation of the {@link creationDate} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    CREATION_DATE: fieldBuilder.buildEdmTypeField('CreationDate', 'Edm.DateTime', true),
                    /**
                     * Static representation of the {@link customer} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    CUSTOMER: fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', true),
                    /**
                     * Static representation of the {@link paymentIsBlockedForSupplier} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    PAYMENT_IS_BLOCKED_FOR_SUPPLIER: fieldBuilder.buildEdmTypeField('PaymentIsBlockedForSupplier', 'Edm.Boolean', true),
                    /**
                     * Static representation of the {@link postingIsBlocked} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    POSTING_IS_BLOCKED: fieldBuilder.buildEdmTypeField('PostingIsBlocked', 'Edm.Boolean', true),
                    /**
                     * Static representation of the {@link purchasingIsBlocked} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    PURCHASING_IS_BLOCKED: fieldBuilder.buildEdmTypeField('PurchasingIsBlocked', 'Edm.Boolean', true),
                    /**
                     * Static representation of the {@link supplierAccountGroup} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    SUPPLIER_ACCOUNT_GROUP: fieldBuilder.buildEdmTypeField('SupplierAccountGroup', 'Edm.String', true),
                    /**
                     * Static representation of the {@link supplierFullName} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    SUPPLIER_FULL_NAME: fieldBuilder.buildEdmTypeField('SupplierFullName', 'Edm.String', true),
                    /**
                     * Static representation of the {@link supplierName} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    SUPPLIER_NAME: fieldBuilder.buildEdmTypeField('SupplierName', 'Edm.String', true),
                    /**
                     * Static representation of the {@link vatRegistration} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    VAT_REGISTRATION: fieldBuilder.buildEdmTypeField('VATRegistration', 'Edm.String', true),
                    /**
                     * Static representation of the {@link birthDate} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    BIRTH_DATE: fieldBuilder.buildEdmTypeField('BirthDate', 'Edm.DateTime', true),
                    /**
                     * Static representation of the {@link concatenatedInternationalLocNo} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    CONCATENATED_INTERNATIONAL_LOC_NO: fieldBuilder.buildEdmTypeField('ConcatenatedInternationalLocNo', 'Edm.String', true),
                    /**
                     * Static representation of the {@link deletionIndicator} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    DELETION_INDICATOR: fieldBuilder.buildEdmTypeField('DeletionIndicator', 'Edm.Boolean', true),
                    /**
                     * Static representation of the {@link fiscalAddress} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    FISCAL_ADDRESS: fieldBuilder.buildEdmTypeField('FiscalAddress', 'Edm.String', true),
                    /**
                     * Static representation of the {@link industry} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    INDUSTRY: fieldBuilder.buildEdmTypeField('Industry', 'Edm.String', true),
                    /**
                     * Static representation of the {@link internationalLocationNumber1} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    INTERNATIONAL_LOCATION_NUMBER_1: fieldBuilder.buildEdmTypeField('InternationalLocationNumber1', 'Edm.String', true),
                    /**
                     * Static representation of the {@link internationalLocationNumber2} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    INTERNATIONAL_LOCATION_NUMBER_2: fieldBuilder.buildEdmTypeField('InternationalLocationNumber2', 'Edm.String', true),
                    /**
                     * Static representation of the {@link internationalLocationNumber3} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    INTERNATIONAL_LOCATION_NUMBER_3: fieldBuilder.buildEdmTypeField('InternationalLocationNumber3', 'Edm.String', true),
                    /**
                     * Static representation of the {@link isNaturalPerson} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    IS_NATURAL_PERSON: fieldBuilder.buildEdmTypeField('IsNaturalPerson', 'Edm.String', true),
                    /**
                     * Static representation of the {@link responsibleType} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    RESPONSIBLE_TYPE: fieldBuilder.buildEdmTypeField('ResponsibleType', 'Edm.String', true),
                    /**
                     * Static representation of the {@link suplrQltyInProcmtCertfnValidTo} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    SUPLR_QLTY_IN_PROCMT_CERTFN_VALID_TO: fieldBuilder.buildEdmTypeField('SuplrQltyInProcmtCertfnValidTo', 'Edm.DateTime', true),
                    /**
                     * Static representation of the {@link suplrQualityManagementSystem} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    SUPLR_QUALITY_MANAGEMENT_SYSTEM: fieldBuilder.buildEdmTypeField('SuplrQualityManagementSystem', 'Edm.String', true),
                    /**
                     * Static representation of the {@link supplierCorporateGroup} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    SUPPLIER_CORPORATE_GROUP: fieldBuilder.buildEdmTypeField('SupplierCorporateGroup', 'Edm.String', true),
                    /**
                     * Static representation of the {@link supplierProcurementBlock} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    SUPPLIER_PROCUREMENT_BLOCK: fieldBuilder.buildEdmTypeField('SupplierProcurementBlock', 'Edm.String', true),
                    /**
                     * Static representation of the {@link taxNumber1} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    TAX_NUMBER_1: fieldBuilder.buildEdmTypeField('TaxNumber1', 'Edm.String', true),
                    /**
                     * Static representation of the {@link taxNumber2} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    TAX_NUMBER_2: fieldBuilder.buildEdmTypeField('TaxNumber2', 'Edm.String', true),
                    /**
                     * Static representation of the {@link taxNumber3} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    TAX_NUMBER_3: fieldBuilder.buildEdmTypeField('TaxNumber3', 'Edm.String', true),
                    /**
                     * Static representation of the {@link taxNumber4} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    TAX_NUMBER_4: fieldBuilder.buildEdmTypeField('TaxNumber4', 'Edm.String', true),
                    /**
                     * Static representation of the {@link taxNumber5} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    TAX_NUMBER_5: fieldBuilder.buildEdmTypeField('TaxNumber5', 'Edm.String', true),
                    /**
                     * Static representation of the {@link taxNumberResponsible} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    TAX_NUMBER_RESPONSIBLE: fieldBuilder.buildEdmTypeField('TaxNumberResponsible', 'Edm.String', true),
                    /**
                     * Static representation of the {@link taxNumberType} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    TAX_NUMBER_TYPE: fieldBuilder.buildEdmTypeField('TaxNumberType', 'Edm.String', true),
                    /**
                     * Static representation of the {@link suplrProofOfDelivRlvtCode} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    SUPLR_PROOF_OF_DELIV_RLVT_CODE: fieldBuilder.buildEdmTypeField('SuplrProofOfDelivRlvtCode', 'Edm.String', true),
                    /**
                     * Static representation of the {@link brTaxIsSplit} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    BR_TAX_IS_SPLIT: fieldBuilder.buildEdmTypeField('BR_TaxIsSplit', 'Edm.Boolean', true),
                    /**
                     * Static representation of the {@link dataExchangeInstructionKey} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    DATA_EXCHANGE_INSTRUCTION_KEY: fieldBuilder.buildEdmTypeField('DataExchangeInstructionKey', 'Edm.String', true),
                    ...this.navigationPropertyFields,
                    /**
                     *
                     * All fields selector.
                     */
                    ALL_FIELDS: new odata_v2_1.AllFields('*', Supplier_1.Supplier)
                };
            }
            return this._schema;
        }
    }
    exports.SupplierApi = SupplierApi;
});
//# sourceMappingURL=SupplierApi.js.map