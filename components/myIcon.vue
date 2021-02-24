<template>
	<text class="iconfont" :class="[iconId, iconColor]" :style="{fontSize:`${iconSize}rpx`}" @tap="myClick"></text>
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
			myClick() {
				this.$emit('my-click')
			}
		},
	}
</script>

<style>

</style>
