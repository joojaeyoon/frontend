export default {
  updatePost(state, data) {
    state.post = data;
  },
  updatePostDetail(state, data) {
    state.postDetail = data;
  },
  login(state){
    state.loggedIn=true;
  },
  logout(state){
    state.loggedIn=false;
  }
};
