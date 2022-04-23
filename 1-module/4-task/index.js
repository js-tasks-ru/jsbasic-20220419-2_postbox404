function checkSpam(str) {
  str = str.toLowerCase();
	if (str.search('1xbet') > -1 || str.search('xxx') > -1) {
		return true;
	} else {
		return false;
	}
}
