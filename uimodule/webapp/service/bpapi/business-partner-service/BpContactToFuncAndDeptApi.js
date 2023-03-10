define(["require", "exports", "./BpContactToFuncAndDept", "./BpContactToFuncAndDeptRequestBuilder", "@sap-cloud-sdk/odata-v2"], function (require, exports, BpContactToFuncAndDept_1, BpContactToFuncAndDeptRequestBuilder_1, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BpContactToFuncAndDeptApi = void 0;
    class BpContactToFuncAndDeptApi {
        constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
            this.entityConstructor = BpContactToFuncAndDept_1.BpContactToFuncAndDept;
            this.deSerializers = deSerializers;
        }
        _addNavigationProperties(linkedApis) {
            this.navigationPropertyFields = {};
            return this;
        }
        requestBuilder() {
            return new BpContactToFuncAndDeptRequestBuilder_1.BpContactToFuncAndDeptRequestBuilder(this);
        }
        entityBuilder() {
            return (0, odata_v2_1.entityBuilder)(this);
        }
        customField(fieldName, isNullable = false) {
            return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
        }
        get fieldBuilder() {
            if (!this._fieldBuilder) {
                this._fieldBuilder = new odata_v2_1.FieldBuilder(BpContactToFuncAndDept_1.BpContactToFuncAndDept, this.deSerializers);
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
                     * Static representation of the {@link contactPersonFunction} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    CONTACT_PERSON_FUNCTION: fieldBuilder.buildEdmTypeField('ContactPersonFunction', 'Edm.String', true),
                    /**
                     * Static representation of the {@link contactPersonDepartment} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    CONTACT_PERSON_DEPARTMENT: fieldBuilder.buildEdmTypeField('ContactPersonDepartment', 'Edm.String', true),
                    /**
                     * Static representation of the {@link phoneNumber} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    PHONE_NUMBER: fieldBuilder.buildEdmTypeField('PhoneNumber', 'Edm.String', true),
                    /**
                     * Static representation of the {@link phoneNumberExtension} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    PHONE_NUMBER_EXTENSION: fieldBuilder.buildEdmTypeField('PhoneNumberExtension', 'Edm.String', true),
                    /**
                     * Static representation of the {@link faxNumber} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    FAX_NUMBER: fieldBuilder.buildEdmTypeField('FaxNumber', 'Edm.String', true),
                    /**
                     * Static representation of the {@link faxNumberExtension} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    FAX_NUMBER_EXTENSION: fieldBuilder.buildEdmTypeField('FaxNumberExtension', 'Edm.String', true),
                    /**
                     * Static representation of the {@link emailAddress} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    EMAIL_ADDRESS: fieldBuilder.buildEdmTypeField('EmailAddress', 'Edm.String', true),
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
                    ALL_FIELDS: new odata_v2_1.AllFields('*', BpContactToFuncAndDept_1.BpContactToFuncAndDept)
                };
            }
            return this._schema;
        }
    }
    exports.BpContactToFuncAndDeptApi = BpContactToFuncAndDeptApi;
});
//# sourceMappingURL=BpContactToFuncAndDeptApi.js.map