'use client';

import useFetch from "@/hooks/useFetch"
import { ProductProps } from "@/interfaces"

//conexion a la API para traer un solo producto
export default function ProductData({ id } : {id : string}) {

    const { data } = useFetch(process.env.NEXT_PUBLIC_API_PRODUCTS as string + '/' + id);
    
    if (!data) {
        return <div>Loading...</div>;
    }
    const product = data as ProductProps;

    return (
        <div className="flex flex-wrap gap-4 mt-20">
                <div key={product.id} className="w-[300px] h-[300px] p-4 gap-16px hover:bg-gray-300 bg-white flex flex-col justify-center items-center">
                    <h1 className="text-2xl text-slate-700">{product.title}</h1>
                    <p className="text-yellow-700 text-xl py-2">${product.price}</p>
                </div>
        </div>
    )
}