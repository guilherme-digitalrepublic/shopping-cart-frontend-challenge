<script>
import Header from '@/components/Header/header.vue'
import Footer from '@/components/Footer/footer.vue'
import List from '@/modules/List/list.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    List
  }
}
</script>

<template>
  <main>
    <Header></Header>
    <List></List>
    <Footer></Footer>
  </main>
</template>
