<script>
import Header from '@/components/Header/header.vue'
import Banner from '@/components/Banner/banner.vue'
import Footer from '@/components/Footer/footer.vue'
import List from '@/modules/List/list.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Banner,
    List,
    Footer,
  }
}
</script>

<template>
  <main>
    <Header></Header>
    <Banner></Banner>
    <List></List>
    <Footer></Footer>
  </main>
</template>
