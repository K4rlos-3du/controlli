# 📦 Controlli — Sistema de Gestão de Produtos

**Controlli** é uma aplicação web simples e moderna para **gestão de estoque**, desenvolvida com foco em usabilidade e interface limpa. O sistema permite que pequenos lojistas gerenciem produtos de forma rápida e intuitiva.

## 🌐 Acesso ao Sistema

O sistema pode ser acessado no link abaixo:

[https://controlli-mu.vercel.app/](https://controlli-mu.vercel.app/)

---

## 📋 Índice

1. [Visão Geral do Projeto](#visão-geral-do-projeto)
2. [Stack](#stack)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Planejamento de Interface](#planejamento-de-interface)
   - [Parte 1: Campos e Botões Essenciais](#parte-1-campos-e-botões-essenciais)
   - [Parte 2: Organização das Telas](#parte-2-organização-das-telas)
   - [Parte 3: Identidade Visual e Cores](#parte-3-identidade-visual-e-cores)

---

## 🎯Visão Geral do Projeto

### Objetivo

Criar uma plataforma simples e elegante para gestão de produtos que permita:

- ✅ Listar todos os produtos cadastrados
- ✅ Visualizar informações detalhadas de cada produto
- ✅ Cadastrar novos produtos
- ✅ Editar produtos existentes
- ✅ Deletar produtos
- ✅ Monitorar estoque em tempo real

### Público-Alvo

Pequenos e médios lojistas que precisam gerenciar inventário de forma intuitiva e sem complexidade desnecessária.

---

## 🧑‍💻Stack

| Tecnologia          | Versão | Propósito                             |
| ------------------- | ------ | ------------------------------------- |
| **Next.js**         | 16.2.1 | Framework React com SSR e otimizações |
| **React**           | 19.2.4 | Biblioteca UI                         |
| **TypeScript**      | 5      | Type safety                           |
| **Tailwind CSS**    | 4      | Estilização utilitária                |
| **Zod**             | 4.3.6  | Validação de dados em runtime         |
| **React Hook Form** | 7.72.1 | Gerenciamento de formulários          |
| **Lucide React**    | 1.7.0  | Biblioteca de ícones                  |
| **Sonner**          | 2.0.7  | Notificações toast                    |
| **Next Themes**     | 0.4.6  | Suporte a modo dark/light             |

---

## 📁Estrutura do Projeto

```text
controlli/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Layout raiz
│   │   ├── page.tsx                # Página inicial
│   │   ├── globals.css             # Estilos globais + tema
│   │   └── products/
│   │       ├── layout.tsx          # Layout seção produtos
│   │       ├── page.tsx            # Listagem de produtos
│   │       ├── new/
│   │       │   └── page.tsx        # Formulário de novo produto
│   │       └── [id]/
│   │           ├── page.tsx        # Detalhes do produto
│   │           └── not-found.tsx   # Produto não encontrado
│   ├── components/
│   │   ├── header.tsx              # Navegação principal
│   │   ├── themeProvider.tsx       # Provedor de tema
│   │   ├── themeToggle.tsx         # Toggle dark/light mode
│   │   ├── deleteButton.tsx        # Botão com confirmação de delete
│   │   └── ui/
│   │       ├── button.tsx          # Componente Button reutilizável
│   │       └── sonner.tsx          # Configuração de notificações
│   ├── lib/
│   │   ├── products.ts             # Mock de produtos
│   │   └── utils.ts                # Utilitários
│   └── schemas/
│       └── productSchema.ts        # Validação Zod de produtos
├── package.json
├── tsconfig.json
├── next.config.ts
├── components.json                 # Config Shadcn/UI
└── globals.css                     # Tema e variáveis CSS
```

---

## 🎨Planejamento de Interface

### **PARTE 1: Campos e Botões Essenciais**

#### 1.1 Campos para Cadastro de Produto

| Campo         | Tipo        | Validação                    | Obrigatório | Objetivo                        |
| ------------- | ----------- | ---------------------------- | ----------- | ------------------------------- |
| **Nome**      | Texto       | Min: 2 chars, Max: 100 chars | ✅ Sim      | Identificar o produto           |
| **Preço**     | Decimal     | > R$ 0,01                    | ✅ Sim      | Definir valor de venda          |
| **Estoque**   | Inteiro     | ≥ 0, Máx: 999.999            | ✅ Sim      | Controlar quantidade disponível |
| **Descrição** | Textarea    | Max: 500 chars               | ❌ Opcional | Detalhar características        |
| **Imagem**    | File Upload | JPG/PNG                      | ❌ Opcional | Visualização do produto         |

#### 1.2 Campos para Listagem de Produtos

Informações exibidas na tabela de produtos:

| Campo                  | Tipo         | Função                                  |
| ---------------------- | ------------ | --------------------------------------- |
| **Imagem (Thumbnail)** | Imagem       | Identificar visualmente o produto       |
| **Nome + Descrição**   | Texto        | Nome em destaque, descrição em auxiliar |
| **Preço**              | Moeda (R$)   | Valor de venda formatado                |
| **Estoque**            | Badge        | Indicação visual e númerica do estoque  |
| **Ações**              | Links/Botões | Visualizar detalhes do produto          |

#### 1.3 Botões Essenciais

**Listagem:**

- 🔵 **"Novo Produto"** - Criar novo produto
- 👁️ **"Visualizar"** - Ver detalhes

**Formulário de Cadastro:**

- 💾 **"Salvar Produto"** - Confirmar cadastro
- ◀️ **"Voltar"** - Retornar à listagem de produtos
- ➕ **"Adicionar Imagem"** - Upload de foto

---

### **PARTE 2: Organização das Telas**

#### 2.1 Tela de Listagem (Products Page)

### Layout: Desktop-First com Responsividade

```text
┌─────────────────────────────────────────────────────┐
│ 📦 HEADER                      Toggle Dark/Light     │
│ Controlli | Produtos | Novo                          │
├─────────────────────────────────────────────────────┤
│                                                       │
│ Produtos                                             │
│ Gerencie os produtos cadastrados no sistema          │
│                                [+ Novo produto]      │
│                                                       │
├─────────────────────────────────────────────────────┤
│ TABELA (Desktop/Tablet)                              │
│ ┌────┬──────────┬────────┬────────────┬─────────┐   │
│ │IMG │ Produto  │ Preço  │ Estoque    │ Ações   │   │
│ ├────┼──────────┼────────┼────────────┼─────────┤   │
│ │[📷]│ Mouse... │R$ 111  │ ✅ 10      │ ✏️ 🗑️   │   │
│ │    │RGB RGB   │        │ em estoque │ Ver     │   │
│ ├────┼──────────┼────────┼────────────┼─────────┤   │
│ │[📷]│ Teclado..│R$ 169  │ ⚠️ 4       │ ✏️ 🗑️   │   │
│ │    │Mecânico  │        │ estoque..  │ Ver     │   │
│ ├────┼──────────┼────────┼────────────┼─────────┤   │
│ │[📷]│ Headset..│R$ 203  │ ❌ 0       │ ✏️ 🗑️   │   │
│ │    │HyperX    │        │ Sem estoque│ Ver     │   │
│ └────┴──────────┴────────┴────────────┴─────────┘   │
│                                                       │
│ CARDS (Mobile)                                       │
│ ┌──────────────────────────────┐                    │
│ │ [📷]                         │                    │
│ │ Mouse...                     │                    │
│ │ R$ 111.75 | ✅ 10 em estoque │ [✏️  🗑️]         │
│ └──────────────────────────────┘                    │
│ ┌──────────────────────────────┐                    │
│ │ [📷]                         │                    │
│ │ Teclado...                   │                    │
│ │ R$ 169.99 | ⚠️ 4 estoque    │ [✏️  🗑️]         │
│ └──────────────────────────────┘                    │
│                                                       │
└─────────────────────────────────────────────────────┘
```

**Princípios de Organização:**

- ✅ **Hierarquia Visual**: Produto > Preço > Estoque > Ações
- ✅ **Escanabilidade**: Ícones + cores para status de estoque
- ✅ **Responsividade**: Tabela em desktop, cards em mobile
- ✅ **Call-to-Action Claro**: Botão "Novo Produto" destacado em azul
- ✅ **Informações Cruciais**: Estoque e preço sempre visíveis

#### 2.2 Tela de Cadastro (New Product Page)

## Layout: Formulário Centralizado

```text
┌─────────────────────────────────────────────────────┐
│ ◀ Voltar para produtos                              │
│                                                       │
│ Novo Produto                                         │
│ Cadastre um novo produto no sistema                  │
│                                                       │
│ ┌─────────────────────────────────────────────────┐ │
│ │                 FORMULÁRIO                      │ │
│ │                                                 │ │
│ │ ┌─────────────┬─────────────────────────────┐ │ │
│ │ │ Nome        | Preço                       │ │ │
│ │ │ [Mouse ...] │ [199.99]                    │ │ │
│ │ │ 2/100 chars │ Apenas números             │ │ │
│ │ └─────────────┴─────────────────────────────┘ │ │
│ │ [Upload Imagem]                      [Preview] │ │
│ │                                               │ │
│ │                                                 │ │
│ │ ┌─────────────────────────────────────────┐   │ │
│ │ │ Estoque                                 │   │ │
│ │ │ [150]                                   │   │ │
│ │ │ Números inteiros apenas / 0-999.999    │   │ │
│ │ └─────────────────────────────────────────┘   │ │
│ │                                                 │ │
│ │ ┌─────────────────────────────────────────┐   │ │
│ │ │ Descrição (Opcional)                    │   │ │
│ │ │ [Digite aqui...]                        │   │ │
│ │ │ 0/500 caracteres                        │   │ │
│ │ └─────────────────────────────────────────┘   │ │
│ │                                                 │ │
│ │                  [Salvar Produto]           │ │
│ └─────────────────────────────────────────────────┘ │
│                                                       │
└─────────────────────────────────────────────────────┘
```

### 2.3 Tela de Detalhe (Product Detail Page)

## Layout: Visualização + Ações

```text
┌─────────────────────────────────────────────────────┐
│ ◀ Voltar para produtos                              │
│                                                     │
│ ┌──────────┐  Nome do produto                       │
│ │          │  Quantidade em estoque                 │
│ │ [IMAGEM] │                                        │
│ │  Grande  │  Preço R$ XX,XX                        │
│ │          │                                        │
│ └──────────┘  Mouse gamer com sensor de alta        │
│               precisão, iluminação RGB e 7          │
│               botões programáveis.                  │
│                                                     │
│               [Editar] [ Deletar]                   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

### **PARTE 3: Identidade Visual e Cores**

#### 3.1 Paleta de Cores Base

A aplicação utiliza **OKLch Color Space** para melhor perceptibilidade visual:

**Cores Primárias:**

- 🔵 **Azul Principal (Brand)**: `oklch(0.56 0.22 259)`
  - Usado em: CTAs, Headers, Links ativos, Elementos interativos
  - Foreground: Branco/Claro `oklch(0.98 0.01 240)`
- 🟣 **Azul Secundário**: `oklch(0.50 0.23 274)`
  - Usado em: Hover Effects, Estados secundários

#### 3.2 Cores Semânticas (Status de Estoque)

| Status            | Cor                               | Uso          | Significado        |
| ----------------- | --------------------------------- | ------------ | ------------------ |
| **Em Estoque**    | 🟢 Verde `oklch(0.70 0.17 155)`   | Badge/Indica | Produto disponível |
| **Estoque Baixo** | 🟡 Amarelo `oklch(0.76 0.18 80)`  | Warning      | Atenção necessária |
| **Sem Estoque**   | 🔴 Vermelho `oklch(0.60 0.23 25)` | Destructive  | Indisponível       |
| **Informativo**   | 🔵 Azul `oklch(0.60 0.18 250)`    | Info         | Mensagens          |

**Variantes Soft (Background dos status):**

- Verde Soft: `oklch(0.95 0.05 155)` - Fundo leve para badges
- Vermelho Soft: `oklch(0.95 0.05 25)` - Fundo leve para erros
- Azul Soft: `oklch(0.95 0.03 250)` - Fundo leve para info

#### 3.3 Cores Neutras

| Elemento       | Cor                                  | Uso             |
| -------------- | ------------------------------------ | --------------- |
| **Background** | Quase branco `oklch(0.99 0.005 240)` | Fundo principal |
| **Foreground** | Cinza escuro `oklch(0.18 0.02 250)`  | Texto principal |
| **Cards**      | Branco puro `oklch(1 0 0)`           | Containers      |
| **Borders**    | Cinza claro `oklch(0.90 0.01 240)`   | Separadores     |
| **Muted Text** | Cinza médio `oklch(0.45 0.02 250)`   | Texto auxiliar  |

#### 3.5 Modo Dark

O projeto utiliza **next-themes** para suportar light/dark mode:

**Dark Mode Palette:**

- Fundo: Cinza escuro
- Texto: Branco/Claro
- Cards: Cinza escuro suave
- Cores semânticas: Mantidas com ajustes de luminância

Toggle acessível no header com ícone de lua/sol.

---

## 🎯 Resumo das Decisões de Design

### 1️⃣ **Campos Essenciais**

- ✅ **Nome, Preço, Estoque** (Obrigatórios)
- ✅ **Descrição, Imagem** (Opcionais)
- ✅ Validação rigorosa com Zod
- ✅ Feedback em tempo real ao usuário

### 2️⃣ **Organização das Telas**

- ✅ **Desktop First**: Tabela com informações completas
- ✅ **Mobile Friendly**: Cards empilhados
- ✅ **Hierarquia Clara**: Informações críticas em destaque
- ✅ **Navegação Lógica**: Breadcrumbs e botões contextuais
- ✅ **Responsividade**: Breakpoints em tablet (md)

### 3️⃣ **Identidade Visual**

- ✅ **Azul Corporativo**: Confiança e profissionalismo
- ✅ **Cores Semânticas**: Status de estoque imediatamente reconhecível
- ✅ **OKLch Color Space**: Melhor perceptibilidade de cores
- ✅ **Modo Dark**: Suporte total com next-themes
- ✅ **Espaçamento Generoso**: Boa legibilidade e conforto visual
- ✅ **Acessibilidade**: Contraste adequado, ícones + texto

---

## Como Usar

### Instalação

```bash
# Clonar repositório
git clone <repo-url>
cd controlli

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start
```

## 🔄 Fluxo de Usuário

```text

1. Lojista acessa a aplicação
   ↓
2. Vê a listagem de produtos (tabela/cards)
   ↓
3. Pode:
   a) Clicar em "Novo Produto" → Preenche formulário → Salva
   b) Clicar em "Ver" → Consulta detalhes do produto
   c) Clicar em "Editar" → Modifica informações
   d) Clicar em "Deletar" → Remove com confirmação
   ↓
4. Notificações feedback das ações
```

---

A aplicação ficará disponível em:

```text
http://localhost:3000
```

---

## 📌 Observação

Este projeto foi desenvolvido com foco **educacional.**
