import axios from "axios";

const state = {
    items: [],
    cart:{}

}

const mutations = {

    m_createCart(state, newCart) {
        state.cart = newCart
    },

    m_getItems(state,items) {
        state.items=items
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
            console.log('cat is =========>', newCart)
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

    async ac_getItems({
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
            const items = response.data.cart.items.filter(ele=>ele.delete===false)
            commit('m_getItems', items )
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
        const cartId = localStorage.getItem('cartUser')
        const token = localStorage.getItem('tokenCustomer')
        const response = await axios.put(`http://localhost:3000/api/cart/UpdateQuantity/${cartId}/${id}`, {
            newQuantity
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        const items = response.data.cartUpdate.items
        commit('m_getItems', items )
        return response
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
        const items = response.data.cartAfterDeleteItem.items.filter(ele=>ele.delete===false)
        commit('m_getItems', items )
        return response
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}