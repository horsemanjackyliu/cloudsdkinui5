define(["require", "exports", "./AddressFaxNumber", "./AddressFaxNumberRequestBuilder", "@sap-cloud-sdk/odata-v2"], function (require, exports, AddressFaxNumber_1, AddressFaxNumberRequestBuilder_1, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AddressFaxNumberApi = void 0;
    class AddressFaxNumberApi {
        constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
            this.entityConstructor = AddressFaxNumber_1.AddressFaxNumber;
            this.deSerializers = deSerializers;
        }
        _addNavigationProperties(linkedApis) {
            this.navigationPropertyFields = {};
            return this;
        }
        requestBuilder() {
            return new AddressFaxNumberRequestBuilder_1.AddressFaxNumberRequestBuilder(this);
        }
        entityBuilder() {
            return (0, odata_v2_1.entityBuilder)(this);
        }
        customField(fieldName, isNullable = false) {
            return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
        }
        get fieldBuilder() {
            if (!this._fieldBuilder) {
                this._fieldBuilder = new odata_v2_1.FieldBuilder(AddressFaxNumber_1.AddressFaxNumber, this.deSerializers);
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
                     * Static representation of the {@link isDefaultFaxNumber} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    IS_DEFAULT_FAX_NUMBER: fieldBuilder.buildEdmTypeField('IsDefaultFaxNumber', 'Edm.Boolean', true),
                    /**
                     * Static representation of the {@link faxCountry} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    FAX_COUNTRY: fieldBuilder.buildEdmTypeField('FaxCountry', 'Edm.String', true),
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
                     * Static representation of the {@link internationalFaxNumber} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    INTERNATIONAL_FAX_NUMBER: fieldBuilder.buildEdmTypeField('InternationalFaxNumber', 'Edm.String', true),
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
                    ALL_FIELDS: new odata_v2_1.AllFields('*', AddressFaxNumber_1.AddressFaxNumber)
                };
            }
            return this._schema;
        }
    }
    exports.AddressFaxNumberApi = AddressFaxNumberApi;
});
//# sourceMappingURL=AddressFaxNumberApi.js.map