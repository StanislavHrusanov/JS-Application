import { createFurniture } from "../api/data.js";
import { createTemplate } from "../template.js";

export async function createPage(ctx) {
    const id = ctx.params.id;
    ctx.render(createTemplate());
    ctx.updateNavBar();
    const form = document.querySelector('form');
    form.addEventListener('submit', onSubmit);

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(form);

        const make = formData.get('make').trim();
        const model = formData.get('model').trim();
        const year = formData.get('year').trim();
        const description = formData.get('description').trim();
        const price = formData.get('price').trim();
        const img = formData.get('img').trim();
        const material = formData.get('material').trim();

        if (make.length < 4) {
            return alert('Make must be at least 4 symbols long!');
        }
        if (model.length < 4) {
            return alert('Model must be at least 4 symbols long!');
        }
        if (year < 1950 || year > 2050) {
            return alert('Year must be between 1950 and 2050!');
        }
        if (description.length <= 10) {
            return alert('Description must be more than 10 symbols!');
        }
        if (price < 0) {
            return alert('Price must be a positive number!');
        }
        if (img == '') {
            return alert('Img is required!');
        }

        await createFurniture({
            make,
            model,
            year,
            description,
            price,
            img,
            material
        });
        ctx.page.redirect(`/`);
    }
}