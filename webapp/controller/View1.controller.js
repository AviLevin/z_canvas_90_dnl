
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";
	// var canvas = document.getElementById("signature-pad");
	return Controller.extend("dnlz_canvas_90_dnl.controller.View1", {

		onUploadFile: function() {
			var canvas = document.getElementById("signature-pad");
			var ctx = canvas.getContext("2d");
			
			var oFileUpload =
				this.getView().byId("fileUploaderFS");

			var domRef = oFileUpload.getFocusDomRef();
			var file = domRef.files[0];
			// var that = this;

	// console.dirxml(domRef);
			//This code is used for uploading image or document file

			// this.fileName =
			// 	this.getView().byId("FileName").getValue();
			// this.fileType = file.type;

			var reader = new FileReader();
			reader.onload = function(e) {
				MessageToast.show("Hello t1");
				var img = new Image();
				img.onload = function() {
				canvas.width = 500;
				canvas.height = 500;	
					ctx.drawImage(img, 10, 10);
					// const timeNow = new Date().toISOString();
					ctx.fillStyle = "red";
					// ctx.fillRect(0, 0, canvas.width, canvas.height);
					ctx.font= 40 + 'px';
					ctx.font = "30px Verdana";
					ctx.fillText("Customer: 3334545454", 30, 30);
					ctx.fillText("Customer: 3334545454", 30, 30);
					// const timestamped = ctx.canvas.toDataURL("image/png");
					// const fileName = "chart.png";
				};
				
				img.src = e.target.result;

				// var vContent = e.currentTarget.result;
				// that.updateFile(that.fileName, that.fileType, vContent);
			};
			reader.readAsDataURL(file);
		},
	Download: function () {
			MessageToast.show("dnl");
		var image = document.getElementById("signature-pad").toDataURL();
        // var image = this.getView().byId("signature-pad")
        var link = document.createElement("a");
        link.href = image;
        link.download = "image.png";
        link.click();
      }

      //document.querySelector("button").addEventListener("click", download);

	});
});