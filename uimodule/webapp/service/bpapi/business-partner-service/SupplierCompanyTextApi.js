define(["require", "exports", "./SupplierCompanyText", "./SupplierCompanyTextRequestBuilder", "@sap-cloud-sdk/odata-v2"], function (require, exports, SupplierCompanyText_1, SupplierCompanyTextRequestBuilder_1, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SupplierCompanyTextApi = void 0;
    class SupplierCompanyTextApi {
        constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
            this.entityConstructor = SupplierCompanyText_1.SupplierCompanyText;
            this.deSerializers = deSerializers;
        }
        _addNavigationProperties(linkedApis) {
            this.navigationPropertyFields = {};
            return this;
        }
        requestBuilder() {
            return new SupplierCompanyTextRequestBuilder_1.SupplierCompanyTextRequestBuilder(this);
        }
        entityBuilder() {
            return (0, odata_v2_1.entityBuilder)(this);
        }
        customField(fieldName, isNullable = false) {
            return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
        }
        get fieldBuilder() {
            if (!this._fieldBuilder) {
                this._fieldBuilder = new odata_v2_1.FieldBuilder(SupplierCompanyText_1.SupplierCompanyText, this.deSerializers);
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
                     * Static representation of the {@link companyCode} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    COMPANY_CODE: fieldBuilder.buildEdmTypeField('CompanyCode', 'Edm.String', false),
                    /**
                     * Static representation of the {@link language} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    LANGUAGE: fieldBuilder.buildEdmTypeField('Language', 'Edm.String', false),
                    /**
                     * Static representation of the {@link longTextId} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    LONG_TEXT_ID: fieldBuilder.buildEdmTypeField('LongTextID', 'Edm.String', false),
                    /**
                     * Static representation of the {@link longText} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    LONG_TEXT: fieldBuilder.buildEdmTypeField('LongText', 'Edm.String', true),
                    ...this.navigationPropertyFields,
                    /**
                     *
                     * All fields selector.
                     */
                    ALL_FIELDS: new odata_v2_1.AllFields('*', SupplierCompanyText_1.SupplierCompanyText)
                };
            }
            return this._schema;
        }
    }
    exports.SupplierCompanyTextApi = SupplierCompanyTextApi;
});
//# sourceMappingURL=SupplierCompanyTextApi.js.map