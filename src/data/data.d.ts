import { StaticImageData } from "next/image"

export interface state {
    generalState: stateValue
}

export interface stateValue {
    sysLevel: 'sign-up' | 'login' | '',
    invoices: IInvoiceObject[],
    products: IProductObject[]
}

export interface navLink {
    name: string,
    icon: string,
    path: string
}

export interface IGetInvoicesRes {
    data: Daum[]
  }
  
export interface IProductObject {
    _id: Id
    created_at: CreatedAt
    itemName: string
    price: number
    description: string
}

export interface Id {
    $oid: string
}

export interface CreatedAt {
    $date: string
}

export interface IInvoiceObject {
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
  