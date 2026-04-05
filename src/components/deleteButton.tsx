'use client'

import { Trash2 } from 'lucide-react'
import { toast } from 'sonner'

export default function DeleteProductButton() {
  function handleDelete() {
    toast.success('Produto excluído com sucesso')
  }

  return (
    <button
      onClick={handleDelete}
      className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-600 transition"
    >
      <Trash2 size={16} />
      Excluir
    </button>
  )
}