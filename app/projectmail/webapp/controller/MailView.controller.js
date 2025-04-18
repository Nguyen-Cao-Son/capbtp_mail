sap.ui.define([
    "sap/ui/core/mvc/Controller" , 
    "sap/ui/model/json/JSONModel", 
    "sap/m/MessageToast"
], ( Controller , JSONModel ,MessageToast ) => {
    "use strict";

    return Controller.extend("projectmail.controller.MailView", {

        onInit() {
          console.log("Mailview controller");
          var ojsonData = { 
                Input : {
                    editable: true ,
                    // description: "son nguyen" , 
                    value1 :"teasd"
                }
          }
          console.log(JSONModel);
          var oModel = new JSONModel(ojsonData) ; 
          this.getView().setModel(oModel,"Header") ;   
        } ,

        onChange(oEvent){
         console.log("onChange" , oEvent);
         var value = this.getView().getModel("Header").getProperty("/Input/value1") ;
         console.log(value);
        } , 

        onSubmit(oEvent) {
            console.log(oEvent);
            var value1 = oEvent.getParameter("text") ; 
            MessageToast.show( value1 )
        }

    });
});