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
  name: {
    fontSize: 18,
    margin: '0px 0px 5px 10px',   
    fontWeight: 'bold'
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
            <Typography className={classes.title}>
                {this.props.patient.patientname}
            </Typography>
            <Typography className={classes.name} 
                        color="textPrimary">    
              {this.props.patient.ownername} 
            </Typography>
  
            <Typography component="p"
                className={classes.info}>    
              Phone: {this.props.patient.phone} 
            </Typography>
            <Typography component="p"
                className={classes.info}>    
              Email:   {this.props.patient.email} 
            </Typography>
         </Grid>

         <Grid item >
            <Typography component="p"
                className={classes.info}>
              Species: {this.props.patient.species}
            </Typography>
            <Typography component="p"
              className={classes.info}>
              Breed: {this.props.patient.breed}
            </Typography>
            <Typography component="p"
              className={classes.info}>
              Age: {this.props.patient.age}
            </Typography>
            <Typography component="p"
                className={classes.info}>
              Weight: {this.props.patient.weight}
            </Typography>
            <Typography component="p"
              className={classes.info}>
              Color: {this.props.patient.color}
            </Typography>
            <Typography component="p"
                    className={classes.info}>
              Chart : {this.props.patient.chartNumber} 
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
