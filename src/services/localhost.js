export default {
  setValue(key, value) {
    localStorage.setItem(key, value);
  },
  setObject(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getter(key) {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    }
  },
};
