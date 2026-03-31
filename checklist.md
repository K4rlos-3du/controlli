# Checklist - Desafio Técnico Starti Front-end

## ✓ Parte 1: Planejamento de Interface

### Documentação no README.md

- [ ] **Questão 1**: Identificar campos essenciais para cadastro de produto
  - [ ] Nome do produto
  - [ ] Código
  - [ ] Preço
  - [ ] Quantidade em estoque
  - [ ] Descrição
  - [ ] Categoria
  - [ ] Outros campos relevantes
- [ ] **Questão 2**: Documentar organização dos elementos nas telas
  - [ ] Estrutura da tela de listagem
  - [ ] Estrutura da tela de cadastro
  - [ ] Estrutura da tela de detalhes
  - [ ] Fluxo de navegação
- [ ] **Questão 3**: Definir identidade visual
  - [ ] Paleta de cores
  - [ ] Tipografia
  - [ ] Componentes de UI

---

## ✓ Branding e Identidade Visual

### Definição do Projeto

- [ ] **Nome do Projeto/Marca**
  - [x] Definir nome da aplicação - Controlli
  - [ ] Documentar razão da escolha no README
  
### Paleta de Cores

- [ ] **Cores Primárias**
  - [ ] Cor principal (destaque/CTA)
  - [ ] Cor secundária (elementos complementares)
  - [ ] Documentar códigos HEX/RGB
- [ ] **Cores Neutras**
  - [ ] Branco/Background
  - [ ] Tons de cinza (backgrounds secundários, borders)
  - [ ] Preto/Texto (contraste adequado)
- [ ] **Cores Semânticas**
  - [ ] Verde para sucesso
  - [ ] Vermelho para erro
  - [ ] Amarelo/Laranja para aviso
  - [ ] Azul para informação
- [ ] **Contraste e Acessibilidade**
  - [ ] Verificar contraste WCAG AA ou superior
  - [ ] Testar com ferramentas de contraste (WebAIM)

### Tipografia

- [ ] **Fontes Selecionadas**
  - [ ] Fonte para headings (h1, h2, h3)
  - [ ] Fonte para corpo de texto
  - [ ] Tamanhos de fonte definidos (escala tipográfica)
- [ ] **Importação de Fontes**
  - [ ] Usar Google Fonts / local fonts
  - [ ] Configurar no CSS global ou Tailwind
- [ ] **Estilos Tipográficos**
  - [ ] Pesos de fonte (bold, regular, light)
  - [ ] Line-height apropriado
  - [ ] Hierarquia visual clara

### Componentes Visuais

- [ ] **Design System Básico**
  - [ ] Buttons (primary, secondary, danger)
  - [ ] Inputs e Textarea
  - [ ] Cards / Containers
  - [ ] Badges / Tags
  - [ ] Modals / Dialogs
- [ ] **Estados Visuais**
  - [ ] Hover
  - [ ] Focus
  - [ ] Active
  - [ ] Disabled
  - [ ] Loading
- [ ] **Espaçamento**
  - [ ] Escala de margem/padding consistente
  - [ ] Uso de unidades (px, rem)
  - [ ] Distâncias pré-definidas

### Ícones e Elementos

- [ ] **Ícones**
  - [ ] Escolher biblioteca (React Icons, Lucide, Feather, etc)
  - [ ] Consistência de estilo
  - [ ] Tamanhos padrão
- [ ] **Logo / Branding Visual**
  - [ ] Criar ou encontrar logo (se houver)
  - [ ] Dimensões padrão
  - [ ] Posicionamento na interface
- [ ] **Decorações/Padrões**
  - [ ] Uso de cores + padrões consistentes
  - [ ] Efeitos (sombras, bordas, gradientes)
  - [ ] Animações suaves (transições)

### Layout e Grid

- [ ] **Sistema de Grid**
  - [ ] Definir grid layout (ex: 12 colunas)
  - [ ] Breakpoints responsivos (mobile, tablet, desktop)
  - [ ] Margens laterais / container max-width
- [ ] **Responsividade**
  - [ ] Mobile first (opcional mas recomendado)
  - [ ] Breakpoints: 320px, 768px, 1024px, 1440px+
  - [ ] Testar layout em diferentes telas

### Documentação de Design

