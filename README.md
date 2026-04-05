# 📦 Controlli — Sistema de Gestão de Produtos

**Controlli** é uma aplicação web simples e moderna para **gestão de estoque**, desenvolvida com foco em usabilidade e interface limpa. O sistema permite que pequenos lojistas gerenciem produtos de forma rápida e intuitiva.

## 🌐 Acesso ao Sistema

O sistema pode ser acessado no link abaixo:

[www.www.com](https://www.www.com)

---

## 📋 Índice

1. Visão Geral
2. Stack Tecnológica
3. Estrutura do Projeto
4. Planejamento de Interface
5. Identidade Visual
6. Fluxo de Usuário
7. Instalação

---

## 🎯 Visão Geral

## Objetivo

Criar uma aplicação simples para gerenciamento de produtos que permita:

- Listar produtos cadastrados
- Visualizar detalhes de um produto
- Cadastrar novos produtos
- Editar produtos
- Excluir produtos
- Monitorar níveis de estoque

## Público-alvo

Pequenos e médios lojistas que precisam controlar seu inventário de forma simples e eficiente.

---

## 🛠 Stack

| Tecnologia          | Propósito                    |
| ------------------- | ---------------------------- |
| **Next.js**         | Framework React              |
| **TypeScript**      | Tipagem estática             |
| **Tailwind CSS**    | Estilização                  |
| **Zod**             | Validação de dados           |
| **React Hook Form** | Gerenciamento de formulários |
| **Lucide React**    | Ícones                       |
| **Sonner**          | Notificações toast           |
| **Next Themes**     | Suporte a dark/light mode    |

---

## 📁 Estrutura do Projeto

```text
controlli
│
├── src
│   ├── app
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── products
│   │       ├── page.tsx
│   │       ├── new
│   │       │   └── page.tsx
│   │       └── [id]
│   │           ├── page.tsx
│   │           └── not-found.tsx
│
│   ├── components
│   │   ├── header.tsx
│   │   ├── themeProvider.tsx
│   │   ├── themeToggle.tsx
│   │   ├── deleteButton.tsx
│   │   └── ui
│   │       ├── button.tsx
│   │       └── sonner.tsx
│
│   ├── lib
│   │   ├── products.ts
│   │   └── utils.ts
│
│   └── schemas
│       └── productSchema.ts
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── components.json
```

---

## 🖥 Planejamento de Interface

## Tela de Listagem de Produtos

A página principal exibe uma **tabela de produtos** contendo:

- Imagem do produto
- Nome e descrição
- Preço
- Quantidade em estoque
- Ações (visualizar, editar ou excluir)

### Responsividade

- **Desktop:** tabela com todas as informações
- **Mobile:** cards empilhados com informações essenciais

Também possui um botão **"Novo Produto"** para cadastro.

---

## Tela de Cadastro

Contém um formulário com os seguintes campos:

| Campo     | Tipo           | Obrigatório |
| --------- | -------------- | ----------- |
| Nome      | Texto          | Sim         |
| Preço     | Número         | Sim         |
| Estoque   | Número inteiro | Sim         |
| Descrição | Texto          | Não         |
| Imagem    | Upload         | Não         |

O formulário utiliza **React Hook Form + Zod** para validação.

Após o envio, o sistema mostra **notificação de sucesso ou erro** usando Sonner.

---

## Tela de Detalhes do Produto

Apresenta:

- Imagem do produto
- Nome
- Preço
- Quantidade em estoque
- Descrição

Também possui ações para **editar ou excluir** o produto.

---

## 🎨 Identidade Visual

O projeto utiliza **Tailwind + OKLCH Color Space** para maior consistência visual.

### Cores Semânticas

| Status      | Cor           | Significado          |
| ----------- | ------------- | -------------------- |
| 🟢 Verde    | Em estoque    | Produto disponível   |
| 🟡 Amarelo  | Estoque baixo | Atenção necessária   |
| 🔴 Vermelho | Sem estoque   | Produto indisponível |

---

## Dark Mode

O sistema possui **modo claro e escuro**, implementado com **next-themes**.

O usuário pode alternar o tema através do botão no header.

---

## 🔄 Fluxo de Usuário

```text
Usuário acessa o sistema
        ↓
Visualiza lista de produtos
        ↓
Pode:
• Cadastrar novo produto
• Ver detalhes de um produto
• Editar informações
• Excluir produto
        ↓
Recebe feedback através de notificações
```

---

## 🚀 Instalação

```bash
# Clonar repositório
git clone <repo-url>

cd controlli

# Instalar dependências
npm install

# Rodar projeto
npm run dev
```

A aplicação ficará disponível em:

```text
http://localhost:3000
```

---

## 📌 Observação

Este projeto foi desenvolvido com foco **educacional**, demonstrando boas práticas de:
