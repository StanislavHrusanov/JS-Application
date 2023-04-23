import page from './node_modules/page/page.mjs';
import { render as litrender } from './node_modules/lit-html/lit-html.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { logout } from './api/user.js';
import { dashboardPage } from './views/dashboard.js';
import { detailsPage, onDelete } from './views/details.js';
import { editPage } from './views/edit.js';
import { addPairPage } from './views/addPair.js';
import { searchPage } from './views/search.js';

const main = document.querySelector('main');

page(decorateContext);

page('/index.html', '/');
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', onlogout);
page('/dashboard', dashboardPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/delete/:id', onDelete);
page('/addPair', addPairPage);
page('/search',searchPage);
page.start();

updateNavBar();


function updateNavBar() {
    const user = sessionStorage.getItem('user');

    if (user) {
        document.querySelectorAll('.user').forEach(e => e.style.display = 'inline-block');
        document.querySelectorAll('.guest').forEach(e => e.style.display = 'none');
    } else {
        document.querySelectorAll('.user').forEach(e => e.style.display = 'none');
        document.querySelectorAll('.guest').forEach(e => e.style.display = 'inline-block');
    }

}

function render(templateResult) {
    litrender(templateResult, main);
}

function decorateContext(ctx, next) {
    ctx.render = render;
    ctx.updateNavBar = updateNavBar;
    next();
}

function onlogout(ctx) {
    logout();
    ctx.page.redirect('/dashboard');
    ctx.updateNavBar();
}