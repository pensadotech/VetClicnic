import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import InputAdornment from '@material-ui/core/InputAdornment'
import AccountCircle from '@material-ui/icons/AccountCircle'
import PetsIcon from '@material-ui/icons/Pets'

// local style
import './LoginView.css'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  }
})

class LoginView extends Component {

  render() {

    const { classes } = this.props;

    return (
      <>
      <div className='loginContainer'>
         
        <h1 className='loginTitle'>SORIN</h1>
        <h6 className='loginSubtitle'>Surgical Operation Reference Interface Network</h6>

        <Grid container spacing={0}>       
            <Grid item>
              <img className="logingImage imgRnd10 imageShadow imageRotate" src="./images/puppy.jpg" alt="Vetenary" />
            </Grid>
            <Grid item>
              <form className={classes.container} noValidate autoComplete="off">
                  <TextField
                    required
                    id="standard-name"
                    label="User Name"
                    className={classes.textField}
                    name='userName'
                    value={this.userName}
                    onChange={this.props.handleInputChange}
                    margin="normal"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                  />
    
                  <TextField
                    required
                    id="standard-password-input"
                    label="Password"
                    className={classes.textField}
                    name='userPwd'
                    type="password"
                    autoComplete="current-password"
                    value={this.userPwd}
                    onChange={this.props.handleInputChange}
                    margin="normal"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PetsIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Button variant="contained" color="primary" className={classes.button} onClick={this.props.handleLogingAction}>
                     Login
                   </Button>
                </form>
                <p className='userError'>{this.props.userError}</p>
            </Grid>       
          </Grid>

        </div>

      </>
    )
  }
}

LoginView.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(LoginView)
