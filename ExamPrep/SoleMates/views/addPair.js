import { addPair } from "../api/data.js";
import { addPairTemplate } from "../templates/addPairTemplate.js";

export function addPairPage(ctx) {
    ctx.render(addPairTemplate());

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
        await addPair(dataAsObg);
        form.reset();
        ctx.page.redirect('/dashboard');
    }
}