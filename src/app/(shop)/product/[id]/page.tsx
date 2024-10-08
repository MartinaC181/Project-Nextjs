//import ProductData from "@/components/products/data/oneProducts";

export default function Page( {params} : {params: { id: string }} ) {
  const { id } = params;
    return (
        <div className="relative py-10">
            
            <p>
                Product ID: {id}
            </p>
            <div className="py-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add to Cart
                    </button>
            </div>
        </div>
    );
}