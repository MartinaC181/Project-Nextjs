
export interface ProductProps {
    id : number;
    title : string;
    price : number;
    description : string;
    image : string[];
}

export interface Product {
    id: number;
    title: string;
    description?: string;
    image?: string[];
    price: number;
}
