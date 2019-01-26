import axios from "axios"

export default {
  getMeds: function () {
    return axios.get('/api/meds')
  },
  getMed: function (id) {
    return axios.get('/api/meds/' + id)
  },
  findOne: function(medname) {
    return axios.get('/api/meds/findone/' + medname)
  },
  findByAlias: function(alias) {
    return axios.get('/api/meds/findbyalias/' + alias)
  },
  createUpdateMed: function (med) {
    console.log('APImeds-createUpdateMed',med)
    return axios.post('/api/meds',med)
  },
  updateMed: function(id,med) {
    return axios.put('/api/meds/' + id,med)
  },
  deleteMed: function (id) {
    return axios.delete('/api/meds/' + id)
  }
}