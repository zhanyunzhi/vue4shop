<template>
	<div class="header">
		<div class="header__back">返回</div>
		<h2 class="header__title">我是标题</h2>
		<div class="header__home">home</div>
	</div>
</template>

<script>
	export default {
	  name: 'HeaderNav',
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.header{
		height: .9rem;
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background-color: #f1f1f1;
		line-height: .9rem;	
	}
	.header__title{
		line-height: inherit;	
		font-size: .36rem;
		font-weight: normal;
		color: #999;
	}
	.header__back{
		position: absolute;
		left: .4rem;
		top: 0;
	}
	.header__home{
		position: absolute;
		right: .4rem;
		top: 0;
	}
</style>