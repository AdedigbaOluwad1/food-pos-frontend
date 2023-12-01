import axios from "axios";

export default async function useGetInvoice(id: string, user_id: string, status: 'paid' | 'unpaid' | ''){
    const res = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + '/invoices', {
        params: {
            id,
            user_id,
            status
        }
    })
    return await res.data
}