- [ ] **Criar Estilo Guide / Design Document**
  - [ ] Incluir no README ou arquivo separado (DESIGN.md)
  - [ ] Exemplos visuais das cores
  - [ ] Exemplos de componentes
  - [ ] Regras de uso
- [ ] **Inspirações e Referências**
  - [ ] Documentar sites/apps que inspiraram o design
  - [ ] Links para ferramentas utilizadas
  - [ ] Justificativa das escolhas
- [ ] **Implementar no Código**
  - [ ] Usar CSS variables ou Tailwind config
  - [ ] Criar arquivo de tema (`theme.js` ou `tailwind.config.js`)
  - [ ] Aplicar variáveis em todo o projeto

---

## ✓ Parte 2: Desenvolvimento com Next.js

### Setup Inicial do Projeto

- [x] Criar novo projeto Next.js
- [ ] Configurar estrutura de pastas
  - [ ] `app/` - Rotas e layouts
  - [ ] `components/` - Componentes reutilizáveis
  - [ ] `lib/` - Utilitários e funções auxiliares
  - [ ] `contexts/` - Context API para estado global
  - [ ] `types/` - Tipos TypeScript
- [ ] Instalar dependências de estilo (Tailwind CSS / styled-components)
- [ ] Configurar espaçamento, cores e fontes globais

### Gerenciamento de Estado Global

- [ ] Criar Context para gerenciar lista de produtos
  - [ ] Estado de produtos (array)
  - [ ] Funções: addProduct, updateProduct, deleteProduct, getProductById
- [ ] Configurar Provider no layout raiz
- [ ] Implementar persistência em localStorage (opcional mas desejável)

---

## ✓ Tela 1: Listagem de Produtos

### Estrutura e Conteúdo

- [ ] **Cabeçalho da página**
  - [ ] Título (h1) - "Produtos" ou similar
  - [ ] Subtítulo (h2) - descrição breve
  - [ ] Parágrafo explicativo sobre a funcionalidade
- [ ] **Tabela de Produtos**
  - [ ] Colunas: ID, Nome, Preço, Quantidade, Ações
  - [ ] Renderizar produtos do estado global
  - [ ] Estilo responsivo
  - [ ] Alternância de cores nas linhas (zebra pattern)
- [ ] **Interatividade da Tabela**
  - [ ] Clique em linha leva para página de detalhes
  - [ ] Cursor muda ao passar na linha (usability)
  - [ ] Botão de editar/deletar (opcional)
- [ ] **Navegação**
  - [ ] Botão destacado para "Criar Novo Produto"
  - [ ] Link/rota para `/cadastro`
- [ ] **Estados Visuais**
  - [ ] Mensagem quando não há produtos
  - [ ] Feedback visual adequado

---

## ✓ Tela 2: Cadastro de Produto

### Formulário e Funcionalidades

- [ ] **Cabeçalho**
  - [ ] Título claro (h1) - "Novo Produto" ou "Editar Produto"
  - [ ] Descrição du contexto
- [ ] **Campos do Formulário**
  - [ ] Nome do produto (input text, obrigatório)
  - [ ] Preço (input number, obrigatório)
  - [ ] Quantidade (input number, obrigatório)
  - [ ] Descrição (textarea)
  - [ ] Categoria (select ou input)
  - [ ] SKU/Código (input text, opcional)
- [ ] **Validação**
  - [ ] Validação de campos obrigatórios
  - [ ] Validação de valores numéricos
  - [ ] Feedback de erro em tempo real (opcional)
- [ ] **Botões/Ações**
  - [ ] Botão "Salvar" ou "Cadastrar"
  - [ ] Botão "Cancelar" (volta para listagem)
- [ ] **Feedback de Sucesso/Erro**
  - [ ] Toast/Alert ao salvar com sucesso
  - [ ] Redirecionamento automático para tela de listagem
  - [ ] Mensagem de erro caso falhe
  - [ ] Mostrar feedback clara ao usuário

---

## ✓ Tela 3: Detalhes do Produto

### Conteúdo e Apresentação

- [ ] **Cabeçalho**
  - [ ] Título com nome do produto
  - [ ] Breadcrumb ou link de voltar
