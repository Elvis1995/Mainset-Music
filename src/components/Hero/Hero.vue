<template>
	<section class="relative h-750">
		<video class="absolute inset-0 object-cover w-full h-full overflow-hidden -z-1" loop autoplay playsinline muted>
			<source
				src="https://themes.fourthwall.com/themes/assets/11d2f253-34b7-4fdc-b01b-17868cd74972/assets/video-bg-light.mp4?v=364d6351-2cdd-8622-b962-d429a0989974"
				type="video/mp4"
			/>
		</video>
		<div class="absolute text-center transform top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
			<h1 class="text-5xl sm:text-7xl md:text-8xl font-bold">Mainset Music</h1>
			<div class="block md:flex justify-between mt-10 text-lg font-bold">
				<HeroButton name="Shop" :shopButton="true" link="https://mainsetmusic.com" />
				<HeroButton name="Youtube" />
				<HeroButton name="Instagram" />
				<HeroButton name="Podcast" />
			</div>
		</div>
	</section>
</template>

<script>
import HeroButton from "./HeroButton.vue";
export default {
	name: 'Hero',
	components: {
		HeroButton,
	},
};
</script>
