import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import EventIcon from '@material-ui/icons/Event'

import Moment from 'moment'

const styles = theme => ({
  card: {
    minWidth: 275,
    // maxHeight: 300,
    margin: '10px 20px 0px 20px'
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
  infoLabel: {
    fontSize: 14,
    margin: '5px 0px 0px 15px',
  },
  info: {
    fontSize: 18,
    margin: '5px 0px 0px 20px',
    // fontWeight: 'bold'
  },
})

class AppointCard extends Component {
  
  render () {
    const { classes } = this.props;
    
    return (
      <Card className={classes.card}>
        <CardContent>
          <Chip
            avatar={<Avatar><EventIcon /></Avatar>}
            label='Appointment' 
            className={classes.chip}
            color= "primary"
          />

          <div>
          
          <Grid 
              container spacing={32}
              alignContent='center'
              style={{ margin: 'auto', marginLeft: '5%' }}>
            
            <Grid item>
              <Typography className={classes.info} color="textPrimary">
                 Date: <b>{Moment(this.props.appt.date).format('YYYY-MM-DD hh:mm a') } </b>
              </Typography>
              <Typography className={classes.title}>
                {this.props.appt.title}
              </Typography>         
              
            </Grid>
           
            <Grid item>
             <Typography className={classes.info} color="textPrimary" >
               Task: <b>{this.props.appt.description}</b>
             </Typography>
             <Typography className={classes.info} color="textPrimary" >
                Patient: 
                <b>{this.props.appt.patient ? this.props.appt.patient.patientname : ''}</b>
             </Typography>  
             <Typography className={classes.info} color="textPrimary">
               Doctor: 
               <b>{this.props.appt.doctor ? this.props.appt.doctor.name : ''} </b>
             </Typography>
            </Grid>
          
           </Grid>
          
          </div>

        </CardContent>
        <CardActions>
          <Button 
            size='small' 
            variant='contained' 
            color={this.props.leftbuttonColor}
            className={classes.btnActionLeft} 
            onClick={() => this.props.handleLeftButtonSelection(this.props.appt)}>{this.props.leftButtonLabel}</Button>
          <Button 
            size='small' 
            variant='contained' 
            color={this.props.rightbuttonColor}
            className={classes.btnAction}
            onClick={() => this.props.handleRightButtonSelection(this.props.appt)} >{this.props.rightButtonLabel}</Button>
        </CardActions>
      </Card>
    );
  }
}

AppointCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AppointCard);
