import axios from "axios";

export default class PostsSevice{
    static async getAll(){
        try {
            const responce = await axios.get('https://jsonplaceholder.typicode.com/posts');
            return responce.data;
        }
        catch(e){
            console.log(e);
        }
        
    }
}