import Link from "next/link";
import { Package } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center mx-2 md:px-0">

      <div className="text-center max-w-xl md:space-y-8">

        <div className="flex justify-center">
          <div className="p-4 rounded-2xl bg-primary/10 text-primary">
            <Package size={40} />
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">
            Bem-vindo ao <span className="text-primary">Controlli</span>
          </h1>

          <p className="text-muted-foreground text-lg">
            Um sistema simples para gerenciar produtos e manter o controle do
            seu estoque de forma rápida e organizada.
          </p>
        </div>

        <div className="flex justify-center gap-4 mt-2">

          <Link
            href="/products"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium hover:opacity-90 transition"
          >
            Acessar o Sistema
          </Link>

        </div>

      </div>

    </main>
  );
}