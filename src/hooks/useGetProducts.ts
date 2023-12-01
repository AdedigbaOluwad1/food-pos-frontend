import axios from "axios";

export default async function useGetProducts(){
    const res = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + '/products')
    return await res.data
}