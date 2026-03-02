# Especificação de Layout: Método Funil IA (Gravado)

## Diretrizes Globais
- **Design System**: Light Premium
- **Fontes**: Clash Display (Heading) + General Sans (Body) - Statement moderno e tech.
- **Paleta Base**: 
  - Background (Main): `#FAFAFB`
  - Background (Surface): `#FFFFFF`
  - Textos: `#0F172A` (Primary), `#475569` (Secondary), `#94A3B8` (Tertiary)
  - Cores de Marca: `#4F46E5` (Primary), `#3730A3` (Dark), `#818CF8` (Light)
  - Acentos: `#10B981` (Success), `#EF4444` (Danger)
  - Gradiente Principal: `linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)`
  - Gradiente Alerta: `linear-gradient(135deg, #EF4444 0%, #F97316 100%)`
- **Métricas Comuns**:
  - Container Max-Width: `1280px`
  - Border-Radius base: `16px` (md), `24px` (lg), `32px` (xl)
  - Transições padrão: `300ms cubic-bezier(0.16, 1, 0.3, 1)`

---

## Seção 1: Hero

### Arquétipo e Constraints
- **Arquétipo**: Split Assimétrico (Grid 1.2fr / 1fr)
- **Constraints**: Glassmorphism, Floating Cards, Background Orbs, Imagem Blur Background
- **Justificativa**: Mantém o design aprovado do Hero mas adapta para evidenciar que o produto agora é gravado e de "acesso imediato", usando os cards flutuantes para provar o valor visualmente.

### Conteúdo
- **Headline**: Estruture e coloque no ar seu funil Low Ticket em 2 horas usando IA
- **Subheadline**: Tenha acesso imediato ao passo a passo gravado para estruturar sua oferta do zero ao ar — sem precisar de equipe ou semanas de planejamento.
- **CTA**: QUERO TER ACESSO IMEDIATO (R$ 37)
- **Badge**: [Mudar de "Imersão Ao Vivo" para "Acesso Imediato"] - Método Validado

### Layout
- **Altura**: `min-height: 100vh`
- **Padding**: `clamp(6rem, 10vw, 8rem) 0`
- **Grid**: `grid-template-columns: 1.2fr 1fr`, gap `4rem`.
- Lado esquerdo (Conteúdo) centralizado verticalmente usando Flexbox.
- Lado direito (Visual) ocupa altura total de `600px` em perspectiva 3D.

### Tipografia
- **Headline**: Clash Display, `font-weight: 600`, `clamp(2.5rem, 4vw + 1rem, 4.5rem)`, `line-height: 1.1`, cor `#0F172A`. Destaque "2 horas usando IA" com `--gradient-1`.
- **Subheadline**: General Sans, `font-weight: 400`, `clamp(1rem, 2vw, 1.25rem)`, `line-height: 1.6`, cor `#475569`.
- **CTA (Botão)**: General Sans, `font-weight: 600`, `1.125rem`, espaçamento de letras `0.5px`.

### Cores
- **Fundo**: `#FAFAFB` com fundo de grade dinâmico (`background-image` linear gradients).
- **Background Orbs**: Blur de 100px. Orb 1 (`#4F46E5` com 15% opacidade), Orb 2 (`#EC4899` com 10% opacidade).
- **Botão CTA**: Background `var(--gradient-1)`, texto `#FFFFFF`, sombra `0 10px 25px rgba(79, 70, 229, 0.25)`.

### Elementos Visuais
- Círculos de luz (órbitas) em desfoque no fundo.
- **3 Elementos em Glassmorphism (Cards direita)**: Cards soltos exibindo as conquistas. Background `rgba(255,255,255,0.7)`, border `1px solid rgba(255,255,255,0.5)`, blur `20px`.

### Animações
- **Cards Flutuantes**: Animações independentes. Top animation `float 6s ease-in-out infinite`, middle `floatReverse 7s infinite`, bottom `float 8s infinite 1s`.
- SEM animação de AOS (fade-up ou opacity 0) no carregamento inicial do Hero. NUNCA.

