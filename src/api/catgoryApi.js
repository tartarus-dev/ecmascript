import { axiosClient } from './axiosClient';

export const categoryApi = {
    list(){
        const url = `/categories`;
        return axiosClient.get(url)
    },
    read(id){
        const url = `/categories/${id}`;
        return axiosClient.get(url)
    },
    add(category){
        const url = `/categories/create`;
        return axiosClient.post(url,category);
    },
    remove(id) {
        const url = `/categories/${id}`;
        return axiosClient.delete(url)
    },
    update(id,data){
        const url = `/categories/${id}`;
        return axiosClient.put(url,data);
    }
    
}

export default categoryApi;