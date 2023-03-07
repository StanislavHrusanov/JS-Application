import page from "../node_modules/page/page.mjs";
import { render as litrender } from "../node_modules/lit-html/lit-html.js";
import { getUser } from "./util.js";
import { dashboardPage } from "./views/dashboard.js";
import { registerPage } from "./views/register.js";
import { logout } from "./api/user.js";
import { loginPage } from "./views/login.js";
import { addBookPage } from "./views/addBook.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { myBooksPage } from "./views/myBooks.js";


const main = document.getElementById('site-content');
document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateCtx);

page('/index.html', '/');
page('/', dashboardPage);
page('/register', registerPage);
page('/login', loginPage);
page('/addBook', addBookPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/myBooks', myBooksPage);

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
        document.querySelector('#user span').textContent = `Welcome, ${user.email}`;
        document.querySelector('#user').style.display = 'inline';
        document.querySelector('#guest').style.display = 'none';
    } else {
        document.querySelector('#user').style.display = 'none';
        document.querySelector('#guest').style.display = 'inline';
    }
}

function onLogout() {
    logout();
    updateNavBar();
    page.redirect('/');
}