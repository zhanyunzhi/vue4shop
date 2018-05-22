<template>
  <div>
    <pull-to :top-load-method="refresh" :top-config="TOP_DEFAULT_CONFIG">
  		<vue-concise-slider :pages="pages" :sliderinit="sliderinit"></vue-concise-slider>
      <section>
        <ul class="nav">
          <li><img src="@/assets/images/index/icon_all.png" alt="全部分类"><span>全部分类</span></li>
          <li><img src="@/assets/images/index/icon_shop.png" alt="店铺街"><span>店铺街</span></li>
          <li><img src="@/assets/images/index/icon_group.png" alt="团购"><span>团购</span></li>
          <li><img src="@/assets/images/index/icon_cart.png" alt="购物车"><span>购物车</span></li>
          <li><img src="@/assets/images/index/icon_coupon.png" alt="优惠券"><span>优惠券</span></li>
          <li><img src="@/assets/images/index/icon_order.png" alt="我的订单"><span>我的订单</span></li>
          <li><img src="@/assets/images/index/icon_collect.png" alt="我的收藏"><span>我的收藏</span></li>
          <li><img src="@/assets/images/index/icon_member.png" alt="个人中心"><span>个人中心</span></li>
        </ul>
      </section>
      <hr class="split_block"/>
      <category-for-index class="clear-fix" v-for="goodList in goodLists" :key="goodList.id" :text="goodList.name">
        <template slot="good">
          <single-good-one 
            v-for="goods in goodList.goods_list" 
            :key="goods.goods_id"
            :imgUrl="goods.original_img"
            :intro="goods.goods_name"
            :price="goods.shop_price"
            :count="goods.click_count"
          ></single-good-one>
        </template>
      </category-for-index>
    </pull-to>
  	<footer-nav></footer-nav>
  </div>
</template>

<script>
  import PullTo from 'vue-pull-to'
  import VueConciseSlider from 'vue-concise-slider'   //引入slider组件
  import CategoryForIndex from '@/components/CategoryForIndex'    //引入GoodListClassify组件
	import SingleGoodOne from '@/components/SingleGoodOne'		//引入SingleGoodOne组件
	import path from '@/api/path'		
	// import { getHome } from '@/api/api'	
  
	export default {
		name: "Index",
  	components: {
			VueConciseSlider,
      CategoryForIndex,
      SingleGoodOne,
      PullTo,
  	},
  	data () {
      return {
        //图片列表[arr]
        pages: [
          {
            //html: '<div class="slider1">slider1</div>',
            style:{
             background:'url()'
            }
          },
          {
           style:{
            background:'url()'
            }
          }
        ],
        //滑动配置[obj]
        sliderinit: {
          currentPage: 0,//当前页码
          thresholdDistance: 500,//滑动判定距离
        	thresholdTime: 100,//滑动判定时间
          autoplay:3000,//自动滚动[ms]
          loop:true,//循环滚动
          direction:'horizontal',//方向设置，垂直滚动vertical
          infinite:1,//无限滚动前后遍历数
          slidesToScroll:1,//每次滑动项数
        },
        banners: [],
        goodLists: [],
        TOP_DEFAULT_CONFIG: {
          pullText: '下拉刷新', // 下拉时显示的文字
          triggerText: '释放更新', // 下拉到触发距离时显示的文字
          loadingText: '加载中...', // 加载中的文字
          doneText: '加载完成', // 加载完成的文字
          failText: '加载失败', // 加载失败的文字
          loadedStayTime: 400, // 加载完后停留的时间ms
          stayDistance: 50, // 触发刷新后停留的距离
          triggerDistance: 70 // 下拉刷新触发的距离
        }, 
      }
    },
    created: function() {
      // this.$toasted.show('hello billosssss')
      // Vue.toasted.show('hola billo');
    	this.$api.get('home','',res => {
        this.goodLists = res.result.goods;
        this.banners = res.result.ad;
        this.$_setBanner(this.banners);
      })
    },
    methods: {
      $_setBanner: function (banners) {
        for(let k in banners){
          this.pages[k].style.background = 'url(' + banners[k].ad_code + ')'
        }
        // console.log(this.pages)
      },
      refresh(loaded) {
        setTimeout(() => {
          console.log('refresh...');
          loaded('done');
        }, 2000);
      }
    }
	}
</script>

<style scoped lang="scss">
	.slider-container{
		height: 3.06rem;
		width:100%;
	}
  .nav{
    display: flex;
    flex-wrap: wrap;
    li{
      width: 25%;
      text-align: center;
      padding-bottom: .2rem;
      img{
        width: 1.2rem;
        height: 1.2rem;
        display: block;
        margin: .2rem auto;
      }
    }
  }

</style>
