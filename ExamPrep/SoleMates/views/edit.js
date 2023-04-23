import { edit, getShoeDetails } from "../api/data.js";
import { editTemplate } from "../templates/editTemplate.js";

export async function editPage(ctx) {
    const id = ctx.params.id;
    const shoe = await getShoeDetails(id);
    console.log(shoe)
    ctx.render(editTemplate(shoe));

    const form = document.querySelector('form');
    form.addEventListener('submit', onSubmit);

    async function onSubmit(ev) {
        ev.preventDefault();

        const formData = new FormData(form);

        const dataAsObg = Object.fromEntries(formData.entries());

        for (let key in dataAsObg) {
            if (dataAsObg[key] == '') {
                return alert('All fields are required!');
            }
        }

        await edit(id, dataAsObg);
        form.reset();
        ctx.page.redirect(`/details/${id}`);
    }
}