import { editOffer, getOfferDetails } from "../api/data.js";
import { editPageTemplate } from "../templates/editPageTemplate.js";

export async function editPage(ctx) {
    const offerId = ctx.params.id;
    const offerDetails = await getOfferDetails(offerId);

    ctx.render(editPageTemplate(onSubmit, offerDetails));

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const dataAsObj = Object.fromEntries(formData.entries());

        for (let key in dataAsObj) {
            dataAsObj[key] = dataAsObj[key].trim();
            if (dataAsObj[key] == '') {
                return alert('All fields are required!');
            }
        }

        await editOffer(offerId, dataAsObj);
        e.target.reset();
        ctx.page.redirect(`/details/${offerId}`);
    }
}