import axios from 'axios';

export default {
  createAppoint: function () {
    return axios.post('/api/appointments');
  },
  updateAppoint: function () {
    return axios.put('/api/appointments');
  },
  deleteAppoint: function (id) {
    return axios.delete('/api/appointments/' + id);
  },
  findOne: function (lname) {
    return axios.get('/api/appointments/findone/' + lname);
  }
};
