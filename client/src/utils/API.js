import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getBook: function(Query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q="+ Query+"&key=AIzaSyD704Ec8vHv-OJJHKhaHFj8Pfe_fin7orw");
  },
  saveBook: function(Query) {
    return axios.post("/savebook" + Query);
  },
  checkSaved: function(Query) {
    return axios.get("/checksaved");
  }
};
