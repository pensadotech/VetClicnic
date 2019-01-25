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

const styles = {
  card: {
    minWidth: 275,
    maxHeight: 260,
    margin: '10px 20px 0px 20px',  
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}

class UserCard extends Component { 
  
  render() {
  
    const { classes } = this.props
  
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
           System user
          </Typography>
          <Typography variant="h5" component="h2">
            {this.props.user.username}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {this.props.user.fullname}
          </Typography>
          <Typography component="p">
            Phone:  {this.props.user.phone}
          </Typography>
          <Typography component="p">
            Email:  {this.props.user.email}
          </Typography>
          <FormControlLabel
              control={
                <Checkbox
                  disabled 
                  checked={this.props.user.isAdmin}
                  color="primary"
                />
              }
              label="Admin Role"
          />            

        </CardContent>
        <CardActions>     
          <Button size="small" variant="contained" color={this.props.leftbuttonColor} disabled={this.props.isDisabled}  
                  onClick={() => this.props.handleLeftButtonSelection(this.props.user)}>{this.props.leftButtonLabel}</Button>
          <Button size="small" variant="contained" color={this.props.rightbuttonColor} disabled={this.props.isDisabled}
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
