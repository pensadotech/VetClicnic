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
    root: {
      display: 'flex',
      flexWrap: 'wrap',   
    },
    avatar: {
        backgroundColor: 'blueviolet',
      },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      backgroundColor: 'white',
      margin: '1rem',
      opacity: '0.88',
      
      [theme.breakpoints.down('sm')]: {
        margin: '1 rem',
      },
      [theme.breakpoints.up('md')]: {
        margin: '2rem',
      },
      [theme.breakpoints.up('lg')]: {
        margin: '3 rem',
      },  
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '40px'
    },
    aboutTitle:  {
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '2rem',
      },
      color: 'blue',
      margin: '0px 0px 10px 30px',
    },
    aboutSubtitle : {
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '1.5rem',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '1.5rem',
      },
      color: 'blueviolet',
      marginLeft: '1.5rem',
    },
  })

let developerArr = [
    { 
    developername: 'Aja Magdaleno',
    image: '/images/AjaMagdaleno.JPG',
    skills: 'CSS, Javascript, SQL, MongoDB, Express, React, Node',
    hobbies: 'Hiking, Reading, Learning',
    email: "aja.magdaleno@gmail.com" ,
    github: 'https://github.com/AjaMag'
    },
    { 
    developername: 'Armando Pensado',
    image: '/images/ArmandoPensado.JPG',
    skills: 'Software, electronics, walking dogs',
    hobbies: 'Hiking, Guitar, Reading',
    email: 'armando@pensadotech.com',
    github: 'https://github.com/pensadotech'
    },
    { 
    developername: 'James Rodgick',
    image: './images/JamesRodgick.JPG',
    hobbies: 'Movies, Video Games, Computers, Guitar, Card Games',
    skills: 'Making Internet Site Pages, Animal Science',
    email: 'rodgick@yahoo.com',
    github: 'https://github.com/Voriah'
    },
    {
    developername: 'Tommy Dang',
    image: './images/TommyDang.JPG',
    skills: 'Javascript, SQL',
    hobbies: 'Jogging, Eating & Sleeping',
    email: 'ledangt310@live.com',
    github: 'https://github.com/TL-Dang',
    },
    {
    developername: 'Eddie Kader',
    image: './images/EddieKader.JPG',
    skills: 'Making eggs, coding(somewhat), plotting, reading',
    hobbies: 'Eating, Gym, Hanging out, Video Games',
    email: 'Eddie.kader@gmail.com',
    github: 'https://github.com/eddiek123',
    },
    {
    developername: 'Sam Awi',
    image: './images/SamAwi.JPG',
    skills: 'Professional Chef, Entrepreneur, Restaurant Management',
    hobbies: 'Learning to code, drinking good beer, making money',
    email: 'ossamawi@gmail.com',
    github: 'https://github.com/newcoder2019'
    },
    {
    developername: 'Daniel Border',
    image: './images/DanielBorder.JPG',
    skills: 'Javascript, Node, HTML, Cooking',
    hobbies: 'Traveling, Sports, Eating and Music',
    email: 'danielpborder@gmail.com',
    github: 'https://github.com/SirHamsonSmith'
    }
]

class AboutUs extends Component {

    render() {
  
      const { classes } = this.props;
  
      return (
        <>
        <Grid container className={classes.root} spacing={16}>
         
        <Grid className={classes.container}>       
          <Grid >
            <Grid item>
            <Typography className={classes.aboutTitle}>
                Meet The Developers
            </Typography>
            </Grid> 
            <Grid item >
            <Typography className={classes.aboutSubtitle} >
                BLUe!Team Design and Development
            </Typography>  
            </Grid > 
                <Grid container
                style={{ margin: 'auto',marginLeft: '3%' }}>       
                    {developerArr.map((e,index) => (
                        <Grid item key={index}>
                            <AboutUsCard {...e} />
                        </Grid>   
                    ) 
                     )}
                </Grid>

            </Grid>
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