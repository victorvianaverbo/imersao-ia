# Especificação Detalhada de Layout - Protótipo Antigravity

Este documento contém a arquitetura de layout meticulosamente extraída da copy e executada, servindo como a "Bíblia" do projeto, como detalhado pelo Diretor de Arte Inteligente.

---

## Identidade Visual e Tipografia (Global)
- **Paleta de Cores**:
  - `Dark Base (Fundo Principal)`: `#0B0F19`
  - `Dark Surface (Painéis e Cards)`: `rgba(30, 41, 59, 0.5)`
  - `Accent Utama (Roxo/Aura)`: `#4F46E5`
  - `Accent Light (Roxo Claro)`: `#818CF8`
  - `Alert / Warning`: `#EF4444`
  - `Texto Base`: `#F8FAFC`
  - `Texto Secundário (Muted)`: `#94A3B8`
- **Tipografia (Font Pairing)**:
  - **Headings**: `Fraunces` (Serif de estilo editorial "vintage moderno", alto peso `font-weight: 700 e 800`)
  - **Body / Text**: `Outfit` (Geométrica Sans-Serif suave para legibilidade extrema)
  - _Regra Global_: Jamais cruzar o limite das fontes ou incluir fontes default sem propósito. Nenhuma sombra grosseira de texto será utilizada, mantendo `letter-spacing` limpo.

---

## Seção 1: O Hero Minimalista

### Arquétipo e Constraints
- **Arquetipo**: Split Assimétrico com Foco Mínimo de Espaço em Branco.
- **Constraints**: Bleed Bottom (a atenção desce rapidamente para o restante da página), Hover Lift (Botões de CTA).
- **Justificativa**: O hero tem de ir "reto ao ponto". Espaços grandes brancos em torno das colunas foram exterminados (reduzindo Padding e Min-Height drásticamente).

### Conteúdo
`"Seu produto low ticket no ar. Sua página vendendo. Em 2 horas."`  
A subheadline propõe o problema/solução, com CTA: `ATIVAR AGENTES AGORA`.

### Layout
- O container master abriga a `.hero-grid` (`grid-template-columns: 1.2fr 1fr`).
- As distâncias entre título, subtítulo e CTA possuem os valores unificados de `margin-bottom: 2rem` para compactação eficiente.
- A exclusão deliberada da `nav-bar` e redução da `min-height` para `50vh` corta espaço em branco do *Above the Fold*.

---

## Seção 2: O Desafio (Bento Box do Dó)

### Arquétipo e Constraints
- **Arquetipo**: Bento Box Modular (`.bento-grid`).
- **Constraints**: Grid Assymetry (O problema master possui 2 spans verticais vs 4 pequenas caixas flutuantes de métricas).
- **Justificativa**: A modularização de preços "quebra" a percepção do usuário sobre o custo versus tempo de fazer isso na mão.

### Layout e Componentes
- `grid-template-columns: repeat(4, 1fr)` em tela cheia que comprime dinamicamente para 2 no Tablet (span de 2) e 1 no Mobile. Tudo operando o AOS de `fade-up` com escalonamento temporal `delay: 100~400ms`.
- Efeito **Red-Accent** em texto da carta de Web Designer ressalta o problema de custo para o cérebro.

---

## Seção 3: A Solução (Agentes em Ação) - 👉 *DOBRA DIRECIONADA*

### Arquétipo e Constraints
- **Arquetipo Exigido**: **Split Assimétrico com Progressive Reveal (Lista Expandida)**
- **Constraints Escolhidas**:
  - `Sticky Element` (O Título trava enquanto os Agentes sobem pela direita)
  - `Glassmorphism Avançado` (Cartões com opacidade baixa e blur pesado)
  - `Hover Glow Nativo` (Um `::before` pseudo-elemento radial gradiente na cor roxa reage ao passar o mouse).

### Justificativa de Execução
Ao invés de tentar condensar todos os 6 robôs no mesmo espaço estreito que o antigo modelo de 4 agentes orbitais forçava, o layout quebrou a estrutura da Seção ao meio. A coluna da esquerda "Vende a promessa" (Agarra o Scroll) e a coluna da direita "Demostra a engenharia" através de list cards empilhados numa torre flutuante.

### O "Highlight" Técnico (Destaque Visual)
Dois Agentes — *Web Designer* (R$ 3.000 antes cobrados na Objeção anterior) e *Analista de Marketing* (O toque mágico do deploy e conversão) — não podem ser iguais.
- Ambos recebem classe `.highlight-card` com:
  - Fundo constante `background: rgba(79, 70, 229, 0.1)`
  - Sombra ativada fixa: `box-shadow: 0 0 30px rgba(79, 70, 229, 0.1)`
  - O ícone (`ph-fill`) de preenchimento pesado, trocando a casca simples pelo impacto sólido.
- Background numérico das cartas `01 a 06` com fonte `8rem` transparentes (0.03% opacity) dão o rigor analítico imensamente elegante que o modelo SaaS busca.

### Responsividade
- Quando `max-width: 992px`, o título se desgruda (perde `.showcase-sticky`), transformando o Grid principal em uma única coluna fluida, focando nos agentes alinhando-se normalmente pelo Swipe Vertical Mobile.

---

## Seção 4: Conquistas ("Ao final...")

### Arquétipo e Constraints
- **Arquetipo**: Grid de Comparações Laterais (`.comparison-grid`).
- **Constraints**: Monocromático, Iconografia Minimalista Centrada.
- **Justificativa**: Contraste alto com cards escuros X cards azuis (Mecanismo Atual VS Protocolo Proposto) sem invaginar no Glassmorphism, retornando a atenção à cor primária (`#334155` background clean).

---

## Seções Finais e FAQ (A Base Analítica)

### Arquétipo e Constraints
- **Arquetipo**: Lista Assíncrona Retrátil (Dropdown/Accordion).
- **Constraints**: Draw Lines (Divisórias verticais/horizontais delimitam as perguntas criando seriedade investigativa).
- **Justificativa**: O Footer e o FAQ necessitam matar as dúvidas não convertidas, retornando a uma paleta totalmente baseada no texto `Fraunces` do Cabeçalho. A Garantia final (Blindagem Anti-Risco) recebe acentuamento pesado num botão primário massivo para o último click-through rate ser fisgado.
