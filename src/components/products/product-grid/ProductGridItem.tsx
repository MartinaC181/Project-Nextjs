import { Product } from "@/interfaces";
import Image from "next/image";

interface Props {
    product: Product;
}

export default function ProductGridItem( {product}: Props ) {
    return (
        <div className="rounded-md overflow-hidden fade-in">
            <Image 
            src={`/products/${ product.images[0] }`} 
            alt={product.title} 
            className="w-full object-cover"
            width={500}
            height={500}
            >
            </Image>
        </div>
    );
}