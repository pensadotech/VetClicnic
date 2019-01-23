import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import AccountCircle from '@material-ui/icons/AccountCircle'
import PetsIcon from '@material-ui/icons/Pets'
import MailIcon from '@material-ui/icons/MailOutline'
import PhoneIcon from '@material-ui/icons/Phone'
import PersonIcon from '@material-ui/icons/PermIdentity'
// API
import APIusers from '../../../../utils/APIuser'

// Local style
import './UserFrom.css'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 250,
  },
  margin: {
    margin: theme.spacing.unit,
  },
  card: {
    minWidth: 175,
    maxHeight: 620,
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
})


class UserForm extends Component {
  
  state ={
    mode: '',
    user: '',
    _id : '',
    username: '',
    fullname: '',
    password: '',
    phone: '',
    email: '',
    isAdmin: false,
    userError: ''
  }

  componentDidMount = () => {
     
    if(this.props.user !== '') {
      this.setState({
        mode: this.props.mode,
        user: this.props.user,
         _id: this.props.user._id, 
         username: this.props.user.username,
         fullname: this.props.user.fullname,
         password: '',
         phone: this.props.user.phone,
         email: this.props.user.email,
         isAdmin: this.props.user.isAdmin
        })  
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value })  
  }

  handleCheckboxChange = (name) => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleSave = () => {
      
    if (this.state.mode === 'edit') {
       // EDIT MODE: Validate
       if (this.state.username === '' || this.state.fullname === '' || this.state.email === ''   )  {    
          this.setState({userError: 'Please provide username, fullname, and email'}) 
       } else {
            
           let doesItNeedEncryption = false

           // new password?
           if (this.state.password !== '') {
              // mark that password encryption is needed before storing user
              doesItNeedEncryption = true
           }
           
           // translate
           let newUserData = {
              _id: this.state._id, 
              username: this.state.username,
              fullname: this.state.fullname,
              password: this.state.password,
              phone: this.state.phone,
              email: this.state.email,
              isAdmin: this.state.isAdmin,
              needsEcnryption: doesItNeedEncryption,
              userCreated: new Date()            
           }
           
           // keep original password if not encryption needed
           if(!doesItNeedEncryption) {
             newUserData.password = this.props.user.password
           }

           // send information back 
           this.props.handleLeftButtonSelection(newUserData)
       }
    } else {
        
       // ADD MODE: Validate
       if (this.state.username === '' || this.state.fullname === '' || 
           this.state.email === '' || this.state.password === ''  )  {    
        this.setState({userError: 'Please provide username, fullname, email, and password'}) 
       } else {
          
          // translate
          let newUserData = {
             _id: '', 
             username: this.state.username,
             fullname: this.state.fullname,
             password: this.state.password,
             phone: this.state.phone,
             email: this.state.email,
             isAdmin: this.state.isAdmin,
             needsEcnryption: true,
             userCreated: new Date() 
          } 
             
          // Check if user already exist 
          APIusers.findOne(this.state.username)
            .then(res => {  

              if(res.data !== null) {
                this.setState({userError: `The username "${res.data.username}" already exist, please provide a new one`})  
              } else {
                // send information back 
                this.props.handleLeftButtonSelection(newUserData)
              }           
           })
           .catch(err => console.log(err))          
       }
    } 
  }

  render() {

    const { classes } = this.props

    return ( 
      <>
      <Card className={classes.card}>
         <CardContent>
          <p className='userError'>{this.state.userError}</p>
          <form className={classes.container} noValidate autoComplete="off">
              <div className='formItem'>
                 <TextField
                    required
                    id="user-name"
                    label="Username :"
                    className={classes.textField}
                    name='username'
                    type="string"
                    autoComplete="current-username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    margin="normal"
                    disabled={this.props.isUserNameDisabled}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                           <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                  />   
              </div>
              <div className='formItem'> 
                  <TextField
                    required
                    id="user-fullname"
                    label="Fullname :"
                    className={classes.textField}
                    name='fullname'
                    type="string"
                    autoComplete="current-fullname"
                    value={this.state.fullname}
                    onChange={this.handleInputChange}
                    margin="normal"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                           <PersonIcon />
                        </InputAdornment>
                      ),
                    }}
                  />                 
              </div>
              <div className='formItem'> 
                  <TextField
                    id="user-phone"
                    label="Phone :"
                    className={classes.textField}
                    name='phone'
                    type="string"
                    autoComplete="current-phone"
                    value={this.state.phone}
                    onChange={this.handleInputChange}
                    margin="normal"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                           <PhoneIcon />
                        </InputAdornment>
                      ),
                    }}
                  />                    
              </div>
              <div className='formItem'> 
                  <TextField
                    required
                    id="user-email"
                    label="Email: "
                    className={classes.textField}
                    name='email'
                    type="email"
                    autoComplete="current-email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    margin="normal"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MailIcon />
                        </InputAdornment>
                      ),
                    }}
                  />                  
              </div>
              <div>
                 <TextField
                    required
                    id="standard-password-input"
                    label="Password"
                    className={classes.textField}
                    name='password'
                    type="password"
                    autoComplete="current-password"
                    value={this.password}
                    onChange={this.handleInputChange}
                    margin="normal"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PetsIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
              </div> 
              <div>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.isAdmin}
                        onChange={this.handleCheckboxChange('isAdmin')}
                        color="primary"
                      />
                    }
                    label="Admin Role"
                  />                   
              </div>               
          </form>
         
        </CardContent>
        <CardActions>          
            <Button size="small" variant="contained" color={this.props.leftbuttonColor} 
               onClick={() => this.handleSave()}>{this.props.leftButtonLabel}
            </Button>
            <Button size="small" variant="contained" color={this.props.rightbuttonColor}  
               onClick={() => this.props.handleRightButtonSelection(this.props.user)}>
               {this.props.rightButtonLabel}
            </Button>
        </CardActions>    
      </Card>

      </>

    ) // return()

  } // render()

} // class UserForm

UserForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(UserForm)