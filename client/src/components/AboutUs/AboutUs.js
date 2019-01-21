import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
// Components
import AboutUsCard from './components/AboutUsCard'

// API
//import APIaboutus from '../../utils/APIaboutus'

// Local style
import './AboutUs.css'

const styles = theme => ({
    maincontainer: {
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
    aboutP : {
        color: 'darkgrey',
        margin: '0px 0px 20px 20px',
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
        <Grid maincontainer spacing={0}>
        <Grid item>
        <Card className={classes.card}>       
          <CardContent> 
           <Typography className={classes.aboutTitle}>
                Meet The Developers
            </Typography>
            <Typography className={classes.aboutSubtitle}>
            {"BLUe!Team Design and Development"}
            </Typography>
  
                <Grid container spacing={0}>       
                    <AboutUsCard>
                    </AboutUsCard>
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