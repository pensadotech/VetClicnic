import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import EventIcon from '@material-ui/icons/Event'
import Moment from 'moment'
// conponents
import AppointItemSelect from "../AppointItemSelect"

const styles = theme => ({
  card: {
    minWidth: 175,
    maxWidth: 850,
    maxHeight: 650,
    margin: '0px 20px 0px 20px',  
    borderRadius: '30px',
    boxShadow: '5px 5px 5px 5px rgb(82, 82, 100)',   
  },
  cardContent: {
    pading: '0px 0px 0px 0px'
  },
  formContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    [theme.breakpoints.down('sm')]: {
      width: 240,
    },
    [theme.breakpoints.up('md')]: {
      width: 280,
    },
    [theme.breakpoints.up('lg')]: {
      width: 300,
    }  
  },
  title: {
    fontSize: 14,
  },
  btnActionLeft : {
    margin: '0px 0px 10px 20px',
  },
  btnAction : {
    margin: '0px 0px 10px 10px',
  },
  inputError : {
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
           <CardContent className={classes.cardContent}>
           <Chip
              avatar={<Avatar><EventIcon /></Avatar>}
              label='Appointment' 
              className={classes.chip}
              color= "primary"
            />

            <form className={classes.formContainer} 
                  noValidate 
                  autoComplete="off">

                 <Grid container spacing={32}
                   alignContent='center'
                   style={{ margin: 'auto', marginLeft: '5%' }}>
                  
                  <Grid item >
                  <div> 
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
                  <div >
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
                  </Grid>
                  
                  <Grid item >
                    <div> 
                      <TextField
                        required
                        id="apnt-description"
                        label="task :"
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
                  </Grid>
                </Grid>
            </form>

            <p className={classes.apntError}>
              {this.state.appointmentError}
           </p>

          </CardContent>
          <CardActions>          
              <Button 
                 size="small" 
                 variant="contained" 
                 color={this.props.leftbuttonColor} 
                 className={classes.btnActionLeft} 
                 onClick={() => this.handleSave()}>
                  {this.props.leftButtonLabel}
              </Button>
              <Button 
                 size="small" 
                 variant="contained" 
                 color={this.props.rightbuttonColor} 
                 className={classes.btnAction}  
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
  