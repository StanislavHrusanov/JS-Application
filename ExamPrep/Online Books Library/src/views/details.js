import { deleteBook, getBookDetails, getTotalLikesForABook, isUserAddLike, like } from "../api/data.js";
import { detailsTemplate } from "../templates/detailsTemplate.js";
import { getUser } from "../util.js";
import { until } from "../../node_modules/lit-html/directives/until.js";

export function detailsPage(ctx) {
    const user = getUser();
    const bookId = ctx.params.id;

    ctx.render(until(wrapper(), 'Loading...'));

    async function wrapper() {
        const bookDetails = await getBookDetails(bookId);
        const totalLikesForABook = await getTotalLikesForABook(bookId);
        let isUserLiked;

        if(user){
            isUserLiked = await isUserAddLike(bookId, user._id);
        }

        return detailsTemplate(user, bookDetails, onDelete, isUserLiked, addLike, totalLikesForABook);
    }

    async function onDelete() {
        const choice = confirm('Are you sure you want delete this book?');

        if (choice) {
            await deleteBook(bookId);
            ctx.page.redirect('/');
        }
    }

    async function addLike() {
        await like({ bookId });

        const bookDetails = await getBookDetails(bookId);
        const totalLikesForABook = await getTotalLikesForABook(bookId);
        let isUserLiked;

        if(user){
            isUserLiked = await isUserAddLike(bookId, user._id);
        }
        
        ctx.render(detailsTemplate(user, bookDetails, onDelete, isUserLiked, addLike, totalLikesForABook));
    }
}