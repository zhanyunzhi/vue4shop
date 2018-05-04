<template>
  <div>
		<vue-concise-slider :pages="pages" :sliderinit="sliderinit"></vue-concise-slider>
  	<footer-nav></footer-nav>
  </div>
</template>

<script>
	import VueConciseSlider from 'vue-concise-slider'		//引入slider组件
	import path from '@/api/path'		
	// import { getHome } from '@/api/api'		
	export default {
		name: "Index",
  	components: {
			VueConciseSlider
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
        banners: []
      }
    },
    created: function() {
      // this.$toasted.show('hello billosssss')
      // Vue.toasted.show('hola billo');
    	this.$api.get('home','',res => {
        this.banners = res.result.ad;
        this.setBanner(this.banners);
      })
    },
    methods: {
      setBanner: function (banners) {
        for(let k in banners){
          this.pages[k].style.background = 'url(' + banners[k].ad_code + ')'
        }
        console.log(this.pages)
      }
    }
	}
</script>

<style scoped lang="scss">
	.slider-container{
		height: 3.06rem;
		width:100%;
	}

</style>
