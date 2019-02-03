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
import MailIcon from '@material-ui/icons/MailOutline'
import PhoneIcon from '@material-ui/icons/Phone'
// API
import APIdoctor from '../../../../utils/APIdoctor'

const styles = theme => ({
  card: {
    minWidth: 175,
    maxWidth: 850,
    maxHeight: 650,
    margin: '5px 20px 0px 20px', 
    borderRadius: '30px',
    boxShadow: '5px 5px 5px 5px rgb(82, 82, 100)',   
  },
  cardContent: {
    pading: '0px 0px 0px 0px'
  },
  formContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  girdItem : {
    border: 'solid 2px green',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    [theme.breakpoints.down('sm')]: {
      width: 240,
    },
    [theme.breakpoints.up('md')]: {
      width: 280,
    },
    [theme.breakpoints.up('lg')]: {
      width: 300,
    }  
  },
  title: {
    fontSize: 14,
  },
  btnActionLeft : {
    margin: '0px 0px 10px 20px',
  },
  btnAction : {
    margin: '0px 0px 10px 10px',
  },
  inputError : {
    color: 'red'
  }
})


class DoctorForm extends Component {

  state = {
    mode: '',
    doctor: '',
    name: '',
    phone: '',
    mobilePhone: '',
    email: '',
    doctorError: ''
  }

  componentDidMount = () => {

    if (this.props.doctor !== '') {
      this.setState({
        mode: this.props.mode,
        doctor: this.props.doctor,
        _id: this.props.doctor._id,
        name: this.props.doctor.name,
        phone: this.props.doctor.phone,
        mobilePhone: this.props.doctor.mobilePhone,
        email: this.props.doctor.email
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
      if (this.state.name === '' || this.state.phone === '' || this.state.email === '') {
        this.setState({ doctorError: 'Please provide name, number, and email' })
      } else {

        // translate
        let newDoctorData = {
          _id: this.state._id,
          name: this.state.name,
          phone: this.state.phone,
          mobilePhone: this.state.mobilePhone,
          email: this.state.email,
          doctorCreated: Date.now(),
        }

        // send information back 
        this.props.handleLeftButtonSelection(newDoctorData)
      }

    } else {

      // ADD MODE: Validate
      if (this.state.name === '' || this.state.phone === '' || this.state.email === '') {
        this.setState({ doctorError: 'Please provide name, number, and email' })
      } else {

        // Translation
        let newDoctorData = {
          name: this.state.name,
          phone: this.state.phone,
          mobilePhone: this.state.mobilePhone,
          email: this.state.email,
          doctorCreated: Date.now(),
        }

        //Check if doctor already exit
        APIdoctor.findOne(this.state.name)
          .then(res => {
            if (res.data !== null) {
              this.setState({ userError: `The doctor name "${res.data.name}" already exist, please provide a new one` })
            } else {

              // Send New Doctor Data
              this.props.handleLeftButtonSelection(newDoctorData)
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
          <CardContent className={classes.cardContent}>
            <p className='doctorError'>{this.state.inputError}</p>
            <form className={classes.formContainer} 
                  noValidate 
                  autoComplete="off">
                 
              <div >
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
                  disabled={this.props.isNameDisabled}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>

              <div>
                <TextField
                  id="user-phone"
                  label="Office Phone :"
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
              <div>
                <TextField
                  id="user-mobilePhone"
                  label="Mobile Phone :"
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
                  id="doctor-email"
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
            <Button size="small" variant="contained" color={this.props.leftbuttonColor}
              onClick={() => this.handleSave()}>
              {this.props.leftButtonLabel}
            </Button>
            <Button size="small" variant="contained" color={this.props.rightbuttonColor}
              onClick={() => this.props.handleRightButtonSelection(this.state.doctor)} >
              {this.props.rightButtonLabel}
            </Button>
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