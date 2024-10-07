import { titleFont } from "@/config/fonts";




export default function Home() {
  return (
    <main className="flex flex-col w-full items-center justify-center">
      <div className="text-4xl py-10">
        <h1 className={titleFont.className}
        >
          home
        </h1>
      </div>
    </main>
  );
}
