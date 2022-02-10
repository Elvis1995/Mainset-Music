<template>
  <section class="mb-12 bg-gray-standard">
		<div class="py-10 container-small">
			<h2 class="mb-8 font-bold uppercase">Recent videos</h2>
			<ul class="grid grid-cols-3 gap-11 shadow-effect">
				<li v-for="video in videos" :key="video.id" class="relative flex flex-col justify-center w-full h-auto m-0 duration-100 transform hover:scale-110">
					<a :href="video.url" class="after-state">
						<img :src="video.img">
					</a>
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
export default {
  name: 'RecentVideos',
	data() {
		return {
			videos: [
				{
					id: 1,
					url: "https://mainset.creator-spring.com/listing/collab-bro-5322?product=389",
					img: require("../../assets/Images/video-1.jpg"),
				},
				{
					id: 2,
					url: "https://mainset.creator-spring.com/listing/new-parents-expectations?product=389",
					img: require("../../assets/Images/video-2.jpg"),
				},
				{
					id: 3,
					url: "https://mainset.creator-spring.com/listing/hi-hats-be-like?product=389",
					img: require("../../assets/Images/video-3.jpg"),
				},
			],
		};
	}
}
</script>
