import axios from "axios";

const state = {
    items: [],
    cart: {}
}

const mutations = {

    m_createCart(state, newCart) {
        state.cart = newCart
    },

    m_getItems(state, items) {

        state.items = items
            .map(item => {
                return {
                    _rowVariant: item.product.quantity === 0 || item.product.delete === true || item.product.visibility === false ? 'active' : '',
                    Product: {
                        img: item.product.imgs[0],
                        name: item.product.name,
                        stock: item.product.quantity,
                        delete: item.product.delete,
                        visibility: item.product.visibility,
                        deleteitem: item.delete,
                    },
                    Price: item.product.promotion.priceAfter > 0 ?
                        item.product.promotion.priceAfter : item.product.price,
                    Quantity: [item.quantity, item.product.quantity],
                    Total: (item.product.promotion.priceAfter > 0 ?
                        item.product.promotion.priceAfter :
                        item.product.price) * item.quantity,
                    delete: 'x-circle',
                    id: item._id,
                }
            })

    },

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

        try {
            const token = localStorage.getItem('tokenCustomer')
            const cartId = localStorage.getItem('cartUser')
            const response = await axios.post(`http://localhost:3000/api/cart/addItem/${cartId}`, formItem, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const items = response.data.cart.items
            commit('m_getItems', items)
            return {
                messageSuccess: response.data.message
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                return {
                    messageError: error.response.data.message
                }
            }
            return {
                messageErrorServe: 'A problem has occurred on the server. Please try again later.'
            }

        }

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
            const items = response.data.cart.items
            commit('m_getItems', items)
            localStorage.setItem('cartUser', response.data.cart._id)
            return {
                messageSuccess: 'items get with success'
            }

        } catch (error) {
            return {
                messageError: 'Error in the server try again'
            }
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
            const items = response.data.cart.items
            commit('m_getItems', items)
            return {
                messageSuccess: response.data.message
            }

        } catch (error) {

            if (error.response.data.message) {
                const items = error.response.data.cart.items
                commit('m_getItems', items)
                return {
                    messageError: error.response.data.message
                }
            }
            return {
                messageErrorServe: 'A problem has occurred on the server. Please try again later.'
            }
        }
    },

    async ac_deleteItem({
        commit
    }, itemId) {
        try {
            const cartId = localStorage.getItem('cartUser')
            const token = localStorage.getItem('tokenCustomer')
            const response = await axios.put(`http://localhost:3000/api/cart/DeleteItem/${cartId}/${itemId}`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const items = response.data.cart.items
            commit('m_getItems', items)
            return {
                messageSuccess: response.data.message
            }
        } catch (error) {
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

export default {
    namespaced: true,
    state,
    mutations,
    actions
}


/**
 *  if delete item ===> if ok ==> applique methide action the store ==> if true ==> create object items in 
 * 
 */