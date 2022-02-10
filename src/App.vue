<template>
  <div>
    <Header />
    <main>
      <Hero />
      <FeaturedProducts />
      <AdBox />
      <RecentVideos />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import Hero from './components/Hero/Hero.vue'
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts.vue'
import AdBox from './components/AdBox/AdBox.vue'
import RecentVideos from './components/RecentVideos/RecentVideos.vue'
import Footer from './components/Footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    FeaturedProducts,
    AdBox,
    RecentVideos,
    Footer
  }
}
</script>
