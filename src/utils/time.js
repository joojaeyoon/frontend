export default {
  compare(date) {
    const now = new Date();
    const sec = (now - date) / 1000;

    if (sec < 60) return `${Math.floor(sec)}초 전`;
    else if (sec < 3600) return `${Math.floor(sec / 60)}분 전`;
    else if (sec < 24 * 3600) return `${Math.floor(sec / 3600)}시간 전`;
    else return `${Math.floor(sec / (24 * 3600))}일 전`;
  },
};
