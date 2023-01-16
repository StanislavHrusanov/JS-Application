import { logout } from "./api/users.js";
import { initialize } from "./router.js";
import { showAddMovie } from "./views/addMovie.js";
import { showEditMovie } from "./views/editMovie.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { showMovieDetails } from "./views/details.js";
import { showRegister } from "./views/register.js";


const views = {
    '/': showHome,
    '/register': showRegister,
    '/login': showLogin,
    '/addMovie': showAddMovie,
    '/editMovie': showEditMovie,
    '/details': showMovieDetails,
    '/logout': onLogout
}

const router = initialize(views);
router.updateNav();
router.goTo('/');

function onLogout() {
    logout();
    router.updateNav();
    router.goTo('/');
}