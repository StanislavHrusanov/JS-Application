const tbody = document.querySelector('tbody');
const url = 'http://localhost:3030/jsonstore/collections/books';
const inputFields = Array.from(document.querySelectorAll('form input'));
const submitBtn = document.querySelector('form button');
const formText = document.querySelector('form h3');
let buttonId = '';

document.getElementById('loadBooks').addEventListener('click', async (e) => {
    try {
        tbody.innerHTML = '';

        const response = await fetch(url);

        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const data = await response.json()

        for (let key in data) {
            const tr = elementCreator('tr');
            tr.appendChild(elementCreator('td', data[key].title));
            tr.appendChild(elementCreator('td', data[key].author));
            const buttonTd = elementCreator('td');
            const editBtn = elementCreator('button', 'Edit', 'id', key);
            editBtn.addEventListener('click', updateBook);
            buttonTd.appendChild(editBtn);
            const deleteBtn = elementCreator('button', 'Delete', 'id', key);
            deleteBtn.addEventListener('click', deleteBook);
            buttonTd.appendChild(deleteBtn);
            tr.appendChild(buttonTd);
            tbody.appendChild(tr);
        }

    } catch (error) {
        alert(error.message);
    }
});

submitBtn.addEventListener('click', createBook);

async function createBook(e) {
    e.preventDefault();

    try {
        const book = {};

        inputFields.forEach(input => {
            if (input.value == '') {
                throw new Error('All fields are required!');
            }
            book[input.name] = input.value;
        });

        let response = null;
        if (submitBtn.textContent == 'Submit') {
            response = await fetch(url, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(book)
            });
        } else if (submitBtn.textContent == 'Save') {
            response = await fetch(`${url}/${buttonId}`, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(book)
            });
        }
        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.message);
        }
        formText.textContent = 'FORM';
        submitBtn.textContent = 'Submit';

        inputFields.forEach(i => i.value = '');

        loadBooks.click();

    } catch (error) {
        alert(error.message);
    }
}

async function updateBook(e) {
    const button = e.target;
    const title = e.target.parentElement.parentElement.children[0].textContent;
    const author = e.target.parentElement.parentElement.children[1].textContent;
    formText.textContent = 'Edit FORM';
    submitBtn.textContent = 'Save';
    const [titleField, authorField] = inputFields;
    titleField.value = title;
    authorField.value = author;
    buttonId = button.id;
}

async function deleteBook(e) {
    const button = e.target;

    fetch(`${url}/${button.id}`, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    loadBooks.click();
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