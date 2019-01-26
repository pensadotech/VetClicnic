// emailController.js
// program to send emails through a gmail account
// the gmail account is open for API interaction
// References:
//   https://www.w3schools.com/nodejs/nodejs_email.asp
//   https://stackoverflow.com/questions/45478293/username-and-password-not-accepted-when-using-nodemailer
 
// Dependencies
require("dotenv").config()
const emailKeys = require('../emailkeys')
const nodemailer = require('nodemailer')

module.exports = {
   
  send: function (req, res) {      
    let emailData = req.body
    sendEmail(emailData)
     .then(r => res.json(r))
     .catch(err => res.status(422).json(err))
  }
}

function sendEmail(emailData) {
  return new Promise(function (resolve, reject) {
    resolve(sendEmailToProvider(emailData))
  })
}

async function sendEmailToProvider (emailData) {

  // Transporter: Holds server information
  //              including user account info
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: emailKeys.gmailKeys.user,
      pass: emailKeys.gmailKeys.pwd
    }
  })

  // General body for teh email, which includes 
  // template information.
  let emailBody = 
   `
        ${emailData.text}

    Thank you

    Blue Animal Clinic Administration
    customer services: (123) 123-1234
    Email: blueanimalclinic@gmail.com
    Clinic hours: 
       Monday to Friday 6:00 AM to 6 PM
       Satiurday: 9:00 AM to 4:00 PM
    `

 // Email Options: The main structure for the email
  const mailOptions = {
    from: emailKeys.gmailKeys.user,
    to: emailData.to,
    subject: emailData.subject,
    text: emailBody    
  }
  
  // send the email and wait for a response
  let result = await sendGmail(transporter,mailOptions)

  return result
}

async function sendGmail(transporter,mailOptions) {    
  let result = transporter.sendMail(mailOptions)
  return result
}


