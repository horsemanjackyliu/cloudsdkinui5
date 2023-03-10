define(["require", "exports", "./CustSlsAreaAddrDepdntInfo", "./CustSlsAreaAddrDepdntInfoRequestBuilder", "@sap-cloud-sdk/odata-v2"], function (require, exports, CustSlsAreaAddrDepdntInfo_1, CustSlsAreaAddrDepdntInfoRequestBuilder_1, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustSlsAreaAddrDepdntInfoApi = void 0;
    class CustSlsAreaAddrDepdntInfoApi {
        constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
            this.entityConstructor = CustSlsAreaAddrDepdntInfo_1.CustSlsAreaAddrDepdntInfo;
            this.deSerializers = deSerializers;
        }
        _addNavigationProperties(linkedApis) {
            this.navigationPropertyFields = {};
            return this;
        }
        requestBuilder() {
            return new CustSlsAreaAddrDepdntInfoRequestBuilder_1.CustSlsAreaAddrDepdntInfoRequestBuilder(this);
        }
        entityBuilder() {
            return (0, odata_v2_1.entityBuilder)(this);
        }
        customField(fieldName, isNullable = false) {
            return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
        }
        get fieldBuilder() {
            if (!this._fieldBuilder) {
                this._fieldBuilder = new odata_v2_1.FieldBuilder(CustSlsAreaAddrDepdntInfo_1.CustSlsAreaAddrDepdntInfo, this.deSerializers);
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
                     * Static representation of the {@link salesOrganization} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    SALES_ORGANIZATION: fieldBuilder.buildEdmTypeField('SalesOrganization', 'Edm.String', false),
                    /**
                     * Static representation of the {@link distributionChannel} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    DISTRIBUTION_CHANNEL: fieldBuilder.buildEdmTypeField('DistributionChannel', 'Edm.String', false),
                    /**
                     * Static representation of the {@link division} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    DIVISION: fieldBuilder.buildEdmTypeField('Division', 'Edm.String', false),
                    /**
                     * Static representation of the {@link addressId} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    ADDRESS_ID: fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false),
                    /**
                     * Static representation of the {@link incotermsClassification} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    INCOTERMS_CLASSIFICATION: fieldBuilder.buildEdmTypeField('IncotermsClassification', 'Edm.String', true),
                    /**
                     * Static representation of the {@link incotermsLocation1} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    INCOTERMS_LOCATION_1: fieldBuilder.buildEdmTypeField('IncotermsLocation1', 'Edm.String', true),
                    /**
                     * Static representation of the {@link incotermsLocation2} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    INCOTERMS_LOCATION_2: fieldBuilder.buildEdmTypeField('IncotermsLocation2', 'Edm.String', true),
                    /**
                     * Static representation of the {@link deliveryIsBlocked} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    DELIVERY_IS_BLOCKED: fieldBuilder.buildEdmTypeField('DeliveryIsBlocked', 'Edm.String', true),
                    /**
                     * Static representation of the {@link salesOffice} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    SALES_OFFICE: fieldBuilder.buildEdmTypeField('SalesOffice', 'Edm.String', true),
                    /**
                     * Static representation of the {@link salesGroup} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    SALES_GROUP: fieldBuilder.buildEdmTypeField('SalesGroup', 'Edm.String', true),
                    /**
                     * Static representation of the {@link shippingCondition} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    SHIPPING_CONDITION: fieldBuilder.buildEdmTypeField('ShippingCondition', 'Edm.String', true),
                    /**
                     * Static representation of the {@link supplyingPlant} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    SUPPLYING_PLANT: fieldBuilder.buildEdmTypeField('SupplyingPlant', 'Edm.String', true),
                    /**
                     * Static representation of the {@link incotermsVersion} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    INCOTERMS_VERSION: fieldBuilder.buildEdmTypeField('IncotermsVersion', 'Edm.String', true),
                    ...this.navigationPropertyFields,
                    /**
                     *
                     * All fields selector.
                     */
                    ALL_FIELDS: new odata_v2_1.AllFields('*', CustSlsAreaAddrDepdntInfo_1.CustSlsAreaAddrDepdntInfo)
                };
            }
            return this._schema;
        }
    }
    exports.CustSlsAreaAddrDepdntInfoApi = CustSlsAreaAddrDepdntInfoApi;
});
//# sourceMappingURL=CustSlsAreaAddrDepdntInfoApi.js.map