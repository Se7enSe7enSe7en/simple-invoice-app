export interface Transaction {
    description: string
    price: number
    quantity: number
    date: number
}

export interface Client {
    id: number
    name: string
    email: string
}

export interface Invoice {
    id: number
    client: Client
    transactions: Transaction[]
}