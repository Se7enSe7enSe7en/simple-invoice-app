import { Item } from './item';
import { Client } from './client';

export interface Invoice {
    id: number
    client: Client
    transactions: Item[]
}