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
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import ColorizeIcon from '@material-ui/icons/Colorize'

const styles = theme => ({
  card: {
    minWidth: 290,
    maxWidth: 850,
    maxHeight: 800, 
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
    fontSize:18,
    margin: '0px 10px 2px 0px',
  },
  infoLabel: {
    fontSize: 14,
    margin: '5px 0px 0px 15px',
  },
  info: {
    fontSize: 18,
    margin: '5px 0px 0px 25px',
    fontWeight: 'bold'
  },
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    margin:'5px 0px 0px 20px'
  },
  tabBody : {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper
  }
})

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

class MedicineForm extends Component {
  
  state ={
   
    tabSelection: 0,
    
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
        med: this.props.med,
         _id: this.props.med._id, 
         name: this.props.med.name,
         alias: this.props.med.alias,
         description: this.props.med.description,
         controlled: this.props.med.controlled,

         injectableAvailable : this.props.med.injectable.available,
         injectableConcentration : this.props.med.injectable.concentration,
         injectableDoseCanine : this.props.med.injectable.doseCanine,
         injectableDoseRangeCanine : this.translateArrayToList(this.props.med.injectable.doseRangeCanine),
         injectableDoseFeline : this.props.med.injectable.doseFeline,
         injectableDoseRangeFeline : this.translateArrayToList(this.props.med.injectable.doseRangeFeline),
         injectableRoutes : this.translateArrayToList(this.props.med.injectable.routes),
         
         tabletAvailable : this.props.med.tablet.available,
         tabletSizes : this.translateArrayToList(this.props.med.tablet.tabletSizes),
         tabletDoseCanine : this.props.med.tablet.doseCanine,
         tabletDoseRangeCanine : this.translateArrayToList(this.props.med.tablet.doseRangeCanine),
         tabletDoseFeline : this.props.med.tablet.doseFeline,
         tabletDoseRangeFeline : this.translateArrayToList(this.props.med.tablet.doseRangeFeline),

         capsuleAvailable : this.props.med.capsule.available,
         capsuleSizes : this.translateArrayToList(this.props.med.capsule.capsuleSizes),
         capsuleDoseCanine : this.props.med.capsule.doseCanine,
         capsuleDoseRangeCanine: this.translateArrayToList(this.props.med.capsule.doseRangeCanine),
         capsuleDoseFeline: this.props.med.capsule.doseFeline,
         capsuleDoseRangeFeline: this.translateArrayToList(this.props.med.capsule.doseRangeFeline),
          
         suspensionAvailable : this.props.med.suspension.available,
         suspensionDoseCanine: this.props.med.suspension.doseCanine,
         suspensionDoseRangeCanine: this.translateArrayToList(this.props.med.suspension.doseRangeCanine),
         suspensionDoseFeline: this.props.med.suspension.doseFeline,
         suspensionDoseRangeFeline: this.translateArrayToList(this.props.med.suspension.doseRangeFeline)
      })
      
    }
  }

  translateArrayToList = (tgtObj) => {
   
    let stringList = ''
    
    if (Array.isArray(tgtObj) && tgtObj.length > 0) {
  
      for(let i = 0; i < tgtObj.length; i++)
      {
        let element = tgtObj[i]
        if(stringList === '') {
          stringList = element.toString()
        } else {
          stringList += ',' + element.toString()
        }
      }    
    }
  
    return stringList
  }

  handleTabChange = (event,tabSelection) => {  
    this.setState({ tabSelection });
  }

  renderTab(tabNum) {
    
    const { classes } = this.props
    
    if (tabNum === 0) {
      return(
        <>
          <div className={classes.tabBody}>
            <Grid container spacing={8}>
              <Grid item>
                <div>
                <Chip className={classes.chip} color='primary'
                      label='Injectable' />   
                </div>
                <div>              
                <Chip className={classes.chip} 
                      color={this.state.injectableAvailable ? 'secondary' : 'default'}
                      label={this.state.injectableAvailable ? 'Available' : 'Not-Available'} />  
                </div>          
              </Grid>
              <Grid item>
                <Typography className={classes.infoLabel} color="textPrimary">    
                  Concentration:
                </Typography>
                <Typography className={classes.info} color="textPrimary">    
                   {this.state.injectableConcentration} 
                </Typography>
                <Typography className={classes.infoLabel} color="textPrimary">    
                  Routes:
                </Typography>
                <Typography className={classes.info} color="textPrimary">    
                  {this.state.injectableRoutes} 
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.infoLabel} color="textPrimary">    
                   Dose Canine: 
                </Typography>
                <Typography className={classes.info} color="textPrimary">    
                   {this.state.injectableDoseCanine} 
                </Typography>
                <Typography className={classes.infoLabel} color="textPrimary">    
                  Dose Range Canine:
                </Typography>
               <Typography className={classes.info} color="textPrimary">    
                  {this.state.injectableDoseRangeCanine} 
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.infoLabel} color="textPrimary">    
                  Dose Feline:
                </Typography>
                <Typography className={classes.info} color="textPrimary">    
                   {this.state.injectableDoseFeline} 
                </Typography>
                <Typography className={classes.infoLabel} color="textPrimary">    
                  Dose Range Feline:
                </Typography>
                <Typography className={classes.info} color="textPrimary">    
                  {this.state.injectableDoseRangeFeline} 
                </Typography>
              </Grid>
            </Grid>
          </div>
        </>
        ) // return
    } else if (tabNum === 1) {
      return(
        <>
          <div className={classes.tabBody}>
            <Grid container spacing={8}>
              <Grid item>
              <div>
                <Chip className={classes.chip} color='primary'
                      label='Tablet'/>   
                </div>
                <div>              
                <Chip className={classes.chip} 
                  color={this.state.tabletAvailable ? 'secondary' : 'default'}
                  label={this.state.tabletAvailable ? 'Available' : 'Not-Available'} />  
                </div>     
              </Grid>
              <Grid item>
                <Typography className={classes.infoLabel} color="textPrimary">    
                  Sizes:
                </Typography>
                <Typography className={classes.info} color="textPrimary">    
                  {this.state.tabletSizes} 
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.infoLabel} color="textPrimary">    
                  Dose Canine:
                </Typography>
                <Typography className={classes.info} color="textPrimary">    
                  {this.state.tabletDoseCanine} 
                </Typography>
                <Typography className={classes.infoLabel} color="textPrimary">    
                   Dose Range Canine: 
                </Typography>
                <Typography className={classes.info} color="textPrimary">    
                   {this.state.tabletDoseRangeCanine} 
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.infoLabel} color="textPrimary">    
                   Dose Feline:
                </Typography>
                <Typography className={classes.info} color="textPrimary">    
                   {this.state.tabletDoseFeline} 
                </Typography>
                <Typography className={classes.infoLabel} color="textPrimary">    
                  Dose Range Feline:
                </Typography>
                <Typography className={classes.info} color="textPrimary">    
                  {this.state.tabletDoseRangeFeline} 
                </Typography>
              </Grid>
            </Grid>
          </div>
        </>
        ) // return
    } else if (tabNum === 2) {
      return(
        <>
          <div className={classes.tabBody}>
            <Grid container spacing={8}>
              <Grid item>
              <div>
                <Chip className={classes.chip}  color='primary'
                      label='Capsule' />   
                </div>
                <div>              
                <Chip className={classes.chip} 
                  color={this.state.capsuleAvailable ? 'secondary' : 'default'}
                  label={this.state.capsuleAvailable ? 'Available' : 'Not-Available'} />  
                </div>     
              </Grid>
              <Grid item>
                <Typography className={classes.infoLabel} color="textPrimary">    
                  Sizes:
                </Typography>
                <Typography className={classes.info} color="textPrimary">    
                  {this.state.capsuleSizes} 
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.infoLabel} color="textPrimary">    
                  Dose Canine: 
                </Typography>
                <Typography className={classes.info} color="textPrimary">    
                  {this.state.capsuleDoseCanine} 
                </Typography>
                <Typography className={classes.infoLabel} color="textPrimary">    
                  Dose Range Canine: 
                </Typography>
                <Typography className={classes.info} color="textPrimary">    
                   {this.state.capsuleDoseRangeCanine} 
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.infoLabel} color="textPrimary">    
                  Dose Feline: 
                </Typography>
                <Typography className={classes.info} color="textPrimary">    
                  {this.state.capsuleDoseFeline} 
                </Typography>
                <Typography className={classes.infoLabel} color="textPrimary">    
                  Dose Range Feline:
                </Typography>
                <Typography className={classes.info} color="textPrimary">    
                  {this.state.capsuleDoseRangeFeline} 
                </Typography>
              </Grid>
            </Grid>
          </div>
        </>
        ) // return
    }  else if (tabNum === 3) {
      return(
        <>
          <div className={classes.tabBody}>
            <Grid container spacing={8}>
              <Grid item>
                <div>
                <Chip className={classes.chip}  color='primary'
                      label='Suspension' />   
                </div>
                <div>              
                <Chip className={classes.chip} 
                      color={this.state.suspensionAvailable ? 'secondary' : 'default'}
                      label={this.state.suspensionAvailable ? 'Available' : 'Not-Available'} />  
                </div>     
              </Grid>
              <Grid item>
                <Typography className={classes.infoLabel} color="textPrimary">    
                  Dose Canine:
                </Typography>
                <Typography className={classes.info} color="textPrimary">    
                   {this.state.suspensionDoseCanine} 
                </Typography>

                <Typography className={classes.infoLabel} color="textPrimary">    
                  Dose Range Canine:
                </Typography>
                <Typography className={classes.info} color="textPrimary">    
                  {this.state.suspensionDoseRangeCanine} 
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.infoLabel} color="textPrimary">    
                  Dose Feline:
                </Typography>
                <Typography className={classes.info} color="textPrimary">    
                  {this.state.suspensionDoseFeline} 
                </Typography>
                <Typography className={classes.infoLabel} color="textPrimary">    
                  Dose Range Feline:
                </Typography>
                <Typography className={classes.info} color="textPrimary">    
                   {this.state.suspensionDoseRangeFeline} 
                </Typography>
              </Grid>
            </Grid>
          </div>
        </>
        ) // return
    } 

  }

  render() {
    
    const { classes } = this.props
    const { tabSelection } = this.state

    return ( 
      <>
       <div>
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
                    <Typography className={classes.title}>
                      {this.state.name}
                    </Typography>                  
                    <Typography className={classes.name}>
                      Description: <b>{this.state.description}</b> 
                    </Typography>  
                    <Typography className={classes.name}>
                      Alias: <b>{this.state.alias}</b>
                    </Typography>  
                    <Chip
                      label={this.state.controlled ? 'Controlled' : 'Not-Controlled'} 
                      className={classes.chip}
                      color={this.state.controlled ? 'secondary' : 'default'} 
                     />                      
                  </Grid>     
                </Grid>
             </div> 

          <div className={classes.root}>
       
            <Tabs
              value={tabSelection}
              onChange={this.handleTabChange}
              variant="scrollable"
              scrollButtons="on"
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab label="Injectable" />
              <Tab label="Tablet"     />
              <Tab label="Capsule"    />
              <Tab label="Suspension" />
            </Tabs> 
     
            {tabSelection === 0 && <TabContainer>{this.renderTab(0)}</TabContainer>}
            {tabSelection === 1 && <TabContainer>{this.renderTab(1)}</TabContainer>}
            {tabSelection === 2 && <TabContainer>{this.renderTab(2)}</TabContainer>}
            {tabSelection === 3 && <TabContainer>{this.renderTab(3)}</TabContainer>}
            
          </div>
    
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