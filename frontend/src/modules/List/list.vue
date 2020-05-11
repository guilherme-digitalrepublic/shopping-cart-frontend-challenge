<script>
import Product from '@/components/Product/product.vue'
import Filters from '@/components/Filter/filter.vue'

export default {
  name: 'List',
  components: {
    Product,
    Filters,
  }
}
</script>

<template>
  <section class="shop-product-list space-page">
    <div class="shop-product-list__container">
      <button class="shop-product-list__filter-button">
        <img class="shop-product-list__filter-image" src="@/assets/icon/filter.svg">
        <p class="shop-product-list__filter-name">Filter</p>
      </button>
      <Filters></Filters>
      <Product></Product>
    </div>
  </section>
</template>