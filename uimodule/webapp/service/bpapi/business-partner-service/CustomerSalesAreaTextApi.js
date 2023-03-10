define(["require", "exports", "./CustomerSalesAreaText", "./CustomerSalesAreaTextRequestBuilder", "@sap-cloud-sdk/odata-v2"], function (require, exports, CustomerSalesAreaText_1, CustomerSalesAreaTextRequestBuilder_1, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustomerSalesAreaTextApi = void 0;
    class CustomerSalesAreaTextApi {
        constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
            this.entityConstructor = CustomerSalesAreaText_1.CustomerSalesAreaText;
            this.deSerializers = deSerializers;
        }
        _addNavigationProperties(linkedApis) {
            this.navigationPropertyFields = {};
            return this;
        }
        requestBuilder() {
            return new CustomerSalesAreaTextRequestBuilder_1.CustomerSalesAreaTextRequestBuilder(this);
        }
        entityBuilder() {
            return (0, odata_v2_1.entityBuilder)(this);
        }
        customField(fieldName, isNullable = false) {
            return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
        }
        get fieldBuilder() {
            if (!this._fieldBuilder) {
                this._fieldBuilder = new odata_v2_1.FieldBuilder(CustomerSalesAreaText_1.CustomerSalesAreaText, this.deSerializers);
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
                     * Static representation of the {@link salesOrganization} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    SALES_ORGANIZATION: fieldBuilder.buildEdmTypeField('SalesOrganization', 'Edm.String', false),
                    /**
                     * Static representation of the {@link distributionChannel} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    DISTRIBUTION_CHANNEL: fieldBuilder.buildEdmTypeField('DistributionChannel', 'Edm.String', false),
                    /**
                     * Static representation of the {@link division} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    DIVISION: fieldBuilder.buildEdmTypeField('Division', 'Edm.String', false),
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
                    ALL_FIELDS: new odata_v2_1.AllFields('*', CustomerSalesAreaText_1.CustomerSalesAreaText)
                };
            }
            return this._schema;
        }
    }
    exports.CustomerSalesAreaTextApi = CustomerSalesAreaTextApi;
});
//# sourceMappingURL=CustomerSalesAreaTextApi.js.map