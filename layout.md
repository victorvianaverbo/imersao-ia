# Especificação de Layout: Engenharia de Agentes Autônomos

## Diretrizes Globais (Identidade Nuclear)
- **Design System**: High-Tech Minimalist (Anthropic + Hyros)
- **Atmosfera**: Limpa, focada em dados, sofisticada e autoritária.
- **Paleta de Cores**:
  - `Base (Paper)`: `#FBFAF9` (Off-white com textura de ruído)
  - `Deep Slate`: `#0F172A` (Usado em blocos de contraste e terminal)
  - `Pure Black`: `#000000` (Textos principais e logos)
  - `Accent (Indigo)`: `#4F46E5` (Acentos, botões e destaques serifados)
  - `Accent Light`: `#818CF8`
  - `Technical Gray`: `#64748B` (Textos secundários e metadados)
- **Tipografia**:
  - **Heading**: `Fraunces` (Serif). Pesos 400 a 700. Uso de itálico para ênfase elegante.
  - **Body/System**: `Outfit` (Sans). Estética geométrica e moderna.
  - **Code/Log**: `JetBrains Mono` ou `monospace` para elementos de terminal.
- **Micro-animações**:
  - Timing: `800ms` a `1200ms`.
  - Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (Transições suaves de "luxo").
- **Constraints Globais**: Noise Overlay (`natural-paper.png` a 15% opacidade), Border Radius `12px` (Soft tech).

---

## Seção 1: Hero (O Comando Central)
*Já implementado fisicamente, mas mantido aqui para referência de consistência.*
- **Arquetipo**: Split Assimetrico (60/40)
- **Constraints**: Noise Texture, Monocromatico, Terminal Frame, Floating Metrics.
- **Visual**: Terminal à direita simulando a execução dos agentes em tempo real.

---

## Seção 2: O Problema (A Paralisia do Modelo Antigo)
- **Arquetipo**: Bento Box (Grid Irregular)
- **Constraints**: High Contrast Cards, Selective Red Accent, Negative Space.
- **Justificativa**: Organiza as dores (copy, design, tráfego) em módulos independentes, criando uma percepção de "caos organizado" que a solução resolve.
- **Conteúdo**: "Você trava antes de começar. E a culpa não é sua." + Detalhamento da equipe necessária (Copywriter, Designer, etc).
- **Layout**:
  - Grid de 4 colunas em desktop.
  - Card 1 (Maior): Problema central. `grid-column: span 2`.
  - Cards 2, 3, 4: Custos individuais (~R$ 2.000, ~R$ 1.500).
- **Tipografia**: Títulos em `Fraunces` 2.5rem. Valores monetários em `Outfit` Bold com cor `#EF4444` (Danger).
- **Animações**: `fade-up` com `stagger` de 100ms entre os boxes.

---

## Seção 3: A Solução (A Engenharia que Executa)
- **Arquetipo**: Progressive Reveal / Single Focus
- **Constraints**: Interactive Agent Cards, Glow Effects, Motion Path.
- **Justificativa**: Apresenta cada um dos 4 agentes (Estrategista, Copywriter, Designer, DevOps) como entidades autônomas poderosas.
- **Conteúdo**: "Conheça a Engenharia de Agentes Autônomos que Lança por Você."
- **Layout**:
  - Container centralizado.
  - Exibição de 4 "Cápsulas de Agente". Cada uma com ícone técnico e descrição curta.
  - Ao centro, um "Core" pulsante que simboliza a sincronia entre eles.
- **Cores**: Background Deep Slate (`#0F172A`). Texto em `#FFFFFF`.
- **Animações**: Pulsação sutil (`breathe-loop`) no "Core". Cards aparecem com `scale-in` orbitando o centro.

---

## Seção 4: Conquistas (O Produto no Ar)
- **Arquetipo**: Modular Grid (Minimalista)
- **Constraints**: Image Masking, Subtle Parallax, Clean Borders.
- **Justificativa**: Prova visual tangível do que o usuário terá em mãos após 2 horas.
- **Conteúdo**: 4 pilares: Produto Definido, Copy Pronta, Página no Ar, Lançamento Feito.
- **Layout**: 4 colunas iguais. Cada card tem um aspecto de "Documento" ou "Blueprint".
- **Elementos Visuais**: Pequenas "prévia" gráficas (ex: wireframe de página, gráfico de funil).
- **Interatividade**: `hover-lift` com sombra de profundidade (`box-shadow: 0 30px 60px rgba(0,0,0,0.1)`).

---

## Seção 5: Para Quem É (O Filtro de Qualidade)
- **Arquetipo**: Split Vertical (50/50 com Overlay)
- **Constraints**: Vertical Text, Image Duotone, Staggered Bullets.
- **Justificativa**: Cria um contraste direto entre quem é e quem não é o público alvo, usando uma imagem de autoridade para selar a confiança.
- **Conteúdo**: "Feito para você se..." + 3 tópicos principais.
- **Layout**: Imagem à esquerda (40%), Conteúdo em checklist à direita (60%).
- **Animações**: Ícones de check surgem com `rotate-in` em sequência.

---

## Seção 6: Autoridade (O Arquiteto da Engenharia)
- **Arquetipo**: Editorial (Estilo Revista Tech)
- **Constraints**: Large Serif Quote, Image Bleed, Monospace Metadata.
- **Justificativa**: Posiciona Victor Viana não como professor, mas como o engenheiro que codificou a solução milionária.
- **Conteúdo**: Bio do Victor + R$ 10MM em resultados + FGV.
- **Layout**: Foto PB com filtro Indigo. Texto sobreposto levemente.
- **Tipografia**: Citação em `Fraunces` Italic, tamanho `clamp(2rem, 3vw, 3.5rem)`.
- **Animações**: `clip-reveal` na imagem do autor (abre verticalmente).

---

## Seção 7: Oferta (O Convite para a Ativação)
- **Arquetipo**: Hero Dominante (Dark Mode)
- **Constraints**: Neon Indigo Glow, Pulse Button, Price Gradient.
- **Justificativa**: O ponto de conversão final. Deve ser dramático e irresistível.
- **Conteúdo**: "O seu lançamento pelo preço de um almoço" + Preço (R$ 37).
- **Layout**: Painel central "flutuante" em Dark Mode. Borda com animação de luz (`border-gradient`).
- **Cores**: Background da seção: Deep Slate. Painel: `#1E293B`.
- **Interatividade**: Botão CTA com `pulse-loop` infinito de glow indigo.

---

## Seção 8: FAQ (Descomplicando a Tecnologia)
- **Arquetipo**: Accordion Asimétrico
- **Constraints**: Border Animation, Single Open, Numbering System.
- **Justificativa**: Resolve dúvidas técnicas sem poluir o visual minimalista.
- **Mudança**: Ícones de Plus que se tornam Close em `#4F46E5`.
- **Interatividade**: Transição de altura suave (`transition: max-height 0.5s ease-in-out`).

---

## Seção 9: Garantia (O Selo de Engenharia)
- **Arquetipo**: Isolated Element
- **Constraints**: SVG Path Animation, Clean Frame.
- **Conteúdo**: "Garantia de Blindagem Anti-Risco".
- **Layout**: Moldura tracejada minimalista em Indigo. Ícone de selo oficial ao centro.
- **Visual**: Fundo com leve gradiente radial saindo do centro para o Indigo.
