import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     calculatedIncome: {
       bandName: '',
       rate: '',
       netIncome: '',
     },
      bands: [{
        name: 'Personal Allowance',
        income: [0, 12500],
        rate: 0,
      },{
        name: 'Personal Allowance',
        income: [12501, 50000],
        rate: 20,
      },{
        name: 'Higher Rate',
        income: [50001, 150000],
        rate: 40,
      }, {  name: 'Additional rate',
      income: [150000, Infinity],
      rate: 45,}]
  },
  mutations: {
    SET_NET_SALARY(state,payload){
      state.calculatedIncome = payload
    }
  },
  actions: {
    calculateIncome({commit,state}, payload){
      commit
      let calculatedIncome = {}
      state.bands.forEach(band=> {
        if(band.income[0] <= payload &&  band.income[1] >= payload){
          let income = band.rate == 0 ? payload : payload * ((100-band.rate)/100)
           calculatedIncome = {
            bandName: band.name,
            rate: band.rate,
            netIncome: income
          }
        }
      })
      commit('SET_NET_SALARY', calculatedIncome)
    }
  },
  modules: {
  }
})
