define(["require", "exports", "@sap-cloud-sdk/odata-v2"], function (require, exports, odata_v2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BpContactToFuncAndDeptRequestBuilder = void 0;
    /**
     * Request builder class for operations supported on the {@link BpContactToFuncAndDept} entity.
     */
    class BpContactToFuncAndDeptRequestBuilder extends odata_v2_1.RequestBuilder {
        /**
         * Returns a request builder for retrieving one `BpContactToFuncAndDept` entity based on its keys.
         * @param relationshipNumber Key property. See {@link BpContactToFuncAndDept.relationshipNumber}.
         * @param businessPartnerCompany Key property. See {@link BpContactToFuncAndDept.businessPartnerCompany}.
         * @param businessPartnerPerson Key property. See {@link BpContactToFuncAndDept.businessPartnerPerson}.
         * @param validityEndDate Key property. See {@link BpContactToFuncAndDept.validityEndDate}.
         * @returns A request builder for creating requests to retrieve one `BpContactToFuncAndDept` entity based on its keys.
         */
        getByKey(relationshipNumber, businessPartnerCompany, businessPartnerPerson, validityEndDate) {
            return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
                RelationshipNumber: relationshipNumber,
                BusinessPartnerCompany: businessPartnerCompany,
                BusinessPartnerPerson: businessPartnerPerson,
                ValidityEndDate: validityEndDate
            });
        }
        /**
         * Returns a request builder for querying all `BpContactToFuncAndDept` entities.
         * @returns A request builder for creating requests to retrieve all `BpContactToFuncAndDept` entities.
         */
        getAll() {
            return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
        }
        /**
         * Returns a request builder for updating an entity of type `BpContactToFuncAndDept`.
         * @param entity The entity to be updated
         * @returns A request builder for creating requests that update an entity of type `BpContactToFuncAndDept`.
         */
        update(entity) {
            return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
        }
    }
    exports.BpContactToFuncAndDeptRequestBuilder = BpContactToFuncAndDeptRequestBuilder;
});
//# sourceMappingURL=BpContactToFuncAndDeptRequestBuilder.js.map