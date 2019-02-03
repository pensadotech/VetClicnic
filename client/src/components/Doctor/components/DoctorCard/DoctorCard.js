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
import FaceIcon from '@material-ui/icons/Face'

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

class DoctorCard extends Component {

  render() {

    const { classes } = this.props

    return (
      <Card className={classes.card}>
        <CardContent>
        <Chip
            avatar={<Avatar><FaceIcon /></Avatar>}
            label='Doctor' 
            className={classes.chip}
            color= "primary"
          />
          <Typography className={classes.title}>
            {this.props.doctor.name}
          </Typography>
          <Typography className={classes.name} 
                      color="textPrimary">
           Office Phone: {this.props.doctor.phone}
          </Typography>
          <Typography component="p"
                 className={classes.info}>
            Mobile Phone:  {this.props.doctor.mobilePhone}
          </Typography>
          <Typography component="p"
               className={classes.info}>
            Email:  {this.props.doctor.email}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" 
            variant="contained" 
            color={this.props.leftbuttonColor} 
            disabled={this.props.isDisabled}
            className={classes.btnActionLeft}  
            onClick={() => this.props.handleLeftButtonSelection(this.props.doctor)}>{this.props.leftButtonLabel}</Button>
          <Button size="small" 
             variant="contained" 
             color={this.props.rightbuttonColor} 
             disabled={this.props.isDisabled}
             className={classes.btnAction} 
             onClick={() => this.props.handleRightButtonSelection(this.props.doctor)} >{this.props.rightButtonLabel}</Button>
        </CardActions>
      </Card>
    )
  }
}

DoctorCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(DoctorCard)
