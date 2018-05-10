<!-- 没有数据 -->
<template>
  <div class="no-data">
		<i class="iconfont" :class="icon"></i>
		<div>{{text}}</div>
  </div>
</template>

<script>
	export default {
	  name: 'NoData',
	  props: {
	  	text: {
	  		type: String,
	  		default: '暂无数据'
	  	},
	  	icon: {
	  		type: String,
	  		default: 'icon-nodata'
	  	}
		},
	}
</script>

<style scoped lang="scss">
	.no-data{
		padding: 2rem 0;
		color: $black9;
		.iconfont{
			font-size: 2rem;
		}
		div{
			margin-top: .2rem;
			font-size: .4rem;
			letter-spacing: 2px;
		}
	}
</style>
