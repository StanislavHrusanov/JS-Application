import { logout } from "./api/users.js";
import { initialize } from "./router.js";
import { showCreate } from "./views/create.js";
import { showDashboard } from "./views/dashboard.js";
import { showDetails } from "./views/details.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { showRegister } from "./views/register.js";


const views = {
    '/': showHome,
    '/register': showRegister,
    '/login': showLogin,
    '/dashboard': showDashboard,
    '/details': showDetails,
    '/create': showCreate,
    '/logout': onLogout
};

const router = initialize(views);
router.updateNav();
router.goTo('/');

function onLogout() {
    logout();
    router.updateNav();
    router.goTo('/');
}
