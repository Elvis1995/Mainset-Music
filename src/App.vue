<template>
  <div>
    <Header />
    <main>
      <Hero />
      <FeaturedProducts />
      <AdBox />
    </main>
  </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import Hero from './components/Hero/Hero.vue'
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts.vue'
import AdBox from './components/AdBox/AdBox.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    FeaturedProducts,
    AdBox
  }
}
</script>
