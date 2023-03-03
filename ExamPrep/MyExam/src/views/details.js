import { deleteAlbum, getAlbumDetails, getTotalCountOfLikes, isUserLiked, like } from "../api/data.js";
import { detailsTemplate } from "../templates/detailsTemplate.js";
import { getUser } from "../util.js";
import { until } from "../../node_modules/lit-html/directives/until.js";

export function detailsPage(ctx) {
    const user = getUser();
    const albumId = ctx.params.id;

    ctx.render(until(wrapper(), 'Loading...'));

    async function wrapper() {
        const albumDetails = await getAlbumDetails(albumId);
        const likes = await getTotalCountOfLikes(albumId);
        let isUserAddLike;

        if (user) {
            isUserAddLike = await isUserLiked(albumId, user._id);
        }

        return detailsTemplate(user, albumDetails, likes, isUserAddLike, addLike, onDelete);
    }

    async function addLike() {
        await like({ albumId });
        ctx.page.redirect('/details/' + albumId);
    }

    async function onDelete() {
        const choice = confirm('Are you sure you want delete this album?');

        if (choice) {
            await deleteAlbum(albumId);
            ctx.page.redirect('/dashboard');
        }
    }
}