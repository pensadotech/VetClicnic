import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Moment from 'moment'

const styles = {
  card: {
    minWidth: 275,
    maxHeight: 200,
    margin: '10px 20px 0px 20px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  subtitle : {
    fontSize: 16,
    marginLeft: '10px'
  },
  firstTextInfo : {
    fontSize: 14,
    margin: '10px 0px 0px 0px'
  },
  textInfo : {
    fontSize: 12,
  },
  pos: {
    marginBottom: 12
  }
}

class AppointCard extends Component {
  
  render () {
    const { classes } = this.props;
    
    return (
      <Card className={classes.card}>
        <CardContent>
           <Typography variant='h5'>
             {this.props.appt.title}
          </Typography>
          <Typography className={classes.subtitle}>
             {this.props.appt.description}
          </Typography>
          <Typography className={classes.firstTextInfo} >
            <b>Date: </b> {Moment(this.props.appt.date).format('YYYY-MM-DD hh:mm a') }
          </Typography>     
          <Typography className={classes.textInfo} >
            <b>Doctor: </b> {this.props.appt.doctor ? this.props.appt.doctor.name : ''}
          </Typography>
          <Typography className={classes.textInfo} >
            <b>Patient: </b> {this.props.appt.patient ? this.props.appt.patient.patientname : ''}
          </Typography>
          
        </CardContent>
        <CardActions>
          <Button size='small' variant='contained' color={this.props.leftbuttonColor}
            onClick={() => this.props.handleLeftButtonSelection(this.props.appt)}>{this.props.leftButtonLabel}</Button>
          <Button size='small' variant='contained' color={this.props.rightbuttonColor}
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
