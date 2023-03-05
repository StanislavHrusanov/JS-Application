import { del, get, post, put } from "./api.js"

const endpoints = {
    'allAlbums': '/data/albums?sortBy=_createdOn%20desc',
    'add': '/data/albums',
    'details': '/data/albums/',
    'delete': '/data/albums/',
    'addLike': '/data/likes',
    'totalCountOfLikes': (albumId) => `/data/likes?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`,
    'isUserAddLike': (albumId, userId) => `/data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
    'edit': '/data/albums/'
};

export function getAllAlbums() {
    return get(endpoints.allAlbums);
}

export function addAlbum(data) {
    return post(endpoints.add, data);
}

export function getAlbumDetails(albumId) {
    return get(endpoints.details + albumId);
}

export function deleteAlbum(albumId) {
    return del(endpoints.delete + albumId);
}

export function like(data) {
    return post(endpoints.addLike, data);
}

export function getTotalCountOfLikes(albumId) {
    return get(endpoints.totalCountOfLikes(albumId));
}

export function isUserLiked(albumId, userId) {
    return get(endpoints.isUserAddLike(albumId, userId));
}

export function editAlbum(albumId, data) {
    return put(endpoints.edit + albumId, data);
}