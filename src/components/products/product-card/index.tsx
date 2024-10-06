'use client';

import { ProductProps } from "@/interfaces"
import { useRouter } from 'next/navigation'
 
export default function ProductCard({ 
    products 
}: {
    products : ProductProps[]
}) {
    const router = useRouter()
  return (
    <div className="flex gap-4 mt-20">
        {products.map((product) => (
            <div 
            key={product.id} 
            className="w-[200px] h-[200px] p-4 rounded-xl hover:bg-gray-300 bg-white flex flex-col justify-center items-center"
            onClick={() => router.push(`/product/${product.id}`)}
            >
            <h2 className="text-2xl text-gray-600">{product.title}</h2>
            <p className="text-yellow-700 text-xl">${product.price}</p>
            </div>
        ))}
    </div>
  )
}