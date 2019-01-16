import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
// import EventIcon from '@material-ui/icons/Event';
import SettingsIcon from '@material-ui/icons/Settings'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
// Components
import AppointCard from './components/AppointCard';
import AppointForm from './components/AppointForm';
import DoctorDropDown from './components/DoctorDropDown';
import APIappointment from '../../utils/APIappointment';
import APIdoctor from '../../utils/APIdoctor';
import APIpatient from '../../utils/APIpatient';


const styles = theme => ({
 
 
  avatar: {
    margin: ' 10px 0px 0px 50px'
  },
  pageHead: {
    color: 'white',
    margin: '7px 0px 0px 20px'
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
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  }
});

class Appointment extends Component {
  
  state = {
    aptments: [],
    patients: [],
    doctors: [],
    screenMode: 'list',
    targetAppoint: ''
  };
  
  componentDidMount() {
    this.loadAppointData()
  };

  loadDoctorData = () => {
    APIdoctor.getDoctors()
      .then(res => {
        this.setState({ doctors: res.data })
      })
      .catch(err => console.log(err))
  };

  loadPatientData = () => {
    APIpatient.getPatients()
      .then(res => {
        this.setState({ patients: res.data })
      })
      .catch(err => console.log(err))
  };

  loadAppointData = () => {
    APIappointment.getApointments()
    .then(res => {
      this.setState({ aptments: res.data })
    })
    .catch(err => console.log(err))
  };

  handleAppointAddSelection = () => {
    // change screen mode to Appointment ADD mode
    this.setState({ screenMode: 'add' })
  };

  handleAppointUpdateSelection = (tgtApnt) => {
    // change screen mode to Appointment EDIT mode, and store target-appoint
    this.setState({ screenMode: 'edit', targetAppoint: tgtApnt })
  };

  handleAppointDeleteSelection = (tgtApnt) => {
    // Change screen mode to Appointment DELETE mode, and store target-appointment
    this.setState({ screenMode: 'delete', targetAppoint: tgtApnt })
  };

  handleCreateAppt = (tgtApnt) => {
    // create new user
    APIappointment.createAppoint(tgtApnt)
      .then(r => {
        // Restore main view
        this.setState({ screenMode: 'list', targetAppoint: '' })
        // reload the data
        this.loadAppointData()
      })
      .catch(err => console.log(err))
  };

  handleSaveAppt = (tgtApnt) => {
    console.log(tgtApnt)
    // Save updated user data    
    APIappointment.updateAppoint(tgtApnt._id,tgtApnt)
      .then(r => {  
        // Restore main view
       this.setState({screenMode: 'list', targetAppoint: ''})  
       // reload the data
      this.loadAppointData()
      })
      .catch(err => console.log(err))
  };

  handleDeleteAppt = (tgtApnt) => {
    // delete user    
    APIappointment.deleteAppoint(tgtApnt._id)
      .then(r => {  
        // Restore main view
        this.setState({screenMode: 'list',targetAppoint: ''})  
        // reload the data
        this.loadAppointData()
      })
      .catch(err => console.log(err)) 
  }

  handleCancel = (tgtAppt) => {
    // reload the data
    this.loadAppointData() 
    // Just reset selected appt and change screen mode to list
    this.setState({ screenMode: 'list', targetAppoint: '' })
  };

  
  renderView = () => {

    const { classes } = this.props;

    if (this.state.screenMode === 'add') {

        return (
          <>
          <h1 className={classes.pageHead}>
            Set new appointment
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
            <Grid item>
              <Avatar className={classes.avatar}>
                <SettingsIcon />
              </Avatar>
            </Grid>
            <Grid item>
              <h1 className={classes.pageHead}>Appointments</h1>
            </Grid>
            <Grid item>
              <Fab color="secondary" aria-label="Add" className={classes.fab}>
                <AddIcon onClick={() => this.handleAppointAddSelection()} />
              </Fab>
            </Grid>
          </Grid>

          <Grid alignContent='center'
            style={{ margin: 'auto', minHeight: '94vh', marginLeft: '5%' }}
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
};

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
};

export default withStyles(styles)(Appointment);

// render () {
//   const { classes } = this.props;
//   return (
//     <>
//       <Grid container spacing={0}>
//         <Grid item>
//           <Avatar className={classes.avatar}>
//             <EventIcon />
//           </Avatar>
//         </Grid>
//         <Grid item>
//           <h1 className={classes.pageHead}>Appointments</h1>
//         </Grid>
//         <AppointCard />
//       </Grid>
//     </>
//   );
// }