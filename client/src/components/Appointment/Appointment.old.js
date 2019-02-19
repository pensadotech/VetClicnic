import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import EventIcon from '@material-ui/icons/Event'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Moment from 'moment'
// Components
import Calendar from './components/Calendar'
import AppointCard from './components/AppointCard'
import AppointForm from './components/AppointForm'
// API
import APIappointment from '../../utils/APIappointment'
import APIdoctor from '../../utils/APIdoctor'
import APIpatient from '../../utils/APIpatient'
import APIemails from '../../utils/APIemails'

const styles = theme => ({
 
  avatar: {
    margin: ' 10px 0px 7px 40px',
  },
  fab: {
    margin: theme.spacing.unit,
    boxShadow: '5px 5px 5px 5px rgb(82, 82, 100)',
  },
  pageHeadContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center' ,
    color: 'white',
    margin: '7px 0px 7px 20px',
    // backgroundColor: 'rgb(4, 138, 4)',
    borderRadius: '10px',
    boxShadow: '5px 5px 5px 5px rgb(82, 82, 100)',
  },
  pageHead: {
    color: 'white',
    margin: '7px 50px 7px 20px',
  },
  card: {
    minWidth: 275,
    maxHeight: 220,
    margin: '10px 20px 0px 20px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  }
})

class Appointment extends Component {
  
  state = {
    aptments: [],
    patients: [],
    doctors: [],
    screenMode: 'list',
    targetAppoint: ''
  }
  
  componentDidMount() {
    this.loadAppointData()
    this.loadDoctorData()
  } 

  loadAppointData = () => {
    APIappointment.getApointments()
    .then(res => {
      this.setState({ aptments: res.data })   
    })
    .catch(err => console.log(err))
  }

  loadDoctorData = () => {
    APIdoctor.getDoctors()
      .then(res => {
        this.setState({ doctors: res.data })
        this.loadPatientData()
      })
      .catch(err => console.log(err))
  }

  loadPatientData = () => {
    APIpatient.getPatients()
      .then(res => {
        this.setState({ patients: res.data })
      })
      .catch(err => console.log(err))
  }

  handleAppointAddSelection = () => {
    // change screen mode to Appointment ADD mode
    this.setState({ screenMode: 'add' })
  }

  handleAppointUpdateSelection = (tgtApnt) => {
    // change screen mode to Appointment EDIT mode, and store target-appoint
    this.setState({ screenMode: 'edit', targetAppoint: tgtApnt })
  }

  handleAppointDeleteSelection = (tgtApnt) => {
    // Change screen mode to Appointment DELETE mode, and store target-appointment
    this.setState({ screenMode: 'delete', targetAppoint: tgtApnt })
  }

  getEmailRecipients =(tgtApnt) =>{
     
    let emailrecipients = ''
    
    if (tgtApnt.doctor) {
      emailrecipients = tgtApnt.doctor.email
     }

     if(tgtApnt.patient) {
      if(emailrecipients !== '') {
        emailrecipients = emailrecipients + ';'
                        + tgtApnt.patient.email
      } else {
        emailrecipients = tgtApnt.patient.email
      }
     }

     return emailrecipients
  }

  handleCreateAppt = (tgtApnt) => {

    // create new user
    APIappointment.createAppoint(tgtApnt)
      .then(r => {
        // reload the data
        this.loadAppointData()
        // Restore main view
        this.setState({
          screenMode: 'list',
          targetAppoint: ''
        })

        // send email if at list an email is present
        if ((tgtApnt.doctor && tgtApnt.doctor.email !== '') ||
          (tgtApnt.patient && tgtApnt.patient.email !== '')) {
          // make a list with doctor and patience emails 
          let emailrecipients = this.getEmailRecipients(tgtApnt)
          // Prepare email message
          let email = {
            to: emailrecipients,
            subject: 'Blue Animal Clinic / New Appointment',
            text: `
             Blue Animal Clinic - SORIN: New Appointment

                 Title:  ${tgtApnt.title}
                 Description:  ${tgtApnt.description} 
                 Date:  ${Moment(tgtApnt.date).format('YYYY-MM-DD hh:mm a')}
                 Doctor: ${tgtApnt.doctor.name} 
                 Patient: ${tgtApnt.patient.patientname} 
           `
          }

          // send email indicating user was added to the system
          APIemails.sendEmail(email)
            .then(r => {
              console.log('Email sent: ' + r.response)
            })
            .catch(err => console.error(err))

        } //  if (tgtApnt.doctor || tgtApnt.patient)

      })
      .catch(err => console.log(err))
  }

  handleSaveAppt = (tgtApnt) => {
    // Save updated user data    
    APIappointment.updateAppoint(tgtApnt._id, tgtApnt)
      .then(r => {
        // reload the data
        this.loadAppointData()
        // Restore main view
        this.setState({
          screenMode: 'list',
          targetAppoint: ''
        })

        // send email if at list an email is present
        if ((tgtApnt.doctor && tgtApnt.doctor.email !== '') ||
          (tgtApnt.patient && tgtApnt.patient.email !== '')) {
          // make a list with doctor and patience emails 
          let emailrecipients = this.getEmailRecipients(tgtApnt)
          // Prepare email message
          let email = {
            to: emailrecipients,
            subject: 'Blue Animal Clinic /  Appointment Update',
            text: `
           Blue Animal Clinic - SORIN: Appointment Update

               Title:  ${tgtApnt.title}
               Description:  ${tgtApnt.description} 
               Date:  ${Moment(tgtApnt.date).format('YYYY-MM-DD hh:mm a')}
               Doctor: ${tgtApnt.doctor.name} 
               Patient: ${tgtApnt.patient.patientname} 
         `
          }

          // send email indicating user was added to the system
          APIemails.sendEmail(email)
            .then(r => {
              console.log('Email sent: ' + r.response)
            })
            .catch(err => console.error(err))

        } //  if (tgtApnt.doctor || tgtApnt.patient)

      })
      .catch(err => console.log(err))
  }

