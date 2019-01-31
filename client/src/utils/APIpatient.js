import axios from 'axios';

export default {
  getPatients: function () {
    return axios.get('/api/patients/');
  },
  getPatient: function (id) {
    return axios.get('/api/patients/' + id);
  },
  findOne: function (patientname) {
    return axios.get('/api/patients/findone/' + patientname);
  },
  findByChart: function (chartNumber) {
    return axios.get('/api/patients/findbychart/' + chartNumber);
  },
  findByOwner: function (ownername) {
    return axios.get('/api/patients/findbyowner/' + ownername);
  },
  createUpdatePatient: function (newPatient) {
    return axios.post('/api/patients', newPatient);
  },
  updatePatient: function (id, patient) {
    return axios.put('/api/patients/' + id, patient);
  },
  deletePatient: function (id) {
    return axios.delete('/api/patients/' + id);
  }
};
