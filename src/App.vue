<template>
<div>
  <Header />
  <main>
    <Hero />
  </main>

</div>
</template>

<script>
import Header from './components/Header/Header.vue'
import Hero from './components/Hero/Hero.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero
  }
}
</script>
