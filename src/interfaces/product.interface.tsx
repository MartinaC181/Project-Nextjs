
export interface ProductProps {
    id : number;
    name : string;
    price : number;
}

export interface Product {
    id: number;
    name: string;
    description?: string;
    images?: string[];
    inStock?: number;
    price: number;
}
