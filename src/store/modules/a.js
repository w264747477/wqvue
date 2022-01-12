import axios from "@/axios";
export default {
  namespaced: true,
  state: {
    count: 0,
  },
  mutations: {
    increment(state, n) {
      state.count += n;
    },
  },
  actions: {
    increment(context, payload) {
      context.commit("increment", payload.count);
    },
    incrementAsync({ commit }, params) {
      commit("increment", params.count);
      return 1;
    },
    sendReq({ commit }, params) {
      return axios.post("/login", params).then((rs) => {
        return rs.data;
      });
    },
  },
};
