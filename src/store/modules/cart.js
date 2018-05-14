/**
 * cart store
 * @authors Tiny (540562332@qq.com)
 * @date    2018-05-11 22:20:54
 * @version $Id$
 */
import api from '../../api'		
import { cart } from './mutation-types'		
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
	/*reset(state){			//重置总金额和总数量
    state.cart.totalPrice = getters.getTotalPrice(state);
    state.cart.totalNum = getters.getTotalNum(state);
  },*/
	updateGoodList(state, { goodList }) {			//更新购物车内的物品，请求api之后将数据通过此方法更新
		state.cart.goodList = goodList;
	},
	[cart.SET_IS_EMPTY](state, payload) {		//是否购物车为空
		state.cart.isEmpty = payload.isEmpty;
	},
  reduceGoods(state,index){ 			//商品减1
    state.cart.goodList[index].num-=1;
    this.commit('reset');		//重新计算总金额和总数量
  },
  addGoods(state, payload){			//商品加1
  	console.log(payload.num)
  	console.log(state.cart.goodList[payload.num])
    state.cart.goodList[payload.num].num = parseInt(state.cart.goodList[payload.num].num)+1;
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
        // commit('reset')
        commit('SET_IS_EMPTY',{ isEmpty: false })
      }else{
        commit('SET_IS_EMPTY',{ isEmpty: true })
      }
    })
	}, 
	addGoods: ({ commit }) => {
		commit('addGoods',{ num: 0});
	}, 
}
//获取数据库字段  getters中不推荐使用箭头
const getters = {
	getTotalNum: state => {				//返回购物车的商品总数
		let iTotalNum = 0;
    // console.log(state.cart.goodList)
		state.cart.goodList.forEach((value,index) => {
			iTotalNum += parseInt(value.num);
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
