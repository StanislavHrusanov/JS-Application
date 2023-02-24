import page from "../node_modules/page/page.mjs";
import { render as litrender } from '../node_modules/lit-html/lit-html.js';
import { getUser } from "./util.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { logout } from "./api/user.js";
import { createPage } from "./views/create.js";
import { allMemesPage } from "./views/allMemes.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { myProfilePage } from "./views/MyProfile.js";

const main = document.querySelector('main');

document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateCtx);

page('/index.html', '/');
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/createMeme', createPage);
page('/allMemes', allMemesPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/myProfile', myProfilePage);

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
        document.querySelector('.user span').textContent = `Welcome, ${user.email}`;
        document.querySelector('.user').style.display = 'inline';
        document.querySelector('.guest').style.display = 'none';
    } else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'inline';
    }
}

function onLogout() {
    logout();
    updateNavBar();
    page.redirect('/');
}