- [ ] **Informações do Produto**
  - [ ] Nome do produto
  - [ ] SKU/Código
  - [ ] Categoria
  - [ ] Preço formatado
  - [ ] Quantidade em estoque
  - [ ] Descrição completa
  - [ ] Data de criação/atualização (opcional)
- [ ] **Status Visual**
  - [ ] Indicador visual de disponibilidade (em estoque/fora de estoque)
  - [ ] Design claro e legível
- [ ] **Ações/Navegação**
  - [ ] Botão "Editar Produto" (rotas para cadastro com pré-populado)
  - [ ] Botão "Deletar Produto" (com confirmação)
  - [ ] Botão "Voltar para Listagem"

---

## ✓ Qualidade de Código

### Organização e Clareza

- [ ] **Nomenclatura**
  - [ ] Variáveis com nomes descritivos em português ou inglês consistente
  - [ ] Componentes com nomes claros (ProductList, ProductForm, ProductDetail)
  - [ ] Funções bem nomeadas (handleAddProduct, formatPrice, etc)
- [ ] **Estrutura de Componentes**
  - [ ] Componentes reutilizáveis (Button, Input, Card, etc)
  - [ ] Props bem tipadas (TypeScript ou proptypes)
  - [ ] Componentes suficientemente pequenos
- [ ] **Código Limpo**
  - [ ] Sem console.log ou código comentado desnecessário
  - [ ] DRY (Don't Repeat Yourself)
  - [ ] Sem lógica duplicada
- [ ] **Funcionalidades Implementadas**
  - [ ] CRUD básico (Create, Read, Update, Delete)
  - [ ] Rotas corretas
  - [ ] Navegação fluida entre telas
  - [ ] Estado mantém dados ao navegar

### Boas Práticas Next.js

- [ ] Usar `app` router corretamente
- [ ] Layout compartilhado para todas as páginas
- [ ] Componentes otimizados
- [ ] Sem erros no console

### Styling e UI/UX

- [ ] Design visual coerente em todas as telas
- [ ] Cores e tipografia consistentes
- [ ] Responsivo em dispositivos móveis
- [ ] Feedback visual adequado (hover, focus, active states)
- [ ] Acessibilidade básica (labels em inputs, contraste adequado)

---

## ✓ Testes e Validação

- [ ] Testar fluxo completo (listar → criar → detalhar → editar → deletar)
- [ ] Validar que dados persistem ao navegar
- [ ] Testar em navegadores diferentes
- [ ] Validar responsividade em mobile
- [ ] Verificar se feedback de erro/sucesso funciona
- [ ] Testar formulário com dados inválidos

---

## ✓ Entrega

### Repositório GitHub

- [ ] Criar repositório público no GitHub
- [ ] Adicionar `.gitignore` apropriado
- [ ] Commits descritivos durante o desenvolvimento
- [ ] README.md completo com instruções

### Arquivo README.md

- [ ] Título do projeto
- [ ] **Respostas da Parte 1 do Desafio**
  - [ ] Resposta 1: Campos essenciais e botões
  - [ ] Resposta 2: Organização da interface
  - [ ] Resposta 3: Identidade visual (cores, fontes, inspirações)
- [ ] **Como executar o projeto**
  - [ ] Instruções de instalação de dependências
  - [ ] Comando para rodar o projeto
  - [ ] Tecnologias utilizadas
- [ ] **Estrutura do projeto** (breve descrição das pastas)
- [ ] **Funcionalidades implementadas**
- [ ] **Considerações de design e desenvolvimento**

### Antes de Enviar

- [ ] Remover console.logs de debug
- [ ] Verificar spelling/gramática
- [ ] Testar URL do repositório
- [ ] Confirmar que projeto roda sem erros
- [ ] Enviar link GitHub no formulário do edital

---

## 📝 Notas Importantes

✨ **Criatividade**: Não tenha medo de adicionar detalhes visuais, animações suaves, ou componentes extras que melhorem a experiência

🎯 **Foco**: Certifique-se de que todas as funcionalidades obrigatórias estão implementadas antes de adicionar extras

📱 **Responsividade**: Teste em dispositivos móveis para garantir que funciona bem

♿ **Acessibilidade**: Use semântica HTML correta e garanta que a navegação por teclado funciona

🚀 **Performance**: Evite re-renderizações desnecessárias com useMemo/useCallback quando apropriado
