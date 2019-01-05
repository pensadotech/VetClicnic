import axios from "axios"

export default {
  getUsers: function () {
    return axios.get('/api/users')
  },
  getUser: function (id) {
    return axios.get('/api/users/' + id)
  },
  findOne: function(username) {
    return axios.get('/api/users/findone/' + username)
  },
  createUpdateUser: function (user) {
    return axios.post('/api/users',user)
  },
  updateUser: function(id,user) {
    return axios.put('/api/users/' + id,user)
  },
  deleteUser: function (id) {
    return axios.delete('/api/users/' + id)
  }
}