import CartButton from "@/components/button/cartButton";
import ProductData from "@/components/products/data/oneProducts";

export default function Page( {params} : {params: { id: string }} ) {
  const { id } = params;

    return (
        <div className="relative py-4">
            <ProductData id={id}/>
            <CartButton />
        </div>
    );
}