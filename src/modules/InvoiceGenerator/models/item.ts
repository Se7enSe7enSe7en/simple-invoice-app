import { Money } from './money';

export interface Item {
    description: string
    price: Money
    quantity: number
}