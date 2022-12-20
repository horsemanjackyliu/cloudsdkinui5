define(["require", "exports", "./BusinessPartnerTaxNumber", "./BusinessPartnerTaxNumberRequestBuilder", "@sap-cloud-sdk/odata-v2"], function (require, exports, BusinessPartnerTaxNumber_1, BusinessPartnerTaxNumberRequestBuilder_1, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BusinessPartnerTaxNumberApi = void 0;
    class BusinessPartnerTaxNumberApi {
        constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
            this.entityConstructor = BusinessPartnerTaxNumber_1.BusinessPartnerTaxNumber;
            this.deSerializers = deSerializers;
        }
        _addNavigationProperties(linkedApis) {
            this.navigationPropertyFields = {};
            return this;
        }
        requestBuilder() {
            return new BusinessPartnerTaxNumberRequestBuilder_1.BusinessPartnerTaxNumberRequestBuilder(this);
        }
        entityBuilder() {
            return (0, odata_v2_1.entityBuilder)(this);
        }
        customField(fieldName, isNullable = false) {
            return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
        }
        get fieldBuilder() {
            if (!this._fieldBuilder) {
                this._fieldBuilder = new odata_v2_1.FieldBuilder(BusinessPartnerTaxNumber_1.BusinessPartnerTaxNumber, this.deSerializers);
            }
            return this._fieldBuilder;
        }
        get schema() {
            if (!this._schema) {
                const fieldBuilder = this.fieldBuilder;
                this._schema = {
                    /**
                     * Static representation of the {@link businessPartner} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    BUSINESS_PARTNER: fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false),
                    /**
                     * Static representation of the {@link bpTaxType} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    BP_TAX_TYPE: fieldBuilder.buildEdmTypeField('BPTaxType', 'Edm.String', false),
                    /**
                     * Static representation of the {@link bpTaxNumber} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    BP_TAX_NUMBER: fieldBuilder.buildEdmTypeField('BPTaxNumber', 'Edm.String', true),
                    /**
                     * Static representation of the {@link bpTaxLongNumber} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    BP_TAX_LONG_NUMBER: fieldBuilder.buildEdmTypeField('BPTaxLongNumber', 'Edm.String', true),
                    /**
                     * Static representation of the {@link authorizationGroup} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    AUTHORIZATION_GROUP: fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true),
                    ...this.navigationPropertyFields,
                    /**
                     *
                     * All fields selector.
                     */
                    ALL_FIELDS: new odata_v2_1.AllFields('*', BusinessPartnerTaxNumber_1.BusinessPartnerTaxNumber)
                };
            }
            return this._schema;
        }
    }
    exports.BusinessPartnerTaxNumberApi = BusinessPartnerTaxNumberApi;
});
//# sourceMappingURL=BusinessPartnerTaxNumberApi.js.map