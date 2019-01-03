import axios from "axios"

export default {
   // Gets all Articles
  getUsers: function () {
    return axios.get('/api/users')
  },
  getUser: function (id) {
    return axios.get('/api/users/' + id)
  },
  createUpdateUser: function (user) {
    return axios.post('/api/users',user)
  },
  deleteUser: function (id) {
    return axios.delete('/api/user/' + id)
  },
}