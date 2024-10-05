import ProductCard from "@/components/product-card"

const products = [
    {
        id: 1,
        name: 'Product 1',
        price: 100,
    },
    {
        id: 2,
        name: 'Product 2',
        price: 200,
    },
    {
        id: 3,
        name: 'Product 3',
        price: 300,
    },
    {
        id: 4,
        name: 'Product 4',
        price: 400,
    }
]


export default function Page() {
  return (
    <div>
        <h1 className="text-2xl justify-center items-center">Product Page</h1>

        <ProductCard products={products} />
    </div>
  )
}
