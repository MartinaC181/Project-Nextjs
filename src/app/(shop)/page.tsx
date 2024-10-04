import { ProductGrid } from "@/components";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";


const products = initialData.products;

export default function Home() {
  return (
    <>
      <div className="">
        <h1></h1>
        <h1 className={`${titleFont.className}, font-bold `}></h1>
      </div>

      <ProductGrid 
      products={products}
       />
    </>
  );
}
