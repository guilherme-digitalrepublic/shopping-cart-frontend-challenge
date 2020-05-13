<script>
export default {
  data: function() {
    return {
      isActive: false,
    }
  },
  methods: {
    toggleCart: function () {
      this.isActive = !this.isActive;
    }
  }
}
</script>

<template>
  <header class="shop-header">
    <div class="shop-header__wrapper space-page">
      <img class="shop-header__logo" src="@/assets/icon/shop-logo.svg">
      <img src="@/assets/icon/shop-cart.svg" class="shop-header__cart" @click="toggleCart()">
    </div>
    <div class="shop-header__menu-cart" v-bind:class="{'shop-header__menu-cart--active' : isActive}">
      <div class="shop-header__container-cart">
          <button class="shop-header__close-button" @click="toggleCart()">
            <span class="shop-header__close shop-header__close--top"></span>
            <span class="shop-header__close"></span>
          </button>
          <p class="shop-header__total-value"></p>
          <button class="shop-header__finish"></button>
      </div>
    </div>
  </header>
</template>