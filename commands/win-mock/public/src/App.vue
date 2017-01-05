<template>
	<div id="container">
		<app-toast></app-toast>
		<app-butterbar></app-butterbar>
		<app-aside></app-aside>
		<router-view></router-view>
	</div>
</template>

<script>
	import AppAside from './components/Aside/Aside.vue';

	export default {
		name: 'app',
		components: {
			AppAside
		}
	}
</script>

<style>
	h1,
	h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>