'use client';


export default function CartButton() {
    return (
        <div className="py-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => alert('Added to Cart!')}
            >
                Add to Cart
            </button>
        </div>
    );
 }