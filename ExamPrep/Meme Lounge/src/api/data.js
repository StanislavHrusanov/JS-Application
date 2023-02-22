import { del, get, post, put } from "./api.js"

const endpoints = {
    'create': '/data/memes',
    'allMemes': '/data/memes?sortBy=_createdOn%20desc',
    'memeDetails': '/data/memes/',
    'delete': '/data/memes/',
    'edit': '/data/memes/',
    'userMemes': (userId) => `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
}

export function createMeme(data) {
    return post(endpoints.create, data);
}

export function getAllMemes() {
    return get(endpoints.allMemes);
}

export function getMemeDetails(memeId) {
    return get(endpoints.memeDetails + memeId);
}

export function deleteMeme(memeId) {
    return del(endpoints.delete + memeId);
}

export function editMeme(memeId, data) {
    return put(endpoints.edit + memeId, data);
}

export function getUserMemes(userId) {
    return get(endpoints.userMemes(userId));
}