import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import EventIcon from '@material-ui/icons/Event'
import Moment from 'moment'

import AppointItemSelect from "../AppointItemSelect"
// API
import APIappointment from '../../../../utils/APIappointment'
// Local style
import './AppointForm.css'


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 250
  },
  datetimeField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300
  },
  margin: {
    margin: theme.spacing.unit,
  },
  card: {
    minWidth: 175,
    maxHeight: 620,
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
  apntError : {
    color: 'red'
  }
})

class AppointForm extends Component {
  
  state = {
    currentDate: new Date(),
    mode: '',
    appoint: '',
    _id : '',
    title: '',
    description: '',
    appointmentDate: '',  
    selectedDoctorName : '',
    selectedPatientName: '',
    appointmentError: ''
  };
  
  componentDidMount = () => {
    
    if(this.props.appoint !== '') {
      
       this.setState({
              mode: this.props.mode,
              appoint: this.props.appoint,
              _id: this.props.appoint._id, 
              title: this.props.appoint.title,
              description: this.props.appoint.description,
              appointmentDate : Moment(this.props.appoint.date).format('YYYY-MM-DDTHH:MM'),
              selectedDoctorName: this.props.appoint.doctor ? this.props.appoint.doctor.name : '',
              selectedPatientName: this.props.appoint.patient ? this.props.appoint.patient.patientname : ''
        })     
    }
    
  }
  

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value })  
  }

  handleDropSelection = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  getDoctorObject = (doctorName) => {
    let targetDoctor = null;
    let doctorArr = this.props.doctors
    for (let i = 0; i < doctorArr.length; i++) {
      let doctor = doctorArr[i]
      if (doctor.name === doctorName) {
        targetDoctor = doctor
        return targetDoctor
      }
    }
  }
  
  getPatientObject = (patientName) => {
    let targetPatient = null;
    let patientArr = this.props.patients
    for (let i = 0; i < patientArr.length; i++) {
      let patient = patientArr[i]
      if (patient.patientname === patientName) {
        targetPatient = patient
        return targetPatient
      }
    }
  }

  handleSave = () => {
  
    if (this.state.mode === 'edit') {
       // EDIT MODE: Validate
       if (this.state.title === '' || this.state.description === '' || this.state.appointmentDate === '')  {   
        this.setState({appointmentError: 'Please provide title, description, appointment date and time.'}) 
       } else if(new Date(this.state.appointmentDate) < this.state.currentDate ) {
        this.setState({appointmentError: 'The appointment cannot be in the past!'}) 
       } else {    

          // retreive the selected doctor in the screen
          let doctorObj = this.getDoctorObject(this.state.selectedDoctorName)
          // retreive the selected patient from screen
          let patientObj = this.getPatientObject(this.state.selectedPatientName)

          // prepare object to return
          let newApptData = { 
             _id : this.state._id,
             date : this.state.appointmentDate,
             title: this.state.title,
             description: this.state.description,    
             doctor: doctorObj,
             patient: patientObj,
             appointmentCreated: new Date()
          } 
          
           // send information back 
           this.props.handleLeftButtonSelection(newApptData)
       }
    } else {
        
       // ADD MODE: Validate
       if (this.state.title === '' || this.state.description === '' || this.state.appointmentDate === '')  {   
         this.setState({appointmentError: 'Please provide title, description, and appointment date-time.'}) 
       } else if(new Date(this.state.appointmentDate) < this.state.currentDate ) {
         this.setState({appointmentError: 'The appointment cannot be in the past!'}) 
       } else {  
         
          // retreive the selected doctor in the screen
          let doctorObj = this.getDoctorObject(this.state.selectedDoctorName)
          // retreive the selected patient from screen
          let patientObj = this.getPatientObject(this.state.selectedPatientName)
          
          // prepare object to return
          let newApptData = { 
             date : this.state.appointmentDate,
             title: this.state.title,
             description: this.state.description,     
             doctor: doctorObj,
             patient: patientObj,
             appointmentCreated: new Date()
          } 
            
           // send information back 
           this.props.handleLeftButtonSelection(newApptData)       
       }
    } 
  }

  render() {

    const { classes } = this.props
     
    return (

        <>
        <Card className={classes.card}>
           <CardContent>
            <p className={classes.apntError}>{this.state.appointmentError}</p>
            <form className={classes.container} noValidate autoComplete="off">
                <div className='formItem'>
                   <TextField
                      required
                      id="apnt-title"
                      label="Title :"
                      className={classes.textField}
                      name='title'
                      type="string"
                      // autoComplete="current-username"
                      value={this.state.title}
                      onChange={this.handleInputChange}
                      margin="normal"
                    />   
                </div>
                <div className='formItem'> 
                    <TextField
                      required
                      id="apnt-description"
                      label="Description :"
                      className={classes.textField}
                      name='description'
                      type="string"
                      // autoComplete="current-fullname"
                      value={this.state.description}
                      onChange={this.handleInputChange}
                      margin="normal"
                    />                 
                </div>  
                <div className='formItem'> 
                    <TextField
                      required
                      id="appnt-date"
                      label="Date and Time :"
                      className={classes.datetimeField}
                      name='appointmentDate'
                      type='datetime-local'
                      value={this.state.appointmentDate}
                      onChange={this.handleInputChange}
                      margin="normal"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                             <EventIcon />
                          </InputAdornment>
                        ),
                      }}
                    />                 
                </div>              
                <div className='formItem'>
                  <AppointItemSelect 
                    mainLabel='Doctor'
                    table="doctor"
                    itemArr={this.props.doctors}
                    selectedfieldName='selectedDoctorName'
                    selectedName={this.state.selectedDoctorName}
                    handleSelection={this.handleDropSelection}/>
                </div>
                <div className='formItem'>
                  <AppointItemSelect
                    mainLabel='Patient'
                    table="patient"
                    itemArr={this.props.patients}
                    selectedfieldName='selectedPatientName'
                    selectedName={this.state.selectedPatientName}
                    handleSelection={this.handleDropSelection} />
                </div>
            </form>
          </CardContent>
          <CardActions>          
              <Button size="small" variant="contained" color={this.props.leftbuttonColor} 
                 onClick={() => this.handleSave()}>{this.props.leftButtonLabel}
              </Button>
              <Button size="small" variant="contained" color={this.props.rightbuttonColor}  
                 onClick={() => this.props.handleRightButtonSelection(this.props.apnt)}>
                 {this.props.rightButtonLabel}
              </Button>
          </CardActions>    
        </Card>
  
        </>
    )
  } 
}

AppointForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AppointForm)
  