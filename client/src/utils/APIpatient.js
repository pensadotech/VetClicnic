import axios from "axios"

export default {
  getPatients: function () {
    return axios.get('/api/patients')
  },
  getPatient: function (id) {
    return axios.get('/api/patients/' + id)
  },
  findOne: function(patient) {
    return axios.post('/api/patients/findone', patient)
  },
  createUpdatePatient: function (patient) {
    return axios.post('/api/patients', patient)
  },
  updatePatient: function(id, patient) {
    return axios.put('/api/patients' + id, patient)
  },
  deletePatient: function (id) {
    return axios.delete('/api/patients/' + id)
  }
}