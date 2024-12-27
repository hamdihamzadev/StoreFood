import axios from "axios";

const state={
    orders: []
}

const mutations={
    setOrders(state, orders){
        state.orders = orders
    },

}

const actions={
    async fetchOrders({commit}){
        try{
            const token = localStorage.getItem('tokenCustomer')
            const response = await axios.get('http://localhost:3000/api/order/addOrderbyCustomer', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            commit('setOrders', response.data.orders)
            return{
                messageSuccess: response.data.message
            }
        }
        catch(error){
            if (error.response.data.message) {
                return {
                    messageError: error.response.data.message
                }
            }
            return {
                messageErrorServe: 'A problem has occurred on the server. Please try again later.'
            }
        }
    },

    async addOrder({commit},order){
        try{
            const token = localStorage.getItem('tokenCustomer')
            const response = await axios.post('http://localhost:3000/api/order/addOrder',order, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            commit('setOrders',response.data.orders)
            return{
                messageSuccess: response.data.message
            }
        }
        catch(error){
            if (error.response.data.message) {
                return {
                    messageError: error.response.data.message
                }
            }
            return {
                messageErrorServe: 'A problem has occurred on the server. Please try again later.'
            }
        }
    }
}


export default{
    namespaced: true,
    state,
    mutations,
    actions
}