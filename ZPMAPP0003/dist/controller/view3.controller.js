sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/Controller"
], function(JSONModel,Controller) {
	"use strict";

	return Controller.extend("hcbr.usp.brZPMAPP0003.controller.view3", {
		onInit:function(){
	
	
		this._sValidPath = sap.ui.require.toUrl("sap/m/sample/PDFViewerEmbedded/sample.pdf");
			this._sInvalidPath = sap.ui.require.toUrl("sap/m/sample/PDFViewerEmbedded/sample_nonexisting.pdf");
			this._oModel = new JSONModel({
				Source: this._sValidPath,
				Title: "My Custom Title",
				Height: "600px"
			});
			this.getView().setModel(this._oModel);
	
	
	
		},
		
		navi:function(){
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("view2");			
		
			
		}

	});
});