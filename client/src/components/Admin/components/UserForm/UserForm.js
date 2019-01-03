import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import AccountCircle from '@material-ui/icons/AccountCircle'
// Local style
import './UserFrom.css'

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
})


class UserForm extends Component {
  
  state ={
    user : { 
       _id : '',
       username: '',
       fullname: '',
       password: '',
       phone: '',
       email: ''
    }
  }

  componentDidMount = () => {
    this.setState({user: this.props.user })  
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value })  
  }

  render() {

    const { classes } = this.props

    return ( 
      <>
       <div className='updateContainer'>
         <form className={classes.container} noValidate autoComplete="off">
            <InputLabel htmlFor="user-name">Username</InputLabel>
            <Input
              id="user-name"
              name='user.username'
              value={this.props.user.username}
              onChange={this.handleInputChange}
              disabled
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
            <InputLabel htmlFor="user-fullname">Fullname</InputLabel>
            <Input
              id="user-fullname"
              name='user.fullname'
              value={this.props.user.fullname}
              onChange={this.handleInputChange}
            />
            <Button size="small" variant="contained" color={this.props.rightbuttonColor} 
                    onClick={() => this.props.handleRightButtonSelection(this.state.user)} >{this.props.rightButtonLabel}</Button>
            <Button size="small" variant="contained" color={this.props.leftbuttonColor}  
                    onClick={() => this.props.handleLeftButtonSelection(this.props.user)}>{this.props.leftButtonLabel}</Button>
        </form>
        </div>
      </>
    )
  }
}

UserForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(UserForm)