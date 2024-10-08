import DataDisplay from "@/components/products/data/allProducts";


export default function Page() {
  return (
    <div>
        <h1 className="text-2xl flex flex-col justify-center items-center py-10">Product Page</h1>
          <DataDisplay />
    </div>
  )
}
