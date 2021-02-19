<template>
	<view class="flex a-center j-between mx-3 my-4">
		<block v-for="(item, idx) in functionSortArr" :key="idx">
			<view class="flex flex-column a-center">
				<my-icon :iconId="item.iconId" :iconColor="item.iconColor" iconSize="65"></my-icon>
				<text class="mt-1 font text-light-black">{{item.name}}</text>
			</view>
			
		</block>
	</view>
</template>

<script>
	export default {
		props: {
			functionSortArr: {
				type: Array,
				default: () => []
			},
		},
	}
</script>

<style>

</style>
