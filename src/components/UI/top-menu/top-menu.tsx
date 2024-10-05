import Link from "next/link";


export const TopMenu = () => {
    return (
        <nav >

            <div className="py-1 flex justify-center items-center gap-4">
                <Link href="/cart" className="flex justify-center gap-1 items-center p-2">opcion 1</Link>
                <Link href="/products" className="flex justify-center gap-1 items-center p-2">opcion2</Link>
                <Link href="/category" className="flex justify-center gap-1 items-center p-2">opcion3</Link>
            </div>
            

        </nav>
    );
}

