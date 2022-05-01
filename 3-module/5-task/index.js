function getMinMax(str) {
  let arrayData = str.split(' ');
	let arrayNumbers = arrayData.filter((el) => !isNaN(el));
	let result = new Object();
	result.min = Math.min(...arrayNumbers);
	result.max = Math.max(...arrayNumbers);
	return result;
}
