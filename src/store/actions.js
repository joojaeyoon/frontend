export default {
  getPostList({ commit, state }) {
    state.axios
      .get(`${state.base_url}/post?page=1&size=15&direction=ASC`)
      .then((res) => {
        commit("updatePost", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getPostDetail({ commit, state }, id) {
    state.axios
      .get(`${state.base_url}/post/${id}`)
      .then((res) => {
        commit("updatePostDetail", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
