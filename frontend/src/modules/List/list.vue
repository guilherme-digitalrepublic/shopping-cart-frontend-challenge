<script>
import Product from '@/components/Product/product.vue'
import Filter from '@/components/Filter/filter.vue'

export default {
  name: 'List',
  components: {
    Product,
    Filter
  }
}
</script>

<template>
  <section class="shop-product-list">
    <div class="shop-product-list__container">
      <Product></Product>
      <Filter></Filter>
    </div>
  </section>
</template>