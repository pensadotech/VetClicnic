import axios from 'axios';

// Passing parameters with AXIOS
// Ref: https://stackoverflow.com/questions/40947650/axios-get-in-url-works-but-with-second-parameter-as-object-it-doesnt

export default {
  getApointments: function (whereClause) {   
    return axios.get('/api/schedules',{ params: whereClause })
  },
  createAppoint: function (appointment) {
    return axios.post('/api/schedules', appointment)
  },
  updateAppoint: function (id, appt) {
    return axios.put('/api/schedules/' + id, appt)
  },
  deleteAppoint: function (id) {
    return axios.delete('/api/schedules/' + id)
  },
  findOne: function (title) {
    return axios.get('/api/schedules/findone/' + title)
  }
};
