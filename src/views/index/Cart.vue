<template>
  <div>
    <no-data v-if="cart.isEmpty" text="购物车空空如也" icon="icon-cart"></no-data>
  	<single-cart-one v-else
				v-for="(good,index) in cart.goodList" 
        :key="good.gId"
        :imgUrl="good.image"
        :intro="good.intro"
        :price="good.price"
        :number="good.num"
        :isActive="good.active"
        :index="index"
  	></single-cart-one>
    <div class="cart-info">
      <div class="select-all">
        <span :class="{ 'check-box-active': isSelectAll, 'check-box': !isSelectAll }" @click="selectAll()"></span>
        全选
      </div>
      <div class="money">
        <span>总计：<span class="num">￥{{totalPrice||0.00}}</span></span>
      </div>
      <div class="submit">
        去结算({{totalNum||0}}件)
      </div>
    </div>
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
  	created: function() {
      this.getGoodList();
      console.log(this.isSelectAll)
    },
    computed: {
      ...mapState('cart',{
        isSelectAll: 'isSelectAll',
      }),
      ...mapGetters('cart',{
        cart: 'getCart',
        totalPrice: 'getTotalPrice',
        totalNum: 'getTotalNum'
      }),
    },
    methods: {
      ...mapActions('cart',{
        getGoodList: 'getGoodList',
        selectAll: 'selectAll',
      }),
    }
	}
</script>

<style scoped lang="scss">
.cart-info{
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1.2rem;
  z-index: 9;
  background-color: #fff;
  border-top: 1px solid $borderColor;
  align-items: center;
  justify-content: space-between;
}
.select-all{
  width:1.5rem;
  font-size: .24rem;
  line-height: .4rem;
  color: $black9;
}
.check-box{
  display: inline-block;
  width: .4rem;
  height: .4rem;
  background-color: $white;
  border: 1px solid $borderColor;
  border-radius: .2rem;
  box-sizing: border-box;
  margin-bottom: -0.1rem;
}
.check-box-active{
  display: inline-block;
  width: .4rem;
  height: .4rem;
  background-color: $green;
  border-radius: .2rem;
  position: relative;
  margin-bottom: -0.1rem;
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
.money{
  font-size: .32rem;
  font-weight: bold;
  flex: 1;
  text-align: left;
  .num{
    color: $red;
  }
}
.submit{
  width: 2.2rem;
  background-color: $red;
  height: 100%;
  color: $white;
  line-height: 1.1rem;
}
</style>
