import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

import './UserCard.css';

const styles = theme => ({
  card: {
    minWidth: 290,
    maxHeight: 300,
    margin: '10px 20px 0px 20px',
    borderRadius: '30px',
    boxShadow: '5px 5px 5px 5px rgb(82, 82, 100)'  
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

class UserCard extends Component { 
  
  render() {
  
    const { classes } = this.props
  
    return (
      <Card className={classes.card}>
        <CardContent>
          <Chip
            avatar={<Avatar>{this.props.user.isAdmin ? "AU" : "SU"} </Avatar>}
            label={this.props.user.isAdmin ? 'Admin user' : 'System user'} 
            className={classes.chip}
            color={this.props.user.isAdmin ? "secondary" : "primary"} 
          />
          <Typography className={classes.title}>
            {this.props.user.username}
          </Typography>
          <Typography className={classes.name} color="textPrimary">
            {this.props.user.fullname}
          </Typography>
          <Typography component="p" className={classes.info}>
            Phone:  {this.props.user.phone}
          </Typography>
          <Typography component="p" className={classes.info}>
            Email:  {this.props.user.email}
          </Typography>
         
        </CardContent>
        <CardActions>     
          <Button size="small" variant="contained" 
                  color={this.props.leftbuttonColor} 
                  disabled={this.props.isDisabled}
                  className={classes.btnActionLeft}  
                  onClick={() => this.props.handleLeftButtonSelection(this.props.user)}>{this.props.leftButtonLabel}</Button>
          <Button size="small" variant="contained" 
                  color={this.props.rightbuttonColor} 
                  disabled={this.props.isDisabled}
                  className={classes.btnAction} 
                  onClick={() => this.props.handleRightButtonSelection(this.props.user)} >{this.props.rightButtonLabel}</Button>
          
        </CardActions>
      </Card>
    )
  } 
}

UserCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(UserCard)
