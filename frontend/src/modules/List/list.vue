<script>
// Components
import Product from '@/components/Product/product.vue'
import Filters from '@/components/Filter/filter.vue'

import List from '@/helpers/products'

export default {
  name: 'List',
  components: {
    Product,
    Filters,
  },
  data: function () {
     return {
       isActive: false,
       products: List.products,
    }
  },
  mounted () {
    console.log(this.products)
  },
  methods: {
    toggleFilter: function () {
      this.isActive = !this.isActive;
    }
  },
  
}
</script>

<template>
  <section class="shop-product-list space-page">
    <div class="shop-product-list__container">
      <button class="shop-product-list__filter-button" @click="toggleFilter()">
        <img class="shop-product-list__filter-image" src="@/assets/icon/filter.svg">
        <p class="shop-product-list__filter-name">Filtro</p>
      </button>
      <Filters :isActive="isActive" :toggleFilter="toggleFilter"></Filters>
      <div v-for="product in products" :key="product.name" >
        <Product :img="product.img" :name="product.name" :price="product.price" ></Product>
      </div>
    </div>
  </section>
</template>