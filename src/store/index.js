import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Username: "",
    Followers: "",
    FollowersCount: 0
  },
  mutations: {
    SET_USERNAME(state, value) {
      state.Username = value;
    },
    SET_FOLLOWERS(state, value) {
      state.Followers = value;
    },
    SET_FOLLOWER_COUNT(state, value) {
      state.FollowersCount = value;
    }
  },
  actions: {
    usernameSeting({ commit }, Uname) {
      commit("SET_USERNAME",Uname);
    },
    followersSeting({ commit }, follower) {
      commit("SET_FOLLOWERS",follower);
    },
    followerCountSeting({ commit }, followerCount) {
      commit("SET_FOLLOWER_COUNT",followerCount);
    }
  },
  getters: {
    UserData(state) {
      return state.Username;
    },
    FollowerData(state) {
      return state.Followers;
    },
    Followers(state) {
      return state.FollowersCount;
    }
  }
});
