import { del, get, post, put } from "./api.js"

const endpoints = {
    'allPets': '/data/pets?sortBy=_createdOn%20desc&distinct=name',
    'create': '/data/pets',
    'petDetails': '/data/pets/',
    'addDonation': '/data/donation',
    'totalDonationCount': (petId) => `/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`,
    'isDonate': (petId, userId) => `/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
    'delete': '/data/pets/',
    'edit': '/data/pets/'
}

export function getAllPets() {
    return get(endpoints.allPets);
}

export function createPet(data) {
    return post(endpoints.create, data);
}

export function getPetDetails(petId) {
    return get(endpoints.petDetails + petId);
}

export function addDonation(petId) {
    return post(endpoints.addDonation, petId);
}

export function getTotalDonationCount(petId) {
    return get(endpoints.totalDonationCount(petId));
}

export function isUserAddDonation(petId, userId) {
    return get(endpoints.isDonate(petId, userId));
}

export function deletePet(petId) {
    return del(endpoints.delete + petId);
}

export function editPet(petId, data) {
    return put(endpoints.edit + petId, data);
}