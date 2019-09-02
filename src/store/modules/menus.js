const state = {
    sumPrice: 0,
    menus: []
};
const getters = {
    sumPrice: state => state.sumPrice,
    menus: state => state.menus
};
const mutations = {
    setMenus: (state, menus) => state.menus = menus,
    setAddMenus: (state, menus) => state.menus.unshift(menus),
    setDeleteMenus: (state, type) => state.menus = state.menus.filter(menu => menu.type != type),
    setAddCount1: (state, index) => {
        state.menus[index].count1++;
        state.sumPrice = parseInt(state.menus[index].price1) + state.sumPrice;
    },
    setAddCount2: (state, index) => {
        state.menus[index].count2++;
        state.sumPrice = parseInt(state.menus[index].price2) + state.sumPrice;
    },
    setCutCount1: (state, index) => {
        state.menus[index].count1--;
        state.sumPrice = state.sumPrice - parseInt(state.menus[index].price1);
    },
    setCutCount2: (state, index) => {
        state.menus[index].count2--;
        state.sumPrice = state.sumPrice - parseInt(state.menus[index].price2);
    },
};
const actions = {
    setMenusAsync: ({ commit }, menus) => commit("setMenus", menus),
    setAddMenusAsync: ({ commit }, menus) => commit("setAddMenus", menus),
    setDeleteMenusAsync: ({ commit }, type) => commit("setDeleteMenus", type),
    setAddCount1Async: ({ commit }, index) => commit("setAddCount1", index),
    setAddCount2Async: ({ commit }, index) => commit("setAddCount2", index),
    setCutCount1Async: ({ commit }, index) => commit("setCutCount1", index),
    setCutCount2Async: ({ commit }, index) => commit("setCutCount2", index),
};


export default {
    state,
    getters,
    mutations,
    actions
}