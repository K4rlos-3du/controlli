import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Pencil, ArrowLeft } from 'lucide-react'
import { products } from '@/lib/products'
import DeleteProductButton from '@/components/deleteButton'

type Params = {
  params: {
    id: string
  }
}

export default async function ProductDetailsPage({ params }: Params) {
  const resolvedParams = await params
  const product = products.find((p) => p.id === resolvedParams.id)

  if (!product) {
    notFound()
  }

  const isOut = product.stock === 0
  const isLow = product.stock > 0 && product.stock <= 3

  return (
    <main className="max-w-6xl mx-auto px-6 py-10 space-y-8">
      <Link
        href="/products"
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition"
      >
        <ArrowLeft size={16} />
        Voltar para produtos
      </Link>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="bg-card border rounded-xl p-8 flex items-center justify-center">
          <div className="relative w-[320px] h-80">
            <Image
              src={product.cover}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">{product.name}</h1>

            {product.description && (
              <p className="text-muted-foreground">{product.description}</p>
            )}
          </div>

          <div className="text-3xl font-semibold text-primary">
            R$ {product.price.toFixed(2)}
          </div>

          <div>
            {isOut && (
              <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 px-3 py-1 rounded-md text-sm font-medium">
                Sem estoque
              </span>
            )}

            {isLow && (
              <span className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-md text-sm font-medium">
                Estoque baixo ({product.stock})
              </span>
            )}

            {!isOut && !isLow && (
              <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-md text-sm font-medium">
                {product.stock} unidades em estoque
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="border rounded-lg p-4">
              <span className="text-sm text-muted-foreground">
                ID do produto
              </span>

              <p className="font-medium">{product.id}</p>
            </div>

            <div className="border rounded-lg p-4">
              <span className="text-sm text-muted-foreground">
                Estoque atual
              </span>

              <p className="font-medium">{product.stock}</p>
            </div>
          </div>

          <div className="flex gap-4 pt-6">
            <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition">
              <Pencil size={16} />
              Editar
            </button>

            <DeleteProductButton />
          </div>
        </div>
      </div>
    </main>
  )
}