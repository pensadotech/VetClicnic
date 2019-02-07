import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import PetsIcon from '@material-ui/icons/Pets'

const styles = theme => ({
  card: {
    minWidth: 290,
    maxWidth: 290,
    maxHeight: 300, 
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
   
  renderThirButton = () => {

    const { classes } = this.props

    if( this.props.viewThirdButton ) {
      return(
        <>
          <Button 
             size="small" 
             variant="contained" 
             color={this.props.viewButtonColor} 
             className={classes.btnAction} 
             onClick={() => this.props.handleViewButtonSelection(this.props.patient)}>
             {this.props.viewButtonLabel}
          </Button>
        </> 
      )
    } else {    
      return( 
        <> </>
      )
    }
  }

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
          <Typography component="p"
               className={classes.info}>
            Type: {this.props.patient.species} /  {this.props.patient.breed}
          </Typography>

        </CardContent>
        <CardActions> 
          <Button size="small" 
             variant="contained" 
             color={this.props.leftbuttonColor} 
             disabled={this.props.isDisabled}  
             className={classes.btnActionLeft} 
             onClick={() => this.props.handleLeftButtonSelection(this.props.patient)}>
             {this.props.leftButtonLabel}
          </Button>
          <Button 
             size="small" 
             variant="contained" 
             color={this.props.rightbuttonColor}
             disabled={this.props.isDisabled}
             className={classes.btnAction}     
             onClick={() => this.props.handleRightButtonSelection(this.props.patient)} >
            {this.props.rightButtonLabel}
          </Button>
         
         {this.renderThirButton()}

        </CardActions> 
      </Card>
    )  //return
  }   //render
}  // class PatientCard

PatientCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PatientCard)
