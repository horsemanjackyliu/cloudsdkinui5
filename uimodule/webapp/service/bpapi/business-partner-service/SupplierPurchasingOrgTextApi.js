define(["require", "exports", "./SupplierPurchasingOrgText", "./SupplierPurchasingOrgTextRequestBuilder", "@sap-cloud-sdk/odata-v2"], function (require, exports, SupplierPurchasingOrgText_1, SupplierPurchasingOrgTextRequestBuilder_1, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SupplierPurchasingOrgTextApi = void 0;
    class SupplierPurchasingOrgTextApi {
        constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
            this.entityConstructor = SupplierPurchasingOrgText_1.SupplierPurchasingOrgText;
            this.deSerializers = deSerializers;
        }
        _addNavigationProperties(linkedApis) {
            this.navigationPropertyFields = {};
            return this;
        }
        requestBuilder() {
            return new SupplierPurchasingOrgTextRequestBuilder_1.SupplierPurchasingOrgTextRequestBuilder(this);
        }
        entityBuilder() {
            return (0, odata_v2_1.entityBuilder)(this);
        }
        customField(fieldName, isNullable = false) {
            return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
        }
        get fieldBuilder() {
            if (!this._fieldBuilder) {
                this._fieldBuilder = new odata_v2_1.FieldBuilder(SupplierPurchasingOrgText_1.SupplierPurchasingOrgText, this.deSerializers);
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
                    ALL_FIELDS: new odata_v2_1.AllFields('*', SupplierPurchasingOrgText_1.SupplierPurchasingOrgText)
                };
            }
            return this._schema;
        }
    }
    exports.SupplierPurchasingOrgTextApi = SupplierPurchasingOrgTextApi;
});
//# sourceMappingURL=SupplierPurchasingOrgTextApi.js.map