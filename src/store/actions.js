import cookie from "vue-cookies";

export default {
  getPostList({ commit, state }) {
    state.axios
      .get(`${state.base_url}/post?page=1&size=15&direction=DESC`)
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

  logIn({ commit, state }, data) {
    state.axios
      .post(`${state.base_url}/account/login`, data)
      .then((res) => {
        console.log(res);
        cookie.set("token", res.data.accessToken);

        // TODO REFRESH TOKEN 보관

        state.accessToken = res.data.accessToken;

        state.axios.default.headers = {
          "X-AUTH-TOKEN": res.data.accessToken,
        };
      })
      .catch((err) => {
        console.log(err);
      });
  },

  register({ commit, state }, data) {
    state.axios
      .post(`${state.base_url}/account`, {
        username: data.username,
        password: data.password,
      })
      .then((res) => {
        console.log(res);
        cookie.set("token", res.data.accessToken);

        // TODO Refresh Token 보관 처리
      })
      .catch((err) => {
        console.log(err);
        // TODO 에러처리
      });
  },

  uploadPost({ commit, state }, post) {
    const formData = new FormData();

    post.images.map((img) => {
      formData.append("files", img);
    });

    state.axios
      .post(`${state.base_url}/image`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        post.images = res.data;

        // TODO 카테고리 나중에 바꿀 것

        post.category = "temp category";

        state.axios
          .post(`${state.base_url}/post`, post, {
            headers: {
              "X-AUTH-TOKEN": cookie.get("token"),
            },
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
