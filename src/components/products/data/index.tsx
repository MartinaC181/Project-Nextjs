'use client';

import useFetch from "@/hooks/useFetch";
import { Product, ProductProps } from "@/interfaces";
import { useRouter } from 'next/navigation';
import { useState } from 'react';


export default function DataDisplay() {
    const { data, loading, error } = useFetch(process.env.NEXT_PUBLIC_API_PRODUCTS as string);
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0);
    
    if (loading) return <div>Loading...</div>;  
    if (error) return <div>Error: {error}</div>;
    if (!data) return <div>No data</div>;


    function handleNext() {
        if (currentIndex < data.length) {
            setCurrentIndex(currentIndex + 1);
        }
    }
    function handlePrev() {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }

    const nextDisabled = currentIndex + 4 === data.length;
    const prevDisabled = currentIndex === 0;
        
    return ( 
        <div className="relative">
            <div className="flex flex-wrap gap-4 mt-20">
                {data.slice(currentIndex, currentIndex + 4).map((product : ProductProps) => (
                    <div 
                        key={product.id} 
                        className="w-[200px] h-[200px] p-4 gap-16px rounded-xl hover:bg-gray-300 bg-white flex flex-col justify-center items-center"
                        onClick={() => router.push(`/product/${product.id}`)}
                        >
                        <h2 className="text-2xl text-gray-600 ">{product.title}</h2>
                        <p className="text-yellow-700 text-xl">${product.price}</p>
                    </div>  
                ))}
            </div>
            <button className=" text-slate-600 text-4xl font-semibold absolute top-[45%] -left-14 disabled:hidden" 
            onClick={() => handlePrev()} disabled={prevDisabled}>
                {"<"}</button>
            <button className=" text-slate-600 text-4xl font-semibold absolute top-[45%] -right-14 disabled:hidden" 
            onClick={() => handleNext()} disabled= {nextDisabled}>
                {">"}</button>
        </div>
    )
};

