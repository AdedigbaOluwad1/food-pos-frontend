import { StaticImageData } from "next/image"

export interface state {
    name: string,
    initialState: stateValue,
    reducers: any
}

export interface stateValue {
    sysLevel: 'sign-up' | 'login' | ''
}