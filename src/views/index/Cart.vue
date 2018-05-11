<template>
  <div>
    <no-data v-if="cart.isEmpty" text="购物车空空如也" icon="icon-cart"></no-data>
  	<single-cart-one v-else
				v-for="good in cart.goodList" 
        :key="good.gId"
        :imgUrl="good.image"
        :intro="good.intro"
        :price="good.price"
        :number="good.num"
        :isActive="good.active"
  	></single-cart-one>
  	<footer-nav></footer-nav>
  </div>
</template>

<script>
  import SingleCartOne from '@/components/SingleCartOne'    //引入SingleGoodOne组件
	import NoData from '@/components/NoData'		//引入SingleGoodOne组件
  import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
	export default {
		name: "Cart",
  	components: {
			SingleCartOne,
      NoData
  	},
  	data () {
  		return {
  		}
  	},
    computed: {
      ...mapGetters('cart',{
        cart: 'getCart'
      }),
      ...mapActions('cart',{
        getGoodList: 'getGoodList'
      }),
    },
  	created: function() {
        // this.$_cart_getList();
        this.getGoodList;
    console.log(this.cart)
        // this.$store.dispatch('getGoodList')
    },
    methods: {
      $_cart_getList: function () {
        // this.getGoodList();
	    	/*this.$api.get('cartList','/user_id/142',res => {
          if(res.length > 0){
            this.cartList = res;
            this.cartList.forEach((value,index) => {    //将所有购物车内商品标记为选中
              value.active = true;
            })
          }else{
            this.isEmpty = true;
          }
	      })*/	
      }
    }
	}
</script>

<style scoped lang="scss">

</style>
