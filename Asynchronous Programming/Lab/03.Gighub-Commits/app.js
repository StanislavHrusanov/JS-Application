async function loadCommits() {
    const username = document.getElementById('username').value;
    const repository = document.getElementById('repo').value;
    const commits = document.getElementById('commits');

    try {
        const response = await fetch(`https://api.github.com/repos/${username}/${repository}/commits`);

        if (response.ok == false) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        const data = await response.json();

        commits.textContent = '';

        for (let commit of data) {
            const li = elementCreator('li', `${commit.commit.author.name}: ${commit.commit.message}`);
            commits.appendChild(li);
        }

    } catch (error) {
        commits.textContent = `Error: ${error.message} (Not Found)`;
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