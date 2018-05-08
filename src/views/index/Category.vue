<template>
  <div>
  	<div class="category">
  		<ul class="tab">
  			<li
  			 	v-for="(categoryP,index) in goodsCategoryParentLists"
  			 	:key="categoryP.id"
  			 	:class="{active:index==cActiveIndex}"
  			 	@click="$_category_click(index,categoryP.id,categoryP.mobile_name)"
  			 >{{categoryP.mobile_name}}</li>
  		</ul>
  		<div class="content">
  			<img class="banner-img" :src="banner.image" :alt="banner.ad_name">
  			<ul class="content-ul">
  				<li
	  				v-for="(categoryS,index) in goodsCategorySonLists"
	  			 	:key="categoryS.id"
  				>
  					<img :src="categoryS.image" :alt="categoryS.mobile_name">
  					<p>{{categoryS.mobile_name}}</p>
  				</li>
  			</ul>
  		</div>
  	</div>
  	<footer-nav></footer-nav>
  </div>
</template>

<script>	
	export default {
		name: "Category",
	  	components: {
  			
	  	},
	  	data () {
	      return {
	        goodsCategoryParentLists: [],		//父级分类列表
	        goodsCategorySonLists: [],			//子级分类列表
	        cActiveIndex: 0,
	        banner: '',
	      }
	    },
	    created: function() {
	    	this.$api.get('goodsCategoryList','',res => {
	        this.goodsCategoryParentLists = res.result;
	      	this.$_category_getByParentId(this.goodsCategoryParentLists[0].id);//根据pId获取第一条父级分类下的分类
	      	this.$_category_getBanner(this.goodsCategoryParentLists[0].mobile_name);//根据类名获取第一条父级的banner图地址
	      })
	    },
	    methods: {
	    	$_category_click: function(index,pId,pName) {
	    		this.cActiveIndex = index;
	    		this.$_category_getByParentId(pId);	//根据pId获取下面的分类
	    		this.$_category_getBanner(pName);		//根据类名获取banner图地址
	    	},
	    	//获取分类父级id下的所有分类
	    	$_category_getByParentId: function(pId){
		    	this.$api.get('goodsCategoryList','/parent_id/'+pId,res => {
		        this.goodsCategorySonLists = res.result;
		      })
	    	},
	    	//获取当前分类的banner图
	    	$_category_getBanner: function(bannerName){
		    	this.$api.get('categoryBanner','/banner_name/'+bannerName,res => {
		        this.banner = res.banner;
		      },()=>{})
	    	}
	    }
	}
</script>

<style scoped lang="scss">
	.category{
		display: flex;
		columns: row;
	}
	.tab{
		flex: 1;
		li{
			height:.92rem;
			line-height:.92rem;
			background-color: $whitef5;
		}
		.active{
			background-color: $white;
			color: $red;
		}
	}
	.content{
		flex: 3;
	}
	.banner-img{
		margin: .14rem 0;
		width: 94%;
	}
	.content-ul{
		display: flex;
		flex-wrap: wrap;
		li{
			width: 33.33%;
			padding: .3rem;
			box-sizing: border-box;
			img{
				width: 100%;
			}
			p{
				font-size: .24rem;
				margin-top: .1rem;
			}
		}
	}
</style>
