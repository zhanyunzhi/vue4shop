/**
 * cart store
 * @authors Tiny (540562332@qq.com)
 * @date    2018-05-11 22:20:54
 * @version $Id$
 */
import api from '../../api'		
 //定义字段，类似建立了数据库表
const state = {
	cart: {
		totalPrice: 0,
		totalNum: 0,
		isEmpty: true,
		goodList: []
	}
}
//转变字段，有点类似操作数据库
const mutations = {
	reset(state){			//重置总金额和总数量
    state.cart.totalPrice = this.getters.getTotalPrice;
    state.cart.totalNum = this.getters.getTotalNum;
  },
	updateGoodList(state, { goodList }) {			//更新购物车内的物品，请求api之后将数据通过此方法更新
		state.cart.goodList = goodList;
	},
	setIsEmpty(state, payload) {		//是否购物车为空
		state.cart.isEmpty = payload.isEmpty;
	},
  reduceGoods(state,index){ 			//商品减1
    state.cart.goodsData[index].num-=1;
    this.commit('reset');		//重新计算总金额和总数量
  },
  addGoods(state,index){			//商品加1
    state.cart.goodsData[index].num+=1;
    this.commit('reset');		//重新计算总金额和总数量
  }
}
//类似操作数据库之前写一些处理的逻辑
const actions = {
	getGoodList: ({ commit }) => {
		api.get('cartList','/user_id/142',res => {
			let aCartList = [];
			let good = {};		//单个商品
      if(res.length > 0){
        res.forEach((value,index) => {    //将所有购物车内商品标记为选中
          good.gId = value.goods_id;
          good.image = value.image;
          good.intro = value.goods_name;
          good.price = value.shop_price;
          good.num = value.goods_num;
          good.active = true;
          aCartList.push(good);
          good = {};		//不重置的话会得到一样的good，不知道为哈
        })
        commit('updateGoodList',{ goodList: aCartList })
        commit('reset')
        commit('setIsEmpty',{ isEmpty: false })
      }else{
        commit('setIsEmpty',{ isEmpty: true })
      }
    })
	}, 
}
//获取数据库字段
const getters = {
	getTotalNum: state => {				//返回购物车的商品总数
		let iTotalNum = 0;
		state.cart.goodList.forEach((value,index) => {
			iTotalNum += value.num;
		})
		return iTotalNum;
	},
	getTotalPrice: state => {				//返回购物车的商品总数
		let iTotalPrice = 0;
		state.cart.goodList.forEach((value,index) => {
			iTotalPrice += value.num * value.price;
		})
		return iTotalPrice.toFixed(2);
	},
	getCart: state => {				//返回购物车
		return state.cart;
	}
}

export default{
	namespaced: true,		//命名空间
	state,
	mutations,
	actions,
	getters
}
