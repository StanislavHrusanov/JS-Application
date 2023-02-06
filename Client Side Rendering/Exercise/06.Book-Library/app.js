import { del, get, post, put } from './api.js';
import { render } from './node_modules/lit-html/lit-html.js';
import { booksTemplate, startTemplate } from './template.js';

const body = document.querySelector('body');

render(startTemplate(), body);

const addBookForm = document.getElementById('add-form');
addBookForm.addEventListener('submit', onCreate);
const editBookForm = document.getElementById('edit-form');
editBookForm.addEventListener('submit', onEdit);
editBookForm.remove();

const url = 'http://localhost:3030/jsonstore/collections/books';
let bookId = null;

document.getElementById('loadBooks').addEventListener('click', async () => {
    const books = Object.entries(await get(url));
    render(books.map(booksTemplate), document.querySelector('tbody'))
});

document.addEventListener('click', async (e) => {
    const target = e.target;

    if (target.tagName == 'BUTTON') {
        if (target.textContent == 'Edit') {
            addBookForm.remove();
            body.appendChild(editBookForm);
            bookId = target.className;
            const titleField = editBookForm.querySelectorAll('input')[0];
            const authorField = editBookForm.querySelectorAll('input')[1];

            const book = await get(`${url}/${bookId}`);
            titleField.value = book.title;
            authorField.value = book.author;

        } else if (target.textContent == 'Delete') {
            bookId = target.className;
            del(`${url}/${bookId}`);
        }
    }
});

async function onCreate(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    console.log(formData);

    const title = formData.get('title');
    const author = formData.get('author');

    if (title == '' || author == '') {
        return;
    }
    await post(url, { title, author });
    e.target.reset();
}

async function onEdit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get('title');
    const author = formData.get('author');

    if (title == '' || author == '') {
        return;
    }
    await put(`${url}/${bookId}`, { title, author });
    e.target.reset();
    editBookForm.remove();
    body.appendChild(addBookForm);
}
