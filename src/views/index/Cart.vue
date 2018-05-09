<template>
  <div>
  	<single-cart-one
				v-for="cart in cartList" 
        :key="cart.goods_id"
        :imgUrl="cart.image"
        :intro="cart.goods_name"
        :price="cart.shop_price"
        :number="cart.goods_num"
  	></single-cart-one>
  	<footer-nav></footer-nav>
  </div>
</template>

<script>
	import SingleCartOne from '@/components/SingleCartOne'		//引入SingleGoodOne组件
	export default {
		name: "Cart",
  	components: {
			SingleCartOne
  	},
  	data () {
  		return {
  			cartList: [],
  		}
  	},
  	created: function() {
        this.$_cart_getList();
    },
    methods: {
      $_cart_getList: function () {
	    	this.$api.get('cartList','/user_id/102',res => {
	        this.cartList = res;
	      })	
      }
    }
	}
</script>

<style scoped lang="scss">

</style>
