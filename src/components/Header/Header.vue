<template>
  <header :class="scrolled ? 'nav scrolled' : 'nav'">
		<div v-if="mobile" class="flex items-center justify-end h-full lg:hidden">
			<i class="mr-4 cursor-pointer" @click="toggleMenu()" :class="active ? 'hidden' : 'block'">
				<svg class="w-8 h-8" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"/></svg>
			</i>
			<nav v-if="active" class="absolute top-0 right-0 z-10 w-1/2 h-screen bg-white md:w-1/4 slide-menu lg:hidden" :class="active ? 'transform-none' : '-translate-x-full'">
				<i class="flex justify-end mr-4" :class="scrolled ? 'mt-6' : 'mt-10'">
					<svg  class="w-8 h-8 cursor-pointer" fill="#000000" xmlns="http://www.w3.org/2000/svg" @click="toggleMenu()"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"/></svg>
				</i>
				<ul class="flex flex-col items-center my-10 space-y-6">
					<li><a class="text-xl font-medium" href="#">Shop</a></li>
					<li><a class="text-xl font-medium" href="#">Youtube</a></li>
					<li><a class="text-xl font-medium" href="#">Instagram</a></li>
					<li><a class="text-xl font-medium" href="#">Podcast</a></li>
				</ul>
				<div class="flex items-center justify-center">
					<svg class="mr-6" width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.7183 0.125H3.28167C1.4725 0.125 0 1.59833 0 3.4075V11.0083C0 12.8183 1.4725 14.2917 3.28167 14.2917H16.7192C18.5275 14.2917 20 12.8183 20 11.0083V3.4075C20 1.59833 18.5275 0.125 16.7183 0.125ZM13.7817 7.23417L8.14083 10.8433C8.0725 10.8867 7.99417 10.9092 7.91667 10.9092C7.8475 10.9092 7.77917 10.8917 7.71667 10.8575C7.58333 10.785 7.5 10.6442 7.5 10.4925V3.27417C7.5 3.12083 7.58333 2.98083 7.71667 2.9075C7.85083 2.835 8.01333 2.84083 8.14167 2.9225L13.7825 6.5325C13.9025 6.60917 13.975 6.74083 13.975 6.88333C13.9742 7.02583 13.9017 7.1575 13.7817 7.23417Z" fill="currentColor"></path></svg>
					<svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><path d="M5.495 0h11.01A5.494 5.494 0 0 1 22 5.495v11.01A5.494 5.494 0 0 1 16.505 22H5.495A5.494 5.494 0 0 1 0 16.505V5.495A5.494 5.494 0 0 1 5.495 0zM2.2 16.505A3.294 3.294 0 0 0 5.495 19.8h11.01a3.294 3.294 0 0 0 3.295-3.295V5.495A3.294 3.294 0 0 0 16.505 2.2H5.495A3.294 3.294 0 0 0 2.2 5.495v11.01zM5.5 11a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0zm8.8 0a3.3 3.3 0 1 0-6.6 0 3.3 3.3 0 0 0 6.6 0zm2.2-4.4a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2z" fill-rule="nonzero"></path></svg>
				</div>
			</nav>
		</div>
		<div v-else class="items-center justify-between hidden h-full lg:flex container-small">
			<div class="flex items-center">
				<svg class="mr-6" width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.7183 0.125H3.28167C1.4725 0.125 0 1.59833 0 3.4075V11.0083C0 12.8183 1.4725 14.2917 3.28167 14.2917H16.7192C18.5275 14.2917 20 12.8183 20 11.0083V3.4075C20 1.59833 18.5275 0.125 16.7183 0.125ZM13.7817 7.23417L8.14083 10.8433C8.0725 10.8867 7.99417 10.9092 7.91667 10.9092C7.8475 10.9092 7.77917 10.8917 7.71667 10.8575C7.58333 10.785 7.5 10.6442 7.5 10.4925V3.27417C7.5 3.12083 7.58333 2.98083 7.71667 2.9075C7.85083 2.835 8.01333 2.84083 8.14167 2.9225L13.7825 6.5325C13.9025 6.60917 13.975 6.74083 13.975 6.88333C13.9742 7.02583 13.9017 7.1575 13.7817 7.23417Z" fill="currentColor"></path></svg>
				<svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><path d="M5.495 0h11.01A5.494 5.494 0 0 1 22 5.495v11.01A5.494 5.494 0 0 1 16.505 22H5.495A5.494 5.494 0 0 1 0 16.505V5.495A5.494 5.494 0 0 1 5.495 0zM2.2 16.505A3.294 3.294 0 0 0 5.495 19.8h11.01a3.294 3.294 0 0 0 3.295-3.295V5.495A3.294 3.294 0 0 0 16.505 2.2H5.495A3.294 3.294 0 0 0 2.2 5.495v11.01zM5.5 11a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0zm8.8 0a3.3 3.3 0 1 0-6.6 0 3.3 3.3 0 0 0 6.6 0zm2.2-4.4a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2z" fill-rule="nonzero"></path></svg>
			</div>
			<div class="ml-296">
				<a href=""><img class="w-12 h-12" src="../../assets/Images/logo.png" /></a>
			</div>
			<div>
				<nav class="hover-extra-link-bright">
					<ul class="flex items-center space-x-6">
						<li><a class="text-xl font-medium" href="#">Shop</a></li>
						<li><a class="text-xl font-medium" href="#">Youtube</a></li>
						<li><a class="text-xl font-medium" href="#">Instagram</a></li>
						<li><a class="text-xl font-medium" href="#">Podcast</a></li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
</template>

<script>
export default {
  name: 'Header',
	data() {
    return {
      scrolled: false,
			active: false,
			mobile: false
    };
  },

  methods: {
    handleScroll() {
			window.addEventListener('scroll', () => {
			const isTop = window.scrollY < 10;
			if(isTop !== true) {
				this.scrolled = true;
			} else {
				this.scrolled = false;
			}
		});
    },
		toggleMenu() {
			this.active = !this.active;
		},
		checkScreenWidth() {
			if(window.innerWidth < 1024) {
					this.mobile = true
			}

			window.onresize = () => {
				window.matchMedia('(max-width:1024px)').matches ? this.mobile = true : this.mobile = false
			}
			return this.mobile
		}
  },
	mounted() {
		this.handleScroll();
		this.checkScreenWidth();
	}
}
</script>

<style scoped>
.nav {
	position: fixed;
	transition: background-color 300ms ease-out, height 300ms ease-out ;
	height: 112px;
	width: 100%;
	z-index: 98;
}

.scrolled {
	background-color: white;
	height: 80px;
}
</style>
