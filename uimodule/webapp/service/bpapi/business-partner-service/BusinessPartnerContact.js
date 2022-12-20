define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BusinessPartnerContact = void 0;
    /**
     * This class represents the entity "A_BusinessPartnerContact" of service "API_BUSINESS_PARTNER".
     */
    class BusinessPartnerContact extends odata_v2_1.Entity {
        constructor(_entityApi) {
            super(_entityApi);
            this._entityApi = _entityApi;
        }
    }
    exports.BusinessPartnerContact = BusinessPartnerContact;
    /**
     * Technical entity name for BusinessPartnerContact.
     */
    BusinessPartnerContact._entityName = 'A_BusinessPartnerContact';
    /**
     * Default url path for the according service.
     */
    BusinessPartnerContact._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    /**
     * All key fields of the BusinessPartnerContact entity
     */
    BusinessPartnerContact._keys = [
        'RelationshipNumber',
        'BusinessPartnerCompany',
        'BusinessPartnerPerson',
        'ValidityEndDate'
    ];
});
//# sourceMappingURL=BusinessPartnerContact.js.map