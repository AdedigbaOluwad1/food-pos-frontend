import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { updateDishes } from "@/store/dashboardReducer";
import { IState } from "@/data/data";
import { IDishes } from "@/data/data";

const useGetDishes = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const { selectedDishCategory } = useSelector((state: IState) => state.dashboardState)

    useEffect(() => {
        axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + '/products')
        .then((e) => {
            const data: IDishes[] = e.data
            dispatch(updateDishes(data))
        })
        .catch(e => {
            toast.error('Oops! An error occured')
        })
        .finally(() => {
            setLoading(false)
        })

        return(() => {
            setLoading(true)
        })
    }, [selectedDishCategory])

    return {
        loading
    }
}

export default useGetDishes;