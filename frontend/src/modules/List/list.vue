<script>
import Product from '@/components/Product/product.vue'
import Filters from '@/components/Filter/filter.vue'

export default {
  name: 'List',
  components: {
    Product,
    Filters,
  },
  data: function () {
     return {
       isActive: false,
    }
  },
  methods: {
    toggleFilter: function () {
      this.isActive = !this.isActive;
    }
  }
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
      <Product></Product>
    </div>
  </section>
</template>