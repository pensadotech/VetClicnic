import axios from "axios";

export default {
   
  signUp: function(user) {
    return axios.post('/api/users/signUp',user)
  },
  signIn: function(user) {
    return axios.post('/api/users/signIn',user)
  },
  signOut: function(user) {
    return axios.post('/api/users/signOut',user)
  },
  getSessionUser: function () {
    return axios.get('/api/users/sessionuser')
  }

}