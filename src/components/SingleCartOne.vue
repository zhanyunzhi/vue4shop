<!-- 单个购物车样式1 -->
<template>
  <div class="cart">
  	<span :class="{ 'check-box-active': isActive, 'check-box': !isActive }" @click="switchAction({index:index})"></span>
  	<img class="cart-img" :src="imgUrl" :alt="intro" />
  	<div class="good-info">
  		<p class="intro">{{intro}}</p>
  		<div class="info">
	  		<span class="price">￥{{price}}</span>
	  		<div class="num-and-more">                         
	  			<div class="num-wrap">                           
	  				<span class="minus" @click="reduceGoods({index:index})"></span>                           
	  				<div class="input-wrap">
	  					<input class="num" type="tel"  v-model="inputNum" @input="$emit('change-num',{value:$event.target.value,index:index})" max="200"/>
	  				</div>                           
	  				<span class="plus" @click="addGoods({index:index})"></span>                    
  				</div>                     
				</div>
	  		<i class="iconfont icon-delete"></i>
  		</div>
  	</div>
  </div>
</template>

<script>
  import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
	export default {
	  name: 'SingleCartOne',
	  props: {
	  	imgUrl: [String],
	  	intro: [String],
	  	price: [Number,String],
	  	number: {
	  		type: [Number,String],
	  		validator: function (value) {
        // 这个值不能小于1
	        return parseInt(value) > 0;
	      }
	  	},
	  	isActive: {
	  		type: Boolean,
	  		default: true
	  	},
	  	index: [Number],
		},
		data () {
			return {
				inputNum: this.number,
			}
		},
		methods: {
      ...mapActions('cart',{
        addGoods: 'addGoods',				
        reduceGoods: 'reduceGoods',
        switchAction: 'switchAction',
      }),
    }
	}
</script>

<style scoped lang="scss">
	.cart{
		height: 2rem;
		border: 1px solid $borderColor;
		display: flex;
		align-items: center;
		padding: .2rem;
		flex-wrap: wrap;
	}
	.check-box{
		display: inline-block;
		width: .4rem;
		height: .4rem;
		background-color: $white;
		border: 1px solid $borderColor;
		border-radius: .2rem;
		box-sizing: border-box;
	}
	.check-box-active{
		display: inline-block;
		width: .4rem;
		height: .4rem;
		background-color: $green;
		border-radius: .2rem;
		position: relative;
		&:before{
			content: "";
		  width: .2rem;
		  height: .1rem;
		  border-top: 1px solid $white;  /* 左边框的宽 */
		  border-right: 1px solid $white; /* 右边框的宽 */
		  display: inline-block;
		  transform: rotate(135deg);
		  position: absolute;
		  bottom: .16rem;
		  left: .1rem;
		}
	}
	.cart-img{
		width: 1.5rem;
		height: 1.5rem;
		margin: 0 .2rem;
	}
	.good-info{
		flex: 1;
		.intro{
			text-align: left;
			margin-bottom: .3rem;
			line-height: .38rem;
			font-weight: 700;
			overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	    height: .72rem;
		}
		.info{
			display: flex;
			justify-content: space-between;
			.price{
				font-size: .32rem;
		    color: $red;
			}
		}
	}

	.num-and-more{
		font-size: .24rem;
	  color: $black9;
	  display: inline-block;
	}
	.num-wrap {
	  position: relative;
	  display: block;
	  width: 2.14rem;
	  border-radius: .08rem;
	  overflow: hidden;
	  background-color: #f7f7f7;
	}
	.num-wrap input, .num-wrap span {
	  position: relative;
	  float: left;
	  width: 30px;
	  height: 30px;
	  line-height: 30px;
	  text-align: center;
	}
	.num-wrap .input-wrap {
	  float: left;
	  position: relative;
	  border-left: 1px solid #fff;
	  border-right: 1px solid #fff;
	}
	.num {
	    font-size: 12px;
	    color: #999;
	    flex: 1;
	    min-width: 0;
	}
	.num-wrap .num {
	    -webkit-appearance: none;
	    border: none;
	    width: 45px;
	    text-align: center;
	    background: none;
	    -webkit-border-radius: 0;
	}

	.num-wrap .minus:after, .num-wrap .plus:after, .num-wrap .plus:before {
	  position: absolute;
	  left: 50%;
	  top: 50%;
	  content: "";
	  display: block;
	  width: 16px;
	  height: 2px;
	  margin: -1px 0 0 -8px;
	  background: #999;
	  border-radius: 1px;
	}
	.num-wrap .plus:before {
	  width: 2px;
	  height: 16px;
	  margin: -8px 0 0 -1px;
	  border-radius: 1px;
	}
	.num-wrap .disabled:after, .num-wrap .disabled:before {
	  background: hsla(0,0%,80%,.3);
	}

	.icon-delete{
		font-size: .4rem;
		margin-top: .1rem;
		color: $red;
	}
</style>
