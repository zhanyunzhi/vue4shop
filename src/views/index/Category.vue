<template>
  <div>
  	<div class="category">
  		<ul class="tab">
  			<li
  			 	v-for="(category,index) in goodsCategoryLists"
  			 	:key="category.id"
  			 	:class="{active:index==cActiveIndex}"
  			 	@click="clickCategory(index)"
  			 >{{category.mobile_name}}</li>
  		</ul>
  		<div class="content">
  			<img src="" alt="">
  			<ul class="content-ul">
  				<li></li>
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
	        goodsCategoryLists: [],
	        cActiveIndex: 0,
	      }
	    },
	    created: function() {
	    	this.$api.get('goodsCategoryList','',res => {
	        this.goodsCategoryLists = res.result;
	      })
	    },
	    methods: {
	    	clickCategory: function(index) {
	    		this.cActiveIndex = index;
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
</style>
