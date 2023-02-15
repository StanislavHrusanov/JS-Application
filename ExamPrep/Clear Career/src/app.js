import page from '../node_modules/page/page.mjs';
import { render as litrender } from '../node_modules/lit-html/lit-html.js';
import { homePage } from './views/home.js';
import { getUser } from './util.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { logout } from './api/user.js';
import { dashboardPage } from './views/dashboard.js';
import { createOfferPage } from './views/createOffer.js';
import { detailsPage, onApply, onDelete } from './views/details.js';
import { editPage } from './views/edit.js';

const main = document.querySelector('main');

page(decorateCtx);

page('/index.html', '/');
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', onLogout);
page('/dashboard', dashboardPage);
page('/createOffer', createOfferPage);
page('/details/:id', detailsPage);
page('/apply/:id', onApply);
page('/delete/:id', onDelete);
page('/edit/:id', editPage);

page.start();
updateNavBar();

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

function onLogout(ctx) {
    logout();
    ctx.updateNavBar();
    ctx.page.redirect('/dashboard');
}