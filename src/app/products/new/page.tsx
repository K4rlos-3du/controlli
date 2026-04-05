'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft, Save, AlertCircle, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import { productSchema, ProductFormData } from '@/schemas/productSchema';

export default function NewProductPage() {
  const [preview, setPreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isDirty },
    reset,
    watch,
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema) as any,
    mode: 'onChange',
    defaultValues: {
      name: '',
      price: undefined,
      stock: undefined,
      description: '',
    },
  });

  const formValues = watch();

  function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreview(url);
  }

  async function onSubmit(data: ProductFormData) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      toast.success('Produto cadastrado com sucesso');

      reset();
      setPreview(null);
    } catch {
      toast.error('Erro ao cadastrar produto');
    }
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-10 space-y-8">
      <Link
        href="/products"
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition"
      >
        <ArrowLeft size={16} />
        Voltar para produtos
      </Link>

      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Novo produto</h1>
        <p className="text-muted-foreground">
          Cadastre um novo produto no sistema
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border rounded-xl p-8 space-y-8 bg-card shadow-sm"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-foreground">
                Nome do Produto
              </label>

              {formValues.name && !errors.name && (
                <CheckCircle2 className="w-4 h-4 text-green-500" />
              )}
            </div>

            <input
              {...register('name')}
              placeholder="Ex: Mouse Gamer"
              className={`px-4 py-3 rounded-lg border-2 bg-background outline-none transition-all ${
                errors.name
                  ? 'border-destructive bg-destructive/5 focus:ring-2 focus:ring-destructive/50'
                  : 'border-input focus:border-primary focus:ring-2 focus:ring-primary/20'
              }`}
            />

            {errors.name && (
              <div className="flex items-center gap-2 pt-1">
                <AlertCircle className="w-4 h-4 text-destructive shrink-0" />
                <span className="text-xs font-medium text-destructive">
                  {errors.name.message}
                </span>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-foreground">
                Preço
              </label>

              {formValues.price && !errors.price && (
                <CheckCircle2 className="w-4 h-4 text-green-500" />
              )}
            </div>

            <div className="relative">
              <span className="absolute left-4 top-3 text-sm font-medium text-muted-foreground">
                R$
              </span>

              <input
                type="number"
                step="0.01"
                placeholder="0.00"
                {...register('price')}
                className={`w-full pl-10 pr-4 py-3 rounded-lg border-2 bg-background outline-none transition-all ${
                  errors.price
                    ? 'border-destructive bg-destructive/5 focus:ring-2 focus:ring-destructive/50'
                    : 'border-input focus:border-primary focus:ring-2 focus:ring-primary/20'
                }`}
              />
            </div>

            {errors.price && (
              <div className="flex items-center gap-2 pt-1">
                <AlertCircle className="w-4 h-4 text-destructive shrink-0" />
                <span className="text-xs font-medium text-destructive">
                  {errors.price.message}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-sm font-semibold text-foreground">
            Imagem do Produto
          </label>

          <label className="relative cursor-pointer">
            <div className="border-2 border-dashed border-input rounded-lg p-6 hover:border-primary hover:bg-primary/5 transition-colors text-center">
              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                className="hidden"
              />

              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">
                  Clique para selecionar uma imagem
                </p>

                <p className="text-xs text-muted-foreground">PNG, JPG ou GIF</p>
              </div>
            </div>
          </label>

          {preview && (
            <div className="border-2 border-primary/20 rounded-lg p-4 bg-primary/5">
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden border border-primary/30">
                  <Image
                    src={preview}
                    alt="Preview"
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium text-foreground">
                    Imagem selecionada
                  </p>

                  <p className="text-xs text-muted-foreground mt-1">
                    Pronto para enviar
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-foreground">
                Estoque
              </label>

              {formValues.stock && !errors.stock && (
                <CheckCircle2 className="w-4 h-4 text-green-500" />
              )}
            </div>

            <input
              type="number"
              placeholder="0"
              {...register('stock')}
              className={`px-4 py-3 rounded-lg border-2 bg-background outline-none transition-all ${
                errors.stock
                  ? 'border-destructive bg-destructive/5 focus:ring-2 focus:ring-destructive/50'
                  : 'border-input focus:border-primary focus:ring-2 focus:ring-primary/20'
              }`}
            />

            {errors.stock && (
              <div className="flex items-center gap-2 pt-1">
                <AlertCircle className="w-4 h-4 text-destructive shrink-0" />
                <span className="text-xs font-medium text-destructive">
                  {errors.stock.message}
                </span>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-sm font-semibold text-foreground">
              Descrição
            </label>

            <textarea
              placeholder="Descreva o produto em detalhes..."
              rows={3}
              {...register('description')}
              className="px-4 py-3 rounded-lg border-2 border-input bg-background outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 pt-6 border-t">
          <Link
            href="/products"
            className="text-center px-6 py-3 rounded-lg border-2 border-input text-sm font-semibold hover:bg-muted transition-colors text-foreground"
          >
            Cancelar
          </Link>

          <button
            type="submit"
            disabled={isSubmitting || !isDirty || !isValid}
            className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all ${
              isSubmitting || !isDirty || !isValid
                ? 'bg-primary/50 text-primary-foreground cursor-not-allowed opacity-60'
                : 'bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95'
            }`}
          >
            <Save size={18} />
            {isSubmitting ? 'Salvando...' : 'Salvar Produto'}
          </button>
        </div>
      </form>
    </main>
  );
}
