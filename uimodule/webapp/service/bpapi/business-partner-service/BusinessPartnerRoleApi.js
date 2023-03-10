define(["require", "exports", "./BusinessPartnerRole", "./BusinessPartnerRoleRequestBuilder", "@sap-cloud-sdk/odata-v2"], function (require, exports, BusinessPartnerRole_1, BusinessPartnerRoleRequestBuilder_1, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BusinessPartnerRoleApi = void 0;
    class BusinessPartnerRoleApi {
        constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
            this.entityConstructor = BusinessPartnerRole_1.BusinessPartnerRole;
            this.deSerializers = deSerializers;
        }
        _addNavigationProperties(linkedApis) {
            this.navigationPropertyFields = {};
            return this;
        }
        requestBuilder() {
            return new BusinessPartnerRoleRequestBuilder_1.BusinessPartnerRoleRequestBuilder(this);
        }
        entityBuilder() {
            return (0, odata_v2_1.entityBuilder)(this);
        }
        customField(fieldName, isNullable = false) {
            return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
        }
        get fieldBuilder() {
            if (!this._fieldBuilder) {
                this._fieldBuilder = new odata_v2_1.FieldBuilder(BusinessPartnerRole_1.BusinessPartnerRole, this.deSerializers);
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
                     * Static representation of the {@link businessPartnerRole} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    BUSINESS_PARTNER_ROLE: fieldBuilder.buildEdmTypeField('BusinessPartnerRole', 'Edm.String', false),
                    /**
                     * Static representation of the {@link validFrom} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    VALID_FROM: fieldBuilder.buildEdmTypeField('ValidFrom', 'Edm.DateTimeOffset', true),
                    /**
                     * Static representation of the {@link validTo} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    VALID_TO: fieldBuilder.buildEdmTypeField('ValidTo', 'Edm.DateTimeOffset', true),
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
                    ALL_FIELDS: new odata_v2_1.AllFields('*', BusinessPartnerRole_1.BusinessPartnerRole)
                };
            }
            return this._schema;
        }
    }
    exports.BusinessPartnerRoleApi = BusinessPartnerRoleApi;
});
//# sourceMappingURL=BusinessPartnerRoleApi.js.map