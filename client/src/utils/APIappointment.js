import axios from 'axios';

export default {
  getApointments: function () {
    return axios.get('/api/schedules')
  },
  createAppoint: function () {
    return axios.post('/api/schedules');
  },
  updateAppoint: function () {
    return axios.put('/api/schedules');
  },
  deleteAppoint: function (id) {
    return axios.delete('/api/schedules/' + id);
  },
  findOne: function (title) {
    return axios.get('/api/schedules/findone/' + title);
  }
};
