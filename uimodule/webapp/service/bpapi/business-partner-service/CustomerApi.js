define(["require", "exports", "./Customer", "./CustomerRequestBuilder", "@sap-cloud-sdk/odata-v2"], function (require, exports, Customer_1, CustomerRequestBuilder_1, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustomerApi = void 0;
    class CustomerApi {
        constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
            this.entityConstructor = Customer_1.Customer;
            this.deSerializers = deSerializers;
        }
        _addNavigationProperties(linkedApis) {
            this.navigationPropertyFields = {
                TO_CUST_ADDR_DEPDNT_EXT_IDENTIFIER: new odata_v2_1.Link('to_CustAddrDepdntExtIdentifier', this, linkedApis[0]),
                TO_CUST_ADDR_DEPDNT_INFORMATION: new odata_v2_1.Link('to_CustAddrDepdntInformation', this, linkedApis[1]),
                TO_CUSTOMER_COMPANY: new odata_v2_1.Link('to_CustomerCompany', this, linkedApis[2]),
                TO_CUSTOMER_SALES_AREA: new odata_v2_1.Link('to_CustomerSalesArea', this, linkedApis[3]),
                TO_CUSTOMER_TAX_GROUPING: new odata_v2_1.Link('to_CustomerTaxGrouping', this, linkedApis[4]),
                TO_CUSTOMER_TEXT: new odata_v2_1.Link('to_CustomerText', this, linkedApis[5]),
                TO_CUSTOMER_UNLOADING_POINT: new odata_v2_1.Link('to_CustomerUnloadingPoint', this, linkedApis[6]),
                TO_CUST_UNLDG_PT_ADDR_DEPDNT_INFO: new odata_v2_1.Link('to_CustUnldgPtAddrDepdntInfo', this, linkedApis[7])
            };
            return this;
        }
        requestBuilder() {
            return new CustomerRequestBuilder_1.CustomerRequestBuilder(this);
        }
        entityBuilder() {
            return (0, odata_v2_1.entityBuilder)(this);
        }
        customField(fieldName, isNullable = false) {
            return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
        }
        get fieldBuilder() {
            if (!this._fieldBuilder) {
                this._fieldBuilder = new odata_v2_1.FieldBuilder(Customer_1.Customer, this.deSerializers);
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
                     * Static representation of the {@link authorizationGroup} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    AUTHORIZATION_GROUP: fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true),
                    /**
                     * Static representation of the {@link billingIsBlockedForCustomer} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    BILLING_IS_BLOCKED_FOR_CUSTOMER: fieldBuilder.buildEdmTypeField('BillingIsBlockedForCustomer', 'Edm.String', true),
                    /**
                     * Static representation of the {@link createdByUser} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    CREATED_BY_USER: fieldBuilder.buildEdmTypeField('CreatedByUser', 'Edm.String', true),
                    /**
                     * Static representation of the {@link creationDate} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    CREATION_DATE: fieldBuilder.buildEdmTypeField('CreationDate', 'Edm.DateTime', true),
                    /**
                     * Static representation of the {@link customerAccountGroup} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    CUSTOMER_ACCOUNT_GROUP: fieldBuilder.buildEdmTypeField('CustomerAccountGroup', 'Edm.String', true),
                    /**
                     * Static representation of the {@link customerClassification} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    CUSTOMER_CLASSIFICATION: fieldBuilder.buildEdmTypeField('CustomerClassification', 'Edm.String', true),
                    /**
                     * Static representation of the {@link customerFullName} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    CUSTOMER_FULL_NAME: fieldBuilder.buildEdmTypeField('CustomerFullName', 'Edm.String', true),
                    /**
                     * Static representation of the {@link customerName} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    CUSTOMER_NAME: fieldBuilder.buildEdmTypeField('CustomerName', 'Edm.String', true),
                    /**
                     * Static representation of the {@link deliveryIsBlocked} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    DELIVERY_IS_BLOCKED: fieldBuilder.buildEdmTypeField('DeliveryIsBlocked', 'Edm.String', true),
                    /**
                     * Static representation of the {@link nfPartnerIsNaturalPerson} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    NF_PARTNER_IS_NATURAL_PERSON: fieldBuilder.buildEdmTypeField('NFPartnerIsNaturalPerson', 'Edm.String', true),
                    /**
                     * Static representation of the {@link orderIsBlockedForCustomer} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    ORDER_IS_BLOCKED_FOR_CUSTOMER: fieldBuilder.buildEdmTypeField('OrderIsBlockedForCustomer', 'Edm.String', true),
                    /**
                     * Static representation of the {@link postingIsBlocked} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    POSTING_IS_BLOCKED: fieldBuilder.buildEdmTypeField('PostingIsBlocked', 'Edm.Boolean', true),
                    /**
                     * Static representation of the {@link supplier} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    SUPPLIER: fieldBuilder.buildEdmTypeField('Supplier', 'Edm.String', true),
                    /**
                     * Static representation of the {@link customerCorporateGroup} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    CUSTOMER_CORPORATE_GROUP: fieldBuilder.buildEdmTypeField('CustomerCorporateGroup', 'Edm.String', true),
                    /**
                     * Static representation of the {@link fiscalAddress} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    FISCAL_ADDRESS: fieldBuilder.buildEdmTypeField('FiscalAddress', 'Edm.String', true),
                    /**
                     * Static representation of the {@link industry} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    INDUSTRY: fieldBuilder.buildEdmTypeField('Industry', 'Edm.String', true),
                    /**
                     * Static representation of the {@link industryCode1} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    INDUSTRY_CODE_1: fieldBuilder.buildEdmTypeField('IndustryCode1', 'Edm.String', true),
                    /**
                     * Static representation of the {@link industryCode2} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    INDUSTRY_CODE_2: fieldBuilder.buildEdmTypeField('IndustryCode2', 'Edm.String', true),
                    /**
                     * Static representation of the {@link industryCode3} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    INDUSTRY_CODE_3: fieldBuilder.buildEdmTypeField('IndustryCode3', 'Edm.String', true),
                    /**
                     * Static representation of the {@link industryCode4} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    INDUSTRY_CODE_4: fieldBuilder.buildEdmTypeField('IndustryCode4', 'Edm.String', true),
                    /**
                     * Static representation of the {@link industryCode5} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    INDUSTRY_CODE_5: fieldBuilder.buildEdmTypeField('IndustryCode5', 'Edm.String', true),
                    /**
                     * Static representation of the {@link internationalLocationNumber1} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    INTERNATIONAL_LOCATION_NUMBER_1: fieldBuilder.buildEdmTypeField('InternationalLocationNumber1', 'Edm.String', true),
                    /**
                     * Static representation of the {@link nielsenRegion} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    NIELSEN_REGION: fieldBuilder.buildEdmTypeField('NielsenRegion', 'Edm.String', true),
                    /**
                     * Static representation of the {@link responsibleType} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    RESPONSIBLE_TYPE: fieldBuilder.buildEdmTypeField('ResponsibleType', 'Edm.String', true),
                    /**
                     * Static representation of the {@link taxNumber1} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    TAX_NUMBER_1: fieldBuilder.buildEdmTypeField('TaxNumber1', 'Edm.String', true),
                    /**
                     * Static representation of the {@link taxNumber2} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    TAX_NUMBER_2: fieldBuilder.buildEdmTypeField('TaxNumber2', 'Edm.String', true),
                    /**
                     * Static representation of the {@link taxNumber3} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    TAX_NUMBER_3: fieldBuilder.buildEdmTypeField('TaxNumber3', 'Edm.String', true),
                    /**
                     * Static representation of the {@link taxNumber4} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    TAX_NUMBER_4: fieldBuilder.buildEdmTypeField('TaxNumber4', 'Edm.String', true),
                    /**
                     * Static representation of the {@link taxNumber5} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    TAX_NUMBER_5: fieldBuilder.buildEdmTypeField('TaxNumber5', 'Edm.String', true),
                    /**
                     * Static representation of the {@link taxNumberType} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    TAX_NUMBER_TYPE: fieldBuilder.buildEdmTypeField('TaxNumberType', 'Edm.String', true),
                    /**
                     * Static representation of the {@link vatRegistration} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    VAT_REGISTRATION: fieldBuilder.buildEdmTypeField('VATRegistration', 'Edm.String', true),
                    /**
                     * Static representation of the {@link deletionIndicator} property for query construction.
                     * Use to reference this property in query operations such as 'select' in the fluent request API.
                     */
                    DELETION_INDICATOR: fieldBuilder.buildEdmTypeField('DeletionIndicator', 'Edm.Boolean', true),
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
                    ALL_FIELDS: new odata_v2_1.AllFields('*', Customer_1.Customer)
                };
            }
            return this._schema;
        }
    }
    exports.CustomerApi = CustomerApi;
});
//# sourceMappingURL=CustomerApi.js.map