<template>
	<div>
		<tawk-header></tawk-header>
		<div id="search-wrapper">
			<SearchBar />
		</div>
		<router-view />
	</div>
</template>

<script>
import Header from './components/Header.vue'
import SearchBar from './components/SearchBar.vue';

export default {
	components: {
		'tawk-header': Header,
		SearchBar
	},
}
</script>

<style lang="scss" scoped>
@import 'scss/main.scss';

#search-wrapper {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 37px 0 74px 0;
}
</style>