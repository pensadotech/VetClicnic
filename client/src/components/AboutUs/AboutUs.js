import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import InputAdornment from '@material-ui/core/InputAdornment'
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';

// API
//import APIaboutus from '../../utils/APIaboutus'

// Local style
import './AboutUs.css'

const styles = theme => ({
    mainContainer: {
      display: 'flex',
      flexWrap: 'wrap',   
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },

    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
    card: {
      minWidth: 200,
      maxHeight: 620,
      [theme.breakpoints.down('sm')]: {
        margin: '30px 40px 0px 40px',
      },
      [theme.breakpoints.up('md')]: {
        margin: '90px 40px 0px 40px',
      },
      [theme.breakpoints.up('lg')]: {
        margin: '120px 40px 0px 40px',
      },  
      opacity: '0.8',
      display: 'flex', 
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '40px'
    },
    aboutTitle:  {
      [theme.breakpoints.down('sm')]: {
        fontSize: '30px',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '40px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '50px',
      },
      color: 'blue',
      margin: '0px 0px 10px 30px',
    },
    aboutSubtitle : {
      [theme.breakpoints.down('sm')]: {
        fontSize: '15px',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '25px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '30px',
      },
      color: 'blueviolet',
      margin: '0px 0px 30px 30px',
      font: 'cursive'
    },
    developerImage : {
      width: '200px',
      margin: '0px 20px 20px 25px'
    },

  })

class AboutUs extends Component {

    render() {
  
      const { classes } = this.props;
  
      return (
        <>
        <Grid mainContainer spacing={0}>
        <Grid item>
        <Card className={classes.card}>       
          <CardContent> 
           <Typography className={classes.aboutTitle}>
                Meet The Developers
            </Typography>
            <Typography
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <ImportantDevicesIcon />
                    </InputAdornment>
                ),
                }}
            />
            <Typography className={classes.aboutSubtitle}>
                {"BLUE!Team Design and Development"}
            </Typography>
  
            <Grid container spacing={0}>       
                <Grid item>
                  <img className="developerImage imgRnd10 imageShadow imageRotate" src="public/images/jellyfish.jpg" alt="Armando Pensado" />
                </Grid>
                <Grid item>
                  <img className="developerImage imgRnd10 imageShadow imageRotate" src="public/images/jellyfish.jpg" alt="Aja Magdaleno"/>
                <Grid item>
                  <img className="developerImage imgRnd10 imageShadow imageRotate" src="public/images/jellyfish.jpg" alt="James Rodgick" />
                </Grid>
                <Grid item>
                  <img className="developerImage imgRnd10 imageShadow imageRotate" src="public/images/jellyfish.jpg" alt="Tommy Dang" />
                </Grid>
                <Grid item>
                  <img className="developerImage imgRnd10 imageShadow imageRotate" src="public/images/jellyfish.jpg" alt="Eddie Kader" />
                </Grid>
                <Grid item>
                  <img className="developerImage imgRnd10 imageShadow imageRotate" src="public/images/jellyfish.jpg" alt="Sam Awi" />
                </Grid>
                <Grid item>
                  <img className="developerImage imgRnd10 imageShadow imageRotate" src="public/images/jellyfish.jpg" alt="Daniel Border" />
                </Grid>

               
                      <CardActions>
                      <Button variant="contained" color="primary" className={classes.button} onClick={this.props.handleLogingAction}>
                        Contact
                      </Button>
                      </CardActions> 
                    
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

AboutUs.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AboutUs)