### Interatividade
- **Botão CTA Hover**: `transform: translateY(-4px)`, boxShadow expande. O ícone dentro desliza 4px para direita.
- **Cards Hover**: `transform: translateY(-10px) scale(1.02)`, `z-index: 10`, alteração de sombra.

### Responsividade
- **< 992px**: Grid stack (1fr). Texto centralizado, visual hero cai para baixo.
- **< 576px**: Cards flutuantes reduzem em largura para `280px`. Padding mobile reduzido.

---

## Seção 2: O Problema

### Arquétipo e Constraints
- **Arquétipo**: Contained Center + Bento Box (Grid Irregular)
- **Constraints**: Text Gradient Red, Danger Highlights, Hover Lift
- **Justificativa**: O formato "Bento" agrupa pequenas objeções e problemas (copywriter, tráfego, tempo) de forma altamente visual e escaneável.

### Conteúdo
- **Título**: Você tem a oferta, mas a complexidade te paralisa.
- **Conteúdo**: O que trava o seu lançamento não é falta de talento. É depender de copywriter, designer, gestor de tráfego e semanas de idas e vindas. Isso custava caro e demorava muito... até a IA mudar o jogo.

### Layout
- **Container Textual**: `max-width: 800px`, texto alinhado no centro (Contained Center).
- **Grid**: `display: grid; grid-template-columns: repeat(4, 1fr)`, gap `2rem`, `max-width: 1000px`.
- Padding vertical generoso `8rem 0`.

### Tipografia
- **Título Principal**: Clash Display, `clamp(2rem, 3vw, 3.5rem)`, texto "complexidade te paralisa" recebe `--gradient-red`.
- **Parágrafo Base**: General Sans, `1.25rem` (clamp base), `#475569`. Tag `<strong>` no final "até a IA mudar o jogo" usa a fonte Heading e peso 600 na cor `#0F172A`.

### Cores
- **Cards do Grid (Panels)**: `#FAFAFB` background com borders sutis de 5% black.
- **Card Danger (Tempo)**: Fundo `rgba(239, 68, 68, 0.05)`, borda e ícone em `#EF4444`.

### Elementos Visuais
- Ícones em alto contraste nos painéis, tamanho 40px em `#4F46E5`.
- Divisor abaixo do título: linha fina redonda de `60px` altura `4px` com gradient.

### Animações
- **Scroll**: `data-aos="fade-up"` `duration="800"` stagger `"100"` para os itens da bento box.

### Interatividade
- **Hover Bento Item**: `transform: translateY(-8px)`, sombra `0 20px 40px rgba(0,0,0,0.08)`, borda de accent transitionada (`border-color: rgba(79, 70, 229, 0.3)`).

### Responsividade
- **< 992px**: Bento Box passa para `grid-template-columns: repeat(2, 1fr)`.
- **< 576px**: Grid passa para `1fr`.

---

## Seção 3: A Solução

### Arquétipo e Constraints
- **Arquétipo**: Split com Overlap (Aba de vídeo se sobrepondo ao layout traseiro)
- **Constraints**: Video Picture-in-Picture (mockup de player), Imagem com Overlay
- **Justificativa**: Por ser um material focado em um passo a passo (gravado, clique a clique), nada comunica melhor do que a interface de um "player de aula" limpo se sobrepondo ao fundo dinâmico.

### Conteúdo
- **Título**: O fim da barreira técnica: O que custava R$ 5.000 agora custa centavos e algumas horas.
- **Conteúdo**: Desenvolvi um **treinamento prático e direto** para você assistir e aplicar. Vou te mostrar, clique a clique, como usar a Inteligência Artificial para colocar sua oferta no ar hoje mesmo. Sem enrolação, sem teoria desnecessária. Apenas execução.

### Layout
- **Estrutura Topo**: Centralizado de introdução (`max-width: 700px`).
- **Estrutura Meio**: Mockup Player flutuante (`max-width: 900px`) posicionado via overlap (`margin-top: -3rem` em relação a um fundo colorido gerado com absolute inset).
- **Padding Box**: `padding: 6rem 0`, margin extra pra compensar fundo.

