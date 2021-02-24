<template>
	<view>
		<view :style="{height: `${statusBarHeight}px`, paddingTop: `60rpx`}" class="bg-primary"></view>
		<view :style="{height: `${statusBarHeight}px`}" class="fixed-top bg-white"></view>
		<view class="flex align-center position-fixed bg-white w-100" :style="{height:`60rpx`,top:`${statusBarHeight}px`,}" style="z-index:9999;">
			<my-icon iconId="icon-jiantou-copy" class="mx-2" @my-click="quit"></my-icon>
			<view class="font-lg"><slot></slot></view>
		</view>
		<view style="height: 60rpx;"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight:this.$statusBarHeight
			};
		},
		methods: {
			quit() {
				console.log(111);
				uni.navigateBack({
					delta: 1
				});
			}
		},
	}
</script>

<style>

</style>
