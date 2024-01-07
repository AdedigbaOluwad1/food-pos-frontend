import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { updateDishes } from "@/store/dashboardReducer";
import { IState } from "@/data/data";
import { IDishes } from "@/data/data";
import useAuthApi from "./auth.api";

const useGetDishes = () => {
    const { useAuth } = useAuthApi()
    const { user } = useAuth()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const { selectedDishCategory } = useSelector((state: IState) => state.dashboardState)

    useEffect(() => {
        if (user) {
            axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + '/products', {
                headers: {
                    'accept': 'text/plain',
                    'Authorization': `Bearer ${user.authorizationToken}`,
                    'Content-Type': 'application/json'
                }
            })
            .then((e) => {
                const data: IDishes[] = e.data
                dispatch(updateDishes(data))
            })
            .catch((e) => {
                toast.error(e.response.data.message ?? 'An error occurred')
            })
            .finally(() => {
                setLoading(false)
            })

            return(() => {
                setLoading(true)
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedDishCategory, user])

    return {
        loading
    }
}

export default useGetDishes;