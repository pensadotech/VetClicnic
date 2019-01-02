import React, { Component } from "react"
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
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
         
        <h1 className='loginTitle'>Animal Clinic System</h1>

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
                  />
    
                  <TextField
                    id="standard-password-input"
                    label="Password"
                    className={classes.textField}
                    name='userPwd'
                    type="password"
                    autoComplete="current-password"
                    value={this.userPwd}
                    onChange={this.props.handleInputChange}
                    margin="normal"
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
