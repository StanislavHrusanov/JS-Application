import { html } from "../../node_modules/lit-html/lit-html.js";

export const editTemplate = (theaterDetails, onSubmit) => html`
<section id="editPage">
    <form class="theater-form" @submit=${onSubmit}>
        <h1>Edit Theater</h1>
        <div>
            <label for="title">Title:</label>
            <input id="title" name="title" type="text" placeholder="Theater name" value="${theaterDetails.title}">
        </div>
        <div>
            <label for="date">Date:</label>
            <input id="date" name="date" type="text" placeholder="Month Day, Year" value="${theaterDetails.date}">
        </div>
        <div>
            <label for="author">Author:</label>
            <input id="author" name="author" type="text" placeholder="Author" value="${theaterDetails.author}">
        </div>
        <div>
            <label for="description">Theater Description:</label>
            <textarea id="description" name="description"
                placeholder="Description">${theaterDetails.description}</textarea>
        </div>
        <div>
            <label for="imageUrl">Image url:</label>
            <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url" value="${theaterDetails.imageUrl}">
        </div>
        <button class="btn" type="submit">Submit</button>
    </form>
</section>`;