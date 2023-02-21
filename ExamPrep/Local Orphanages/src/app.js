import page from '../node_modules/page/page.mjs';
import { render as litrender } from '../node_modules/lit-html/lit-html.js';
import { getUser } from './util.js';
import { dashboardPage } from './views/dashboardPage.js';
import { registerPage } from './views/registerPage.js';
import { loginPage } from './views/loginPage.js';
import { logout } from './api/user.js';
import { createPostPage } from './views/createPostPage.js';
import { detailsPage } from './views/detailsPage.js';
import { editPostPage } from './views/editPostPage.js';
import { myPostsPage } from './views/myPostsPage.js';

const main = document.getElementById('main-content');
document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateCtx);

page('/index.html', '/');
page('/', dashboardPage);
page('/register', registerPage);
page('/login', loginPage);
page('/createPost', createPostPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPostPage);
page('/myPosts', myPostsPage);

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
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    }
}

function onLogout() {
    logout();
    updateNavBar();
    page.redirect('/');
}
