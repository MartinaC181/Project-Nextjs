import Link from "next/link";

const navItems = [
    {
        name: "Home",
        route: "/",
    },
    {
        name: "Products",
        route: "/product",
    },
    {
        name: "Cart",
        route: "/cart",
    },
]


export default function Navbar() {
    return (
        <nav className="w-[1200px] flex justify-center gap-4 items-center ">
            {navItems.map((item) => {
                return (
                    <Link key={item.name} href={item.route} className="w-100px rounded-md at-8 p-0 m-2 hover:underline">
                        {item.name}
                    </Link>
                );
            })}         
        </nav>
    );
}
