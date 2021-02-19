<template>
	<text class="iconfont" :class="[iconId, iconColor]" :style="{fontSize:`${iconSize}rpx`}"></text>
</template>

<script>
	export default {
		props: {
			iconId: {
				type: String,
				default: ''
			},
			iconColor: {
				type: String,
				default:"text-dark"
			},
			iconSize: {
				type: [Number, String],
				default: 45
			}
		},
		methods: {
			
		},
	}
</script>

<style>

</style>
