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
  },
  cardImage : {
    width: '230px',
    margin: '20px 0px 0px 0px',
    borderRadius: '30px',
    border:'5px solid lightgray'
  },
  cardImage1 : {
    width: '230px',
    // margin: '10px 5px 20px 0px',
    borderRadius: '30px',
    border:'5px solid lightgray'
  },
  imageHolder: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center' 
  }
}

class MainMenu extends Component {
  render () {
    const { classes } = this.props;

    return (
      <>

          <Grid container spacing={16}>
             
            <Grid item>           
                <Link to='/patients' style={{ color: 'white', textDecoration: 'none' }} >
                  <div className='menuBlock block30 blockShadow patients'>
                    <IconButton color='inherit'>
                      <PetsIcon />
                        <Typography variant='h5' color='inherit' >
                              Patients
                        </Typography>                     
                    </IconButton>
                    <div className={classes.imageHolder}>
                      <img className={classes.cardImage1}
                         src="./images/patients.jpg" 
                        alt="Veterinary" />
                    </div>
                  </div>
                </Link>
            </Grid>
            <Grid item>          
                <Link to='/doctors' style={{ color: 'white', textDecoration: 'none' }}>
                  <div className='menuBlock block30 blockShadow doctors'>
                    <IconButton color='inherit'>
                      <FaceIcon />
                      <Typography variant='h5' color='inherit' >
                            Doctors
                      </Typography>
                    </IconButton>
                    <div className={classes.imageHolder}>
                      <img className={classes.cardImage}
                         src="./images/doctors.jpg" 
                        alt="Veterinary" />
                    </div>
                  </div>
                </Link>             
            </Grid>
            <Grid item>            
                <Link to='/medicines' style={{ color: 'white', textDecoration: 'none' }}>
                  <div className='menuBlock block30 blockShadow medicines'>
                    <IconButton color='inherit'>
                      <ColorizeIcon />
                      <Typography variant='h5' color='inherit' >
                            Medicines
                      </Typography>
                    </IconButton>
                    <div className={classes.imageHolder}>
                      <img className={classes.cardImage}
                         src="./images/medicines.png" 
                        alt="Veterinary" />
                    </div>
                  </div>
                </Link>            
            </Grid>
            <Grid item>        
              <Link to='/appointments' style={{ color: 'white', textDecoration: 'none' }}>
                <div className='menuBlock block30 blockShadow appointments'>
                  <IconButton color='inherit'>
                    <EventIcon />
                    <Typography variant='h5' color='inherit' >
                              Appointments
                    </Typography>
                  </IconButton>
                  <div className={classes.imageHolder}>
                      <img className={classes.cardImage}
                         src="./images/appointment.jpg" 
                        alt="Veterinary" />
                  </div>
                </div>
              </Link>             
            </Grid>
            <Grid item>            
              <Link to='/prescriptions' style={{ color: 'white', textDecoration: 'none' }}>
                <div className='menuBlock block30 blockShadow prescriptions'>
                  <IconButton color='inherit'>
                    <AssignmentIcon />
                    <Typography variant='h5' color='inherit' >
                           Prescriptions
                    </Typography>
                  </IconButton>
                  <div className={classes.imageHolder}>
                      <img className={classes.cardImage}
                         src="./images/prescription.jpg" 
                        alt="Veterinary" />
                  </div>
                </div>
              </Link>      
            </Grid>
            <Grid item>           
              <Link to='/Calc' style={{ color: 'white', textDecoration: 'none' }}>
                <div className='menuBlock block30 blockShadow dosage'>
                  <IconButton color='inherit'>
                    <GradientIcon />
                    <Typography variant='h5' color='inherit' >
                           Dosage Calculator
                    </Typography>
                  </IconButton>
                  <div className={classes.imageHolder}>
                      <img className={classes.cardImage}
                         src="./images/dosages.jpg" 
                        alt="Veterinary" />
                  </div>
                </div>
              </Link>            
            </Grid>

          </Grid>

      </>
    );
  }
}

MainMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainMenu);
