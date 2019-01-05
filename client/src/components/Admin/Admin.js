import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import SettingsIcon from '@material-ui/icons/Settings'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
// Components
import UserCard from './components/UserCard'
import UserForm from './components/UserForm'
// API
import APIusers from '../../utils/APIuser'
// Local style
import './Admin.css'

const styles = theme => ({
  avatar: {
    margin: ' 10px 0px 0px 50px'
  },
  pageHead : {
    color:'white',
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
})

class Admin extends Component {
   
  state ={
    users : [],
    screenMode: 'list',
    targetUser: ''
  }

  componentDidMount() {
    this.loadUsers()
  }

  loadUsers = () => { 
    APIusers.getUsers()
     .then(res => {
      this.setState({ users: res.data })
     })
     .catch(err => console.log(err))
  }

  handleUserAddSelection = () => {
     // change screen mode to user ADD mode
     this.setState({screenMode: 'add'})
  }

  handleUserUpdateSelection = (tgtUser) => {
     // change screen mode to user EDIT mode, and store target-user
     this.setState({screenMode: 'edit',targetUser: tgtUser})
  }

  handleUserDeleteSelection = (tgtUser) => {
    // Change screen mode to User DELETE mode, and store target-user
    this.setState({screenMode: 'delete',targetUser: tgtUser})
  }
  
  handleCreateUser =(tgtUser) => {
    // TODO: AJAX call to Create a new user data
    console.log('handleCreateUser:',tgtUser)

    APIusers.createUpdateUser(tgtUser)
      .then(r => {  
        this.loadUsers()
      })
      .catch(err => console.log(err))
    
    // Restore main view
    this.setState({screenMode: 'list',targetUser: ''})  
  }

  handleSaveUser = (tgtUser) => {
    // TODO: AJAX call to save user data
    console.log('handleSaveUser:',tgtUser)
    APIusers.updateUser(tgtUser._id,tgtUser)
      .then(r => {   
        this.loadUsers()
      })
      .catch(err => console.log(err))
    
    // Restore main view
    this.setState({screenMode: 'list',targetUser: ''})  
  }
  
  handleDeleteUser = (tgtUser) => {
    // TODO: AJAX call to delete
    console.log('handleDeleteUser:',tgtUser)
    
    APIusers.deleteUser(tgtUser._id)
      .then(r => {  
        this.loadUsers()  
      })
      .catch(err => console.log(err))

    // Restore main view
    this.setState({screenMode: 'list',targetUser: ''})  
  }

  handleCancel = (tgtUser) => {
    // Just reset selected user and change screen mode to list
    this.setState({screenMode: 'list',targetUser: ''})  
  }

 

  renderView = () => {

    const { classes } = this.props
    
    if (this.state.screenMode === 'add') {
      return (
       <>
          <h1 className={classes.pageHead}>
            Create new user
          </h1>
              <UserForm mode={this.state.screenMode}
                       user=''
                       rightbuttonColor='primary'
                       rightButtonLabel='Create'
                       leftbuttonColor='default'
                       leftButtonLabel='Cancel'
                       isUserNameDisabled={false}
                       handleRightButtonSelection={this.handleCreateUser} 
                       handleLeftButtonSelection={this.handleCancel}
          />  
       </> 
      )
    } else if (this.state.screenMode === 'edit') {
      return (
        <>
          <h1 className={classes.pageHead}>
               Update user information
          </h1>
          <UserForm mode={this.state.screenMode}
                    user={this.state.targetUser} 
                    rightbuttonColor='primary'
                    rightButtonLabel='Save'
                    leftbuttonColor='default'
                    leftButtonLabel='Cancel'
                    isUserNameDisabled={true}
                    handleRightButtonSelection={this.handleSaveUser} 
                    handleLeftButtonSelection={this.handleCancel}
           />
        </>
      )
    } else if (this.state.screenMode === 'delete') {
      return (
        <>
           <div>
              <h1 className={classes.pageHead}>
                Do you want to delete this user?
              </h1>
              <UserCard user={this.state.targetUser} 
                        rightbuttonColor='secondary'
                        rightButtonLabel='Delete'
                        leftbuttonColor='default'
                        leftButtonLabel='Cancel'
                        isDisabled={false}
                        handleRightButtonSelection={this.handleDeleteUser} 
                        handleLeftButtonSelection={this.handleCancel}/>     
          </div>
        </>
      )
    } else {
      return (
        <>
          <Grid container spacing={0}>    
            <Grid item> 
              <Avatar className={classes.avatar}>
                <SettingsIcon /> 
              </Avatar>
            </Grid>
            <Grid item> 
              <h1 className={classes.pageHead}>System Administration</h1>
            </Grid>
            <Grid item>
              <Fab color="secondary" aria-label="Add" className={classes.fab}>
                 <AddIcon onClick={() => this.handleUserAddSelection()}/>
              </Fab>
            </Grid>
          </Grid>

          <Grid alignContent='center' 
                style={{margin: 'auto', minHeight: '94vh', marginLeft: '5%'}} 
                container spacing={32}>
          {
            this.state.users.map((user,index) => (
              <UserCard key={index}
                        user={user} 
                        rightbuttonColor='primary'
                        rightButtonLabel='Update'
                        leftbuttonColor='secondary'
                        leftButtonLabel='Remove'
                        isDisabled={user.username === 'admin' ? true : false}
                        handleRightButtonSelection={this.handleUserUpdateSelection} 
                        handleLeftButtonSelection={this.handleUserDeleteSelection}/>
            ))              
          }
          </Grid>
        </>
      )
    }
  }

  render() {

    return (
      <>
       {this.renderView()}    
      </>
    )
  }
}

Admin.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Admin)
