function camelize(str) {
  let strToArray = str.split('')
	for (let i = 0; i < strToArray.length; i++) {
		if (strToArray.includes('-')) {
			strToArray.splice(strToArray.indexOf('-'), 2, strToArray[strToArray.indexOf('-') + 1].toUpperCase());
		}
	}	
	let arrToString = strToArray.join('');
	return arrToString;	
}
