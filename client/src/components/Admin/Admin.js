import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import UserCard from './components/UserCard'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import SettingsIcon from '@material-ui/icons/Settings'
// API
import APIusers from '../../utils/APIuser'

const styles = {
  avatar: {
    margin: ' 10px 0px 0px 50px'
  },
  pageHead : {
    color:'white',
    marginLeft: '50px'
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
  }
}

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

  handleUserUpdateSelection = (tgtUser) => {
     console.log('handleUserUpdateSelection:',tgtUser)
     this.setState({screenMode: 'edit',targetUser: tgtUser})
  }

  handleUserDeleteSelection = (tgtUser) => {
    console.log('handleUserDeleteSelection:',tgtUser)
    this.setState({screenMode: 'delete',targetUser: tgtUser})
  }

  handleSaveUser = (tgtUser) => {
    console.log('handleSaveUser:',tgtUser)
    this.setState({screenMode: 'list',targetUser: ''})  
  }
  
  handleDeleteUser = (tgtUser) => {
    console.log('handleDeleteUser:',tgtUser)
    this.setState({screenMode: 'list',targetUser: ''})  
  }

  handleCancel = (tgtUser) => {
    console.log('handleCancel:',tgtUser)
    this.setState({screenMode: 'list',targetUser: ''})  
  }

  renderView = () => {

    const { classes } = this.props

    if (this.state.screenMode === 'edit') {
      return (
        <>
          <h1>Edit mode</h1>
        </>
      )
    } if (this.state.screenMode === 'delete') {
      return (
        <>
           <div>
              <h1 className={classes.pageHead}>
                Do you want to delete this user?
              </h1>
              <UserCard user={this.state.targetUser} 
                        rightbuttonColor='secondary'
                        rightButtonLabel='Delete'
                        leftbuttonColor='primary'
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
          <div>
            <Avatar className={classes.avatar}>
              <SettingsIcon /> 
            </Avatar>
            <h1 className={classes.pageHead}>System Administration</h1>
          </div>

          <Grid alignContent='center' 
                style={{margin: 'auto', minHeight: '94vh', marginLeft: '5%'}} 
                container spacing={32}>
          {
            this.state.users.map((user,index) => (
              <UserCard user={user} 
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
