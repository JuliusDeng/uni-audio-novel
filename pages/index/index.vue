<template>
	<view>
		<view :style="{height:`${$statusBarHeight}px`}"></view>
		<search-box></search-box>
		<rotation-chart :imgArr="swiperImgs"></rotation-chart>
		<function-sort :functionSortArr="functionSortArr"></function-sort>
		<list-header>
			<template #title> 猜你喜欢 </template>
			<template #tips> 更多推荐 </template>	
			
		</list-header>
		
	</view>
</template>

<script>
	import searchBox from '@/components/searchBox.vue';
	import rotationChart from '@/components/rotationChart.vue';
	import functionSort from '@/components/functionSort.vue';
	import listHeader from '@/components/listHeader.vue';
	export default {
		components: {
			searchBox,
			rotationChart,
			functionSort,
			listHeader,
		},
		data() {
			return {
				title: 'Hello',
				swiperImgs: [
					{
						src:"/static/swiperImages/swipertab1.png"
					},
					{
						src:"/static/swiperImages/swipertab2.png"
					},
					{
						src:"/static/swiperImages/swipertab3.png"
					},
					{
						src:"/static/swiperImages/swipertab4.png"
					},
					{
						src:"/static/swiperImages/swipertab5.png"
					}
				],
				functionSortArr:[
					{
						iconId:'icon-icon-test',
						iconColor:'text-warning',
						name:'看榜单'
					},
					{
						iconId:'icon-startRead',
						iconColor:'text-hover-primary',
						name:'听小说'
					},
					{
						iconId:'icon-icon09',
						iconColor:'text-light-black',
						name:'听音乐'
					},
					{
						iconId:'icon-zhishi',
						iconColor:'text-success',
						name:'听知识'
					}
				]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
</style>
