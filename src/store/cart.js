import axios from "axios";
// const apiUrl=process.env.VUE_APP_API_URL

const state = {
    cart: {},

}

const mutations = {

    m_createCart(state, newCart) {
        state.cart = newCart
    },

    m_getCart(state, cart) {
        state.cart = cart

    },

    m_updateQuntityItem(state, {id,newQuantity} ) {
        const updateItems = state.cart.items.map(ele => ele._id === itemUpdate._id ? itemUpdate : ele)
        state.cart.items = updateItems
    },

    deleteItem(state,itemId){
        const updateItems = state.cart.items.filter(ele => ele._id !== itemId )
        state.cart.items = updateItems
    }
}

const actions = {

    async ac_createCart({
        commit
    }) {
        try {
            const token = localStorage.getItem('tokenCustomer')
            const response = await axios.post(`http://localhost:3000/api/cart/newCart`, {
                nameStore: window.location.pathname.split('/')[1]
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            const newCart = response.data.cart
            commit('m_createCart', newCart)

        } catch (error) {
            console.log('error create cart is :', error)
        }
    },

    async ac_addItem({
        commit
    }, formItem) {

        const token = localStorage.getItem('tokenCustomer')
        const cartId = localStorage.getItem('cartUser')
        const response = await axios.post(`http://localhost:3000/api/cart/addItem/${cartId}`, formItem, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const cart = response.data.updateCart
        commit('m_getCart', cart)

        return response
    },

    async ac_getCart({
        commit
    }) {
        try {
            const token = localStorage.getItem('tokenCustomer')
            const response = await axios.get(
                `http://localhost:3000/api/cart/getCart/${window.location.pathname.split('/')[1] }`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
            const newCart = response.data.cart
            commit('m_getCart', newCart )
            localStorage.setItem('cartUser', response.data.cart._id)

        } catch (error) {
            console.log(`error get all categories is ${error}`)
        }
    },

    async ac_updateQuntityItem({
        commit
    }, {
        id,
        newQuantity
    }) {
        try {
            const cartId = localStorage.getItem('cartUser')
            const token = localStorage.getItem('tokenCustomer')
            const response = await axios.put(`http://localhost:3000/api/cart/UpdateQuantity/${cartId}/${id}`, {
                newQuantity
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            commit('m_updateQuntityItem', {id,newQuantity} )
        } catch (error) {
            console.log(`the error update item is : $${error} `)
        }
    },

    async ac_deleteItem({
        commit
    }, itemId) {
        const cartId = localStorage.getItem('cartUser')
        const token = localStorage.getItem('tokenCustomer')
        const response= await axios.put(`http://localhost:3000/api/cart/DeleteItem/${cartId}/${itemId}`, {} , {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        commit('deleteItem', itemId)
        return response
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}