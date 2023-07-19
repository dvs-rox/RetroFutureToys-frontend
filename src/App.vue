<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import { RouterView } from 'vue-router'
export default {
	created() {
		this.$store.dispatch({ type: 'loadToys' })
	},
	components: {
		AppHeader,
		AppFooter
	}
}
</script>

<template>
	<AppHeader class="full"/>
	<RouterView class="main" />
	<AppFooter class="full"/>
</template>
