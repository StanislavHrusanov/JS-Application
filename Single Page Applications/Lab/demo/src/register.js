import { createSubmitHandler } from "./helper.js";
import { post } from "./api.js";

const section = document.getElementById('registerView');
const form = section.querySelector('form');
createSubmitHandler(form, onSubmit);
section.remove();
let ctx = null;

export function showRegister(inCtx) {
    ctx = inCtx;
    ctx.render(section);
}

async function onSubmit({ email, password, repass }) {

    if (email == '' || password == '') {
        return alert('All fields are required!');
    }
    if (password != repass) {
        return alert('Password and re-password don\'t match');
    }

    const { accessToken, _id } = await post('/users/register', { email, password });

    const userData = {
        email,
        accessToken,
        id: _id
    };

    sessionStorage.setItem('userData', JSON.stringify(userData));
    ctx.checkUserNav();
    ctx.goTo('homeBtn');
}