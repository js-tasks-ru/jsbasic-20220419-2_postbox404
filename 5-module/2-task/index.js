function toggleText() {
  let btnToggle = document.querySelector('.toggle-text-button');
	let text = document.querySelector('#text');

	btnToggle.addEventListener('click', () => {
	  if (!text.hasAttribute('hidden')) {
			text.setAttribute('hidden', 'hidden');
		} else {
			text.removeAttribute('hidden');
		}
	});
	text.removeAttribute('hidden');
}


