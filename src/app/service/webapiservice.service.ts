import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Http, RequestOptions, Headers } from "@angular/common/http";

@Injectable({
	providedIn: "root",
})
export class WebapiserviceService {
	baseUrl = environment.url.baseUrl;
	constructor(private http: Http) {}

	get(url) {
		const headers = this.setHeader();
		const options = new RequestOptions({
			headers: headers,
		});

		return this.http.get(this.baseUrl + url, options);
	}

	post(url, json) {
		const headers = this.setHeader();
		const options = new RequestOptions({
			headers: headers,
		});
		return this.http.post(this.baseUrl + url, json, options);
	}

	fordataPost(url, json) {
		const headers = this.setFormHeader();
		const options = new RequestOptions({
			headers: headers,
		});
		return this.http.post(this.baseUrl + url, json, options);
	}

	setHeader() {
		const headers = new Headers({
			"Content-Type": "application/json",
		});

		if (localStorage.getItem("admin_details") !== null) {
			const getToken = localStorage.getItem("token");
			// getToken = getToken.replace(/"/g, '');

			headers.append("x-access-token", getToken);
		} else if (localStorage.getItem("admin_forgot") !== null) {
			const getToken = localStorage.getItem("admin_forgot");
			// getToken = getToken.replace(/"/g, '');

			headers.append("x-access-token", getToken);
		} else if (localStorage.getItem("confirm_token") !== null) {
			let getToken = localStorage.getItem("confirm_token");
			// getToken = getToken.replace(/"/g, '');

			headers.append("x-access-token", getToken);
		}

		return headers;
	}

	setFormHeader() {
		const headers = new Headers();

		if (localStorage.getItem("admin_details") !== null) {
			const getToken = localStorage.getItem("token");
			// getToken = getToken.replace(/"/g, '');

			headers.append("x-access-token", getToken);
		}

		if (localStorage.getItem("admin_forgot") !== null) {
			const getToken = localStorage.getItem("admin_forgot");
			// getToken = getToken.replace(/"/g, '');

			headers.append("x-access-token", getToken);
		}

		return headers;
	}
}
