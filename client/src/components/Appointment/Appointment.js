import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import EventIcon from '@material-ui/icons/Event';
import AppointCard from './components/AppointCard';
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
    expanded: false,
    appointments: [],
    screenMode: 'list',
    targetAppoint: ''
  }
  
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  
  componentDidMount() {
    this.loadAppointData()
  };

  loadAppointData = () => {
    APIappointment.findOne()
    .then(res => {
      this.setState({ appointments: res.data })
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


  
  renderView = () => {

    const { classes } = this.props;

    if (this.state.screenMode === 'add') {

        return (
          <>
            <h1 className={classes.pageHead}>
                Set new appointment
            </h1>
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
                    <EventIcon />
                   </Avatar>
                 </Grid>
                 <Grid item>
                   <h1 className={classes.pageHead}>Appointments</h1>
                 </Grid>
                 <AppointCard />
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
  };
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