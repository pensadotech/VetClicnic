import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = {
  card: {
    minWidth: 275,
    maxHeight: 220,
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

function UserCard(props) {

  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         System user
        </Typography>
        <Typography variant="h5" component="h2">
          {props.user.username}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.user.fullname}
        </Typography>
        <Typography component="p">
          'Phone: ' {props.user.phone}
        </Typography>
        <Typography component="p">
          'Email: ' {props.user.email}
        </Typography>
      </CardContent>
      <CardActions>     
        <Button size="small" variant="contained" color={props.rightbuttonColor} disabled={props.isDisabled}
                onClick={() => props.handleRightButtonSelection(props.user)} >{props.rightButtonLabel}</Button>
        <Button size="small" variant="contained" color={props.leftbuttonColor} disabled={props.isDisabled}  
                onClick={() => props.handleLeftButtonSelection(props.user)}>{props.leftButtonLabel}</Button>
      </CardActions>
    </Card>
  )
}

UserCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(UserCard)
