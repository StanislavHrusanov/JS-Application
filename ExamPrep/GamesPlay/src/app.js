import page from "../node_modules/page/page.mjs";
import { render as litrender } from '../node_modules/lit-html/lit-html.js';
import { getUser } from "./util.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { logout } from "./api/user.js";
import { allGamesPage } from "./views/allGames.js";
import { homePage } from "./views/home.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";

const main = document.getElementById('main-content');
document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateCtx);

page('/index.html', '/');
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/allGames', allGamesPage);
page('/createGame', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);


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
        document.getElementById('user').style.display = 'inline';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline';
    }
}

function onLogout() {
    logout();
    updateNavBar();
    page.redirect('/');
}