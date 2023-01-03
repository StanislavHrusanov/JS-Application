function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/messenger';
    const textArea = document.getElementById('messages');
    const nameField = document.querySelector('#controls').children[1];
    const contentField = document.querySelector('#controls').children[4];
    const sendBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');

    sendBtn.addEventListener('click', send);
    refreshBtn.addEventListener('click', refresh);

    async function send(e) {
        e.preventDefault();

        try {
            if (nameField.value == '') {
                throw new Error('Write your name!');
            }

            if (contentField.value == '') {
                throw new Error('Write your message!');
            }

            const body = JSON.stringify({
                author: nameField.value,
                content: contentField.value
            });

            const response = await fetch(url, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body
            });

            if (response.ok == false) {
                const error = await response.json();
                throw new Error(error.message);
            }
        } catch (error) {
            alert(error.message);
        }
    }

    async function refresh(e) {
        const output = [];

        const response = await fetch(url);
        const data = await response.json();

        for (let key in data) {
            output.push(`${data[key].author}: ${data[key].content}`);
        }

        textArea.value = output.join('\n');
    }
}

attachEvents();