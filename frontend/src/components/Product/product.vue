<script>
export default {
  props: [
    'img',
    'name',
    'price'
  ]
}
</script>

<template>
  <div class="shop-product">
    <div class="shop-product__item">
      <img class="shop-product__image" :src="img" >
      <h3 class="shop-product__name">{{name}}</h3>
      <p class="shop-product__price">{{price}}</p>
      <button class="shop-product__add">Adicionar ao Carrinho</button>
      <button class="shop-product__delete"></button>
    </div>
  </div>
</template>