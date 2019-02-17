import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import ColorizeIcon from '@material-ui/icons/Colorize'


const styles = theme => ({
  card: {
    minWidth: 290,
    maxWidth: 500,
    maxHeight: 400, 
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
    margin: '4px 0px 2px 0px',
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
    margin: '0px 0px 2px 0px',
  },
  name: {
    fontSize: 18,
    margin: '0px 0px 2px 0px',   
    fontWeight: 'bold'
  },
  infoLabel: {
    fontSize: 14,
    margin: '5px 0px 0px 15px',
  },
  info: {
    fontSize: 18,
    margin: '5px 0px 0px 25px',
    fontWeight: 'bold'
  }
})

class MedicineCard extends Component {
  
  render() {
    
    const { classes } = this.props
  
    return (
      <Card className={classes.card}>
      <CardContent>
         <Chip
            avatar={<Avatar><ColorizeIcon /></Avatar>}
            label='Medicine' 
            className={classes.chip}
            color="primary"
          />

          <div>
            <Grid 
              container spacing={32}
              alignContent='center'
              style={{ margin: 'auto', marginLeft: '5%' }}>

                <Grid item>
                  <Typography 
                    className={classes.title}>
                    {this.props.med.name}
                  </Typography>   
                  <Typography 
                    className={classes.name}>
                    {this.props.med.description}
                  </Typography>           
                  <Typography 
                    className={classes.name}>
                    <b>Alias:</b> {this.props.med.alias}
                  </Typography> 
    
                </Grid>
                <Grid item >
                <Chip
                    label={this.props.med.controlled ? 'Controlled' : 'Not-Controlled'} 
                    className={classes.chip}
                    color={this.props.med.controlled ? 'secondary' : 'default'} 
                  />     

                </Grid>      
              </Grid>
          </div> 

      </CardContent>
      <CardActions> 
        
        <Button 
             size="small" 
             variant="contained" 
             color={this.props.leftbuttonColor} 
             className={classes.btnActionLeft} 
             onClick={() => this.props.handleLeftButtonSelection(this.props.med)}>
             {this.props.leftButtonLabel}
        </Button>  

        <Button 
           size="small" 
           variant="contained" 
           color={this.props.rightbuttonColor} 
           className={classes.btnAction}  
           onClick={() => this.props.handleRightButtonSelection(this.props.med)}>
           {this.props.rightButtonLabel}
        </Button>
                     
      </CardActions>
    </Card>

    ) // return

  } // render

} // class MedicineCard


MedicineCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MedicineCard)