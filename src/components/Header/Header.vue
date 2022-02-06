<template>
  <header :class="scrolled ? 'nav scrolled' : 'nav'">
		<div class="items-center justify-between hidden h-full lg:flex container-small">
			<div class="flex items-center">
				<svg class="mr-6" width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.7183 0.125H3.28167C1.4725 0.125 0 1.59833 0 3.4075V11.0083C0 12.8183 1.4725 14.2917 3.28167 14.2917H16.7192C18.5275 14.2917 20 12.8183 20 11.0083V3.4075C20 1.59833 18.5275 0.125 16.7183 0.125ZM13.7817 7.23417L8.14083 10.8433C8.0725 10.8867 7.99417 10.9092 7.91667 10.9092C7.8475 10.9092 7.77917 10.8917 7.71667 10.8575C7.58333 10.785 7.5 10.6442 7.5 10.4925V3.27417C7.5 3.12083 7.58333 2.98083 7.71667 2.9075C7.85083 2.835 8.01333 2.84083 8.14167 2.9225L13.7825 6.5325C13.9025 6.60917 13.975 6.74083 13.975 6.88333C13.9742 7.02583 13.9017 7.1575 13.7817 7.23417Z" fill="currentColor"></path></svg>
				<svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><path d="M5.495 0h11.01A5.494 5.494 0 0 1 22 5.495v11.01A5.494 5.494 0 0 1 16.505 22H5.495A5.494 5.494 0 0 1 0 16.505V5.495A5.494 5.494 0 0 1 5.495 0zM2.2 16.505A3.294 3.294 0 0 0 5.495 19.8h11.01a3.294 3.294 0 0 0 3.295-3.295V5.495A3.294 3.294 0 0 0 16.505 2.2H5.495A3.294 3.294 0 0 0 2.2 5.495v11.01zM5.5 11a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0zm8.8 0a3.3 3.3 0 1 0-6.6 0 3.3 3.3 0 0 0 6.6 0zm2.2-4.4a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2z" fill-rule="nonzero"></path></svg>
			</div>
			<div class="ml-80">
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
			open: false,
			active: false
    };
  },

  methods: {
    handleScroll() {
			window.addEventListener('scroll', () => {
			const isTop = window.scrollY < 10;
			if(isTop !== true) {
				this.scrolled =true;
			} else {
				this.scrolled = false;
			}
		});
    }
  },
	mounted() {
		this.handleScroll();
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
