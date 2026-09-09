# Adicionar fotos às avaliações

## Alterações
- Enviar as duas imagens recebidas para o armazenamento de mídia do projeto.
- Associar uma imagem a cada uma das duas primeiras avaliações.
- Exibir as fotos dentro dos respectivos cards, mantendo a proporção original com largura responsiva e sem recorte.

## Verificação
- Confirmar que ambas carregam na página e mantêm o formato original em desktop e mobile.
- Validar que a seção de avaliações e o restante da página continuam funcionando normalmente.

## Detalhes técnicos
- Usar ponteiros locais de mídia em vez de links temporários.
- Tornar o campo de imagem opcional nos dados das avaliações.
- Renderizar com `height: auto` e `object-contain` para preservar a proporção nativa.
