import { get, post, del } from "./api.js"

const endpoints = {
    'ideas': '/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc',
    'create': '/data/ideas',
    'ideaById': '/data/ideas/'

}

export async function getIdeasData() {

    return get(endpoints.ideas);
}

export async function sendIdea(data) {
    return post(endpoints.create, data);
}

export async function getIdeaById(id) {
    return get(endpoints.ideaById + id);
}

export function deleteIdea(id){
   return del(endpoints.ideaById+id);
}