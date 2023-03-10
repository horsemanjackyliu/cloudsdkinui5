define(["require", "exports", "./AddressEmailAddress", "./AddressEmailAddressRequestBuilder", "@sap-cloud-sdk/odata-v2"], function (require, exports, AddressEmailAddress_1, AddressEmailAddressRequestBuilder_1, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AddressEmailAddressApi = void 0;
    class AddressEmailAddressApi {
        constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
            this.entityConstructor = AddressEmailAddress_1.AddressEmailAddress;
            this.deSerializers = deSerializers;
        }
        _addNavigationProperties(linkedApis) {
            this.navigationPropertyFields = {};
            return this;
        }
        requestBuilder() {
            return new AddressEmailAddressRequestBuilder_1.AddressEmailAddressRequestBuilder(this);
        }
        entityBuilder() {
            return (0, odata_v2_1.entityBuilder)(this);
        }
        customField(fieldName, isNullable = false) {
            return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
        }
        get fieldBuilder() {
            if (!this._fieldBuilder) {
                this._fieldBuilder = new odata_v2_1.FieldBuilder(AddressEmailAddress_1.AddressEmailAddress, this.deSerializers);
            }
            return this._fieldBuilder;
        }
        get schema() {
            if (!this._schema) {
                const fieldBuilder = this.fieldBuilder;
                this._schema = {
                    /**
                     * Static representation of the {@link addressId} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    ADDRESS_ID: fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false),
                    /**
                     * Static representation of the {@link person} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    PERSON: fieldBuilder.buildEdmTypeField('Person', 'Edm.String', false),
                    /**
                     * Static representation of the {@link ordinalNumber} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    ORDINAL_NUMBER: fieldBuilder.buildEdmTypeField('OrdinalNumber', 'Edm.String', false),
                    /**
                     * Static representation of the {@link isDefaultEmailAddress} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    IS_DEFAULT_EMAIL_ADDRESS: fieldBuilder.buildEdmTypeField('IsDefaultEmailAddress', 'Edm.Boolean', true),
                    /**
                     * Static representation of the {@link emailAddress} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    EMAIL_ADDRESS: fieldBuilder.buildEdmTypeField('EmailAddress', 'Edm.String', true),
                    /**
                     * Static representation of the {@link searchEmailAddress} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    SEARCH_EMAIL_ADDRESS: fieldBuilder.buildEdmTypeField('SearchEmailAddress', 'Edm.String', true),
                    /**
                     * Static representation of the {@link addressCommunicationRemarkText} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    ADDRESS_COMMUNICATION_REMARK_TEXT: fieldBuilder.buildEdmTypeField('AddressCommunicationRemarkText', 'Edm.String', true),
                    ...this.navigationPropertyFields,
                    /**
                     *
                     * All fields selector.
                     */
                    ALL_FIELDS: new odata_v2_1.AllFields('*', AddressEmailAddress_1.AddressEmailAddress)
                };
            }
            return this._schema;
        }
    }
    exports.AddressEmailAddressApi = AddressEmailAddressApi;
});
//# sourceMappingURL=AddressEmailAddressApi.js.map