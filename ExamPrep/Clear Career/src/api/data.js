import { del, get, post, put } from "./api.js"

const endpoints = {
    'allOffers': '/data/offers?sortBy=_createdOn%20desc',
    'createNewOffer': '/data/offers',
    'offerDetails': '/data/offers/',
    'totalApplications': (offerId) => `/data/applications?where=offerId%3D%22${offerId}%22&distinct=_ownerId&count`,
    'countOfApplicatiosForUser': (offerId, userId) => `/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
    'apply': '/data/applications',
    'delete': '/data/offers/',
    'edit': '/data/offers/'
}

export async function getAllOffers() {
    return get(endpoints.allOffers);
}

export async function createNewOffer(data) {
    return post(endpoints.createNewOffer, data);
}

export async function getOfferDetails(offerId) {
    return get(endpoints.offerDetails + offerId);
}

export async function getTotalApplication(offerId) {
    return get(endpoints.totalApplications(offerId));
}

export async function getCountOfApplicationForUser(offerId, userId) {
    return get(endpoints.countOfApplicatiosForUser(offerId, userId));
}

export async function apply(offerId) {
    return post(endpoints.apply, offerId);
}

export async function deleteOffer(offerId) {
    return del(endpoints.delete + offerId);
}

export async function editOffer(offerId, data) {
    return put(endpoints.edit + offerId, data);
}