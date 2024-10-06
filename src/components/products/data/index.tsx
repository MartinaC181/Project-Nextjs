'use client';

import useFetch from "@/hooks/useFetch";
import { ProductProps } from "@/interfaces";
import { useRouter } from 'next/navigation';


export default function DataDisplay({
    products
}: {
    products : ProductProps[]
}) {
    const { data, loading, error } = useFetch(process.env.NEXT_PUBLIC_API_PRODUCTS as string);
    
    if (loading) return <div>Loading...</div>;  
    if (error) return <div>Error: {error}</div>;
    if (!data) return <div>No data</div>;

    const router = useRouter();

    return ( 
        <div className="flex gap-16px justify-center items-center">
             {data.map((product : ProductProps) => (
                <div 
                    key={product.id} 
                    className="w-[200px] h-[200px] p-4 gap-16px rounded-xl hover:bg-gray-300 bg-white flex flex-col justify-center items-center"
                    onClick={() => router.push(`/product/${product.id}`)}
                    >

                    <h2 className="text-2xl text-gray-600">{product.title}</h2>
                    <p className="text-yellow-700 text-xl">${product.price}</p>
                </div>  
            ))}
        </div>
    )
};

