sap.ui.define([
	"sap/m/MessageBox",
	"sap/ui/core/mvc/Controller"
], function(MessageBox,Controller) {
	"use strict";

	return Controller.extend("hcbr.usp.brZPMAPP0003.controller.View2", {
		navi:function(){
			
			var WERKS = this.getView().byId("Werks").getValue();
			var INVNR = this.getView().byId("Invnr").getValue();
			var EQUNR = this.getView().byId("Equnr").getValue();
			if (WERKS ==="" || INVNR  ==="" || EQUNR ==="") {
				
			MessageBox.alert("Os campos Centro,Inventário e Equipamento são Obrigatórios.");

			} else{
				
	
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("view3");
			}
		}

	});
});