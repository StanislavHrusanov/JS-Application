import { createNewOffer } from "../api/data.js";
import { createOfferPageTemplate } from "../templates/createOfferPageTemplate.js";

export async function createOfferPage(ctx) {
    ctx.render(createOfferPageTemplate(onSubmit));

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

        await createNewOffer(dataAsObj);
        e.target.reset();
        ctx.page.redirect('/dashboard');
    }
}