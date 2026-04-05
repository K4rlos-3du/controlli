import Link from "next/link"

export default function ProductNotFound() {
  return (
    <main className="flex flex-col items-center justify-center py-24 text-center space-y-6">

      <h1 className="text-4xl font-bold">
        Produto não encontrado
      </h1>

      <p className="text-muted-foreground">
        O produto que você tentou acessar não existe.
      </p>

      <Link
        href="/products"
        className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm"
      >
        Voltar para produtos
      </Link>

    </main>
  )
}