  handleDeleteAppt = (tgtApnt) => {
    // delete user    
    APIappointment.deleteAppoint(tgtApnt._id)
      .then(r => {
        // Restore main view
        this.setState({
          screenMode: 'list',
          targetAppoint: ''
        })
        // reload the data
        this.loadAppointData()

        // send email if at list an email is present
        if ((tgtApnt.doctor && tgtApnt.doctor.email !== '') ||
          (tgtApnt.patient && tgtApnt.patient.email !== '')) {
          // make a list with doctor and patience emails 
          let emailrecipients = this.getEmailRecipients(tgtApnt)
          // Prepare email message
          let email = {
            to: emailrecipients,
            subject: 'Blue Animal Clinic /  Appointment Cancellation',
            text: `
           Blue Animal Clinic - SORIN: Appointment Cancellation

               Title:  ${tgtApnt.title}
               Description:  ${tgtApnt.description} 
               Date:  ${Moment(tgtApnt.date).format('YYYY-MM-DD hh:mm a')}
               Doctor: ${tgtApnt.doctor.name} 
               Patient: ${tgtApnt.patient.patientname} 
         `
          }

          // send email indicating user was added to the system
          APIemails.sendEmail(email)
            .then(r => {
              console.log('Email sent: ' + r.response)
            })
            .catch(err => console.error(err))

        } //  if (tgtApnt.doctor || tgtApnt.patient)

      })
      .catch(err => console.log(err))
  }

  handleCancel = (tgtAppt) => {
    // Just reset selected appt and change screen mode to list
    this.setState({ screenMode: 'list', targetAppoint: '' })
    // reload the data
    this.loadAppointData()    
  }

  renderView = () => {

    const { classes } = this.props;

    if (this.state.screenMode === 'add') {

        return (
          <>
          <h1 className={classes.pageHead}>
            Create new appointment
          </h1>
          <AppointForm 
            mode={this.state.screenMode}
            appoint=''
            patients={this.state.patients}
            doctors={this.state.doctors}
            leftbuttonColor='primary'
            leftButtonLabel='Create'
            handleLeftButtonSelection={this.handleCreateAppt}
            rightbuttonColor='default'
            rightButtonLabel='Cancel'   
            handleRightButtonSelection={this.handleCancel}
            isUserNameDisabled={false}
          />
        </>
        );

    } else if (this.state.screenMode === 'edit') {

        return (
          <>
          <h1 className={classes.pageHead}>
            Update Current Appointment
          </h1>
          <AppointForm 
            mode={this.state.screenMode}
            appoint={this.state.targetAppoint}
            patients={this.state.patients}
            doctors={this.state.doctors}
            leftbuttonColor='primary'
            leftButtonLabel='Update'
            handleLeftButtonSelection={this.handleSaveAppt}
            rightbuttonColor='default'
            rightButtonLabel='Cancel'   
            handleRightButtonSelection={this.handleCancel}
            isUserNameDisabled={false}
          />
        </>
        )

    } else if (this.state.screenMode === 'delete') {

      return (
        <>
          <div>
            <h1 className={classes.pageHead}>
              Do you want to delete this appointment?
              </h1>
            <AppointCard appt={this.state.targetAppoint}
              leftbuttonColor='secondary'
              leftButtonLabel='Delete'
              handleLeftButtonSelection={this.handleDeleteAppt} 
              rightbuttonColor='default'
              rightButtonLabel='Cancel'
              isDisabled={false}
              handleRightButtonSelection={this.handleCancel} 
            />
          </div>
        </>
      )

    } else {

      return(      
        <>
          <Grid container spacing={0}>
           <div className={classes.pageHeadContainer}>
            <Grid item>
              <Avatar className={classes.avatar}>
                <EventIcon />
              </Avatar>
            </Grid>
            <Grid item>
              <h2 className={classes.pageHead}>
               Appointments
              </h2>
            </Grid>
            </div> 
            <Grid item>
              <Fab 
                aria-label="Add"
                color="secondary"  
                className={classes.fab}
                onClick={() => this.handleAppointAddSelection()}>
                <AddIcon />
              </Fab>
            </Grid>
          </Grid>

          <Grid alignContent='center'
            style={{ margin: 'auto', marginLeft: '5%' }}
            container spacing={32}>
            {
              this.state.aptments.map((appt, index) => (
                <AppointCard key={index}
                  appt={appt} 
                  leftbuttonColor='primary'
                  leftButtonLabel='Update' 
                  handleLeftButtonSelection={this.handleAppointUpdateSelection}  
                  rightbuttonColor='secondary'
                  rightButtonLabel='Remove' 
                  handleRightButtonSelection={this.handleAppointDeleteSelection}
                  isDisabled={false}
                />
              ))
            }
          </Grid>

          
        </>
    )
  }
}

  render() {
    return(
      <>
        {this.renderView()}
      </>
    )
  }
}


Appointment.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Appointment)
