# Otimização CRO e mobile da página de produto

## Alterações
- Manter o cabeçalho e as barras de aviso existentes sem alterações.
- Reduzir espaços da galeria no mobile e manter a foto principal inteira com enquadramento `contain`.
- Enxugar a primeira dobra para antecipar título, avaliações e preço.
- Remover a linha redundante de comparação “Env. vendu séparément…”.
- Reordenar o fluxo de compra nesta sequência: seletores de kits, Order Bump, botão principal, bandeiras e garantias.
- Manter o Order Bump desmarcado inicialmente e preservar os totais, variantes, links de checkout, UTMs e eventos existentes.

## Validação
- Conferir o resultado em viewport mobile de 393 × 852 e desktop.
- Testar as duas ofertas com o Order Bump marcado e desmarcado, verificando preços e URLs de checkout.
- Confirmar que não há sobreposição, imagem cortada ou erro no navegador.

## Detalhes técnicos
- Alterações limitadas aos componentes de cabeçalho, galeria, caixa de compra e seus estilos responsivos.
- O estado continuará centralizado na página, sem mudança na regra de seleção ou no rastreamento.
