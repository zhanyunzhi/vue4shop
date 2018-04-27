<template>
  <div class="footer">
  	<ul>
  		<li v-for="navList in navLists"><router-link :to="navList.paths" exact><h2 :class="navList.image"></h2><span>{{navList.text}}</span></router-link></li>
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
  				'image':'icon_home'

  			},
  			{
  				'text':'分类',
  				'paths':'/category',
  				'image':'icon_cate'
  			},
  			{
  				'text':'购物车',
  				'paths':'/cart',
  				'image':'icon_cart'
  			},
  			{
  				'text':'我',
  				'paths':'/my',
  				'image':'icon_my'
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
		ul{
			display:flex;
			height:100%;
			li{
				flex:1;
				background-color:#f1f1f1;
				list-style: none;
				a{
					display: inline-block;
					width: 100%;
					height: 100%;
					display:flex;
					flex-direction: column;
					justify-content: center;
					font-size: .24rem;
					color: #666666;
				}
				.router-link-active{
					span{
						color: #3cc51f;
					}
					.icon_home{
						background-image: url(../assets/images/icon_home_selected.png);
					}
					.icon_cate{
						background-image: url(../assets/images/icon_cate_selected.png);
					}
					.icon_cart{
						background-image: url(../assets/images/icon_cart_selected.png);
					}
					.icon_my{
						background-image: url(../assets/images/icon_my_selected.png);
					}
				}
				h2{
					width:.6rem;
					height:.6rem;
					margin: .06rem auto;
					background-size: 100%;
				}
				.icon_home{
					background-image: url(../assets/images/icon_home.png);
				}
				.icon_cate{
					background-image: url(../assets/images/icon_cate.png);
				}
				.icon_cart{
					background-image: url(../assets/images/icon_cart.png);
				}
				.icon_my{
					background-image: url(../assets/images/icon_my.png);
				}
			}
		}
	}
</style>
