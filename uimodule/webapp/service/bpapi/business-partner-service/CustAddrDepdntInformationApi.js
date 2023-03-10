define(["require", "exports", "./CustAddrDepdntInformation", "./CustAddrDepdntInformationRequestBuilder", "@sap-cloud-sdk/odata-v2"], function (require, exports, CustAddrDepdntInformation_1, CustAddrDepdntInformationRequestBuilder_1, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustAddrDepdntInformationApi = void 0;
    class CustAddrDepdntInformationApi {
        constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
            this.entityConstructor = CustAddrDepdntInformation_1.CustAddrDepdntInformation;
            this.deSerializers = deSerializers;
        }
        _addNavigationProperties(linkedApis) {
            this.navigationPropertyFields = {};
            return this;
        }
        requestBuilder() {
            return new CustAddrDepdntInformationRequestBuilder_1.CustAddrDepdntInformationRequestBuilder(this);
        }
        entityBuilder() {
            return (0, odata_v2_1.entityBuilder)(this);
        }
        customField(fieldName, isNullable = false) {
            return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
        }
        get fieldBuilder() {
            if (!this._fieldBuilder) {
                this._fieldBuilder = new odata_v2_1.FieldBuilder(CustAddrDepdntInformation_1.CustAddrDepdntInformation, this.deSerializers);
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
                     * Static representation of the {@link expressTrainStationName} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    EXPRESS_TRAIN_STATION_NAME: fieldBuilder.buildEdmTypeField('ExpressTrainStationName', 'Edm.String', true),
                    /**
                     * Static representation of the {@link trainStationName} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    TRAIN_STATION_NAME: fieldBuilder.buildEdmTypeField('TrainStationName', 'Edm.String', true),
                    /**
                     * Static representation of the {@link cityCode} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    CITY_CODE: fieldBuilder.buildEdmTypeField('CityCode', 'Edm.String', true),
                    /**
                     * Static representation of the {@link county} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    COUNTY: fieldBuilder.buildEdmTypeField('County', 'Edm.String', true),
                    ...this.navigationPropertyFields,
                    /**
                     *
                     * All fields selector.
                     */
                    ALL_FIELDS: new odata_v2_1.AllFields('*', CustAddrDepdntInformation_1.CustAddrDepdntInformation)
                };
            }
            return this._schema;
        }
    }
    exports.CustAddrDepdntInformationApi = CustAddrDepdntInformationApi;
});
//# sourceMappingURL=CustAddrDepdntInformationApi.js.map