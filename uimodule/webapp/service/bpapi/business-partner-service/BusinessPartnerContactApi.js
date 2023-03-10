define(["require", "exports", "./BusinessPartnerContact", "./BusinessPartnerContactRequestBuilder", "@sap-cloud-sdk/odata-v2"], function (require, exports, BusinessPartnerContact_1, BusinessPartnerContactRequestBuilder_1, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BusinessPartnerContactApi = void 0;
    class BusinessPartnerContactApi {
        constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
            this.entityConstructor = BusinessPartnerContact_1.BusinessPartnerContact;
            this.deSerializers = deSerializers;
        }
        _addNavigationProperties(linkedApis) {
            this.navigationPropertyFields = {
                TO_CONTACT_ADDRESS: new odata_v2_1.Link('to_ContactAddress', this, linkedApis[0]),
                TO_CONTACT_RELATIONSHIP: new odata_v2_1.OneToOneLink('to_ContactRelationship', this, linkedApis[1])
            };
            return this;
        }
        requestBuilder() {
            return new BusinessPartnerContactRequestBuilder_1.BusinessPartnerContactRequestBuilder(this);
        }
        entityBuilder() {
            return (0, odata_v2_1.entityBuilder)(this);
        }
        customField(fieldName, isNullable = false) {
            return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
        }
        get fieldBuilder() {
            if (!this._fieldBuilder) {
                this._fieldBuilder = new odata_v2_1.FieldBuilder(BusinessPartnerContact_1.BusinessPartnerContact, this.deSerializers);
            }
            return this._fieldBuilder;
        }
        get schema() {
            if (!this._schema) {
                const fieldBuilder = this.fieldBuilder;
                this._schema = {
                    /**
                     * Static representation of the {@link relationshipNumber} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    RELATIONSHIP_NUMBER: fieldBuilder.buildEdmTypeField('RelationshipNumber', 'Edm.String', false),
                    /**
                     * Static representation of the {@link businessPartnerCompany} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    BUSINESS_PARTNER_COMPANY: fieldBuilder.buildEdmTypeField('BusinessPartnerCompany', 'Edm.String', false),
                    /**
                     * Static representation of the {@link businessPartnerPerson} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    BUSINESS_PARTNER_PERSON: fieldBuilder.buildEdmTypeField('BusinessPartnerPerson', 'Edm.String', false),
                    /**
                     * Static representation of the {@link validityEndDate} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    VALIDITY_END_DATE: fieldBuilder.buildEdmTypeField('ValidityEndDate', 'Edm.DateTime', false),
                    /**
                     * Static representation of the {@link validityStartDate} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    VALIDITY_START_DATE: fieldBuilder.buildEdmTypeField('ValidityStartDate', 'Edm.DateTime', true),
                    /**
                     * Static representation of the {@link isStandardRelationship} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    IS_STANDARD_RELATIONSHIP: fieldBuilder.buildEdmTypeField('IsStandardRelationship', 'Edm.Boolean', true),
                    /**
                     * Static representation of the {@link relationshipCategory} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    RELATIONSHIP_CATEGORY: fieldBuilder.buildEdmTypeField('RelationshipCategory', 'Edm.String', true),
                    ...this.navigationPropertyFields,
                    /**
                     *
                     * All fields selector.
                     */
                    ALL_FIELDS: new odata_v2_1.AllFields('*', BusinessPartnerContact_1.BusinessPartnerContact)
                };
            }
            return this._schema;
        }
    }
    exports.BusinessPartnerContactApi = BusinessPartnerContactApi;
});
//# sourceMappingURL=BusinessPartnerContactApi.js.map