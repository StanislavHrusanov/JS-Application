import page from "../node_modules/page/page.mjs";
import { render as litrender } from "../node_modules/lit-html/lit-html.js";
import { getUser } from "./util.js";
import { logout } from "./api/user.js";
import { homePage } from "./views/home.js";
import { registerPage } from "./views/register.js";
import { loginPage } from "./views/login.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { profilePage } from "./views/profile.js";

const main = document.getElementById('content');
document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateCtx);

page('/index.html', '/');
page('/', homePage);
page('/register', registerPage);
page('/login', loginPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/profile', profilePage);


page.start();


function render(templateResult) {
    litrender(templateResult, main);
}

function decorateCtx(ctx, next) {
    ctx.render = render;
    ctx.updateNavBar = updateNavBar;

    next();
}

function updateNavBar() {
    const user = getUser();

    if (user) {
        document.querySelectorAll('.user').forEach(e => e.style.display = 'inline-block');
        document.querySelectorAll('.guest').forEach(e => e.style.display = 'none');
    } else {
        document.querySelectorAll('.user').forEach(e => e.style.display = 'none');
        document.querySelectorAll('.guest').forEach(e => e.style.display = 'inline-block');
    }
}

function onLogout() {
    logout();
    updateNavBar();
    page.redirect('/');
}