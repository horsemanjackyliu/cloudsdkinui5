sap.ui.define(
    ["./BaseController","../service/bpapi/business-partner-service/businessPartnerApi", "sap/m/MessageBox"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,businessPartnerApi,MessageBox) {
        "use strict";

        return Controller.extend("com.sap.cloudsdkinui5.controller.MainView", {
            onInit: function () {},
            pressButton: function(){
                this._getBp().then(data=>MessageBox.information(data)).catch(err=>MessageBox.information(err));
            },
            _getBp: function(){
                return new Promise((resolve,reject) => {
                    try{
                     const resultPromise =  businessPartnerApi.requestBuilder().getAll().top(5).execute({ destinationName: 's4hc' });
                     resolve(resultPromise);
                }catch( error ){reject(error)}
                });

            }
        });
    }
);
