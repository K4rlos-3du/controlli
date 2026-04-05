import Image from "next/image"
import Link from "next/link"
import { CircleAlert, CircleCheck, CircleMinus, Plus } from "lucide-react"
import { products } from "@/lib/products"

export default function ProductsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Produtos</h1>
          <p className="text-sm text-muted-foreground">
            Gerencie os produtos cadastrados no sistema
          </p>
        </div>

        <Link
          href="/products/new"
          className="flex items-center justify-center sm:justify-start gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition w-full sm:w-auto"
        >
          <Plus size={16} />
          Novo produto
        </Link>
      </div>

      <div className="hidden md:block border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="text-left p-4">Produto</th>
              <th className="text-left p-4">Preço</th>
              <th className="text-left p-4">Estoque</th>
              <th className="text-right p-4">Ações</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => {
              const isOut = product.stock === 0
              const isLow = product.stock > 0 && product.stock <= 3

              return (
                <tr
                  key={product.id}
                  className="border-t hover:bg-muted/40 transition"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src={product.cover}
                        alt={product.name}
                        width={56}
                        height={56}
                        className="rounded-lg border object-cover"
                      />

                      <div className="flex flex-col">
                        <span className="font-medium">{product.name}</span>

                        {product.description && (
                          <span className="text-xs text-muted-foreground">
                            {product.description}
                          </span>
                        )}
                      </div>
                    </div>
                  </td>

                  <td className="p-4 font-medium">
                    R$ {product.price.toFixed(2)}
                  </td>

                  <td className="p-4">
                    {isOut && (
                      <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 px-2 py-1 rounded-md text-xs font-medium">
                        <CircleMinus size={14} />
                        Sem estoque
                      </span>
                    )}

                    {isLow && (
                      <span className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-700 px-2 py-1 rounded-md text-xs font-medium">
                        <CircleAlert size={14} />
                        Estoque baixo ({product.stock})
                      </span>
                    )}

                    {!isOut && !isLow && (
                      <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs font-medium">
                        <CircleCheck size={14} />
                        {product.stock} em estoque
                      </span>
                    )}
                  </td>

                  <td className="p-4 text-right">
                    <Link
                      href={`/products/${product.id}`}
                      className="text-primary hover:underline text-sm"
                    >
                      Ver detalhes
                    </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="grid gap-4 md:hidden">
        {products.map((product) => {
          const isOut = product.stock === 0
          const isLow = product.stock > 0 && product.stock <= 3

          return (
            <div
              key={product.id}
              className="border rounded-xl p-4 flex gap-4"
            >
              <Image
                src={product.cover}
                alt={product.name}
                width={64}
                height={64}
                className="rounded-lg border object-cover"
              />

              <div className="flex flex-col flex-1 gap-2">
                <div className="flex justify-between items-start">
                  <span className="font-medium text-sm">
                    {product.name}
                  </span>

                  <span className="text-sm font-semibold">
                    R$ {product.price.toFixed(2)}
                  </span>
                </div>

                {product.description && (
                  <span className="text-xs text-muted-foreground">
                    {product.description}
                  </span>
                )}

                <div className="flex items-center justify-between mt-2">
                  <div>
                    {isOut && (
                      <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 px-2 py-1 rounded-md text-xs font-medium">
                        <CircleMinus size={14} />
                        Sem estoque
                      </span>
                    )}

                    {isLow && (
                      <span className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-700 px-2 py-1 rounded-md text-xs font-medium">
                        <CircleAlert size={14} />
                        Baixo ({product.stock})
                      </span>
                    )}

                    {!isOut && !isLow && (
                      <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs font-medium">
                        <CircleCheck size={14} />
                        {product.stock}
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/products/${product.id}`}
                    className="text-primary text-xs font-medium hover:underline"
                  >
                    Ver
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}