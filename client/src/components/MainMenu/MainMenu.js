import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import PetsIcon from '@material-ui/icons/Pets'
import FaceIcon from '@material-ui/icons/Face'
import ColorizeIcon from '@material-ui/icons/Colorize'
import EventIcon from '@material-ui/icons/Event'
import GradientIcon from '@material-ui/icons/Gradient'

// Local styles
import './MainMenu.css'

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: `0 ${theme.spacing.unit * 3}px`,
    minHeight: '680px', 
  },
  mainContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center' 
  },
  imageHolder: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center' 
  },
  cardImage : {
    borderRadius: '30px',
    border:'5px solid lightgray',
    [theme.breakpoints.down('sm')]: {
      width: '250px',
      margin: '10px 5px 10px 5px',
    },
    [theme.breakpoints.up('md')]: {
      width: '360px',
      margin: '30px 10px 20px 10px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '420px',
      margin: '30px 10px 0px 10px',
    }
  },
  cardImage1 : {  
    borderRadius: '30px',
    border:'5px solid lightgray',
    [theme.breakpoints.down('sm')]: {
      width: '230px', 
      margin: '0px 5px 10px 5px',
    },
    [theme.breakpoints.up('md')]: {
      width: '320px', 
      margin: '15px 10px 10px 10px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '400px', 
      margin: '10px 10px 0px 10px',
    }
  },
  title: {
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
      margin: '0px 0px 2px 5px',
      // fontWeight: 'bold',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 30,
      margin: '0px 0px 2px 10px',
      fontWeight: 'bold',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 35,
      margin: '0px 0px 2px 10px',
      fontWeight: 'bold',
    }
  },
})

class MainMenu extends Component {
  render () {
    const { classes } = this.props;

    return (
      <>
         <div className={classes.root}>      
          <Grid container spacing={8}          
                className={classes.mainContainer}
                >
             
            <Grid item >           
                <Link to='/patients' style={{ color: 'white', textDecoration: 'none' }} >
                  <div className='menuBlock block30 blockShadow patients'>
                    <IconButton color='inherit'>
                      <PetsIcon />
                      <Typography className={classes.title}>
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
            <Grid item >          
                <Link to='/doctors' style={{ color: 'white', textDecoration: 'none' }}>
                  <div className='menuBlock block30 blockShadow doctors'>
                    <IconButton color='inherit'>
                      <FaceIcon />
                      <Typography className={classes.title}>
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
            <Grid item >            
                <Link to='/medicines' style={{ color: 'white', textDecoration: 'none' }}>
                  <div className='menuBlock block30 blockShadow medicines'>
                    <IconButton color='inherit'>
                      <ColorizeIcon />
                      <Typography className={classes.title} >
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
            <Grid item >        
              <Link to='/appointments' style={{ color: 'white', textDecoration: 'none' }}>
                <div className='menuBlock block30 blockShadow appointments'>
                  <IconButton color='inherit'>
                    <EventIcon />
                    <Typography className={classes.title} >
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
            <Grid item >           
              <Link to='/Calc' style={{ color: 'white', textDecoration: 'none' }}>
                <div className='menuBlock block30 blockShadow dosage'>
                  <IconButton color='inherit'>
                    <GradientIcon />
                    <Typography className={classes.title} >
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
          </div>
      </>
    )
  }
}

MainMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainMenu)