### Tipografia
- **Título**: Clash Display, peso 600, tamanho `clamp(2.5rem, 4vw, 3rem)`, destaque para "R$ 5.000" (riscado com linha) e "centavos".
- **Corpo textual**: `1.125rem`, espaçamento linha `1.6`.

### Cores
- **Fundo Seção**: Superfície `#111827` (Dark Mode pontual para destacar o mock de vídeo). 
- **Texto sobre Dark Mode**: `#F8FAFC`, acentos em `#818CF8`.

### Elementos Visuais
- Mockup de Player de vídeo com bordas arredondadas `24px`, glow e sombra de volume `0 25px 50px -12px rgba(0, 0, 0, 0.5)`. Play button central usando glassmorphism circular e triângulo branco. Ícones minimalistas da Phosphor.

### Animações
- Fade-up agressivo: Mockup surge vindo de baixo com Scale `data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000"`.

### Interatividade
- **Player Hover**: Botão de Play pulsa sutilmente em scale (1.0 => 1.1) durante o hover do container e o backdrop do vídeo diminui brilho.

### Responsividade
- Stack elements; Padding adjust. Ajustar Mockup aspect-ratio para se manter consistente no mobile (`aspect-ratio: 16/9`).

---

## Seção 4: Para Quem É

### Arquétipo e Constraints
- **Arquétipo**: Rule of Thirds (Layout estruturado em terços horizontalmente)
- **Constraints**: Stagger Animation, Off-Grid Element decorativo, Iconography Customizada
- **Justificativa**: Lista as utilidades organizadas em terços para garantir fluidez mental, onde cada pilar representa um checklist do cliente potencial.

### Conteúdo
- **Título**: Este treinamento foi feito para você se:
- **Tópico 1**: Você quer lançar seu produto low ticket imediatamente, sem esperar por uma data específica.
- **Tópico 2**: Acha que precisa de uma equipe enorme só para testar uma ideia.
- **Tópico 3**: Tem uma oferta, mas a parte técnica e estratégica parece um "bicho de sete cabeças".

### Layout
- Container divide-se em 3 blocos iguais de base flex `gap: 2rem`. 
- Header justificado e centralizado, com espaçamento vertical moderado.
- Altura dos blocos em `100%` da div parente.

### Tipografia
- Tópicos usando Clash Display (tamanho menor, ex: `1.5rem`)
- Textos dos itens: General Sans, cor `#475569`.

### Cores
- Fundo neutro `#FAFAFB`.
- Ícone de "check" em `#10B981` com halo de opacidade transparente de verde (`rgba(16, 185, 129, 0.2)`).

### Elementos Visuais
- Círculo de check customizado (bolha check) e linhas sutis delimitando entre colunas se em desktop (com `<hr>` custom ou border-right em nth-child(1), nth-child(2)).

### Animações 
- Animação de `Stagger` via CSS: Fade in e transform lateral (esq para dir) acionado no viewport intersect (AOS `data-aos="fade-left"` delay 100, 200, 300).

### Interatividade
- Check Icon Hover: Ícones giram em 10 graus ao aplicar o hover na caixa pai.

### Responsividade
- Quebra de grid para 1 fr em Mobile, bordas removidas e convertidas para divisores verticais curtos ou margens.

---

## Seção 5: O Que Você Vai Aprender (Acesso Instantâneo)

### Arquétipo e Constraints
- **Arquétipo**: Scroll Cinematico / Sticky Scroll
- **Constraints**: Sticky Element no lado esquerdo com barra progresso, Scroll Progress Animation lado direito, Parallax Effect.
- **Justificativa**: Conforma uma listagem progressiva. O cabeçalho fica na vista acompanhando as seções (copy, page, ads, traffic) até terminarem de rolar, oferecendo uma experiência premium imersiva.

