define(["require", "exports", "./CustAddrDepdntExtIdentifier", "./CustAddrDepdntExtIdentifierRequestBuilder", "@sap-cloud-sdk/odata-v2"], function (require, exports, CustAddrDepdntExtIdentifier_1, CustAddrDepdntExtIdentifierRequestBuilder_1, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustAddrDepdntExtIdentifierApi = void 0;
    class CustAddrDepdntExtIdentifierApi {
        constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
            this.entityConstructor = CustAddrDepdntExtIdentifier_1.CustAddrDepdntExtIdentifier;
            this.deSerializers = deSerializers;
        }
        _addNavigationProperties(linkedApis) {
            this.navigationPropertyFields = {};
            return this;
        }
        requestBuilder() {
            return new CustAddrDepdntExtIdentifierRequestBuilder_1.CustAddrDepdntExtIdentifierRequestBuilder(this);
        }
        entityBuilder() {
            return (0, odata_v2_1.entityBuilder)(this);
        }
        customField(fieldName, isNullable = false) {
            return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
        }
        get fieldBuilder() {
            if (!this._fieldBuilder) {
                this._fieldBuilder = new odata_v2_1.FieldBuilder(CustAddrDepdntExtIdentifier_1.CustAddrDepdntExtIdentifier, this.deSerializers);
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
                     * Static representation of the {@link addressId} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    ADDRESS_ID: fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false),
                    /**
                     * Static representation of the {@link customerExternalRefId} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    CUSTOMER_EXTERNAL_REF_ID: fieldBuilder.buildEdmTypeField('CustomerExternalRefID', 'Edm.String', true),
                    ...this.navigationPropertyFields,
                    /**
                     *
                     * All fields selector.
                     */
                    ALL_FIELDS: new odata_v2_1.AllFields('*', CustAddrDepdntExtIdentifier_1.CustAddrDepdntExtIdentifier)
                };
            }
            return this._schema;
        }
    }
    exports.CustAddrDepdntExtIdentifierApi = CustAddrDepdntExtIdentifierApi;
});
//# sourceMappingURL=CustAddrDepdntExtIdentifierApi.js.map