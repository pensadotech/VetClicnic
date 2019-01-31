import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import InputAdornment from '@material-ui/core/InputAdornment'
import AccountCircle from '@material-ui/icons/AccountCircle'
import PetsIcon from '@material-ui/icons/Pets'

// local style
import './LoginView.css'

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  mainContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center' 
  },
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
  },
  card: {
    minWidth: 200,
    maxHeight: 600,
    opacity: '0.8',
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50px',
    [theme.breakpoints.down('sm')]: {
      margin: '30px 40px 0px 40px',
    },
    [theme.breakpoints.up('md')]: {
      margin: '120px 40px 0px 40px',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '120px 40px 0px 40px',
    }  
  },
  loginTitle:  {
    color: 'rgb(11, 71, 201)',
    margin: '0px 0px 10px 30px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '40px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '50px',
    }
  },
  loginSubtitle : {
    color: 'gray',
    margin: '0px 0px 30px 30px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '15px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '25px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '30px',
    }
  },
  logingImage: {
    width: '220px',
    margin: '0px 35px 20px 25px',
    border: '10px solid rgb(11, 71, 201)',
    borderRadius: '30px',
    boxShadow: '2px 2px 3px 2px gray',
    transform: 'rotate( 3deg)'
  },
  userError : {
    color: 'red',
  }
})

class LoginView extends Component {

  render() {

    const { classes } = this.props;

    return (
      <>
      <Grid  className={classes.mainContainer} spacing={0}>
      <Grid item>
      <Card className={classes.card}>       
        <CardContent> 
          
         <Typography className={classes.loginTitle}>
              SORIN
          </Typography>
          <Typography className={classes.loginSubtitle}>
              Surgical Operation Reference and Interface Network
          </Typography>

          <Grid container spacing={0}>       
              <Grid item>
                <img className={classes.logingImage}
                     src="./images/sorin3.JPG" 
                     alt="Veterinary" />
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
                    <CardActions>
                    <Button variant="contained" 
                           color="primary" 
                           size="large"
                           className={classes.margin}                         
                           onClick={this.props.handleLogingAction}>
                      Login
                    </Button>
                    </CardActions> 
                  </form>
                  <p className={classes.userError}>{this.props.userError}</p>
              </Grid>       
            </Grid>

          </CardContent>
      </Card> 
      </Grid>
      </Grid>

      </>
    )
  }
}

LoginView.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(LoginView)
