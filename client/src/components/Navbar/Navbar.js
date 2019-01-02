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

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
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
};

class Navbar extends Component {
  
  state = {
    open: false
  }

  toggleDrawer = changeOpen => {
    console.log(changeOpen)
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

    const { classes } = this.props;
    
    const sideList = (
      <div className={classes.list}>
        <List>
           <ListItem button>
             <ListItemIcon> <HomeIcon /></ListItemIcon>
             <ListItemText primary='Home' />
          </ListItem>
        </List>
        <Divider />
        <List>
           <ListItem button>
             <ListItemIcon> <PetsIcon /></ListItemIcon>
             <ListItemText primary='Patients' />
           </ListItem>
           <ListItem button>
             <ListItemIcon> <FaceIcon /></ListItemIcon>
             <ListItemText primary='Doctors' />
           </ListItem>
           <ListItem button>
             <ListItemIcon> <ColorizeIcon /></ListItemIcon>
             <ListItemText primary='Medicines' />
           </ListItem>
           <ListItem button>
             <ListItemIcon> <EventIcon /></ListItemIcon>
             <ListItemText primary='Appointments' />
           </ListItem>
           <ListItem button>
             <ListItemIcon> <AssignmentIcon /></ListItemIcon>
             <ListItemText primary='Prescriptions' />
           </ListItem>
        </List>
        <Divider />
        <List>
           <ListItem button>
             <ListItemIcon> <SettingsIcon /></ListItemIcon>
             <ListItemText primary='Admin' />
          </ListItem>
        </List>
      </div>
    )

    return(
      <>
          <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>

                <IconButton onClick={() => this.toggleDrawer(true)} 
                            className={classes.menuButton} 
                            color="inherit" 
                            style={{ color: '#FFF3B0'}} 
                            aria-label='Menu'>
                  <MenuIcon />
                </IconButton>

                <Typography variant="h6" color="inherit" className={classes.grow}>
                  Animal Clinic 
                </Typography>
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
