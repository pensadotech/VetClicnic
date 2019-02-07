import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'
import ColorizeIcon from '@material-ui/icons/Colorize'
import Avatar from '@material-ui/core/Avatar'

const styles = theme => ({
  card: {
    minWidth: 290,
    maxWidth: 850,
    maxHeight: 600, 
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
  info: {
    fontSize: 14,
    margin: '0px 0px 0px 0px',
  },
})

class MedicineForm extends Component {
  
  state ={
    spacing: '24',
    mode: '',
    med: '',
    _id : '',
    name: '',
    alias: [''],
    description: '',
    controlled: false,

    injectableAvailable : false,
    injectableConcentration : 0,
    injectableDoseCanine : 0.00,
    injectableDoseRangeCanine : [0.00],
    injectableDoseFeline : 0.00,
    injectableDoseRangeFeline : [0.00],
    injectableRoutes : [''],
    
    tabletAvailable : false,
    tabletSizes : [0],
    tabletDoseCanine : 0,
    tabletDoseRangeCanine : [0],
    tabletDoseFeline : 0,
    tabletDoseRangeFeline : [0],

    capsuleAvailable : false,
    capsuleSizes : [0],
    capsuleDoseCanine : 0,
    capsuleDoseRangeCanine: [0],
    capsuleDoseFeline: 0,
    capsuleDoseRangeFeline: [0],
    
    suspensionAvailable : false,
    suspensionDoseCanine: 0,
    suspensionDoseRangeCanine: [0],
    suspensionDoseFeline: 0,
    suspensionDoseRangeFeline: [0]
  }
  
  componentDidMount = () => {
    if(this.props.med !== '') {
      this.setState({
        mode: this.props.mode,
        med: this.props.med,
         _id: this.props.med._id, 
         name: this.props.med.name,
         alias: this.props.med.alias,
         description: this.props.med.description,
         controlled: this.props.med.controlled,

         injectableAvailable : this.props.med.injectable.available,
         injectableConcentration : this.props.med.injectable.concentration,
         injectableDoseCanine : this.props.med.injectable.doseCanine,
         injectableDoseRangeCanine : this.props.med.injectable.doseRangeCanine,
         injectableDoseFeline : this.props.med.injectable.doseFeline,
         injectableDoseRangeFeline : this.props.med.injectable.doseRangeFeline,
         injectableRoutes : this.props.med.injectable.routes,
         
         tabletAvailable : this.props.med.tablet.available,
         tabletSizes : this.props.med.tablet.tabletSizes,
         tabletDoseCanine : this.props.med.tablet.doseCanine,
         tabletDoseRangeCanine : this.props.med.tablet.doseRangeCanine,
         tabletDoseFeline : this.props.med.tablet.doseFeline,
         tabletDoseRangeFeline : this.props.med.tablet.doseRangeFeline,

         capsuleAvailable : this.props.med.capsule.available,
         capsuleSizes : this.props.med.capsule.capsuleSizes,
         capsuleDoseCanine : this.props.med.capsule.doseCanine,
         capsuleDoseRangeCanine: this.props.med.capsule.doseRangeCanine,
         capsuleDoseFeline: this.props.med.capsule.doseFeline,
         capsuleDoseRangeFeline: this.props.med.capsule.doseRangeFeline,
          
         suspensionAvailable : this.props.med.suspension.available,
         suspensionDoseCanine: this.props.med.suspension.doseCanine,
         suspensionDoseRangeCanine: this.props.med.suspension.doseRangeCanine,
         suspensionDoseFeline: this.props.med.suspension.doseFeline,
         suspensionDoseRangeFeline: this.props.med.suspension.doseRangeFeline
      })
    }
  }

  render() {
    
    const { classes } = this.props

    return ( 
      <>
       <div>
          
       <Card className={classes.card}> 
       <CardContent>
         <Chip
            avatar={<Avatar><ColorizeIcon /></Avatar>}
            label='Medicine' 
            className={classes.chip}
            color= "primary"
          />

         <Grid 
           container spacing={32}
           alignContent='center'
           style={{ margin: 'auto', marginLeft: '5%' }}>

            <Grid item>
              <Typography 
                 className={classes.title}>
                 {this.state.name}
              </Typography>   
              <Typography 
                 className={classes.name}>
                 {this.state.description}
              </Typography>           
              <Typography 
                 className={classes.info}>
                <b>Alias:</b> {this.state.alias}
              </Typography> 

              <Chip
                label={this.state.controlled ? 'Controlled' : 'Not-Controlled'} 
                className={classes.chip}
                color={this.state.controlled ? 'secondary' : 'default'} 
               />              
            </Grid>
            <Grid item >
            
              
            </Grid>      
          </Grid>
         
       </CardContent>

       <CardActions>

          <Button 
             size="small" 
             variant="contained" 
             color={this.props.leftbuttonColor} 
             disabled={this.props.isLeftButtonDisabled}
             className={classes.btnActionLeft}  
             onClick={() => this.props.handleLeftButtonSelection(this.props.med)}>
             {this.props.leftButtonLabel}
          </Button>  

          <Button 
           size="small" 
           variant="contained" 
           color={this.props.rightbuttonColor} 
           disabled={this.props.isRightButtonDisabled}
           className={classes.btnAction} 
           onClick={() => this.props.handleRightButtonSelection(this.props.med)} >
           {this.props.rightButtonLabel}
          </Button>
        
          <Button 
             size="small" 
             variant="contained" 
             color={this.props.thirdbuttonColor} 
             className={classes.btnAction}
             onClick={() => this.props.handleThirdButtonSelection(this.props.med)}>
            {this.props.thirdButtonLabel}
            </Button>

       </CardActions>    
       </Card>

       </div>
     </>

    ) // return()

  } // render()

} // class MedicineForm

MedicineForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MedicineForm)