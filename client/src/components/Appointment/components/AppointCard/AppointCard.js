import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
    maxHeight: 220,
    margin: '10px 20px 0px 20px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

class AppointCard extends Component {
  render () {
    const { classes } = this.props;
    
    console.log(this.props.appt)

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color='textSecondary' gutterBottom>
            {this.props.appt.date}
          </Typography>
          <Typography variant='h5' component='h2'>
            {this.props.appt.title}
          </Typography>
          <Typography className={classes.pos} color='textSecondary'>
            Doctor: {this.props.appt.doctor ? this.props.appt.doctor.name : ''}
          </Typography>
          <Typography className={classes.pos} color='textSecondary'>
            Patient: {this.props.appt.patient ? this.props.appt.patient.patientname : ''}
          </Typography>
          <Typography component='p'>
            {this.props.appt.description}
            <br />

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
};

export default withStyles(styles)(AppointCard);
