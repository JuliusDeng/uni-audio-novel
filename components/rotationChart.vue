<template>
	<view class="mx-2">
		<swiper indicator-dots autoplay circular interval="2500" indicator-active-color="#ffffff" style="height: 380rpx;" @change="getIndex">
			<swiper-item v-for="(item, index) in imgArr" :key="index">
				<image :src="item.src" mode="aspectFill" class="w-100 animated" :class="currentIndex === index ? 'my-animate' : ''"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props: {
			imgArr: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				currentIndex: 0
			}
		},
		methods:{
			getIndex(e) {
				this.currentIndex = e.detail.current
			}
		}
	}
</script>

<style>

</style>
