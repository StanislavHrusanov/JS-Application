import { apply, deleteOffer, getCountOfApplicationForUser, getOfferDetails, getTotalApplication } from "../api/data.js";
import { detailsPageTemplate } from "../templates/detailsPageTemplate.js";
import { getUser } from "../util.js";

export async function detailsPage(ctx) {
    const offerId = ctx.params.id;
    const user = getUser();
    const offerDetails = await getOfferDetails(offerId);
    const totalApplicationsCount = await getTotalApplication(offerId);

    let countOfApplicatiosForUser;
    if (user) {
        countOfApplicatiosForUser = await getCountOfApplicationForUser(offerId, user._id);
    }

    ctx.render(detailsPageTemplate(offerDetails, totalApplicationsCount, user, countOfApplicatiosForUser))
}

export async function onApply(ctx) {

    const offerId = ctx.params.id;

    await apply({ offerId });
    ctx.page.redirect(`/details/${offerId}`);
}

export async function onDelete(ctx) {
    const offerId = ctx.params.id;

    const choice = confirm('Are you sure you want to delete this offer?');

    if (choice) {
        await deleteOffer(offerId);
        ctx.page.redirect('/dashboard');
    }
}