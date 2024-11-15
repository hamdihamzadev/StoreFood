import axios from "axios";
// const apiUrl=process.env.VUE_APP_API_URL

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
            const namestore = window.location.pathname.split('/')[1]
            const response = await axios.get(`http://localhost:3000/api/categoryProduct/getCategoriesByCustomer/${namestore}`)
            let categories = response.data.categories.filter(ele=>ele.delete===false && ele.visibility===true).map(ele=>({
                id:ele._id,
                namecategory:ele.name,
                img:ele.img
            }))
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