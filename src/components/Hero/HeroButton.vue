<template>
	<div class="py-4 px-14 cursor-pointer text-white clip-path transition-opacity duration-300 hover:opacity-80 mt-3 md:mt-0"
  :class="redColor ? 'bg-red-600 hover:bg-red-500' : 'bg-gray-800  hover:bg-gray-700'  ">
		<a href="#">{{ name }}</a>
	</div>
</template>

<script>
export default {
  name: 'HeroButton',
  props: {
    name: String,
    redColor: Boolean
  }
};
</script>

<style></style>
