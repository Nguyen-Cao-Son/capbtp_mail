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
          var oModel = new JSONModel(ojsonData) ; 
          this.getView().setModel(oModel,"Create") ;    

          var ojsonHeader = { 
            Title : "Create new form"} 
          var oModelHeader = new JSONModel(ojsonHeader)
          this.getView().setModel( oModelHeader ,  "Header" )

        } ,

        onChange(oEvent){
         var value = this.getView().getModel("Header").getProperty("/Input/value1") ;
        } , 

        onSubmit(oEvent) {
            var value1 = oEvent.getParameter("text") ; 
            MessageToast.show( value1 )
        }

    });
});