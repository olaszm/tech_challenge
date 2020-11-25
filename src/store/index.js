import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     calculatedIncome: {
       bandName: '',
       rate: '',
       netIncome: '',
       lost: ''
     },
     initialSalary: 0,
     insuranceLoss : 0,
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
    },
    SET_INSURANCE_LOSS(state,payload){
      state.insuranceLoss = payload
    },
    SET_INITIAL_SALARY(state,payload){
      state.initialSalary = payload
    }
  },
  actions: {
    setInitialSalary({commit},payload){
      commit('SET_INITIAL_SALARY', payload)
    },
    calculateIncome({commit,dispatch,state}, payload){
      let calculatedIncome = {}
      state.bands.forEach(band=> {
        dispatch('calculateInsurance', payload)
        if(band.income[0] <= payload &&  band.income[1] >= payload){
          let lost = band.rate == 0 ? payload : payload * ((band.rate)/100)
          let income = band.rate == 0 ? payload : payload * ((100-band.rate)/100)
           calculatedIncome = {
            bandName: band.name,
            rate: band.rate,
            netIncome: (income - state.insuranceLoss).toFixed(2),
            lost : lost.toFixed(2)
          }
        }
      })
      commit('SET_NET_SALARY', calculatedIncome)
    },
  calculateInsurance({commit}, payload){
    let weekly = (payload / 12 / 4).toFixed(2)
    let lost = 0
    if(weekly > 183){
      lost =(payload * (13.8/100)).toFixed(2)
    }
    commit('SET_INSURANCE_LOSS',lost)
  }
  },
  modules: {
  }
})
