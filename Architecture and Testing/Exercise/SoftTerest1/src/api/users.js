import { get, post } from "./api.js"

const endpoints = {
    'register': '/users/register',
    'login': '/users/login',
    'logout': '/users/logout',
}


export async function register(data) {
    const userData = await post(endpoints.register, data);

    localStorage.setItem('userData', JSON.stringify(userData));
}

export async function login(data) {
    const userData = await post(endpoints.login, data);

    localStorage.setItem('userData', JSON.stringify(userData));
}

export async function logout() {
    get(endpoints.logout);

    localStorage.removeItem('userData');
}