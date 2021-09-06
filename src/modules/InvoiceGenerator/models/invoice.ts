import { Item } from './item';
import { Client } from './client';
import { Company } from './company';
import { Money } from './money';

export interface Invoice {
    id: number
    company: Company
    client: Client
    itemList: Item[]
    subTotal?: number
    discount?: number
    shipping?: number
    tax?: number
    total: number
}