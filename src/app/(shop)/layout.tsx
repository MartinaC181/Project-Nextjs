import { TopMenu } from "@/components";
import HomeButton from "@/components/button";


export default function shopLayout({ children }: {
    children: React.ReactNode;
}) {

  return (
    <main className="min-h-screen">
        { children }
    </main>
  );
}