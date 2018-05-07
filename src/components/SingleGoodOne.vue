<!-- 单个商品样式1 -->
<template>
  <div class="good">
  	<img :src="imgUrl" alt="产品图">
  	<p>{{intro}}</p>
  	<div>
  		<span>{{price}}</span>
  		<span>{{count}}</span>
		</div>
  </div>
</template>

<script>
	export default {
	  name: 'SingleGoodOne',
	  props: ['imgUrl','intro','price','count']
	}
</script>

<style scoped lang="scss">
$color: #ff0000;
	.good{
		width: 50%;
		float: left;
		box-sizing: border-box;
		border-bottom: .08rem solid #eeeeee;
		&:nth-child(odd){
			border-left: .04rem solid #eeeeee;
		}
		&:nth-child(even){
			border-right: .04rem solid #eeeeee;
		}
		img{
			width: 100%;
		}
		p{
			text-align: left;
			padding: .06rem;
			overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	    color: $color;
		}
	}
</style>
