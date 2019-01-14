import axios from 'axios';

export default {
  getApointments: function () {
    return axios.get('/api/schedules');
  },
  createAppoint: function (appointment) {
    return axios.post('/api/schedules', appointment);
  },
  updateAppoint: function (id, appt) {
    return axios.put('/api/schedules/' + id, appt);
  },
  deleteAppoint: function (id) {
    return axios.delete('/api/schedules/' + id);
  },
  findOne: function (title) {
    return axios.get('/api/schedules/findone/' + title);
  }
};
