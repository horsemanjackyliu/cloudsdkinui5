define(["require", "exports", "./CustomerText", "./CustomerTextRequestBuilder", "@sap-cloud-sdk/odata-v2"], function (require, exports, CustomerText_1, CustomerTextRequestBuilder_1, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustomerTextApi = void 0;
    class CustomerTextApi {
        constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
            this.entityConstructor = CustomerText_1.CustomerText;
            this.deSerializers = deSerializers;
        }
        _addNavigationProperties(linkedApis) {
            this.navigationPropertyFields = {};
            return this;
        }
        requestBuilder() {
            return new CustomerTextRequestBuilder_1.CustomerTextRequestBuilder(this);
        }
        entityBuilder() {
            return (0, odata_v2_1.entityBuilder)(this);
        }
        customField(fieldName, isNullable = false) {
            return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
        }
        get fieldBuilder() {
            if (!this._fieldBuilder) {
                this._fieldBuilder = new odata_v2_1.FieldBuilder(CustomerText_1.CustomerText, this.deSerializers);
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
                    ALL_FIELDS: new odata_v2_1.AllFields('*', CustomerText_1.CustomerText)
                };
            }
            return this._schema;
        }
    }
    exports.CustomerTextApi = CustomerTextApi;
});
//# sourceMappingURL=CustomerTextApi.js.map