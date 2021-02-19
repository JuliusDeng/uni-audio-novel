<template>
	<view class="flex a-center j-between p-2 my-1">
		<view class="font-lg">
			<slot name="title"></slot>
		</view>
		<view class="flex a-center">
			<view class="font text-light-black">
				<slot name="tips">查看全部</slot>
			</view>
			<my-icon iconId="icon-iconfonti" iconColor="text-light-black"></my-icon>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
