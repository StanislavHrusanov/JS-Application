import { html } from "../../node_modules/lit-html/lit-html.js";

export const editTemplate = (memeDetails, onSubmit) => html`
<section id="edit-meme">
    <form @submit=${onSubmit} id="edit-form">
        <h1>Edit Meme</h1>
        <div class="container">
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title" value="${memeDetails.title}">
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description">
            ${memeDetails.description}
            </textarea>
            <label for="imageUrl">Image Url</label>
            <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl"
                value="${memeDetails.imageUrl}">
            <input type="submit" class="registerbtn button" value="Edit Meme">
        </div>
    </form>
</section>`;