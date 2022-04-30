function showSalary(users, age) {
  let filterArr = users.filter(el => el['age'] <= age);
	let namesArr = filterArr.map(person => `${person['name']}, ${person['balance']}`);
	let str = '';
	for (let i = 0; i < namesArr.length - 1; i++) {
		str += `${namesArr[i]}\n`;
	}
	return str + namesArr[namesArr.length - 1];
}
