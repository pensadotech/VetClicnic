import axios from "axios"

export default {
  getUsers: function () {
    return axios.get('/api/doctors')
  },
  getUser: function (id) {
    return axios.get('/api/doctors/' + id)
  },
  findOne: function(username) {
    return axios.get('/api/doctors/findone/' + username)
  },
  createUpdateUser: function (user) {
    return axios.post('/api/doctors',user)
  },
  updateUser: function(id,user) {
    return axios.put('/api/doctors/' + id,user)
  },
  deleteUser: function (id) {
    return axios.delete('/api/doctors/' + id)
  }
}