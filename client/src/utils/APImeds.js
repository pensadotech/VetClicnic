import axios from "axios"

export default {
  getMeds: function () {
    return axios.get('/calc')
  },
  getMed: function (id) {
    return axios.get('/calc/' + id)
  },
  findOne: function (med) {
    return axios.post('/calc/findone', med)
  },
  createUpdateMed: function (med) {
    return axios.post('/calc', med)
  },
  updateMed: function (id, med) {
    return axios.put('/calc' + id, med)
  },
  deleteMed: function (id) {
    return axios.delete('/calc/' + id)
  }
}