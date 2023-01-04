function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/phonebook';
    const personField = document.getElementById('person');
    const phoneField = document.getElementById('phone');
    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');
    const phoneBookUl = document.getElementById('phonebook');

    loadBtn.addEventListener('click', load);
    createBtn.addEventListener('click', create);
    document.addEventListener('click', deletePerson);

    async function load(e) {

        try {
            const response = await fetch(url);

            if (response.ok == false) {
                const error = await response.json()
                throw new Error(error.message);
            }
            Array.from(phoneBookUl.children).forEach(p => p.remove());
            const data = await response.json();

            for (let key in data) {
                const person = data[key].person;
                const phone = data[key].phone;
                const id = data[key]._id;
                const li = elementCreator('li', `${person}: ${phone}`);
                li.appendChild(elementCreator('button', 'Delete', 'id', id));
                phoneBookUl.appendChild(li);
            }

        } catch (error) {
            alert(error.message);
        }
    }

    async function create(e) {

        try {

            if (personField.value == '') {
                throw new Error('Person is required!');
            }
            if (phoneField.value == '') {
                throw new Error('Phone is required!');
            }

            const body = JSON.stringify({
                person: personField.value,
                phone: phoneField.value
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
            const data = await response.json();

            const li = elementCreator('li', `${data.person}: ${data.phone}`);
            li.appendChild(elementCreator('button', 'Delete', 'id', data._id));
            phoneBookUl.appendChild(li);

            personField.value = '';
            phoneField.value = '';

        } catch (error) {
            alert(error.message);
        }
    }

    async function deletePerson(e) {
        if (e.target.tagName == 'BUTTON') {
            const button = e.target;
            if (button.textContent == 'Delete') {

                try {
                    const response = await fetch(`${url}/${button.id}`, {
                        method: 'delete',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });

                    if (response.ok == false) {
                        const error = await response.json();
                        throw new Error(error.message);
                    }

                    e.target.parentElement.remove();

                } catch (error) {
                    alert(error.message);
                }
            }
        }
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

attachEvents();