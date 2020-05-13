<script>
export default {
  props: ['isActive', 'toggleFilter'],
}
</script>

<template>
  <aside class="shop-filter" v-bind:class="{ 'shop-filter--active':isActive }">
    <button class="shop-filter__close-button" @click="toggleFilter()">
      <span class="shop-filter__close shop-filter__close--top"></span>
      <span class="shop-filter__close"></span>
    </button>
    <div class="shop-filter__container space-page">
      <dl class="shop-filter__category">
        <dt class="shop-filter__title">Categorias</dt>
        <dd class="shop-filter__option"><h3><a href="#" title="Todos">Todos</a></h3></dd>
        <dd class="shop-filter__option"><h3><a href="#" title="Tecnologia">Tecnologia</a></h3></dd>
        <dd class="shop-filter__option"><h3><a href="#" title="Brinquedos">Brinquedos</a></h3></dd>
        <dd class="shop-filter__option"><h3><a href="#" title="Cama, Mesa e Banho">Cama, Mesa e Banho</a></h3></dd>
      </dl>
      <dl class="shop-filter__category">
        <dt class="shop-filter__title">Preço</dt>
        <form class="shop-filter__price-form">
          <fieldset class="shop-filter__fieldset">
            <div class="shop-filter__price-column">
              <label class="shop-filter__label" for="min_price">
                <input class="shop-filter__value" type="number" id="min_input" placeholder="Mínimo" value="">
              </label>
            </div>
            <div class="shop-filter__price-column" method="post" id="priceForm">
              <label class="shop-filter__label" for="max_price">
                <input class="shop-filter__value" type="number" id="max_input" placeholder="Máximo" value="">
              </label>
            </div>
          </fieldset>
          <button type="submit" class="shop-filter__price-button" value=""><img src="@/assets/icon/arrow.svg"></button>
        </form>
      </dl>
    </div>
  </aside>
</template>