### Conteúdo
- **Título**: O conteúdo completo que você vai dominar:
- **Card 1 / Copy com IA**: Como gerar toda a sua página de vendas em minutos usando prompts validados.
- **Card 2 / Página Pronta**: Como montar sua estrutura visual de forma simples, elegante e profissional.
- **Card 3 / Anúncios de Alta Performance**: Use a IA para criar criativos que atraem cliques e vendas.
- **Card 4 / Tráfego sem Mistério**: O guia para subir suas campanhas com baixo orçamento e alta escala.

### Layout
- Div contêiner com `position: relative`, paddings super generosos (ex. `10rem 0`).
- Coluna Esquerda: `width: 35%`, `position: sticky; top: 120px;`.
- Coluna Direita: `width: 60%`, `display: flex; flex-direction: column; gap: 8rem; margin-top: 5rem;`.

### Tipografia
- Títulos de cada bloco: `text-3xl`, `Clash Display`, cor `var(--primary-dark)`. Numerais (01, 02, 03, 04) opacos em fundo.

### Cores
- Background Branco `#FFFFFF`. 
- Numerais Decorativos com `#E2E8F0` `opacity: 0.5`.

### Elementos Visuais
- Cards de Conteúdo possuem fundo branco, grandes sombras difusas `0 25px 40px -15px rgba(0,0,0,0.05)`, linha lateral gradient que indica andamento. Modelação sutil que imita "folhas de papel".

### Animações
- Revelação progressiva de cada módulo (AOS fade-up offset 200).
- Sticky wrapper fixa nativamente.

### Interatividade
- Cada bloco, ao atingir o viewport central, ilumina a borda left, e descolore as outras via JS native ou pseudo classes CSS (:focus-within não rola com scroll natural). Via CSS apenas, usem :hover de highlight natural.

### Responsividade
- Remove posição sticky abaixo de 992px, altera layout para formato clássico uma debaixo da outra e margem reduzida.

---

## Seção 6: Autoridade

### Arquétipo e Constraints
- **Arquétipo**: Split Asimétrico 40/60
- **Constraints**: Imagem Duotone (Blur/Texture Effect), Text Reveal, Monochromatic Base
- **Justificativa**: Apresenta quem criou o curso e porquê confiar, criando contraste e dando mais autoridade à foto.

### Conteúdo
- **Título**: Quem vai te guiar?
- **Conteúdo**: Sou o **Victor Viana**. Nos últimos 5 anos, participei de mais de 100 projetos digitais, gerando mais de R$ 10 milhões em resultados. Sou fundador do Metrika Pro e pós-graduado pela FGV. Transformei toda a minha experiência prática em um método guiado por IA para você nunca mais travar na hora de lançar.

### Layout
- Esquerda: `40% width` com frame para imagem vertical fotográfica, cantos `32px` com formato recortado (`clip-path`).
- Direita: `60% width` com os parágrafos densos e citações. Gap `4rem`.

### Tipografia
- H2 Clash Display (Clamp custom), Título com `font-style: italic` para assinar estilo em citações secundárias. Textos mais densos com LineHeight `1.8`, tamanho grande (20px na base).

### Cores
- Imagem em tratativa Duotone / Filtragem via pseudo-elemento em `#4F46E5`, gerando identidade profunda.

### Elementos Visuais
- Foto perfil de perfil do autor com sobreposição linear gradient que "esquece" os limites.
- As aspas flutuantes (`quotes`) de cor neon por trás da cópia.

---

## Seção 7: Ancoragem e Oferta Principal

### Arquétipo e Constraints
- **Arquétipo**: Hero Dominante (com foco direcional e escopo restrito centrado).
- **Constraints**: Dark Mode Overlay, Texto com Gradiente (Premium), Hover Color (CTA), Pulse Button
- **Justificativa**: Oferta imperdível focando conversão total. Escurecimento do fundo eleva valor percebido da oferta isolada.

### Conteúdo
- **Título**: O caminho mais rápido e barato para lucrar.
- **Tópico 1**: No modelo tradicional, você gastaria semanas e mais de R$ 5.000 com profissionais.
- **Tópico 2**: Aqui, você recebe o mapa completo para fazer tudo sozinho, em poucas horas.
- **Tópico 3 (Bullet)**: Acesso de 12 Meses: Assista e revise quando quiser durante 1 ano.
- **Oferta/Preço**: De ~~R$ 297~~ por apenas R$ 37.
- **CTA**: QUERO MEU ACESSO AGORA

