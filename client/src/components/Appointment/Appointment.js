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
import APIappointment from '../../utils/APIappointment';

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
    screenMode: 'list',
    targetAppoint: ''
  };
  
  componentDidMount() {
    this.loadAppointData()
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

  handleCancel = (tgtAppt) => {
    // reload the data
    this.loadAppointData() 
    // Just reset selected appt and change screen mode to list
    this.setState({ screenMode: 'list', targetAppoint: '' })
  }

  
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
            leftbuttonColor='primary'
            leftButtonLabel='Create'
            handleLeftButtonSelection={this.handleAppointAddSelection}
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
               Update appointment information
            </h1>
          </>
        )

    } else if (this.state.screenMode === 'delete') {

      return (

        <>
          <h1 className={classes.pageHead}>
            Delete appointment
          </h1>
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