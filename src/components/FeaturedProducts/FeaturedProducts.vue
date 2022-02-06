<template>
  <section class="bg-gray-standard">
		<div class="py-10 container-small">
			<ul class="grid grid-cols-4 gap-12">
				<li v-for="product in products" :key="product.id" class="flex flex-col justify-center w-full px-5 m-0 bg-white h-96">
					<a :href="product.url"><img :src="product.img"></a>
					<p class="text-base font-bold">{{ product.title }}</p>
					<p>{{ product.price }}</p>
				</li>
			</ul>
		</div>	
	</section>
</template>

<script>
export default {
  name: 'FeaturedProducts',
  data() {
    return {
		products: [
			{id: 1, title: 'COLLAB, BRO?', url:"https://mainset.creator-spring.com/listing/collab-bro-5322?product=389", img:require('../../assets/Images/1.png'), price: 19.98,},
			{id: 2, title: 'PARENTS EXPECTATIONS', url:"https://mainset.creator-spring.com/listing/new-parents-expectations?product=389", img:require('../../assets/Images/2.png'), price: 15.00,},
			{id: 3,title: 'HI-HATS BE LIKE', url:"https://mainset.creator-spring.com/listing/hi-hats-be-like?product=389", img:require('../../assets/Images/3.png'), price:14.98,},
			{id: 4, title: 'YOUR IDEA VS YOUR TRACK!', url:"https://mainset.creator-spring.com/listing/your-idea-vs-your-track?product=377", img:require('../../assets/Images/4.png'), price:39.99,},
			{id: 5,title: 'IN THE STUDIO', url:"https://mainset.creator-spring.com/listing/in-the-studio-merch?product=377", img:require('../../assets/Images/5.png'), price:42.99,},
			{id: 6, title: 'BIRTH CONTROL EFFECTIVENESS', url:"https://mainset.creator-spring.com/listing/birth-control-effectiveness?product=389", img:require('../../assets/Images/6.png'), price:15.00,},
			{id: 7, title: "SO YOU'RE A PRODUCER? HOW MUCH YOU EARN", url:"https://mainset.creator-spring.com/listing/so-you-re-a-producer-how-much?product=389", img:require('../../assets/Images/7.png'), price:15.00,},
			{id: 8, title: "NO IT DOESN'T SUCK!", url:"https://mainset.creator-spring.com/listing/no-it-doesn-t-suck?product=389", img:require('../../assets/Images/8.png'), price:15.00,},
		]
	}
  }
}
</script>
