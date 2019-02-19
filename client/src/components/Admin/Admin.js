import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import SettingsIcon from '@material-ui/icons/Settings'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add'
// Components
import UserCard from './components/UserCard'
import UserForm from './components/UserForm'
// API
import APIusers from '../../utils/APIuser'
import APIemails from '../../utils/APIemails'

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: `0 ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: ' 10px 0px 7px 40px',
  },
  fab: {
    margin: theme.spacing.unit,
    boxShadow: '5px 5px 5px 5px rgb(82, 82, 100)',
  },
  pageHeadContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center' ,
    color: 'white',
    margin: '7px 0px 7px 20px',
    // backgroundColor: 'rgb(4, 138, 4)',
    borderRadius: '10px',
    boxShadow: '5px 5px 5px 5px rgb(82, 82, 100)',
  },
  pageHead: {
    color: 'white',
    margin: '7px 50px 7px 20px',
  },
  pageHeadDelete: {
    color: 'red',
    fontWeight: 'bold',
    margin: '7px 0px 0px 20px',
    backgroundColor: 'white',
    maxWidth: 220,
    borderRadius: '10px',
    boxShadow: '5px 5px 5px 5px rgb(82, 82, 100)',
    padding: '0px 0px 0px 10px' 
  },
  pageHeadUpdate: {
    color: 'blue',
    fontWeight: 'bold',
    margin: '7px 0px 0px 20px',
    backgroundColor: 'white',
    maxWidth: 300,
    borderRadius: '10px',
    boxShadow: '5px 5px 5px 5px rgb(82, 82, 100)',
    padding: '0px 0px 0px 10px' 
  },
  formContainer: {
    maxWidth: 400,
    maxHeight: 600,
  },
  
})

class Admin extends Component {

  state = {
    users: [],
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
    this.setState({ screenMode: 'add' })
  }

  handleUserUpdateSelection = (tgtUser) => {
    // change screen mode to user EDIT mode, and store target-user
    this.setState({ screenMode: 'edit', targetUser: tgtUser })
  }

  handleUserDeleteSelection = (tgtUser) => {
    // Change screen mode to User DELETE mode, and store target-user
    this.setState({ screenMode: 'delete', targetUser: tgtUser })
  }
  
  handleCreateUser =(tgtUser) => {
    // create new user
    APIusers.createUpdateUser(tgtUser)
      .then(r => {  
        // reload the data
        this.loadUsers()     
        // Restore main view
        this.setState({screenMode: 'list',targetUser: ''}) 

        // Prepare email message
        let email = {
          to : tgtUser.email,
          subject: 'Blue Animal Clinic / New user account',
          text: `
             Blue Animal Clinic - SORIN: new user was created

             Welcome! 

                 Username:  ${tgtUser.username}
                 fullname:  ${tgtUser.fullname} 
                 Phone:     ${tgtUser.phone} 
          `
        }
        // send email indicating user was added to the system
        APIemails.sendEmail(email)
          .then(r => {
             console.log('Email sent: ' + r.response)
          })
          .catch(err => console.error(err))
      })
      .catch(err => console.error(err))
  }

  handleSaveUser = (tgtUser) => {
    // Save updated user data    
    APIusers.updateUser(tgtUser._id,tgtUser)
      .then(r => {  
        // reload the data
       this.loadUsers()
        // Restore main view
       this.setState({screenMode: 'list',targetUser: ''})  
       
       // Prepare email message
       let email = {
         to : tgtUser.email,
         subject: 'Blue Animal Clinic / User Account modified',
         text: `
           Blue Animal Clinic - SORIN: User Account modified
           
               Username:  ${tgtUser.username}
               fullname:  ${tgtUser.fullname} 
               Phone:     ${tgtUser.phone} 
        `
       }
       // send email indicating user was added to the system
       APIemails.sendEmail(email)
         .then(r => {
            console.log('Email sent: ' + r.response)
         })
         .catch(err => console.error(err))
       })
       .catch(err => console.log(err))
  }

  handleDeleteUser = (tgtUser) => {
    // delete user    
    APIusers.deleteUser(tgtUser._id)
      .then(r => {  
        // reload the data
        this.loadUsers() 
        // Restore main view
        this.setState({screenMode: 'list',targetUser: ''})  
         
        // Prepare email message
        let email = {
          to : tgtUser.email,
          subject: 'Blue Animal Clinic / User account deleted',
          text: `
             Blue Animal Clinic - SORIN: user was delete

                 Username:  ${tgtUser.username}
                 fullname:  ${tgtUser.fullname} 
                 Phone:     ${tgtUser.phone} 
          `
        }
        // send email indicating user was added to the system
        APIemails.sendEmail(email)
          .then(r => {
             console.log('Email sent: ' + r.response)
          })
          .catch(err => console.error(err))
      })
      .catch(err => console.log(err)) 
  }

  handleCancel = (tgtUser) => {
    // reload the data
    this.loadUsers()  
    // Just reset selected user and change screen mode to list
    this.setState({ screenMode: 'list', targetUser: '' })
  }

  renderView = () => {

    const { classes } = this.props

    if (this.state.screenMode === 'add') {
      return (
        <>
          <div className={classes.pageHeadUpdate}>
            <h2 >
              Add new system user
            </h2>
          </div>
          <UserForm 
            mode={this.state.screenMode}
            user=''
            leftbuttonColor='primary'
            leftButtonLabel='Create'
            handleLeftButtonSelection={this.handleCreateUser}
            rightbuttonColor='default'
            rightButtonLabel='Cancel'   
            handleRightButtonSelection={this.handleCancel}
            isUserNameDisabled={false}
          />
        </>
      )
    } else if (this.state.screenMode === 'edit') {
      return (
        <>
          <div className={classes.pageHeadUpdate}>
              <h2>
                Update user information
              </h2>
          </div>
          <UserForm 
            mode={this.state.screenMode}
            user={this.state.targetUser}
            leftbuttonColor='primary'
            leftButtonLabel='Save'
            handleLeftButtonSelection={this.handleSaveUser}
            rightbuttonColor='default'
            rightButtonLabel='Cancel'
            handleRightButtonSelection={this.handleCancel}
            isUserNameDisabled={true}
          />         
        </>
      )
    } else if (this.state.screenMode === 'delete') {
      return (
        <>
          <div>
            <div className={classes.pageHeadDelete}>
              <h2>
                Delete this user?
              </h2>
            </div>
            <UserCard user={this.state.targetUser}
              leftbuttonColor='secondary'
              leftButtonLabel='Delete'
              handleLeftButtonSelection={this.handleDeleteUser} 
              rightbuttonColor='default'
              rightButtonLabel='Cancel'
              isDisabled={false}
              handleRightButtonSelection={this.handleCancel} 
            />
          </div>
        </>
      )
    } else {

      return (
        <>
          <Grid container spacing={0}>
          <div className={classes.pageHeadContainer}>
            <Grid item>
              <Avatar className={classes.avatar}>
                <SettingsIcon />
              </Avatar>
            </Grid>
            <Grid item>
              <h2 className={classes.pageHead}>
                System Administration
              </h2>
            </Grid>
            </div>  
            <Grid item>
              <Fab 
                 aria-label="Add" 
                 color="secondary" 
                 onClick={() => this.handleUserAddSelection()} 
                 className={classes.fab}>
                <AddIcon />
              </Fab>
            </Grid>
          </Grid>
          
          <div className={classes.root}> 
          <Grid container spacing={8}
            alignContent='center'
            style={{ margin: 'auto'}}>
            {
              this.state.users.map((user, index) => (
                <UserCard 
                  key={index}
                  user={user} 
                  leftbuttonColor='primary'
                  leftButtonLabel='Update' 
                  handleLeftButtonSelection={this.handleUserUpdateSelection}   
                  rightbuttonColor='secondary'
                  rightButtonLabel='Delete'
                  isDisabled={user.username === 'admin' ? true : false}
                  handleRightButtonSelection={this.handleUserDeleteSelection}
                />
              ))
            }
          </Grid>
          </div>

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
