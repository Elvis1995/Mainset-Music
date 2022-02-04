<template>
  <div>
    <Header />
    <main>
      <Hero />
      <FeaturedProducts />
    </main>
  </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import Hero from './components/Hero/Hero.vue'
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    FeaturedProducts
  }
}
</script>
