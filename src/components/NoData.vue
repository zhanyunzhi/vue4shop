<!-- 没有数据 -->
<template>
  <div class="no-data">
		<img src="@/assets/images/public/empty.png" alt="暂无数据">
  </div>
</template>

<script>
	export default {
	  name: 'NoData',
	  props: {

		},
	}
</script>

<style scoped lang="scss">
	.no-data{
		img{
			margin: 1rem auto;
			width: 3.22rem;
			height: 3.67rem;
		}
	}
</style>
