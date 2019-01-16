// Test Email funcitonality
// It uses an gmail account that is open for API interaction
// References:
//   https://www.w3schools.com/nodejs/nodejs_email.asp
//   https://stackoverflow.com/questions/45478293/username-and-password-not-accepted-when-using-nodemailer


// Dependencies
require("dotenv").config()
const emailKeys = require('../emailkeys')
const nodemailer = require('nodemailer')

console.log('emailKeys:')
console.log('user:', emailKeys.gmailKeys.user)
console.log('pwd:', emailKeys.gmailKeys.pwd)

let email = {
  to : 'apensado@hotmail.com;armando@pensadotech.com',
  subject: 'Prescription/Appointment',
  text: 'Clinic appointment - test email'
}

// MAIN FUNCTION: sending email
sendEmail(email)
  .then(r => {
    console.log('Email sent: ' + r.response)
  })
  .catch(err => console.error(err))

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
  
  // Email Options: The main structure for teh email
  const mailOptions = {
    from: emailKeys.gmailKeys.user,
    to: emailData.to,
    subject: emailData.subject,
    text: emailData.text
  }
  
  // send the email and wait for a response
  let result = await sendGmail(transporter,mailOptions)

  return result
}

async function sendGmail(transporter,mailOptions) {    
     let result = transporter.sendMail(mailOptions)
     return result
}