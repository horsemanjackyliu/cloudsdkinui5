define(["require", "exports", "./SupplierDunning", "./SupplierDunningRequestBuilder", "@sap-cloud-sdk/odata-v2"], function (require, exports, SupplierDunning_1, SupplierDunningRequestBuilder_1, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SupplierDunningApi = void 0;
    class SupplierDunningApi {
        constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
            this.entityConstructor = SupplierDunning_1.SupplierDunning;
            this.deSerializers = deSerializers;
        }
        _addNavigationProperties(linkedApis) {
            this.navigationPropertyFields = {};
            return this;
        }
        requestBuilder() {
            return new SupplierDunningRequestBuilder_1.SupplierDunningRequestBuilder(this);
        }
        entityBuilder() {
            return (0, odata_v2_1.entityBuilder)(this);
        }
        customField(fieldName, isNullable = false) {
            return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
        }
        get fieldBuilder() {
            if (!this._fieldBuilder) {
                this._fieldBuilder = new odata_v2_1.FieldBuilder(SupplierDunning_1.SupplierDunning, this.deSerializers);
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
                     * Static representation of the {@link dunningArea} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    DUNNING_AREA: fieldBuilder.buildEdmTypeField('DunningArea', 'Edm.String', false),
                    /**
                     * Static representation of the {@link dunningBlock} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    DUNNING_BLOCK: fieldBuilder.buildEdmTypeField('DunningBlock', 'Edm.String', true),
                    /**
                     * Static representation of the {@link dunningLevel} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    DUNNING_LEVEL: fieldBuilder.buildEdmTypeField('DunningLevel', 'Edm.String', true),
                    /**
                     * Static representation of the {@link dunningProcedure} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    DUNNING_PROCEDURE: fieldBuilder.buildEdmTypeField('DunningProcedure', 'Edm.String', true),
                    /**
                     * Static representation of the {@link dunningRecipient} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    DUNNING_RECIPIENT: fieldBuilder.buildEdmTypeField('DunningRecipient', 'Edm.String', true),
                    /**
                     * Static representation of the {@link lastDunnedOn} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    LAST_DUNNED_ON: fieldBuilder.buildEdmTypeField('LastDunnedOn', 'Edm.DateTime', true),
                    /**
                     * Static representation of the {@link legDunningProcedureOn} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    LEG_DUNNING_PROCEDURE_ON: fieldBuilder.buildEdmTypeField('LegDunningProcedureOn', 'Edm.DateTime', true),
                    /**
                     * Static representation of the {@link dunningClerk} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    DUNNING_CLERK: fieldBuilder.buildEdmTypeField('DunningClerk', 'Edm.String', true),
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
                    ALL_FIELDS: new odata_v2_1.AllFields('*', SupplierDunning_1.SupplierDunning)
                };
            }
            return this._schema;
        }
    }
    exports.SupplierDunningApi = SupplierDunningApi;
});
//# sourceMappingURL=SupplierDunningApi.js.map