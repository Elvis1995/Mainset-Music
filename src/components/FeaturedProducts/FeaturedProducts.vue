<template>
	<section class="bg-gray-standard">
		<div class="py-10 container-small">
			<ul class="grid grid-cols-4 gap-12 shadow-effect">
				<li v-for="product in products" :key="product.id" class="relative flex flex-col justify-center w-full px-5 m-0 duration-100 transform bg-white h-440 clip-path-img hover:scale-110">
					<a :href="product.url" class="after-state">
						<img :src="product.img">
						<div class="mt-4">
							<p class="text-base font-bold">{{ product.title }}</p>
							<p class="text-base">${{ product.price }}</p>
						</div>
					</a>
				</li>
			</ul>
			<div class="block py-4 mx-auto mt-12 text-white transition-opacity duration-300 bg-red-600 cursor-pointer w-max px-14 clip-path hover:bg-red-500 hover:opacity-80">
				<a class="font-bold uppercase" href="#">Browse all products</a>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "FeaturedProducts",
	data() {
		return {
			products: [
				{
					id: 1,
					title: "COLLAB, BRO?",
					url: "https://mainset.creator-spring.com/listing/collab-bro-5322?product=389",
					img: require("../../assets/Images/1.png"),
					price: 19.98,
				},
				{
					id: 2,
					title: "PARENTS EXPECTATIONS",
					url: "https://mainset.creator-spring.com/listing/new-parents-expectations?product=389",
					img: require("../../assets/Images/2.png"),
					price: 15.99,
				},
				{
					id: 3,
					title: "HI-HATS BE LIKE",
					url: "https://mainset.creator-spring.com/listing/hi-hats-be-like?product=389",
					img: require("../../assets/Images/3.png"),
					price: 14.98,
				},
				{
					id: 4,
					title: "YOUR IDEA VS YOUR TRACK!",
					url: "https://mainset.creator-spring.com/listing/your-idea-vs-your-track?product=377",
					img: require("../../assets/Images/4.png"),
					price: 39.99,
				},
				{
					id: 5,
					title: "IN THE STUDIO",
					url: "https://mainset.creator-spring.com/listing/in-the-studio-merch?product=377",
					img: require("../../assets/Images/5.png"),
					price: 42.99,
				},
				{
					id: 6,
					title: "BIRTH CONTROL EFFECTIVENESS",
					url: "https://mainset.creator-spring.com/listing/birth-control-effectiveness?product=389",
					img: require("../../assets/Images/6.png"),
					price: 15.0,
				},
				{
					id: 7,
					title: "SO YOU'RE A PRODUCER? HOW MUCH YOU EARN",
					url: "https://mainset.creator-spring.com/listing/so-you-re-a-producer-how-much?product=389",
					img: require("../../assets/Images/7.png"),
					price: 15.99,
				},
				{
					id: 8,
					title: "NO IT DOESN'T SUCK!",
					url: "https://mainset.creator-spring.com/listing/no-it-doesn-t-suck?product=389",
					img: require("../../assets/Images/8.png"),
					price: 15.99,
				},
			],
		};
	},
};
</script>
