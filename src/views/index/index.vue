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
        pages:[
          {
            title: '范德萨法撒旦',
            style:{
             background:'url(http://www.p5w.net/sy/zgsyll/201804/W020180427538534012182.jpg)'
            }
          },
          {
           title: '的法萨芬的',
           style:{
            background:'url(http://www.p5w.net/sy/zgsyll/201804/W020180427538534012182.jpg)'
            }
          },
          {
            title: '发示范法',
            style:{
              background:'url(http://www.p5w.net/sy/zgsyll/201804/W020180427538534012182.jpg)'
            },
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
        }
      }
    },
    created: function() {
    	console.log(path.getPath('home'));
    	// getHome();
    	this.$http.get(path.getPath('home'))
    }
	}
</script>

<style scoped lang="scss">
	.slider-container{
		height: 3rem;
		width:100%;
	}

</style>
