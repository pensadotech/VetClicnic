import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import PetsIcon from '@material-ui/icons/Pets'

const styles = theme => ({
  card: {
    minWidth: 290,
    maxWidth: 850,
    maxHeight: 600, 
    borderRadius: '30px',
    boxShadow: '5px 5px 5px 5px rgb(82, 82, 100)',
    [theme.breakpoints.down('sm')]: {
      margin: '15px 10px 0px 20px',
     },
     [theme.breakpoints.up('md')]: {
      margin: '30px 10px 0px 20px',
     },
     [theme.breakpoints.up('lg')]: {
        margin: '50px 10px 0px 20px',
     }
  },
  chip: {
    margin: theme.spacing.unit,
  },
  btnActionLeft : {
    margin: '0px 0px 10px 20px',
  },
  btnAction : {
    margin: '0px 0px 10px 10px',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
    margin: '0px 0px 2px 10px',
  },
  info: {
    fontSize: 14,
    margin: '0px 0px 0px 20px',
  }
})

class PatientCard extends Component { 
   
  render() {
    
    const { classes } = this.props
    
    return (
      <Card className={classes.card}>
       <CardContent>
          <Chip
            avatar={<Avatar><PetsIcon /></Avatar>}
            label='Patient' 
            className={classes.chip}
            color= "primary"
          />
         
         <Grid 
           container spacing={32}
           alignContent='center'
           style={{ margin: 'auto', marginLeft: '5%' }}>

         <Grid item >
            <Typography 
               className={classes.title}>
                {this.props.patient.patientname}
            </Typography>
            <Typography 
                className={classes.info} 
                color="textPrimary">    
            <b>Owner:</b> {this.props.patient.ownername} 
            </Typography>
  
            <Typography 
                className={classes.info} 
                color="textPrimary">    
              <b>Phone:</b> {this.props.patient.phone} 
            </Typography>
            <Typography 
                className={classes.info} 
                color="textPrimary">    
              <b>Email:</b> {this.props.patient.email} 
            </Typography>
         </Grid>

         <Grid item >
            <Typography 
               className={classes.info} 
               color="textPrimary">
              <b>Species:</b> {this.props.patient.species}
            </Typography>
            <Typography 
                className={classes.info} 
                color="textPrimary">
              <b>Breed:</b> {this.props.patient.breed}
            </Typography>
            <Typography 
               className={classes.info} 
               color="textPrimary">
              <b>Age (years):</b> {this.props.patient.age}
            </Typography>
            <Typography 
               className={classes.info} 
               color="textPrimary">
              <b>Weight (pounds):</b> {this.props.patient.weight}
            </Typography>
            <Typography  
                className={classes.info} 
                color="textPrimary">
              <b>Color:</b> {this.props.patient.color}
            </Typography>
            <Typography  
                className={classes.info} 
                color="textPrimary">
              <b>Chart:</b> {this.props.patient.chartNumber} 
            </Typography> 

          </Grid>
          </Grid>

        </CardContent>
        <CardActions> 
          <Button 
             size="small" 
             variant="contained" 
             color={this.props.rightbuttonColor} 
             className={classes.btnActionLeft} 
             onClick={() => this.props.handleRightButtonSelection(this.props.med)}>
             {this.props.rightButtonLabel}
            </Button>

        </CardActions> 
      </Card>
    )  //return
  }   //render
}  // class PatientCard

PatientCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PatientCard)
