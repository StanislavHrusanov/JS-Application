import { html } from "../../node_modules/lit-html/lit-html.js";

export const editTemplate = (gameDetails, onSubmit) => html`
<section id="edit-page" class="auth">
    <form @submit=${onSubmit} id="edit">
        <div class="container">

            <h1>Edit Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" value="${gameDetails.title}">

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" value="${gameDetails.category}">

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" value="${gameDetails.maxLevel}">

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" value="${gameDetails.imageUrl}">

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary">${gameDetails.summary}</textarea>
            <input class="btn submit" type="submit" value="Edit Game">

        </div>
    </form>
</section>`;