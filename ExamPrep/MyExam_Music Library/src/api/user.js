import { get, post } from "./api.js"

const endpoints = {
    'register': '/users/register',
    'login': '/users/login',
    'logout': '/users/logout'
}

export async function register(data) {
    const user = await post(endpoints.register, data);

    localStorage.setItem('user', JSON.stringify(user));
}

export async function login(data) {
    const user = await post(endpoints.login, data);

    localStorage.setItem('user', JSON.stringify(user));
}

export function logout() {
    get(endpoints.logout);

    localStorage.removeItem('user');
}