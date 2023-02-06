import { html } from "./node_modules/lit-html/lit-html.js";

export const startTemplate = () => html`
<button id="loadBooks">LOAD ALL BOOKS</button>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
    <form id="add-form">
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit">
        </form>

        <form id="edit-form">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Save">
        </form>`;

export const booksTemplate = (books) => html`
        <tr>
             <td>${books[1].title}</td>
             <td>${books[1].author}</td>
             <td>
                <button class=${books[0]}>Edit</button>
                <button class=${books[0]}>Delete</button>
             </td>
        </tr>`;