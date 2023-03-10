define(["require", "exports", "./SupplierPartnerFunc", "./SupplierPartnerFuncRequestBuilder", "@sap-cloud-sdk/odata-v2"], function (require, exports, SupplierPartnerFunc_1, SupplierPartnerFuncRequestBuilder_1, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SupplierPartnerFuncApi = void 0;
    class SupplierPartnerFuncApi {
        constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
            this.entityConstructor = SupplierPartnerFunc_1.SupplierPartnerFunc;
            this.deSerializers = deSerializers;
        }
        _addNavigationProperties(linkedApis) {
            this.navigationPropertyFields = {};
            return this;
        }
        requestBuilder() {
            return new SupplierPartnerFuncRequestBuilder_1.SupplierPartnerFuncRequestBuilder(this);
        }
        entityBuilder() {
            return (0, odata_v2_1.entityBuilder)(this);
        }
        customField(fieldName, isNullable = false) {
            return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
        }
        get fieldBuilder() {
            if (!this._fieldBuilder) {
                this._fieldBuilder = new odata_v2_1.FieldBuilder(SupplierPartnerFunc_1.SupplierPartnerFunc, this.deSerializers);
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
                     * Static representation of the {@link supplierSubrange} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    SUPPLIER_SUBRANGE: fieldBuilder.buildEdmTypeField('SupplierSubrange', 'Edm.String', false),
                    /**
                     * Static representation of the {@link plant} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    PLANT: fieldBuilder.buildEdmTypeField('Plant', 'Edm.String', false),
                    /**
                     * Static representation of the {@link partnerFunction} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    PARTNER_FUNCTION: fieldBuilder.buildEdmTypeField('PartnerFunction', 'Edm.String', false),
                    /**
                     * Static representation of the {@link partnerCounter} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    PARTNER_COUNTER: fieldBuilder.buildEdmTypeField('PartnerCounter', 'Edm.String', false),
                    /**
                     * Static representation of the {@link defaultPartner} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    DEFAULT_PARTNER: fieldBuilder.buildEdmTypeField('DefaultPartner', 'Edm.Boolean', true),
                    /**
                     * Static representation of the {@link creationDate} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    CREATION_DATE: fieldBuilder.buildEdmTypeField('CreationDate', 'Edm.DateTime', true),
                    /**
                     * Static representation of the {@link createdByUser} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    CREATED_BY_USER: fieldBuilder.buildEdmTypeField('CreatedByUser', 'Edm.String', true),
                    /**
                     * Static representation of the {@link referenceSupplier} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    REFERENCE_SUPPLIER: fieldBuilder.buildEdmTypeField('ReferenceSupplier', 'Edm.String', true),
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
                    ALL_FIELDS: new odata_v2_1.AllFields('*', SupplierPartnerFunc_1.SupplierPartnerFunc)
                };
            }
            return this._schema;
        }
    }
    exports.SupplierPartnerFuncApi = SupplierPartnerFuncApi;
});
//# sourceMappingURL=SupplierPartnerFuncApi.js.map