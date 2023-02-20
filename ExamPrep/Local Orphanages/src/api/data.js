import { del, get, post, put } from "./api.js"

const endpoints = {
    'allPosts': '/data/posts?sortBy=_createdOn%20desc',
    'create': '/data/posts',
    'postDetails': '/data/posts/',
    'donate': '/data/donations',
    'totalDonationsCount': (postId) => `/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`,
    'isUserDonate': (postId, userId) => `/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
    'edit': '/data/posts/',
    'delete': '/data/posts/',
    'myPosts': (userId) => `/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
}

export function getAllPosts() {
    return get(endpoints.allPosts);
}

export function createPost(data) {
    return post(endpoints.create, data);
}

export function getPostDetails(postId) {
    return get(endpoints.postDetails + postId);
}

export function donate(postId) {
    return post(endpoints.donate, postId);
}

export function getTotalDonationsCount(postId) {
    return get(endpoints.totalDonationsCount(postId));
}

export function isUserDonate(postId, userId) {
    return get(endpoints.isUserDonate(postId, userId));
}

export function editPost(postId, data) {
    return put(endpoints.edit + postId, data);
}

export function deletePost(postId) {
    return del(endpoints.delete + postId);
}

export function getMyPosts(userId) {
    return get(endpoints.myPosts(userId));
}