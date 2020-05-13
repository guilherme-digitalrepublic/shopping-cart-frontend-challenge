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
    openFilter: function () {
      this.isActive = !this.isActive;
      this.isActive = true
    }
  }
}
</script>

<template>
  <section class="shop-product-list space-page">
    <div class="shop-product-list__container">
      <button class="shop-product-list__filter-button" @click="openFilter()">
        <img class="shop-product-list__filter-image" src="@/assets/icon/filter.svg">
        <p class="shop-product-list__filter-name">Filtro</p>
      </button>
      <Filters :isActive="isActive"></Filters>
      <Product></Product>
    </div>
  </section>
</template>