import { del, get, post, put } from "./api.js"

const endpoints = {
    'addMovie': '/data/movies',
    'allMovies': '/data/movies',
    'getMovieById': '/data/movies/',
    'addLike': '/data/likes',
    'deleteMovie': '/data/movies/',
    'editMovie': '/data/movies/'
}

export async function addMovie(data) {

    return post(endpoints.addMovie, data);
}

export async function getAllMovies() {
    return get(endpoints.allMovies);
}

export async function getMovieById(id) {
    return get(`${endpoints.getMovieById}${id}`);
}

export async function like(id) {
    return post(endpoints.addLike, { movieId: id });
}

export async function getAllLikes(id) {
    return get(`/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`);
}

export async function deleteMovie(id) {
    return del(endpoints.deleteMovie + id);
}

export async function edit(id, data) {
    return put(endpoints.editMovie + id, data);
}

export async function getCountOfLikesFromUser(movieId, userId) {
    return get(`/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22 `);
}