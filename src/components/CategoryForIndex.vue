<!-- 首页的推荐模块 -->
<template>
  <div>
  	<caption>{{text}}</caption>
		<slot name="good"></slot>
  </div>
</template>

<script>
	export default {
	  name: 'CategoryForIndex',
	  props: ['text']
	}
</script>

<style scoped lang="scss">
	caption{
		line-height: .8rem;
		padding-left: .4rem;
		border-bottom: 1px solid $borderColor;
		font-size: .32rem;
		text-align: left;
		position: relative;
		display: block;
		&:before{
			content: "";
			position: absolute;
			left: 0;
			top: 0;
			height: 100%;
			width: .08rem;
			background: $red;
		}
	}
</style>
