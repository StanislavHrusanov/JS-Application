import page from "../node_modules/page/page.mjs";
import { render as litrender } from "../node_modules/lit-html/lit-html.js";
import { getUser } from "./util.js";
import { logout } from "./api/user.js";
import { registerPage } from "./views/register.js";
import { loginPage } from "./views/login.js";
import { homePage } from "./views/home.js";
import { dashboardPage } from "./views/dashboard.js";
import { addAlbumPage } from "./views/addAlbum.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";

const main = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', onLogout);


page(decorateCtx);

page('/index.html', '/');
page('/', homePage);
page('/dashboard', dashboardPage);
page('/register', registerPage);
page('/login', loginPage);
page('/add', addAlbumPage);
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
        document.querySelector('.user').style.display = 'inline-block';
        document.querySelector('.guest').style.display = 'none';
    } else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'inline-block';
    }
}

function onLogout() {
    logout();
    updateNavBar();
    page.redirect('/dashboard');
}