import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import GroupIcon from '@material-ui/icons/Group'
// Components
import AboutUsCard from './components/AboutUsCard'

// API
//import APIaboutus from '../../utils/APIaboutus'

// Local style
// import './AboutUs.css'

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: `0 ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: ' 10px 0px 7px 40px',
  },
  pageHeadContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    margin: '7px 0px 7px 20px',
    // backgroundColor: 'rgb(11, 71, 201)',
    borderRadius: '10px',
    boxShadow: '5px 5px 5px 5px rgb(82, 82, 100)',
  },
  pageHead: {
    color: 'white',
    margin: '7px 50px 7px 20px',
  },
  aboutSubtitle: {
    maxWidth: 490,
    color: 'blueviolet',
    backgroundColor: 'white',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5px 10px 0px 0px',
    // marginLeft: '1.5rem',
    borderRadius: '30px',
    boxShadow: '5px 5px 5px 5px rgb(82, 82, 100)',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.5rem',
    },
  },
})

let developerArr = [
    { 
    developername: 'Aja Magdaleno',
    image: '/images/AjaMagdaleno.JPG',
    skills: 'Full stack web developer',
    hobbies: 'Hiking, Reading, Learning',
    email: "aja.magdaleno@gmail.com" ,
    github: 'https://github.com/AjaMag'
    },
    { 
    developername: 'Armando Pensado',
    image: '/images/ArmandoPensado.JPG',
    skills: 'Full stack web developer',
    hobbies: 'Hiking, Guitar, Reading, Electronics',
    email: 'armando@pensadotech.com',
    github: 'https://github.com/pensadotech'
    },
    { 
    developername: 'James Rodgick',
    image: './images/JamesRodgick.JPG',
    hobbies: 'Movies, Video Games, Computers, Guitar, Card Games',
    skills: 'Full stack web developer',
    email: 'rodgick@yahoo.com',
    github: 'https://github.com/Voriah'
    },
    {
    developername: 'Tommy Dang',
    image: './images/TommyDang.JPG',
    skills: 'Full stack web developer',
    hobbies: 'Jogging, Eating & Sleeping',
    email: 'ledangt310@live.com',
    github: 'https://github.com/TL-Dang',
    },
    {
    developername: 'Eddie Kader',
    image: './images/EddieKader.JPG',
    skills: 'Full stack web developer',
    hobbies: 'Eating, Gym, Hanging out, Video Games',
    email: 'Eddie.kader@gmail.com',
    github: 'https://github.com/eddiek123',
    },
    {
    developername: 'Sam Awi',
    image: './images/SamAwi.JPG',
    skills: 'Full stack web developer',
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
          <Grid container spacing={0}>
            <div className={classes.pageHeadContainer}>
            <Grid item>
              <Avatar className={classes.avatar}>
                <GroupIcon /> 
              </Avatar>
            </Grid>
            <Grid item>
             <h2 className={classes.pageHead}>
               Developers 
             </h2>
            </Grid>          
            <Grid item>
              
            </Grid>   
            </div> 
          </Grid>
        
          <div className={classes.root}> 
            
            <Typography 
                className={classes.aboutSubtitle} >
                BLUe!Team Design and Development
            </Typography>  

            <Grid container spacing={8}
                 alignContent='center'
                 style={{ margin: 'auto',marginLeft: '3%' }}>                    
              {
                developerArr.map((e,index) => (
                  <Grid item key={index}>
                     <AboutUsCard {...e} />
                  </Grid>   
                ))
              }
            </Grid>

            
          </div>
        </>
      )
    }
  }

AboutUs.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AboutUs)