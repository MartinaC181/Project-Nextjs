import ProductCard from "@/components/products/product-card";
import DataDisplay from "@/components/products/data";


export default function Page() {
  return (
    <div>
        <h1 className="text-2xl justify-center items-center">Product Page</h1>
        <DataDisplay products={[]} />
    </div>
  )
}
