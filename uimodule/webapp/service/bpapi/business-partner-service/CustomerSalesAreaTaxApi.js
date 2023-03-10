define(["require", "exports", "./CustomerSalesAreaTax", "./CustomerSalesAreaTaxRequestBuilder", "@sap-cloud-sdk/odata-v2"], function (require, exports, CustomerSalesAreaTax_1, CustomerSalesAreaTaxRequestBuilder_1, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustomerSalesAreaTaxApi = void 0;
    class CustomerSalesAreaTaxApi {
        constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
            this.entityConstructor = CustomerSalesAreaTax_1.CustomerSalesAreaTax;
            this.deSerializers = deSerializers;
        }
        _addNavigationProperties(linkedApis) {
            this.navigationPropertyFields = {
                TO_SLS_AREA_ADDR_DEPDNT_TAX: new odata_v2_1.Link('to_SlsAreaAddrDepdntTax', this, linkedApis[0])
            };
            return this;
        }
        requestBuilder() {
            return new CustomerSalesAreaTaxRequestBuilder_1.CustomerSalesAreaTaxRequestBuilder(this);
        }
        entityBuilder() {
            return (0, odata_v2_1.entityBuilder)(this);
        }
        customField(fieldName, isNullable = false) {
            return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
        }
        get fieldBuilder() {
            if (!this._fieldBuilder) {
                this._fieldBuilder = new odata_v2_1.FieldBuilder(CustomerSalesAreaTax_1.CustomerSalesAreaTax, this.deSerializers);
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
                     * Static representation of the {@link departureCountry} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    DEPARTURE_COUNTRY: fieldBuilder.buildEdmTypeField('DepartureCountry', 'Edm.String', false),
                    /**
                     * Static representation of the {@link customerTaxCategory} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    CUSTOMER_TAX_CATEGORY: fieldBuilder.buildEdmTypeField('CustomerTaxCategory', 'Edm.String', false),
                    /**
                     * Static representation of the {@link customerTaxClassification} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    CUSTOMER_TAX_CLASSIFICATION: fieldBuilder.buildEdmTypeField('CustomerTaxClassification', 'Edm.String', true),
                    ...this.navigationPropertyFields,
                    /**
                     *
                     * All fields selector.
                     */
                    ALL_FIELDS: new odata_v2_1.AllFields('*', CustomerSalesAreaTax_1.CustomerSalesAreaTax)
                };
            }
            return this._schema;
        }
    }
    exports.CustomerSalesAreaTaxApi = CustomerSalesAreaTaxApi;
});
//# sourceMappingURL=CustomerSalesAreaTaxApi.js.map