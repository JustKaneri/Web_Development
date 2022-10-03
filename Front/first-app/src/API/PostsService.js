import axios from "axios";

export default class PostsSevice{
    static async getAll(){
        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return responce.data;  
    }
}