<template>
  <div class="footer">
  	<ul>
  		<li v-for="navList in navLists">
  			<router-link :to="navList.paths" exact>
	  			<i class="iconfont" :class="navList.icon"></i>
	        <span>{{navList.text}}</span>
	      </router-link>
    	</li>
  	</ul>
  </div>
</template>

<script>
export default {
	name: 'FooterNav',
  data(){
  	return {
  		navLists: [
  			{
  				'text':'首页',
  				'paths':'/',
  				'icon':'icon-index'

  			},
  			{
  				'text':'分类',
  				'paths':'/category',
  				'icon':'icon-category'
  			},
  			{
  				'text':'购物车',
  				'paths':'/cart',
  				'icon':'icon-cart'
  			},
  			{
  				'text':'我',
  				'paths':'/my',
  				'icon':'icon-my'
  			},
  		]
  	}
  }
}
</script>

<style scoped lang="scss">
	// @import './../assets/sass/footer.scss';
	.footer{
		width:100%;
		height:1.2rem;
		bottom:0;
		position:fixed;
  	@include setMnWidth();
		ul{
			display:flex;
			height:100%;
			li{
				flex:1;
				background-color:$whitef1;
				list-style: none;
				a{
					display: inline-block;
					width: 100%;
					height: 100%;
					display:flex;
					flex-direction: column;
					justify-content: center;
					font-size: .24rem;
					color: $black6;
				}
				.router-link-active{
					span{
						color: $red;
					}
					.icon-index,.icon-category,.icon-cart,.icon-my{
						color: $red;
					}
				}
				.iconfont{
					font-size:.44rem;
					margin: .06rem auto;
					background-size: 100%;
				}
			}
		}
	}
</style>
