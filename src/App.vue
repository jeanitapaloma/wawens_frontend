<template>
	<v-app>
		<navigationbar/>
		<v-main>
			
		</v-main>
		<router-view></router-view>
	</v-app>	
</template>

<script>
import navigationbar from '@/components/Header.vue'
export default {
	name: 'App',

	components: {
		navigationbar
	},

	data: () => ({

	})
}
</script>


