
# Stack e considerações

```
- Vue.js
- Vuex
	- O carrinho DEVE estar salvo no Vuex e ser acessível em qualquer local da aplicação.

- Gitflow
	- Estrutura dos commits e branches serão avaliadas

- Desenvolver utilizando os princípios DRY e KISS

- Layout
	- Não precisa ser responsivo, só desktop
	- Precisa estar funcionando e precisa estar com os elementos bem separados para fácil entendimento, mas a estilização não será avaliada

- HTML
	- O código precisa estar semântico, com SEO bem feito

- SCSS
	- Utilizar BEM.

- Manter componentes e funções pequenas

- Utilizar ES6 sempre que possível.
```

Abaixo, material de apoio para dar suporte na criação do aplicativo.

https://bradfrost.com/blog/post/atomic-web-design/
https://medium.com/better-programming/kiss-dry-and-code-principles-every-developer-should-follow-b77d89f51d74
https://medium.com/better-programming/most-useful-javascript-methods-355139f96d75
https://vuex.vuejs.org/
https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow

A forma com que o dev vai aplicar os conhecimentos destes conteúdos também será avaliada.

---

O aplicativo vai consistir em um site de compras com carrinho.

## Página inicial

```
- Lista dos produtos
	- Filtro de produtos por categoria (todos são selecionáveis)
		- Tecnologia
		- Brinquedos
		- Cama, mesa e banho
	- Range de preço (todos são selecionáveis)
		- Campo Abaixo de: (Campo digitável com máscara de valor)
		- Campo Acima de: (Campo digitável com máscara de valor)
	- Produto
		- Foto (pode pegar a mesma foto pra todos os produtos da mesma categoria)
		- Nome
		- Preço
	- Botão de adicionar ao carrinho

- Header
	- Nome do aplicativo
	- Botão para abrir carrinho

- Carrinho
	- Lista de produtos com foto, nome, preço e ícone de exclusão
	- Caso não haja produtos, mostrar mensagem "Carrinho vazio"
	- Valor total dos produtos
	- Botão de finalizar pedido
```

## Finalizar pedido

```
- A cada categoria vai ser aplicado uma compra. Caso você adicione 3 itens de Tecnologia, 2 itens de Brinquedo e 1 item de Cama, mesa e banho, vão precisar ser feitas 3 compras diferentes, uma para cada categoria.

- Formulários
	- Um pra cada categoria
	- Cada um deve ter a listagem dos produtos no carrinho e o valor total da compra daquela categoria
	- Os itens podem ser removidos do carrinho nesta tela também
```

Os formulários de compras precisam ter os seguintes campos:
```
- Nome
	- Campo obrigatório

- Data de nascimento
	- Campo obrigatório
	- Máscara de DD/MM/YYYY

- Sexo
	- Masculino
	- Feminino
```

A tela terá uma mensagem de sucesso: "Obrigado por comprar com a gente!" e abaixo uma lista de todos os produtos, independentemente das categorias, em ordem alfabética. Além disso, precisará mostrar o NOME do cliente que comprou este produto.

## Observações

A lista dos produtos precisa estar toda num arquivo JSON, onde você irá importar no template para desenvolver.

A forma como você vai montar e onde você irá colocar esse JSON fica à seu critério.