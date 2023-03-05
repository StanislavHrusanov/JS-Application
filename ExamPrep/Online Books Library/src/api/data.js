import { del, get, post, put } from "./api.js"

const endpoints = {
    'allBooks': '/data/books?sortBy=_createdOn%20desc',
    'addBook': '/data/books',
    'bookDetails': '/data/books/',
    'addLike': '/data/likes',
    'totalLikesForABook': (bookId) => `/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`,
    'likeForBookFromSpecificUser': (bookId, userId) => `/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
    'delete': '/data/books/',
    'edit': '/data/books/',
    'myBooks': (userId) => `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
}

export function getAllBooks() {
    return get(endpoints.allBooks);
}

export function addBook(data) {
    return post(endpoints.addBook, data);
}

export function getBookDetails(bookId) {
    return get(endpoints.bookDetails + bookId);
}

export function like(data) {
    return post(endpoints.addLike, data);
}

export function getTotalLikesForABook(bookId) {
    return get(endpoints.totalLikesForABook(bookId));
}

export function isUserAddLike(bookId, userId) {
    return get(endpoints.likeForBookFromSpecificUser(bookId, userId));
}

export function deleteBook(bookId) {
    return del(endpoints.delete + bookId);
}

export function editBook(bookId, data) {
    return put(endpoints.edit + bookId, data);
}

export function getMyBooks(userId) {
    return get(endpoints.myBooks(userId));
}