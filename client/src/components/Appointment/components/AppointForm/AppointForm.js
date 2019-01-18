import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import AccountCircle from '@material-ui/icons/AccountCircle'
import PersonIcon from '@material-ui/icons/PermIdentity'
// API
import APIappointment from '../../../../utils/APIappointment'

// Local style
import './AppointForm'
import MainSelect from "../DoctorDropDown";

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 250,
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
  }
})


class AppointForm extends Component {
  
  state = {
    mode: '',
    appoint: '',
    _id : '',
    title: '',
    description: '',
    appointmentError: '',
    selectedDoctorName : '',
    selectedPatientName: ''
  };
  
  componentDidMount = () => {
      
      if(this.props.appoint !== '') {
          this.setState({
              mode: this.props.mode,
              appoint: this.props.appoint,
              _id: this.props.appoint._id, 
              title: this.props.appoint.title,
              description: this.props.appoint.description
            })  
        }
    };

 
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value })  
    console.log(name)
  };

  handleDropSelection = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
    console.log(name)
  }

  getDoctors = (doctorName) => {
    let targetDoctor = null;
    let doctorArr = this.state.doctors
    for (let i = 0; i < doctorArr.length; i++) {
      let doctor = doctorArr[i]
      if (doctor.name === doctorName) {
        targetDoctor = doctor
        return targetDoctor
      }
    }
  };

  getPatient = (patientName) => {
    let targetPatient = null;
    let patientArr = this.state.patients
    for (let i = 0; i < patientArr.length; i++) {
      let patient = patientArr[i]
      if (patient.name === patientName) {
        targetPatient = patient
        return targetPatient
      }
    }
  };


  handleSave = () => {
  
    if (this.state.mode === 'edit') {
       // EDIT MODE: Validate
       if (this.state.title === '' || this.state.description === '')  {    
          this.setState({appointmentError: 'Please provide appointment title and brief description'}) 
       } else {
                
           // translate
           let newApptData = {
              _id: this.state._id, 
              title: this.state.title,
              description: this.state.description,
              appointmentCreated: Date.now()
            //   needsEcnryption: doesItNeedEncryption 
           }
          
           // send information back 
           this.props.handleLeftButtonSelection(newApptData)
       }
    } else {
        
       // ADD MODE: Validate
       if (this.state.title === '' || this.state.description === '')  {    
        this.setState({appointmentError: 'Please provide title and brief description'}) 
       } else {
          console.log('addbutton')
            
          // retreive the selected doctor in the screen
          let doctorObj = this.getDoctors(this.state.selectedDoctorName)
          // gete the selected patient from screen
          let patientObj = this.getPatient(this.state.selectedPatientName)
          
         // translate
          let newApptData = { 
             title: this.state.title,
             description: this.state.description,
             appointmentCreated: Date.now(),
             doctor: doctorObj,
             patient: patientObj
          } 
             
          // Check if user already exist 
         APIappointment.getApointments(this.state.title)
            .then(res => {  

              if(res.data === null) {
                this.setState({appointmentError: `The title "${res.data.title}" already exist, please provide a new one`})  
              } else {
                // send information back 
                this.props.handleLeftButtonSelection(newApptData)
              }           
           })
           .catch(err => console.log(err))          
       }
    } 
  }

  render() {

    const { classes } = this.props

    return ( 
      <>
      <Card className={classes.card}>
         <CardContent>
          <p className='apntError'>{this.state.appointmentError}</p>
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
                    // disabled={this.props.isUserNameDisabled}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                           <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
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
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                           <PersonIcon />
                        </InputAdornment>
                      ),
                    }}
                  />                 
              </div>

              <div className='formItem'> 
                  <TextField
                    required
                    id="apnt-dateTime"
                    label="Date and Time :"
                    className={classes.textField}
                    name='dateTime'
                    type="number"
                    // autoComplete="current-fullname"
                    value={this.state.Date}
                    onChange={this.handleInputChange}
                    margin="normal"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                           <PersonIcon />
                        </InputAdornment>
                      ),
                    }}
                  />                 
              </div>

              <div className='formItem'>
                <MainSelect 
                  optionArr={this.props.doctors}
                  fieldName={'selectedDoctorName'}
                  selectedName={this.state.selectedDoctorName}
                  handleSelection={this.handleDropSelection}/>
              </div>

              <div className='formItem'>
                <MainSelect
                  optionArr={this.props.patients}
                  fieldName={'selectedPatientName'}
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
  