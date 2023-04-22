import { editPet, getPetDetails } from "../api/data.js";
import { editTemplate } from "../templates/editTemplate.js";
import { getFormDataAsObj } from "../util.js";

export async function editPage(ctx) {
    const petId = ctx.params.id;
    const petDetails = await getPetDetails(petId);
    ctx.render(editTemplate(petDetails, onSubmit));

    async function onSubmit(e) {

        const dataAsObj = getFormDataAsObj(e);

        await editPet(petId, dataAsObj);
        e.target.reset();
        ctx.page.redirect(`/details/${petId}`);
    }
}