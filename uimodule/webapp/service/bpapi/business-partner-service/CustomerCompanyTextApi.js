define(["require", "exports", "./CustomerCompanyText", "./CustomerCompanyTextRequestBuilder", "@sap-cloud-sdk/odata-v2"], function (require, exports, CustomerCompanyText_1, CustomerCompanyTextRequestBuilder_1, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustomerCompanyTextApi = void 0;
    class CustomerCompanyTextApi {
        constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
            this.entityConstructor = CustomerCompanyText_1.CustomerCompanyText;
            this.deSerializers = deSerializers;
        }
        _addNavigationProperties(linkedApis) {
            this.navigationPropertyFields = {};
            return this;
        }
        requestBuilder() {
            return new CustomerCompanyTextRequestBuilder_1.CustomerCompanyTextRequestBuilder(this);
        }
        entityBuilder() {
            return (0, odata_v2_1.entityBuilder)(this);
        }
        customField(fieldName, isNullable = false) {
            return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
        }
        get fieldBuilder() {
            if (!this._fieldBuilder) {
                this._fieldBuilder = new odata_v2_1.FieldBuilder(CustomerCompanyText_1.CustomerCompanyText, this.deSerializers);
            }
            return this._fieldBuilder;
        }
        get schema() {
            if (!this._schema) {
                const fieldBuilder = this.fieldBuilder;
                this._schema = {
                    /**
                     * Static representation of the {@link customer} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    CUSTOMER: fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', false),
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
                    ALL_FIELDS: new odata_v2_1.AllFields('*', CustomerCompanyText_1.CustomerCompanyText)
                };
            }
            return this._schema;
        }
    }
    exports.CustomerCompanyTextApi = CustomerCompanyTextApi;
});
//# sourceMappingURL=CustomerCompanyTextApi.js.map