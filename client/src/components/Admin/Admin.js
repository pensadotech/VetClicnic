import React, { Component } from "react"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import UserCard from './components/UserCard'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
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
  }
};

class Admin extends Component {
   
  state ={
    users : []
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

  render() {

    const { classes } = this.props

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
           <UserCard user={user}/>
         ))              
       }
      </Grid>
      </>
    )
  }
}

Admin.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Admin)
