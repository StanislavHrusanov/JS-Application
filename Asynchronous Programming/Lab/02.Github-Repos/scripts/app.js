async function loadRepos() {
	const username = document.getElementById('username').value;
	const repos = document.getElementById('repos');

	try {
		const response = await fetch(`https://api.github.com/users/${username}/repos`);
		if (response.ok == false) {
			throw new Error(`${response.status} ${response.statusText}`);
		}
		const data = await response.json();

		repos.textContent = '';

		for (let repo of data) {
			const li = elementCreator('li');
			const a = elementCreator('a', `${repo.full_name}`, 'href', repo.html_url);
			li.appendChild(a);
			repos.appendChild(li);
		}
	} catch (error) {
		repos.textContent = `${error.message}`;
	}

	function elementCreator(type, text, attribute, attrName) {
		const newElement = document.createElement(type);
		if (attribute) {
			newElement.setAttribute(attribute, attrName);
		}
		if (text) {
			newElement.textContent = text;
		}
		return newElement;
	}
}