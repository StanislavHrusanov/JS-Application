import { del, get, post, put } from "./api.js"

const endpoints = {
    'allShoes': '/data/shoes?sortBy=_createdOn%20desc',
    'shoeDetails': '/data/shoes/',
    'edit': '/data/shoes/',
    'delete': '/data/shoes/',
    'add': '/data/shoes'
}

export function getAllShoes() {
    return get(endpoints.allShoes);
}

export function getShoeDetails(id) {
    return get(endpoints.shoeDetails + id);
}

export function edit(id, data) {
    return put(endpoints.edit + id, data);
}

export function deleteShoe(id) {
    return del(endpoints.delete + id);
}

export function addPair(data) {
    return post(endpoints.add, data);
}

export function search(query){
    return get(`/data/shoes?where=brand%20LIKE%20%22${query}%22`);
}