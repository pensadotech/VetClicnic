import axios from "axios"

export default {
  getMeds: function () {
    return axios.get('/api/meds')
  },
  getMed: function (id) {
    return axios.get('/api/meds/' + id)
  },
  findOne: function(username) {
    return axios.get('/api/meds/findone/' + username)
  },
  createUpdateUser: function (user) {
    return axios.post('/api/meds',user)
  },
  updateUser: function(id,user) {
    return axios.put('/api/meds/' + id,user)
  },
  deleteUser: function (id) {
    return axios.delete('/api/medds/' + id)
  }
}