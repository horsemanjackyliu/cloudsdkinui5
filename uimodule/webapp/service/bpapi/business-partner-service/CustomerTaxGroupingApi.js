define(["require", "exports", "./CustomerTaxGrouping", "./CustomerTaxGroupingRequestBuilder", "@sap-cloud-sdk/odata-v2"], function (require, exports, CustomerTaxGrouping_1, CustomerTaxGroupingRequestBuilder_1, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustomerTaxGroupingApi = void 0;
    class CustomerTaxGroupingApi {
        constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
            this.entityConstructor = CustomerTaxGrouping_1.CustomerTaxGrouping;
            this.deSerializers = deSerializers;
        }
        _addNavigationProperties(linkedApis) {
            this.navigationPropertyFields = {};
            return this;
        }
        requestBuilder() {
            return new CustomerTaxGroupingRequestBuilder_1.CustomerTaxGroupingRequestBuilder(this);
        }
        entityBuilder() {
            return (0, odata_v2_1.entityBuilder)(this);
        }
        customField(fieldName, isNullable = false) {
            return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
        }
        get fieldBuilder() {
            if (!this._fieldBuilder) {
                this._fieldBuilder = new odata_v2_1.FieldBuilder(CustomerTaxGrouping_1.CustomerTaxGrouping, this.deSerializers);
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
                     * Static representation of the {@link customerTaxGroupingCode} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    CUSTOMER_TAX_GROUPING_CODE: fieldBuilder.buildEdmTypeField('CustomerTaxGroupingCode', 'Edm.String', false),
                    /**
                     * Static representation of the {@link custTaxGrpExemptionCertificate} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    CUST_TAX_GRP_EXEMPTION_CERTIFICATE: fieldBuilder.buildEdmTypeField('CustTaxGrpExemptionCertificate', 'Edm.String', true),
                    /**
                     * Static representation of the {@link custTaxGroupExemptionRate} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    CUST_TAX_GROUP_EXEMPTION_RATE: fieldBuilder.buildEdmTypeField('CustTaxGroupExemptionRate', 'Edm.Decimal', true),
                    /**
                     * Static representation of the {@link custTaxGroupExemptionStartDate} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    CUST_TAX_GROUP_EXEMPTION_START_DATE: fieldBuilder.buildEdmTypeField('CustTaxGroupExemptionStartDate', 'Edm.DateTime', true),
                    /**
                     * Static representation of the {@link custTaxGroupExemptionEndDate} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    CUST_TAX_GROUP_EXEMPTION_END_DATE: fieldBuilder.buildEdmTypeField('CustTaxGroupExemptionEndDate', 'Edm.DateTime', true),
                    /**
                     * Static representation of the {@link custTaxGroupSubjectedStartDate} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    CUST_TAX_GROUP_SUBJECTED_START_DATE: fieldBuilder.buildEdmTypeField('CustTaxGroupSubjectedStartDate', 'Edm.DateTime', true),
                    /**
                     * Static representation of the {@link custTaxGroupSubjectedEndDate} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    CUST_TAX_GROUP_SUBJECTED_END_DATE: fieldBuilder.buildEdmTypeField('CustTaxGroupSubjectedEndDate', 'Edm.DateTime', true),
                    ...this.navigationPropertyFields,
                    /**
                     *
                     * All fields selector.
                     */
                    ALL_FIELDS: new odata_v2_1.AllFields('*', CustomerTaxGrouping_1.CustomerTaxGrouping)
                };
            }
            return this._schema;
        }
    }
    exports.CustomerTaxGroupingApi = CustomerTaxGroupingApi;
});
//# sourceMappingURL=CustomerTaxGroupingApi.js.map