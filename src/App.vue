<script>
	import { RouterLink, RouterView } from 'vue-router'
	export default{
		created(){
			this.$store.dispatch({type:'loadToys'})
		}
	}
</script>

<template>
	<RouterView />
</template>
