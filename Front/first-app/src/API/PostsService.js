import axios from "axios";

export default class PostsSevice{
    static async getAll(limit = 10,page){
        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts',{
            params:{
                _limit:limit,
                _page:page
            }
        });
        return responce;  
    }

    static async getPostById(id){
        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts/'+id);
        return responce;  
    }

    static async getComentsPost(id){
        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts/'+id+'/comments');
        return responce;  
    }
}