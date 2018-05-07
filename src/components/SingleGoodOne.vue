<!-- 单个商品样式1 -->
<template>
  <div class="good">
  	<img :src="imgUrl" alt="产品图">
  	<p>{{intro}}</p>
  	<div class="info">
  		<span class="price">￥{{price}}</span>
  		<span class="count">浏览：{{count}}</span>
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
	.good{
		width: 50%;
		float: left;
		box-sizing: border-box;
		border-bottom: .08rem solid $borderColor;
		&:nth-child(odd){
			border-left: .04rem solid $borderColor;
		}
		&:nth-child(even){
			border-right: .04rem solid $borderColor;
		}
		img{
			width: 100%;
		}
		p{
			text-align: left;
			padding: 0 .08rem;
			margin: .1rem 0 .06rem;
			font-size: .26rem;
			line-height: .34rem;
			overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	    height: .68rem;
		}
		.info{
			display: flex;
			columns: row;
			justify-content: space-between;
			margin: .06rem .08rem .1rem;
		}
		.price{
			font-size: .32rem;
	    color: $red;
		}
		.count{
			font-size: .24rem;
	    color: $black9;
	    margin-right: .1rem;
	    margin-top: .06rem;
		}
	}
</style>
