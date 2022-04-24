function truncate(str, maxlength) {
  if (str.length > maxlength) {
		let arrStr = str.split('');
		arrStr.splice(maxlength - 1, str.length - maxlength + 1, '…');
		let rezultString = arrStr.join('');
		return rezultString;
	} else {
		return str;
	}
}
