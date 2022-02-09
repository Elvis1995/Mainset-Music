<template>
	<div class="relative py-4 px-14 cursor-pointer text-white clip-path transition-opacity duration-300 hover:opacity-80 mt-3 md:mt-0"
  :class="shopButton ? 'bg-red-600 hover:bg-red-500' : 'bg-gray-800  hover:bg-gray-700'  ">
		<a :href="link" class="after-state">{{ name }}</a>
	</div>
</template>

<script>
export default {
  name: 'HeroButton',
  props: {
    name: String,
    shopButton: Boolean,
    link: String
  }
};
</script>

<style></style>
