# Clone da página do produto Medicube — Hypochlorous Acid Rice Body Peel Shot

Recriar, como página inicial do app, uma réplica fiel da página de produto da Medicube US: mesmo conteúdo, mesma estrutura e mesmo visual (fundo branco, tipografia sem serifa condensada, botão preto de compra, blocos de seção alternando branco/cinza claro).

## Estrutura da página (de cima para baixo)

1. Barra superior rotativa com avisos promocionais (AGE-R, loja oficial, indique amigos).
2. Cabeçalho: logo MEDICUBE, navegação (Shop, Best Sellers, AGE-R, Skincare, Body, About), busca, conta e carrinho.
3. Bloco do produto (2 colunas):
   - Galeria com 7 imagens do produto e miniaturas clicáveis.
   - Título "Hypochlorous Acid Rice Body Peel Shot", subtítulo "Gentle Body Exfoliating Serum", 10 avaliações / 5.0 estrelas.
   - Preço $28.00 USD, seletor de quantidade, botão "Add To Cart" e "Buy it now".
   - Aviso de frete calculado no checkout e parcelamento acima de $35.
   - Barra "You're $80.00 away from free shipping".
4. Ficha rápida: Skin Type, Skin Concerns, Key Ingredients.
5. OVERVIEW: descrição completa do produto (4 parágrafos originais).
6. CLINICAL TEST: três números destacados (-88.98% pele morta nos cotovelos, -81.13% nas pernas, -94.85% impurezas nos poros) + nota do laboratório.
7. HOW TO USE: 3 passos + notas de uso.
8. FAQ: acordeão com as 5 perguntas originais.
9. INGREDIENTS: lista completa em bloco recolhível.
10. Reviews: nota 5.0, distribuição de estrelas (100% 5 estrelas), botão "Write a review" e lista das avaliações reais (Summer, Amber, IRINA, Adam, Laura e demais) com data e texto.
11. Rodapé Medicube: colunas de links (Help, About, Policies), newsletter e redes sociais.

## Detalhes técnicos

- Página escrita em `src/routes/index.tsx` (substitui o placeholder), com componentes de seção em `src/components/product/`.
- Imagens carregadas diretamente das URLs públicas do CDN da Shopify usadas pela página original.
- Design tokens (branco, preto, cinzas, radius pequeno) definidos em `src/styles.css`; nada de cores fixas nos componentes.
- Interações somente de front-end: troca de imagem na galeria, quantidade, acordeões de FAQ/ingredientes, abas de reviews. Sem backend, sem carrinho real — "Add To Cart" apenas mostra um toast.
- Textos mantidos em inglês, iguais aos da página original.
- `head()` da rota com título, descrição, og/twitter e og:image apontando para a imagem principal do produto.

## Fora do escopo

Checkout real, login, busca funcional, envio de reviews e demais páginas do site.
