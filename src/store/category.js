import axios from "axios";
const apiUrl=process.env.VUE_APP_API_URL

const state={
    categories:[]
}

const mutations={
    m_getCategories(state,categories) {
        state.categories = categories
    },
}

const actions={
    async ac_getCategories({
        commit
    }) {
        try {
            const token = localStorage.getItem('token')
            const response = await axios.get(`${apiUrl}/api/categoryProduct/categories`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            let categories = response.data.categories
            commit('m_getCategories',categories)

        } catch (error) {
            console.log(`error get all orders is ${error}`)
        }

    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}