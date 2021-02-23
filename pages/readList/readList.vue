<template>
	<view>
		<!-- 顶部导航高度占位 -->
		<view :style="{height: `${statusBarHeight}px`}"></view>
		<page-title>榜单</page-title>
	</view>
</template>

<script>
	import pageTitle from '@/components/pageTitle.vue';
	export default {
		components:{
			pageTitle
		},
		data() {
			return {
				statusBarHeight: this.$statusBarHeight
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