### Layout
- Secção envolta com padding altíssimo `120px 0`. Main pricing board flutuante como container de max-width `700px`, alinhado central, margens negativas do lado fora. Tudo enquadrado (Framed Content).

### Tipografia
- Preços (`$37`) usando Clash Display com `clamp(4rem, 8vw, 6rem)` em gradient glow. O "297" pequeno, riscado (`text-decoration-line: line-through`) cinza claro em `1.2rem`.
- CTA grandão `text-xl` com uppercase.

### Cores
- Fundo Seção: `#030712` (Black Slate extremado) com noise texture svg inline overlay sutilmente (opacity: 3%). 
- CTA Color: Botão gradient principal animado para acender fortemente.
- Tópicos usando verde accent para checklists `#10B981`.

### Elementos Visuais
- Trocando a estética clara pela inversão para atrair o clímax da conversação. Pricing Box é um painel translúcido de fundo #ffffff1a com bordas `1px solid #ffffff33`.

### Animações
- Botão CTA central fica em Infinite Pulse (`box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.7)` para espalhar), para captar cliques automáticos. Todo painel fade-up tardio com AOS.

---

## Seção 8: FAQ

### Arquétipo e Constraints
- **Arquétipo**: Accordion Asimétrico (50/50 em Grid Flex).
- **Constraints**: Accordion nativo com Expand, Border Animated, Single Focus no open, Texto Scramble do lado esquerdo.
- **Justificativa**: Abordagem inteligente, moderna e performática sem a rigidez da clássica FAQ inteira engessando o site.

### Conteúdo 
- Perguntas contidas no Markdown da Copy: 'O curso é ao vivo?', 'Preciso saber usar IA?', 'Recebo acesso na hora?', 'Tem suporte para dúvidas?'. Com as devidas respostas.

### Layout
- Esquerda: Big Text "Dúvidas Comuns" centralizado verticalmente à esquerda sticky até descer.
- Direita: Lista dos accordions em Flex Column, gap `1.25rem`.

### Tipografia
- Títulos Perguntas: General Sans Bold, `18px`, cor Dark.
- Respostas: Parágrafos suaves, cor Cinza de leitura longa.

### Cores / Visual
- BG: Branco `#ffffff`. Bordas dos accordions `#e2e8f0`.
- Closed State: fundo `#fafafb`
- Open State: fundo branco, eleva `transform: translateY(-2px)`, ganha leve sombra `#4F46E5`.

### Interatividade
- Clicks expandem/comprimem max-height do corpo das repostas com smooth transitions `300ms cubic-bezier(0.4, 0, 0.2, 1)`. O ícone Ph-Plus gira -45deg formando um X vermelho/azul.

---

## Seção 9: Garantia (Seal)

### Arquétipo e Constraints
- **Arquétipo**: Isolated Element (Mini seção).
- **Constraints**: Badge SVG custom, Círculo Dourado pontual.
- **Justificativa**: Dar alívio cognitivo final antes do rodapé e fechar risco para perto do CTA flutuante inferior.

### Conteúdo
- **Título**: Garantia Incondicional de 7 Dias.
- **Conteúdo**: Se você assistir ao conteúdo e decidir que não é para você, basta solicitar o reembolso em até 7 dias. Devolvo 100% do seu dinheiro sem burocracia. O risco é todo meu.

### Layout
- Container Estrito ao Centro `max-width: 600px`, ícone grande da garantia central.

### Tipografia
- Tudo centralizado, corpo legível e espaçado.

### Cores
- Gradient ou ícone pontual Amarelo Premium/Dourado em um SVG Phosphor Circle. Border-box da Garantia em borda Tracejada (`border: 2px dashed #4F46E5`). Background suave de azul clarinho 10% opaco para remeter pureza e contrato sem risco.

### Responsividades Finais
- Tudo ajustado para `text-center` em resoluções menores com flex order reorganizada, se possível, para prezição Mobile-centric.
