function ucFirst(str) {
  let firstUpperLetter = str.charAt(0).toUpperCase();
	let arrStr = str.split('');
	arrStr.shift();
	let strWithOutFirstLetter = arrStr.join('');
	let rezultStr = firstUpperLetter + strWithOutFirstLetter
	return rezultStr;
}
