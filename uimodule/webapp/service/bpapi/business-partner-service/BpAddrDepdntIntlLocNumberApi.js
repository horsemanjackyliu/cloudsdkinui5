define(["require", "exports", "./BpAddrDepdntIntlLocNumber", "./BpAddrDepdntIntlLocNumberRequestBuilder", "@sap-cloud-sdk/odata-v2"], function (require, exports, BpAddrDepdntIntlLocNumber_1, BpAddrDepdntIntlLocNumberRequestBuilder_1, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BpAddrDepdntIntlLocNumberApi = void 0;
    class BpAddrDepdntIntlLocNumberApi {
        constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
            this.entityConstructor = BpAddrDepdntIntlLocNumber_1.BpAddrDepdntIntlLocNumber;
            this.deSerializers = deSerializers;
        }
        _addNavigationProperties(linkedApis) {
            this.navigationPropertyFields = {};
            return this;
        }
        requestBuilder() {
            return new BpAddrDepdntIntlLocNumberRequestBuilder_1.BpAddrDepdntIntlLocNumberRequestBuilder(this);
        }
        entityBuilder() {
            return (0, odata_v2_1.entityBuilder)(this);
        }
        customField(fieldName, isNullable = false) {
            return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
        }
        get fieldBuilder() {
            if (!this._fieldBuilder) {
                this._fieldBuilder = new odata_v2_1.FieldBuilder(BpAddrDepdntIntlLocNumber_1.BpAddrDepdntIntlLocNumber, this.deSerializers);
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
                     * Static representation of the {@link addressId} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    ADDRESS_ID: fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false),
                    /**
                     * Static representation of the {@link internationalLocationNumber1} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    INTERNATIONAL_LOCATION_NUMBER_1: fieldBuilder.buildEdmTypeField('InternationalLocationNumber1', 'Edm.String', true),
                    /**
                     * Static representation of the {@link internationalLocationNumber2} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    INTERNATIONAL_LOCATION_NUMBER_2: fieldBuilder.buildEdmTypeField('InternationalLocationNumber2', 'Edm.String', true),
                    /**
                     * Static representation of the {@link internationalLocationNumber3} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    INTERNATIONAL_LOCATION_NUMBER_3: fieldBuilder.buildEdmTypeField('InternationalLocationNumber3', 'Edm.String', true),
                    ...this.navigationPropertyFields,
                    /**
                     *
                     * All fields selector.
                     */
                    ALL_FIELDS: new odata_v2_1.AllFields('*', BpAddrDepdntIntlLocNumber_1.BpAddrDepdntIntlLocNumber)
                };
            }
            return this._schema;
        }
    }
    exports.BpAddrDepdntIntlLocNumberApi = BpAddrDepdntIntlLocNumberApi;
});
//# sourceMappingURL=BpAddrDepdntIntlLocNumberApi.js.map