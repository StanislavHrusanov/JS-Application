import { html } from "../../node_modules/lit-html/lit-html.js";

export const myBooksTemplate = (myBooks) => html`
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>

    ${myBooks.length != 0 ? html`<ul class="my-books-list">
        ${myBooks.map(myBookTemplate)}
    </ul>`: html`
    <p class="no-books">No books in database!</p>`}

</section>`;

const myBookTemplate = (myBook) => html`
<li class="otherBooks">
    <h3>${myBook.title}</h3>
    <p>Type: ${myBook.type}</p>
    <p class="img"><img src="${myBook.imageUrl}"></p>
    <a class="button" href="/details/${myBook._id}">Details</a>
</li>`;