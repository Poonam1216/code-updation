import { Component } from "@angular/core";
import { ToastrService } from "ngx-toastr";

import "style-loader!angular2-toaster/toaster.css";
// import {
// 	// NbComponentStatus,
// 	NbGlobalLogicalPosition,
// 	// NbGlobalPhysicalPosition,
// 	// NbGlobalPosition,
// 	// NbToastrService,
// } from "@nebular/theme";
// import { ToastrService } from "ngx-toastr";

@Component({
	selector: "ngx-toastr",
	styleUrls: ["./toastr.component.scss"],
	templateUrl: "./toastr.component.html",
})
export class ToastrComponent {
	constructor(private toastrService: ToastrService) {}

	// config: ToasterConfig;

	index = 1;
	destroyByClick = true;
	duration = 2000;
	hasIcon = true;
	// position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
	position: "toast-top-right";
	preventDuplicates = false;
	// status: NbComponentStatus = "primary";

	title = "HI there!";
	content = `I'm cool toaster!`;

	types: string[] = ["success", "info", "warning", "error"];
	positions: string[] = [
		"toast-top-right",
		"toast-top-left",
		"toast-bottom-left",
		"toast-bottom-right",
	];

	quotes = [
		{ title: null, body: "We rock at Angular" },
		{ title: null, body: "Titles are not always needed" },
		{ title: null, body: "Toastr rock!" },
	];

	// makeToast() {
	// 	this.showToast(this.status, this.title, this.content);
	// }
	makeToast() {
		this.showToast("success", this.title, this.content);
	}
	openRandomToast() {
		const typeIndex = Math.floor(Math.random() * this.types.length);
		const quoteIndex = Math.floor(Math.random() * this.quotes.length);
		const type = this.types[typeIndex];
		const quote = this.quotes[quoteIndex];

		this.showToast(type, quote.title, quote.body);
	}

	private showToast(type: string, title: string, body: string) {
		const config = {
			status: type,
			destroyByClick: this.destroyByClick,
			duration: this.duration,
			hasIcon: this.hasIcon,
			position: this.position,
			preventDuplicates: this.preventDuplicates,
		};
		const titleContent = title ? `. ${title}` : "";

		this.index += 1;
		this.toastrService.show(body, `Toast ${this.index}${titleContent}`);
	}
}
