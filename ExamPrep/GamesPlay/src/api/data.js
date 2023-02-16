import { del, get, post, put } from "./api.js"

const endpoints = {
    'allGames': '/data/games?sortBy=_createdOn%20desc',
    'newGames': '/data/games?sortBy=_createdOn%20desc&distinct=category',
    'create': '/data/games',
    'gameDetails': '/data/games/',
    'loadAllComments': (gameId) => `/data/comments?where=gameId%3D%22${gameId}%22`,
    'createComment': '/data/comments',
    'delete': '/data/games/',
    'edit': '/data/games/'
}

export function getAllGames() {
    return get(endpoints.allGames);
}

export function getNewGames() {
    return get(endpoints.newGames);
}

export function createGame(data) {
    return post(endpoints.create, data);
}

export function getGameDetails(gameId) {
    return get(endpoints.gameDetails + gameId);
}

export function getAllComments(gameId) {
    return get(endpoints.loadAllComments(gameId));
}

export function createComment(data) {
    return post(endpoints.createComment, data);
}

export function deleteGame(gameId) {
    return del(endpoints.delete + gameId);
}

export function editGame(gameId, data) {
    return put(endpoints.edit + gameId, data);
}