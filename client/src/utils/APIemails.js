import axios from "axios"

export default {
  sendEmail: function (emailData) {

    console.log('API-sendEmail:',emailData)

    return axios.post('/api/emails',emailData)
  }
}