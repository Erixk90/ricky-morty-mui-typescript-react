import { instance } from "./main.api"

const endpoint = 'character'
const secondEndpoint = 'episodes'

export const characters = {
    getAll: function ({ page }: { page?: number }) {
        return instance.get(endpoint, {
            params: {
                page
            }
        })
    },
    getById: function ({ id }: { id: string | undefined }) {
        return instance.get(`${endpoint}/${id}`)
          
    },
    getByEpisode: function({ id }: {id:string | undefined }){
        return instance.get(`${secondEndpoint}/${id}`)
    }

}