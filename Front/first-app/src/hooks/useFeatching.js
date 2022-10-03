import { useState } from "react"

export const useFetching = (callback) =>{
    const [isLoading,setLoading] = useState(false);
    const [error,setError] = useState('');

    const fetchPosts = async () =>{
        try{
            setLoading(true);
            await callback();
        }
        catch(e) {
            setError(e.message);
            console.log(e.message);
        }
        finally {
            setLoading(false);
        }
    }

    return [fetchPosts,isLoading,error];
}