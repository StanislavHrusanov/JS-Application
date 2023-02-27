import { del, get, post, put } from "./api.js"

const endpoints = {
    'allTheaters': '/data/theaters?sortBy=_createdOn%20desc&distinct=title',
    'create': '/data/theaters',
    'details': '/data/theaters/',
    'addLike': '/data/likes',
    'countOfLikes': (theaterId) => `/data/likes?where=theaterId%3D%22${theaterId}%22&distinct=_ownerId&count`,
    'isUserLiked': (theaterId, userId) => `/data/likes?where=theaterId%3D%22${theaterId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
    'delete': '/data/theaters/',
    'edit': '/data/theaters/',
    'profileTheaters': (userId) => `/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
}

export function getAllTheaters() {
    return get(endpoints.allTheaters);
}

export function createTheater(data) {
    return post(endpoints.create, data);
}

export function getTheaterDetails(theaterId) {
    return get(endpoints.details + theaterId);
}

export function like(data) {
    return post(endpoints.addLike, data);
}

export function getTotalCountOfLikes(theaterId) {
    return get(endpoints.countOfLikes(theaterId));
}

export function isUserLiked(theaterId, userId) {
    return get(endpoints.isUserLiked(theaterId, userId));
}

export function deleteTheater(theaterId) {
    return del(endpoints.delete + theaterId);
}

export function editTheater(theaterId, data) {
    return put(endpoints.edit + theaterId, data);
}

export function getProfileTheaters(userId) {
    return get(endpoints.profileTheaters(userId));
}