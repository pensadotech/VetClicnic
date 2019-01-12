import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import AccountCircle from '@material-ui/icons/AccountCircle'
import PetsIcon from '@material-ui/icons/Pets'
import MailIcon from '@material-ui/icons/MailOutline'
import PhoneIcon from '@material-ui/icons/Phone'
import PersonIcon from '@material-ui/icons/PermIdentity'
// API
import APIdoctor from '../../../../utils/APIdoctor'

// Local style
import '../../Doctor.css'

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


class DoctorForm extends Component {
  
  state = {
    name: '',
    phone: '',
    mobilePhone: '',
    email: '',
    userError: ''
  }

  componentDidMount = () => {
     
    if(this.props.doctor !== '') {
      this.setState({
        mode: this.props.mode,
        doctor: this.props.doctor,
         _id: this.props.doctor._id, 
         name: this.props.doctor.name,
         phone: this.props.user.phone,
         mobilePhone: this.props.doctor.mobilePhone,
         email: this.props.user.email
        })  
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value })  
  }

  handleSave = () => {
     
    if (this.state.mode === 'edit') {
       // EDIT MODE: Validate
       if (this.state.name === '' || this.state.phone === '' || this.state.email === ''   )  {    
          this.setState({userError: 'Please provide name, number, and email'}) 
       } else {
            
           let doesItNeedEncryption = false

           
           // translate
           let newDoctorData = {
              _id: this.state._id, 
              name: this.state.name,
              phone: this.state.phone,
              mobilePhone: this.state.mobilePhone,
              email: this.state.email,
              userCreated: Date.now(),
            }
           
           // keep original password if not encryption needed


           // send information back 
           this.props.handleRightButtonSelection(newDoctorData)
       }
    } else {
        
       // ADD MODE: Validate
       if (this.state.name === '' || this.state.phone === '' || 
           this.state.mobilePhone === '' || this.state.email === ''  )  {    
        this.setState({userError: 'Please provide username, fullname, email, and password'}) 
       } else {
          
          let newDoctorData = {
             _id: '', 
             name: this.state.name,
             phone: this.state.phone,
             mobilePhone: this.state.mobilePhone,
             email: this.state.email,
             userCreated: Date.now(),
             needsEcnryption: false
          } 
                     
          // Check if user already exist 
          APIdoctor.findOne(this.state.name)
            .then(res => {  

              if(res.data !== null) {
                this.setState({userError: `The Name "${res.data.name}" already exist, please provide a new one`})  
              } else {
                // send information back 
                this.props.handleRightButtonSelection(newDoctorData)
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
          <p className='DoctorError'>{this.state.DoctorError}</p>
          <form className={classes.container} noValidate autoComplete="off">
              <div className='formItem'>
                 <TextField
                    required
                    id="name"
                    label="Name :"
                    className={classes.textField}
                    name='name'
                    type="string"
                    autoComplete="current-username"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    margin="normal"
                    disabled={this.props.isDoctorNameDisabled}
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
                    id="user-mobilePhone"
                    label="Phone :"
                    className={classes.textField}
                    name='mobilePhone'
                    type="string"
                    autoComplete="current-phone"
                    value={this.state.mobilePhone}
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
          </form>
         
        </CardContent>
        <CardActions>
            <Button size="small" variant="contained" color={this.props.rightbuttonColor} 
                    onClick={() => this.handleSave()} >{this.props.rightButtonLabel}</Button>
            <Button size="small" variant="contained" color={this.props.leftbuttonColor}  
                    onClick={() => this.props.handleLeftButtonSelection(this.props.doctor)}>{this.props.leftButtonLabel}</Button>
        </CardActions>    
      </Card>

      </>
    )
  }
}

DoctorForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(DoctorForm)