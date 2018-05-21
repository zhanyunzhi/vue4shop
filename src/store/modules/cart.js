/**
 * cart store
 * @authors Tiny (540562332@qq.com)
 * @date    2018-05-11 22:20:54
 * @version $Id$
 */
import api from '../../api'		
import { cart } from '../mutation-types'		
 //定义字段，类似建立了数据库表
const state = {
	cart: {
		totalPrice: 0,
		totalNum: 0,
		isEmpty: true,
		goodList: []
	},
	isSelectAll: true,
}
//转变字段，有点类似操作数据库
const mutations = {
	/*reset(state){			//重置总金额和总数量
    state.cart.totalPrice = getters.getTotalPrice(state);
    state.cart.totalNum = getters.getTotalNum(state);
  },*/
	[cart.UPDATE_GOOD_LIST](state, { goodList }) {			//更新购物车内的物品，请求api之后将数据通过此方法更新
		state.cart.goodList = goodList;
	},
	[cart.SET_IS_EMPTY](state, payload) {		//是否购物车为空
		state.cart.isEmpty = payload.isEmpty;
	},
  [cart.REDUCE_GOODS](state,payload){ 			//商品减1
  	if(state.cart.goodList[payload.index].num > 1){
  		state.cart.goodList[payload.index].num = parseInt(state.cart.goodList[payload.index].num)-1;
  	}
  },
  [cart.ADD_GOODS](state, payload){			//商品加1
    state.cart.goodList[payload.index].num = parseInt(state.cart.goodList[payload.index].num)+1;
  },
  [cart.CHANGE_NUM](state, payload){			//改变商品输入框的数字是，从新计算
    state.cart.goodList[payload.index].num = parseInt(payload.value);
  },
  [cart.SWITCH_ACTION](state, payload){			//切换商品是否选中
    state.cart.goodList[payload.index].active = !state.cart.goodList[payload.index].active
  },
  [cart.SELECT_ALL](state, payload){			//全选或者全不选
  	state.cart.goodList.forEach((value,index) => {
  		state.cart.goodList[index].active = payload.isAction;
  	});
  },
  [cart.SET_ALL_SELECT](state, payload){			//全选按钮是否选中
  	state.isSelectAll = payload.isAction;
  }
}
//类似操作数据库之前写一些处理的逻辑
const actions = {
	getGoodList: ({ commit }) => {
		api.get('cartList','/user_id/102',res => {
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
        commit('UPDATE_GOOD_LIST',{ goodList: aCartList })
        // commit('reset')
        commit('SET_IS_EMPTY',{ isEmpty: false })
      }else{
        commit('SET_IS_EMPTY',{ isEmpty: true })
      }
    })
	}, 
	addGoods: ({ commit }, payload) => {		//商品加一
		commit('ADD_GOODS',{ index: payload.index});
	}, 
	reduceGoods: ({ commit }, payload) => {	//商品减一
		commit('REDUCE_GOODS',{ index: payload.index});
	}, 
	changeNum: ({ commit }, payload) => {	//改变商品数量
		commit('CHANGE_NUM', {index:payload.index, value:payload.value});
	},  
	switchAction: ({ commit,state }, payload) => {	//选中某个商品
		commit('SWITCH_ACTION',{ index: payload.index});
		let isAllSelect = true;
		state.cart.goodList.forEach((value,index) => {
  		if(!state.cart.goodList[index].active){
  			isAllSelect = false;
  		}
  	});
  	if(!isAllSelect){
	  	commit('SET_ALL_SELECT',{ isAction: false });
	  }else{
	  	commit('SET_ALL_SELECT',{ isAction: true });
	  }
	}, 
	selectAll: ({ commit,state }) => {	//全选或者全不选
		if(state.isSelectAll) {			//全选是已选中，则改成未选中
	  	commit('SELECT_ALL',{ isAction: false });
	  	commit('SET_ALL_SELECT',{ isAction: false });
  	}else{
  		commit('SELECT_ALL',{ isAction: true });
  		commit('SET_ALL_SELECT',{ isAction: true });
  	}
	}, 
}
//获取数据库字段  getters中不推荐使用箭头  组件中通过getters获取到的state会在commit mutations的时候自动分发
const getters = {
	getTotalNum: state => {				//返回购物车的商品总数
		let iTotalNum = 0;
    // console.log(state.cart.goodList)
		state.cart.goodList.forEach((value,index) => {
			if(value.active) iTotalNum += parseInt(value.num);
		})
		return iTotalNum;
	},
	getTotalPrice: state => {				//返回购物车的商品总数
		let iTotalPrice = 0;
		state.cart.goodList.forEach((value,index) => {
			if(value.active) iTotalPrice += value.num * value.price;
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
