import { render as litrender } from "../node_modules/lit-html/lit-html.js";
import page from '../node_modules/page/page.mjs';
import { deleteFurniture } from "./api/data.js";
import { logout } from "./api/user.js";
import { createPage } from "./views/create.js";
import { dashboard } from "./views/dashboard.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { loginPage } from "./views/login.js";
import { myFurnituresPage } from "./views/myFyrnitures.js";
import { registerPage } from "./views/register.js";

const container = document.querySelector('.container');

page(decorateContext);

page('index.html', '/');
page('/', dashboard);
page('/register', registerPage);
page('/login', loginPage);
page('/logout', onlogout);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/delete/:id', onDelete);
page('/create', createPage);
page('/myFurnitures', myFurnituresPage);

page.start();
updateNavBar();

function render(templateResult) {
    litrender(templateResult, container);
}

function updateNavBar() {
    const user = sessionStorage.getItem('user');

    if (user) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    }

}

function decorateContext(ctx, next) {
    ctx.render = render;
    ctx.updateNavBar = updateNavBar;
    next();
}

function onlogout(ctx) {
    logout();
    ctx.page.redirect('/');
    ctx.updateNavBar();
}

async function onDelete(ctx) {

    const choice = confirm('Are you sure you want delete this item?');
    if (choice) {
        const id = ctx.params.id;
        await deleteFurniture(id);
        ctx.page.redirect('/');
    }
}