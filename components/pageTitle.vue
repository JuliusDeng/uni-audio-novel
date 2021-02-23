<template>
	<view>
		<view class="flex a-center">
			<my-icon iconId="icon-jiantou-copy" class="mx-2"  @my-click="quit"></my-icon>
			<view class="font-lg">
				<slot></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			quit() {
				console.log('1111');
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style>

</style>
