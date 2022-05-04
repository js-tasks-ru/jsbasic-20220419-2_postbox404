function makeFriendsList(friends) {
  let ul = document.createElement('ul');
	document.body.appendChild(ul);
  friends.forEach((element, i) => {
    ul.insertAdjacentHTML('beforeend', `<li>${friends[i].firstName} ${friends[i].lastName}</li>`)
  });
  return ul;
}
