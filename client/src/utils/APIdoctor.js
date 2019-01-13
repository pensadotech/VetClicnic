import axios from "axios"

export default {
  getDoctors: function () {
    return axios.get('/api/doctors')
  },
  getDoctor: function (id) {
    return axios.get('/api/doctors/' + id)
  },
  findOne: function(name) {
    return axios.get('/api/doctors/findone/' + name)
  },
  createUpdateDoctor: function (tgtDoctor) {
    return axios.post('/api/doctors/',tgtDoctor)
  },
  updateDoctor: function(id,doctor) {
    return axios.put('/api/doctors/' + id,doctor)
  },
  deleteDoctor: function (id) {
    return axios.delete('/api/doctors/' + id)
  }
}