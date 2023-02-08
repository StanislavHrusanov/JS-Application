import { get, post } from "./api.js"

const endpoints = {
    'register': '/users/register',
    'login':'/users/login',
    'logout': '/users/logout'
}

export async function register(data) {
    const user = await post(endpoints.register, data);

    sessionStorage.setItem('user', JSON.stringify(user));
}

export async function login(data){
    const user = await post(endpoints.login,data);

    sessionStorage.setItem('user',JSON.stringify(user));
}

export function logout() {
    get(endpoints.logout);

    sessionStorage.removeItem('user');
}