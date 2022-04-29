function sumSalary(salaries) {
  let sum = 0;
	for (let key in salaries) {	
    if (!Number.isFinite(salaries[key])) {
      salaries[key] = 0;
    } else if (typeof salaries[key] == 'number') {
			sum += salaries[key];
		}	
	} 
	return sum;	
}


