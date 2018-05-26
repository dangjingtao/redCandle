'use strict';

import Loading from './loading';

const requestTimeout = 20000; // 请求超时。
const loadingTimeout = 0; // 等待界面显示超时。

export default class {
	/*
	 * get请求。
	 * @param {String} url 地址
	 * @param {Function} callback 成功回调
	 */
	static get(url, callback = data => { }) {
		let loadingTimer = setTimeout(() => {
			Loading.show();
		}, loadingTimeout);

		let xhr;

		if (window.XMLHttpRequest) {
			// code for IE7+, Firefox, Chrome, Opera, Safari
			xhr = new XMLHttpRequest();
		} else {
			// code for IE6, IE5
			xhr = new ActiveXObject('Microsoft.XMLHTTP');
		}

		xhr.open('GET', url, true);
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4 && xhr.status === 200) {
				Loading.hide();
				callback(JSON.parse(xhr.responseText));

			}
		}
		xhr.dataType = 'json';
		xhr.withCredentials = true;
		xhr.send();
	}

	/**
	 * post请求。
	 *
	 * @param {String} url 地址
	 * @param {Object} params 参数
	 * @param {Function} callback 成功回调
	 */
	static post(url, params = {}, callback = data => { }) {
		// 超时显示等待界面。
		let loadingTimer = setTimeout(() => {
			Loading.show();
		}, loadingTimeout);

		// 参数封装成FormData.
		let formData = new FormData();
		for (let i in params) {
			formData.append(i, params[i]);
		}

		let xhr;

		if (window.XMLHttpRequest) {
			// code for IE7+, Firefox, Chrome, Opera, Safari
			xhr = new XMLHttpRequest();
		} else {
			// code for IE6, IE5
			xhr = new ActiveXObject('Microsoft.XMLHTTP');
		}

		// 超时中断请求。
		let requestTimer = setTimeout(() => {
			xhr.abort();
			Loading.hide();
			alert('网络连接超时，请重试。');
		}, requestTimeout);

		xhr.open('POST', url, true);
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4 && xhr.status === 200) {
				clearTimeout(loadingTimer);
				clearTimeout(requestTimer);
				Loading.hide();

				let data = {};
				try {
					data = JSON.parse(xhr.responseText);
				} catch (e) {
					console.log(url, e, data);
				}

				if (data.errno!==undefined) {
					callback(data);
				} else {
					alert(data.errmsg||data.errno);
				}
			} else if (xhr.readyState === 4 && xhr.status === 500) {
				Loading.hide();
				alert('服务器错误: 500');
			}
		};
		xhr.dataType = 'json';
		xhr.withCredentials = true;
		xhr.send(formData);
	}
}
