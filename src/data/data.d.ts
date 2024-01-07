import { StaticImageData } from "next/image"

export type IState = {
    generalState: IStateValue,
    dashboardState: IDashboardState
}

export type IAppState = {
    isAuthenticated: boolean
}

export type IDashboardState = {
    selectedDishCategory: string,
    dishes: IDishes[]
}

export type navLink = {
    activeIcon: string,
    icon: string,
    path: string,
    name: string,
}

export type IGetInvoicesRes = {
    data: Daum[]
}

export type IProductObject = {
    _id: Id
    created_at: CreatedAt
    itemName: string
    price: number
    description: string
}

export type IDishes = {
    _id: string
    name: string
    quantity: number
    price: number
    image: string
    createdAt: string
    updatedAt: string
    __v: number
}

export type Id = {
    $oid: string
}

export type CreatedAt = {
    $date: string
}

export type IInvoiceObject = {
    _id: Id
    created_at: CreatedAt
    paid: boolean
    user_id: UserId
    items: Item[]
}

export interface Id {
    $oid: string
}

export interface CreatedAt {
    $date: string
}

export interface UserId {
    $oid: string
}

export interface Item {
    _id?: Id2
    created_at?: CreatedAt2
    itemName?: string
    price?: number
    description?: string
    total?: number
    quantity?: number
    Overalltotal?: number
}
  
export interface Id2 {
    $oid: string
}
  
export interface CreatedAt2 {
    $date: string
}

export type IUser = {
    firstName: string
    lastName: string
    userID: string
    signedInAt: string
    authorizationToken: string 
}

export type IBackendResponse<response> = {
    message: string,
    response: response
}
  