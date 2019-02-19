import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import PetsIcon from '@material-ui/icons/Pets'
import FaceIcon from '@material-ui/icons/Face'
import ColorizeIcon from '@material-ui/icons/Colorize'
import EventIcon from '@material-ui/icons/Event'
import AssignmentIcon from '@material-ui/icons/Assignment'
import SettingsIcon from '@material-ui/icons/Settings'
import GradientIcon from '@material-ui/icons/Gradient'
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '30px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '28px',
    },
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
})

class Navbar extends Component {
  
  state = {
    open: false
  }

  toggleDrawer = changeOpen => {
    this.setState({ open: changeOpen })
  }

  renderButton = () => {
     if(this.props.sessionUser === '') {
       return ('Login')
     } else {
       return ( `${this.props.sessionUser.username} (Logout)` )
     }
  }

  render() {

    const { classes } = this.props
    
    const sideList = (
      <div className={classes.list}>
        <List>
          <Link to='/' style={{ color: 'black', textDecoration: 'none' }}>
            <ListItem button key='Home'>
               <ListItemIcon> 
                 <div>
                   <HomeIcon />
                 </div>              
               </ListItemIcon>
               <ListItemText primary='Home' />
             </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
            <Link to='/patients' style={{ color: 'black', textDecoration: 'none' }}>
              <ListItem button key='Patients'>
                 <ListItemIcon> 
                   <div>
                     <PetsIcon />
                   </div>                
                  </ListItemIcon>
                <ListItemText primary='Patients' />
              </ListItem>
           </Link>
           <Link to='/doctors' style={{ color: 'black', textDecoration: 'none' }}>
              <ListItem button key='Doctors'>
                <ListItemIcon> 
                  <div>
                    <FaceIcon />
                  </div>        
                </ListItemIcon>
                <ListItemText primary='Doctors' />
              </ListItem>
           </Link>
           <Link to='/medicines' style={{ color: 'black', textDecoration: 'none' }}>
              <ListItem button key='Medications'>
                <ListItemIcon> 
                  <div>
                    <ColorizeIcon />
                  </div>                  
                  </ListItemIcon>
                <ListItemText primary='Medicines' />
              </ListItem>
           </Link>
           <Link to='/appointments' style={{ color: 'black', textDecoration: 'none' }}>
              <ListItem button key='Appointments'>
                <ListItemIcon> 
                  <div>
                  <EventIcon />
                  </div> 
                </ListItemIcon>
                <ListItemText primary='Appointments' />
              </ListItem>
           </Link>
           <Link to='/calc' style={{ color: 'black', textDecoration: 'none' }}>
              <ListItem button key='Calculator'>
                <ListItemIcon>
                  <div>
                    <GradientIcon />
                  </div>      
                </ListItemIcon>
                <ListItemText primary='Dosage Calculator' />
              </ListItem>
           </Link>
        </List>
        <Divider />
        <List>
           <Link to='/admin' style={{ color: 'black', textDecoration: 'none' }}>
              <ListItem button key='Admin'>
                <ListItemIcon> 
                  <div>
                    <SettingsIcon />
                  </div>             
                </ListItemIcon>
                <ListItemText primary='Admin' />
              </ListItem>
           </Link>
           <Link to='/aboutus' style={{ color: 'black', textDecoration: 'none' }}>
              <ListItem button key='AboutUs'>
                <ListItemIcon> 
                  <div> 
                   <SentimentSatisfiedAltIcon />
                  </div> 
                </ListItemIcon>
                <ListItemText primary='About Us' />
              </ListItem>
           </Link>
        </List>
      </div>
    )

    return(
      <>
          <div className={classes.root}>
            <AppBar position="static"  >
              <Toolbar>
                <IconButton onClick={() => this.toggleDrawer(true)} 
                            className={classes.menuButton} 
                            color="inherit" 
                            style={{ color: '#FFF3B0'}} 
                            aria-label='Menu'>
                  <MenuIcon />
                </IconButton>
                
                <Typography color="inherit" className={classes.title}>
                SORIN Surgical Operation Reference and Interface Network
                </Typography>

                <Link to='/' style={{ color: 'black', textDecoration: 'none' }}>
                  <Button color="inherit">
                    <HomeIcon/>
                  </Button>
                </Link>
               
                <Button color="inherit" onClick={() => this.props.handleLogingAction()}>
                   { this.renderButton() }
                </Button>

                <Drawer open={this.state.open} 
                        onClose={() => this.toggleDrawer(false)}>
                    <div
                      tabIndex={0}
                      role='button'
                      onClick={() => this.toggleDrawer(false)}
                      onKeyDown={() => this.toggleDrawer(false)}
                    >
                     {sideList}
                   </div>
                </Drawer>

              </Toolbar>
            </AppBar>
          </div>
      </>
    )
  }

}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Navbar)
