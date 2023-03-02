import { html } from "../../node_modules/lit-html/lit-html.js";

export const editTemplate = (albumDetails, onSubmit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Album</h2>
        <form class="edit-form" @submit=${onSubmit}>
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band"
                value="${albumDetails.singer}" />
            <input type="text" name="album" id="album-album" placeholder="Album" value="${albumDetails.album}" />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url"
                value="${albumDetails.imageUrl}" />
            <input type="text" name="release" id="album-release" placeholder="Release date"
                value="${albumDetails.release}" />
            <input type="text" name="label" id="album-label" placeholder="Label" value="${albumDetails.label}" />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" value="${albumDetails.sales}" />

            <button type="submit">post</button>
        </form>
    </div>
</section>`;