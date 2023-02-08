import { del, get, post, put } from "./api.js";

const endpoints = {
    'allFurnitures': '/data/catalog',
    'furnitureDetails': '/data/catalog/',
    'edit': '/data/catalog/',
    'delete':'/data/catalog/',
    'create':'/data/catalog'
};

export async function getAllFurnitures() {
    return get(endpoints.allFurnitures);
}

export async function getFurnitureDetails(id) {
    return get(endpoints.furnitureDetails + id);
}

export async function editFurniture(id, data) {
    return put(endpoints.edit + id, data);
}

export async function deleteFurniture(id){
    return del(endpoints.delete+id);
}

export async function createFurniture(data){
    return post(endpoints.create,data);
}

export async function getMyFurnitures(id){
    return get(`/data/catalog?where=_ownerId%3D%22${id}%22`);
}