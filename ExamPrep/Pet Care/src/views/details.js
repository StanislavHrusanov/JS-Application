import { addDonation, deletePet, getPetDetails, getTotalDonationCount, isUserAddDonation } from "../api/data.js";
import { detailsTemplate } from "../templates/detailsTemplate.js";
import { getUser } from "../util.js";

export async function detailsPage(ctx) {
    const user = getUser();
    const petId = ctx.params.id;
    const petDetails = await getPetDetails(petId);
    const totalDonationCount = await getTotalDonationCount(petId);

    let isUserDonate;

    if (user) {
        isUserDonate = await isUserAddDonation(petId, user._id);
    }

    ctx.render(detailsTemplate(petDetails, user, totalDonationCount, isUserDonate, onDelete, onDonate))

    async function onDonate() {
        await addDonation({ petId });
        ctx.page.redirect(`/details/${petId}`);
    }

    async function onDelete() {

        const choice = confirm('Are you sure you want delete this pet?');

        if (choice) {
            await deletePet(petId);
            ctx.page.redirect('/');
        }
    }
}