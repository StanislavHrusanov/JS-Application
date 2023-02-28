import { until } from "../../node_modules/lit-html/directives/until.js";
import { deleteTheater, getTheaterDetails, getTotalCountOfLikes, isUserLiked, like } from "../api/data.js";
import { detailsTemplate } from "../templates/detailsTemplate.js";
import { getUser } from "../util.js";

export function detailsPage(ctx) {
    const user = getUser();
    const theaterId = ctx.params.id;

    ctx.render(until(wrapper(), 'Loading...'));

    async function wrapper() {
        const theaterDetails = await getTheaterDetails(theaterId);
        const likes = await getTotalCountOfLikes(theaterId);
        let isUserAddLike;

        if (user) {
            isUserAddLike = await isUserLiked(theaterId, user._id);
        }

        return detailsTemplate(user, theaterDetails, isUserAddLike, likes, onDelete, addLike)
    }

    async function onDelete() {
        const choice = confirm('Are you sure you want delete this theater?');

        if (choice) {
            await deleteTheater(theaterId);
            ctx.page.redirect('/profile');
        }
    }

    async function addLike() {
        await like({ theaterId });

        ctx.page.redirect('/details/' + theaterId);
    }
}