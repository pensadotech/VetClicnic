import axios from "axios";

export default {
   
  signUp: function(user) {
    return axios.post('/api/session/signUp',user)
  },
  signIn: function(user) {
    return axios.post('/api/session/signIn',user)
  },
  signOut: function(user) {
    return axios.post('/api/session/signOut',user)
  },
  getSessionUser: function () {
    return axios.get('/api/session/getuser')
  }

}