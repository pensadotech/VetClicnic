import axios from "axios"

export default {
  getPatients: function () {
    return axios.get('/api/patients')
  },
  getPatient: function (id) {
    return axios.get('/api/patients/' + id)
  },
  findOne: function(patientname) {
    console.log('findone',patientname)
    return axios.get('/api/patients/findone/'+ patientname)
  },
  createUpdatePatient: function (newPatient) {
    return axios.post('/api/patients', newPatient)
  },
  updatePatient: function(id, patient) {
    return axios.put('/api/patients' + id, patient)
  },
  deletePatient: function (id) {
    return axios.delete('/api/patients/' + id)
  }
}