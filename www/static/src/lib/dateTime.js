'use strict';

export default class {
	/*
	 * 通过时间戳获取日期。
	 * @param timestamp 时间戳（秒）
	 * @param format 日期格式
	 * @return 格式化后的日期
	 */
	static format(timestamp, format) {
		if (timestamp === undefined) {
			format = '';
		} else {
			const WEEK = ['日','一','二','三','四','五','六'];
			timestamp/=1000;
			let date = timestamp !== 0 ? new Date(timestamp * 1000) : new Date();
			let year = date.getFullYear();
			let month = date.getMonth() + 1;
			let week = date.getDay();
			let day = date.getDate();
			let hour = date.getHours();
			let minute = date.getMinutes();
			let second = date.getSeconds();

			format = format ? format : 'YYYY-MM-DD';
			format = format.replace(/yyyy|YYYY/, year);
			format = format.replace(/yy|YY/, (year % 100) > 9 ? (year % 100).toString() : '0' + (year % 100));
			format = format.replace(/MM/, month > 9 ? month.toString() : '0' + month);
			format = format.replace(/M/, month);
			format = format.replace(/w|W/, WEEK[week]);
			format = format.replace(/dd|DD/, day > 9 ? day.toString() : '0' + day);
			format = format.replace(/d|D/, day);
			format = format.replace(/hh|HH/, hour > 9 ? hour.toString() : '0' + hour);
			format = format.replace(/h|H/, hour);
			format = format.replace(/mm/, minute > 9 ? minute.toString() : '0' + minute);
			format = format.replace(/m/, minute);
			format = format.replace(/ss|SS/, second > 9 ? second.toString() : '0' + second);
			format = format.replace(/s|S/, second);
		}

		return format;
	}
}
