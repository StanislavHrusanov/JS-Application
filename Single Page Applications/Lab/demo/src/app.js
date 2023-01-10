import { showHome } from './home.js';
import { showCatalog } from './catalog.js';
import { showAbout } from './about.js';
import { showRegister } from './register.js';
import { showLogin } from './login.js';
import { checkUserNav, logout } from './helper.js'
import { showCreate } from './create.js';
import { render } from './dom.js';

document.querySelector('nav').addEventListener('click', onNavigate);

const sections = {
    'homeBtn': showHome,
    'catalogBtn': showCatalog,
    'aboutBtn': showAbout,
    'registerBtn': showRegister,
    'loginBtn': showLogin,
    'createBtn': showCreate,
    'logoutBtn': logout
};

checkUserNav();

goTo('homeBtn');

function onNavigate(e) {
    if (e.target.tagName == 'A') {
        const viewName = e.target.id;

        if (goTo(viewName)) {
            e.preventDefault();
        }
    }
}

function goTo(viewName) {
    const view = sections[viewName];

    if (typeof view == 'function') {
        view({
            render,
            checkUserNav,
            goTo
        });
        return true;
    } else {
        return false;
    }
}