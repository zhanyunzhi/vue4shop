<template>
  <div>
    <no-data v-if="isEmpty" text="购物车空空如也" icon="icon-cart"></no-data>
  	<single-cart-one v-else
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
  import SingleCartOne from '@/components/SingleCartOne'    //引入SingleGoodOne组件
	import NoData from '@/components/NoData'		//引入SingleGoodOne组件
	export default {
		name: "Cart",
  	components: {
			SingleCartOne,
      NoData
  	},
  	data () {
  		return {
  			cartList: [],
        isEmpty: false,
  		}
  	},
  	created: function() {
        this.$_cart_getList();
    },
    methods: {
      $_cart_getList: function () {
	    	this.$api.get('cartList','/user_id/102',res => {
          res.length > 0 ? this.cartList = res : this.isEmpty = true;
	      })	
      }
    }
	}
</script>

<style scoped lang="scss">

</style>
