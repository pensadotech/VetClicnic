import React, { Component } from "react"
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

class MedicineCard extends Component {
  
  renderThirButton = () => {

    if( this.props.viewThirdButton ) {
      return(
        <>
          <Button size="small" variant="contained" color={this.props.viewButtonColor} 
                  onClick={() => this.props.handleViewButtonSelection(this.props.med)} >{this.props.viewButtonLabel}</Button>
        </> 
      )
    } else {
      
      return( 
        <> 
        </>
      )
    }

  }

  render() {
    
    const { classes } = this.props
  
    return (
      <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {this.props.med.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         Alias:   {this.props.med.alias}
        </Typography>
        <Typography component="p">
           Description:  {this.props.med.description}
        </Typography>
        <Typography component="p">
          Controlled: {this.props.med.controlled ? 'True' : 'False'}
        </Typography>
      </CardContent>
      <CardActions> 
        
        <Button size="small" variant="contained" color={this.props.leftbuttonColor} 
                disabled={this.props.userSession.isAdmin ? false : true}  
                onClick={() => this.props.handleLeftButtonSelection(this.props.med)}>{this.props.leftButtonLabel}</Button>  

        <Button size="small" variant="contained" color={this.props.rightbuttonColor} 
                disabled={this.props.userSession.isAdmin ? false : true}
                onClick={() => this.props.handleRightButtonSelection(this.props.med)} >{this.props.rightButtonLabel}</Button>
        
         {this.renderThirButton()}

        }
             
      </CardActions>
    </Card>

    ) // return

  } // render

} // class MedicineCard


MedicineCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MedicineCard)