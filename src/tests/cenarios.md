# Cenários de testes

## Testes unitários

### Breadcrumb
- Quando o componente for renderizado, deve aparecer t

### Error
- Quando nenhuma mensagem for passada, deve verificar se a mensagem de erro padrão está sendo renderizada corretamente
- Quando a mensagem for passada via props, deve verificar se a mensagem está sendo renderizada corretamente

### Header 
- Quando o componente for renderizado, deve estar visivel os elementos de logo, itens de navegação e barra de busca
- Quando o componente for renderizado, o campo de busca deve se iniciar vazio

### Loading 
- Quando o componente for renderizado, deve estar visivel o spinner e a mensagem de carregando 

#### ProductCard 
- Quando o componente for renderizado, deve estar visivel o nome do produto, preço e imagem
- Quando a props "isWishList" for falso, o botão de coração deve ser exibido
- Quando a props "isWishList" for verdadeiro, o botão de remoção deve ser exibido
- Quando o produto estiver na wishlist, o ícone de coração deve estar ativo
- Quando o produto não estiver na wishlist, o ícone de coração não deve estar ativo
- Quando o produto está na wishlist e o botão de coração é clicado, o produto deve ser removido da wishlist
- Quando o produto não está na wishlist e o botão de coração é clicado, o produto deve ser adicionado da wishlist
- Quando o botão de remoção for clicado, o produto deve ser removido da wishlist

### ListProduct 
- Quando a lista de produtos estiver vazia, nenhum produto deve ser exibido
- Quando a lista de produtos tiver múltiplos itens, todos os produtos devem ser exibidos corretamente com as propriedades corretas

### Home 
- Quando os dados ainda estiver sendo carregados, deve exibir o componente de loading
- Quando houver alguma falha na API, o componente de erro deve ser exibido
- Quando a lista de produtos estiver vazia, nenhum produto deve ser exibido
- Quando a lista de produtos tiver múltiplos itens, todos os produtos devem ser exibidos corretamente com as propriedades corretas

### WishList 
- Quando os dados ainda estiver sendo carregados, deve exibir o componente de loading
- Quando houver alguma falha na API, o componente de erro deve ser exibido
- Quando a wishlist estiver vazia, aparecer a mensagem "Sua lista de desejos está vazia"
- Quando a wishlist tiver múltiplos itens, todos os produtos devem ser exibidos corretamente com as propriedades corretas

---

## Testes de integração 
- Quando algo for digitado no campo de busca, a lista de produtos deve ser filtrada
- Quando a home estiver sendo exibida, deve haver a opção de adicionar e remover o produto da lista de desejos
- Quando um produto na home for adicionado na lista de desejos, o produto deve aparecer na página da lista de desejos
- Quando um produto estiver na lista de desejos, ao remove-lo, não deve mais ser exibido na página da lista de desejos
