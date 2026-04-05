import { z } from "zod"

export const productSchema = z.object({
  name: z.string()
    .min(1, "Nome é obrigatório")
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  description: z.string()
    .max(500, "Descrição deve ter no máximo 500 caracteres")
    .optional(),
  price: z.coerce.number()
    .positive("Preço deve ser maior que zero")
    .min(0.01, "Preço deve ser maior que R$ 0,01"),
  stock: z.coerce.number()
    .int("Estoque deve ser um número inteiro")
    .nonnegative("Estoque não pode ser negativo")
    .max(999999, "Estoque inválido")
})

export type ProductFormData = z.infer<typeof productSchema>