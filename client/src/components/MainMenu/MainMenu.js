import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'

import PetsIcon from '@material-ui/icons/Pets'
import FaceIcon from '@material-ui/icons/Face'
import ColorizeIcon from '@material-ui/icons/Colorize'
import EventIcon from '@material-ui/icons/Event'
import AssignmentIcon from '@material-ui/icons/Assignment'
import SettingsIcon from '@material-ui/icons/Settings'

import './MainMenu.css'

const styles = {
    grow: {
      flexGrow: 1,
    }
  }

class MainMenu extends Component {
   
  render() {

    const { classes } = this.props

    return (
      <>
       <div>
         <Grid container spacing={16}>
            <Grid item>
                <div className='menuBlock patients'>
                  <IconButton color="inherit">
                     <PetsIcon />
                     <Typography variant="h6" color="inherit" className={classes.grow}>
                       Patients
                     </Typography>    
                  </IconButton>                        
                </div>
            </Grid>  
            <Grid item>           
                <div className='menuBlock doctors'>
                  <IconButton color="inherit">
                     <FaceIcon />
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                    Doctors
                    </Typography>    
                  </IconButton>    
                </div> 
            </Grid>  
            <Grid item>
                <div className='menuBlock medicines'>
                  <IconButton color="inherit">
                     <ColorizeIcon />
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                       Medicines
                    </Typography>    
                  </IconButton>    
                </div>
            </Grid>
            <Grid item>
                <div className='menuBlock appointments'>
                   <IconButton color="inherit">
                     <EventIcon />
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                       Appointments
                    </Typography>    
                  </IconButton>                  
                </div>
            </Grid>
            <Grid item>
                <div className='menuBlock prescriptions'>
                 <IconButton color="inherit">
                     <AssignmentIcon />
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                       Prescriptions
                    </Typography>    
                  </IconButton>                 
                </div>
            </Grid>    
         </Grid>
        </div>
      </>
    )
  }
}



MainMenu.propTypes = {
    classes: PropTypes.object.isRequired
}
  
export default withStyles(styles)(MainMenu)