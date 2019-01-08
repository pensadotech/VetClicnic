import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PetsIcon from '@material-ui/icons/Pets';
import FaceIcon from '@material-ui/icons/Face';
import ColorizeIcon from '@material-ui/icons/Colorize';
import EventIcon from '@material-ui/icons/Event';
import AssignmentIcon from '@material-ui/icons/Assignment';
import GradientIcon from '@material-ui/icons/Gradient';

import './MainMenu.css';

const styles = {
  grow: {
    flexGrow: 1
  }
};

class MainMenu extends Component {
  render () {
    const { classes } = this.props;

    return (
      <>
        <div>
          <Grid container spacing={16}>
            <Grid item>
              <div className='menuBlock patients'>
                <Link to='/patients' style={{ color: 'black', textDecoration: 'none' }}>
                  <IconButton color='inherit'>
                    <PetsIcon />
                    <Typography variant='h6' color='inherit' className={classes.grow}>
                           Patients
                    </Typography>
                  </IconButton>
                </Link>
              </div>
            </Grid>
            <Grid item>
              <div className='menuBlock doctors'>
                <Link to='/doctors' style={{ color: 'black', textDecoration: 'none' }}>
                  <IconButton color='inherit'>
                    <FaceIcon />
                    <Typography variant='h6' color='inherit' className={classes.grow}>
                          Doctors
                    </Typography>
                  </IconButton>
                </Link>
              </div>
            </Grid>
            <Grid item>
              <div className='menuBlock medicines'>
                <Link to='/medicines' style={{ color: 'black', textDecoration: 'none' }}>
                  <IconButton color='inherit'>
                    <ColorizeIcon />
                    <Typography variant='h6' color='inherit' className={classes.grow}>
                           Medicines
                    </Typography>
                  </IconButton>
                </Link>
              </div>
            </Grid>
            <Grid item>
              <div className='menuBlock appointments'>
                <Link to='/appointments' style={{ color: 'black', textDecoration: 'none' }}>
                  <IconButton color='inherit'>
                    <EventIcon />
                    <Typography variant='h6' color='inherit' className={classes.grow}>
                              Appointments
                    </Typography>
                  </IconButton>
                </Link>
              </div>
            </Grid>
            <Grid item>
              <div className='menuBlock prescriptions'>
                <Link to='/prescriptions' style={{ color: 'black', textDecoration: 'none' }}>
                  <IconButton color='inherit'>
                    <AssignmentIcon />
                    <Typography variant='h6' color='inherit' className={classes.grow}>
                           Prescriptions
                    </Typography>
                  </IconButton>
                </Link>
              </div>
            </Grid>
            <Grid item>
              <div className='menuBlock calc'>
                <Link to='/Calc' style={{ color: 'black', textDecoration: 'none' }}>
                  <IconButton color='inherit'>
                    <GradientIcon />
                    <Typography variant='h6' color='inherit' className={classes.grow}>
                           Dosage Calculator
                    </Typography>
                  </IconButton>
                </Link>
              </div>
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}

MainMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainMenu);
