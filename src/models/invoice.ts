import { Item } from './item';
import { Client } from './client';
import { Company } from './company';

export interface Invoice {
    id: number
    company: Company
    client: Client
    itemList: Item[]
}