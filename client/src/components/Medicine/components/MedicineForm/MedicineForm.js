import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import ColorizeIcon from '@material-ui/icons/Colorize'
// API
import APImeds from '../../../../utils/APImeds'

const styles = theme => ({
  card: {
    minWidth: 290,
    maxWidth: 1100,
    // maxHeight: 1000, 
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
    margin: '4px 20px 0px 0px',
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
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 250,
  },
  textDescription: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 350,
  },
  inlineBlock : {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center' 
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

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value })  
  }

  handleCheckboxChange = name => event => {
    this.setState({ [name]: event.target.checked });
  }

  getInjectableObject = () => {

    let injectableDoseRangeCanine = this.translateObjectToArray(this.state.injectableDoseRangeCanine,'float')
    let injectableDoseRangeFeline = this.translateObjectToArray(this.state.injectableDoseRangeFeline,'float')

    let injectableObj = {
      available: this.state.injectableAvailable,
      concentration: parseFloat(this.state.injectableConcentration),
      doseCanine: parseFloat(this.state.injectableDoseCanine),
      doseRangeCanine: injectableDoseRangeCanine,
      doseFeline: parseFloat(this.state.injectableDoseFeline),
      doseRangeFeline: injectableDoseRangeFeline,
      routes: this.state.injectableRoutes
    }

    return injectableObj
  }

  getTabletObj = () => {
         
    let tabletSizes = this.translateObjectToArray(this.state.tabletSizes,'float')
    let tabletDoseRangeCanine = this.translateObjectToArray(this.state.tabletDoseRangeCanine,'float')
    let tabletDoseRangeFeline = this.translateObjectToArray(this.state.tabletDoseRangeFeline,'float')

    let tabletObj = {
      available: this.state.tabletAvailable,
      tabletSizes: tabletSizes,
      doseCanine: parseFloat(this.state.tabletDoseCanine),
      doseRangeCanine: tabletDoseRangeCanine,
      doseFeline: parseFloat(this.state.tabletDoseFeline),
      doseRangeFeline: tabletDoseRangeFeline
    }

    return tabletObj
  }

  getCapsuleObj = () => {
     
    let capsuleSizes = this.translateObjectToArray(this.state.capsuleSizes,'float')
    let capsuleDoseRangeCanine = this.translateObjectToArray(this.state.capsuleDoseRangeCanine,'float')
    let capsuleDoseRangeFeline = this.translateObjectToArray(this.state.capsuleDoseRangeFeline,'float')

    let capsuleObj = {
      available: this.state.capsuleAvailable,
      capsuleSizes: capsuleSizes,
      doseCanine:  parseFloat(this.state.capsuleDoseCanine),
      doseRangeCanine: capsuleDoseRangeCanine,
      doseFeline:  parseFloat(this.state.capsuleDoseFeline),
      doseRangeFeline: capsuleDoseRangeFeline
    }

    return capsuleObj

  }

  getSuspensionObj = () => {
    
    let suspensionDoseRangeCanine = this.translateObjectToArray(this.state.suspensionDoseRangeCanine,'float')
    let suspensionDoseRangeFeline = this.translateObjectToArray(this.state.suspensionDoseRangeFeline,'float')

    let suspensionObj = {
      available: this.state.suspensionAvailable,
      doseCanine: parseFloat(this.state.suspensionDoseCanine),
      doseRangeCanine: suspensionDoseRangeCanine,
      doseFeline: parseFloat(this.state.suspensionDoseFeline),
      doseRangeFeline: suspensionDoseRangeFeline
    }

    return suspensionObj
  }

  translateObjectToArray = (tgtObj, convertToType = 'string') => {
    
    let resArray = ['']
    let finalArray = [''] 
  
    if (tgtObj !== undefined && Array.isArray(tgtObj)) {
      resArray = tgtObj
    } else if (tgtObj !== undefined && tgtObj !== '') {
      resArray = tgtObj.split(',')
    } 
    
    if (convertToType === 'number') {
      resArray.forEach( (item,index) => {
        finalArray[index] = parseInt(item)
      })
    } else if ( convertToType === 'float') {
      resArray.forEach( (item,index) => {
        finalArray[index] = parseFloat(item)
      })
    } else {
      finalArray = resArray
    }
  
    return finalArray
  }

  handleSave = () => {

    if (this.state.mode === 'edit') {
      // EDIT MODE: Validate 
      if (this.state.name === '' || this.state.description === '' )  {    
        this.setState({userError: 'Please provide medication name and description'}) 
       } else {          
          // get children objects
          let injectableObj = this.getInjectableObject()        
          let tabletObj = this.getTabletObj()    
          let capsuleObj = this.getCapsuleObj()
          let suspensionObj = this.getSuspensionObj()

          // translate
          let newMed ={
            _id: this.state._id,
            name: this.state.name,
            alias: this.state.alias,
            description: this.state.description,
            controlled: this.state.controlled,
            injectable : injectableObj,
            tablet : tabletObj,
            capsule: capsuleObj,
            suspension : suspensionObj
          }
           
          // send information back 
          this.props.handleLeftButtonSelection(newMed)
       }

    } else {
       // ADD MODE: Validate
       if (this.state.name === '' || this.state.description === '' )  {    
        this.setState({userError: 'Please provide medication name and description'}) 
       } else {
          
          // get children objects
          let injectableObj = this.getInjectableObject()        
          let tabletObj = this.getTabletObj()  
          let capsuleObj = this.getCapsuleObj()
          let suspensionObj = this.getSuspensionObj()
          
          // translate elements into an array
          let aliasArr = this.translateObjectToArray(this.state.alias) 
          
          // translate
          let newMed ={
            name: this.state.name,
            alias: aliasArr,
            description: this.state.description,
            controlled: this.state.controlled,
            injectable : injectableObj,
            tablet : tabletObj,
            capsule: capsuleObj,
            suspension : suspensionObj
          }
          
          // Check if user already exist 
          APImeds.findOne(this.state.name)
            .then(res => {  

              if(res.data !== null) {
                this.setState({userError: `The medication "${res.data.name}" already exist, please provide a new one`})  
              } else {
                // send information back 
                this.props.handleLeftButtonSelection(newMed)
              }           
           })
           .catch(err => console.log(err))   
                     
       }
    }
  }


  renderTab(tabNum) {
    
    const { classes } = this.props
    
    if (tabNum === 0) {
      return(
        <>
          <div className={classes.tabBody}>
            <Grid container spacing={8}>
              <Grid item>
                <div className={classes.inlineBlock}>
                  <Chip className={classes.chip} color='primary'
                        label='Injectable' />
                  <form className={classes.container} noValidate autoComplete="off">
                  <div className='formItem'> 
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={this.state.injectableAvailable}
                            onChange={this.handleCheckboxChange('injectableAvailable')}
                            value="injectableAvailable"
                            color="secondary"
                          />
                        }
                        label="Available"
                      />                   
                  </div>                 
                </form>   
                </div>                     
              </Grid>
            </Grid>

            <Grid container spacing={8}>
              <Grid item>
                <form className={classes.container} noValidate autoComplete="off">
                <div className='formItem'> 
                      <TextField
                        id="med-concentration"
                        label="Concentration :"
                        className={classes.textField}
                        name='injectableConcentration'
                        type="string"
                        autoComplete="current-Concentration"
                        value={this.state.injectableConcentration}
                        onChange={this.handleInputChange}
                        margin="normal"
                      />          
                   </div>
                   <div className='formItem'> 
                      <TextField
                        id="med-injectableRoutes"
                        label="Routes :"
                        className={classes.textField}
                        name='injectableRoutes'
                        type="string"
                        autoComplete="current-injectableRoutes"
                        value={this.state.injectableRoutes}
                        onChange={this.handleInputChange}
                        margin="normal"
                      />          
                   </div>
                </form>
              </Grid>
              <Grid item>
                <form className={classes.container} noValidate autoComplete="off">
                  <div className='formItem'> 
                      <TextField
                        id="med-doseCanine"
                        label="Dose Canine :"
                        className={classes.textField}
                        name='injectableDoseCanine'
                        type="string"
                        autoComplete="current-DoseCanine"
                        value={this.state.injectableDoseCanine}
                        onChange={this.handleInputChange}
                        margin="normal"
                      /> 
                   </div>   
                   <div className='formItem'> 
                      <TextField
                        id="med-doseRangeCanine"
                        label="Dose Range Canine :"
                        className={classes.textField}
                        name='injectableDoseRangeCanine'
                        type="string"
                        autoComplete="current-doseRangeCanine"
                        value={this.state.injectableDoseRangeCanine}
                        onChange={this.handleInputChange}
                        margin="normal"
                      />          
                   </div>
                </form>
              </Grid>
              <Grid item>
                <form className={classes.container} noValidate autoComplete="off">
                   <div className='formItem'> 
                      <TextField
                        id="med-doseFeline"
                        label="Dose Feline :"
                        className={classes.textField}
                        name='injectableDoseFeline'
                        type="string"
                        autoComplete="current-DoseFeline"
                        value={this.state.injectableDoseFeline}
                        onChange={this.handleInputChange}
                        margin="normal"
                      />          
                    </div>
                    <div className='formItem'> 
                          <TextField
                            id="med-injectableRoutes"
                            label="Routes :"
                            className={classes.textField}
                            name='injectableRoutes'
                            type="string"
                            autoComplete="current-injectableRoutes"
                            value={this.state.injectableRoutes}
                            onChange={this.handleInputChange}
                            margin="normal"
                          />          
                    </div>
                </form>
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
               <div className={classes.inlineBlock}>
                <Chip className={classes.chip} color='primary'
                      label='Tablet'/>      
                <form className={classes.container} noValidate autoComplete="off">
                  <div className='formItem'> 
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={this.state.tabletAvailable}
                              onChange={this.handleCheckboxChange('tabletAvailable')}
                              value="tabletAvailable"
                              color="secondary"
                            />
                          }
                          label="Available"
                        />                   
                    </div>
                </form> 
               </div>   
              </Grid>
            </Grid>

            <Grid container spacing={8}>      
              <Grid item>
               <form className={classes.container} noValidate autoComplete="off">
                  <div className='formItem'> 
                    <TextField
                      id="med-tabletSizes"
                      label="Sizes :"
                      className={classes.textField}
                      name='tabletSizes'
                      type="string"
                      autoComplete="current-tabletSizes"
                      value={this.state.tabletSizes}
                      onChange={this.handleInputChange}
                      margin="normal"
                    />          
                  </div>
               </form>
              </Grid>
              <Grid item>
               <form className={classes.container} noValidate autoComplete="off"> 
                 <div className='formItem'> 
                    <TextField
                      id="med-tabletDoseCanine"
                      label="Dose Canine :"
                      className={classes.textField}
                      name='tabletDoseCanine'
                      type="string"
                      autoComplete="current-tabletDoseCanine"
                      value={this.state.tabletDoseCanine}
                      onChange={this.handleInputChange}
                      margin="normal"
                    />          
                  </div>
                  <div className='formItem'> 
                    <TextField
                      id="med-tabletDoseRangeCanine"
                      label="Dose Range Canine :"
                      className={classes.textField}
                      name='tabletDoseRangeCanine'
                      type="string"
                      autoComplete="current-tabletDoseRangeCanine"
                      value={this.state.tabletDoseRangeCanine}
                      onChange={this.handleInputChange}
                      margin="normal"
                    />          
                  </div>
               </form>
              </Grid>
              <Grid item>
               <form className={classes.container} noValidate autoComplete="off"> 
                  <div className='formItem'> 
                      <TextField
                        id="med-tabletDoseFeline"
                        label="Dose Feline :"
                        className={classes.textField}
                        name='tabletDoseFeline'
                        type="string"
                        autoComplete="current-tabletDoseFeline"
                        value={this.state.tabletDoseFeline}
                        onChange={this.handleInputChange}
                        margin="normal"
                      />          
                  </div>
                  <div className='formItem'> 
                      <TextField
                        id="med-tabletDoseRangeFeline"
                        label="Dose Range Feline :"
                        className={classes.textField}
                        name='tabletDoseRangeFeline'
                        type="string"
                        autoComplete="current-tabletDoseRangeFeline"
                        value={this.state.tabletDoseRangeFeline}
                        onChange={this.handleInputChange}
                        margin="normal"
                      />          
                  </div>
               </form>
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
               <div className={classes.inlineBlock}>
                <Chip className={classes.chip}  color='primary'
                      label='Capsule' />                 
                <form className={classes.container} noValidate autoComplete="off"> 
                  <div className='formItem'> 
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={this.state.capsuleAvailable}
                              onChange={this.handleCheckboxChange('capsuleAvailable')}
                              value="capsuleAvailable"
                              color="secondary"
                            />
                          }
                          label="Available"
                        />                   
                  </div>
                </form> 
               </div>   
              </Grid>
            </Grid>

            <Grid container spacing={8}>
              <Grid item>
                <form className={classes.container} noValidate autoComplete="off">                 
                  <div className='formItem'> 
                    <TextField
                      id="med-capsuleSizes"
                      label="Sizes :"
                      className={classes.textField}
                      name='capsuleSizes'
                      type="string"
                      autoComplete="current-capsuleSizes"
                      value={this.state.capsuleSizes}
                      onChange={this.handleInputChange}
                      margin="normal"
                    />          
                  </div>
                </form> 
              </Grid>
              <Grid item>
                <form className={classes.container} noValidate autoComplete="off"> 
                  <div className='formItem'> 
                      <TextField
                        id="med-capsuleDoseCanine"
                        label="Dose Canine :"
                        className={classes.textField}
                        name='capsuleDoseCanine'
                        type="string"
                        autoComplete="current-capsuleDoseCanine"
                        value={this.state.capsuleDoseCanine}
                        onChange={this.handleInputChange}
                        margin="normal"
                      />          
                  </div>
                  <div className='formItem'> 
                    <TextField
                      id="med-capsuleDoseRangeCanine"
                      label="Dose Range Canine :"
                      className={classes.textField}
                      name='capsuleDoseRangeCanine'
                      type="string"
                      autoComplete="current-capsuleDoseRangeCanine"
                      value={this.state.capsuleDoseRangeCanine}
                      onChange={this.handleInputChange}
                      margin="normal"
                    />          
                  </div>
                </form>
              </Grid>
              <Grid item>
                <form className={classes.container} noValidate autoComplete="off"> 
                  <div className='formItem'> 
                    <TextField
                      id="med-capsuleDoseFeline"
                      label="Dose Feline :"
                      className={classes.textField}
                      name='capsuleDoseFeline'
                      type="string"
                      autoComplete="current-capsuleDoseFeline"
                      value={this.state.capsuleDoseFeline}
                      onChange={this.handleInputChange}
                      margin="normal"
                    />          
                  </div>
                  <div className='formItem'> 
                    <TextField
                      id="med-capsuleDoseRangeFeline"
                      label="Dose Range Feline :"
                      className={classes.textField}
                      name='capsuleDoseRangeFeline'
                      type="string"
                      autoComplete="current-capsuleDoseRangeFeline"
                      value={this.state.capsuleDoseRangeFeline}
                      onChange={this.handleInputChange}
                      margin="normal"
                    />          
                  </div>
                </form>
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
                <div className={classes.inlineBlock}>
                  <Chip className={classes.chip}  color='primary'
                        label='Suspension' />               
                  <form className={classes.container} noValidate autoComplete="off"> 
                    <div className='formItem'> 
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={this.state.suspensionAvailable}
                                onChange={this.handleCheckboxChange('suspensionAvailable')}
                                value="suspensionAvailable"
                                color="secondary"
                              />
                            }
                            label="Available"
                          />                   
                      </div>
                  </form>  
                </div> 
              </Grid>
            </Grid>

            <Grid container spacing={8}>
              <Grid item>
                <form className={classes.container} noValidate autoComplete="off">
                 <div className='formItem'> 
                    <TextField
                      id="med-suspensionDoseCanine"
                      label="Dose Canine :"
                      className={classes.textField}
                      name='suspensionDoseCanine'
                      type="string"
                      autoComplete="current-suspensionDoseCanine"
                      value={this.state.suspensionDoseCanine}
                      onChange={this.handleInputChange}
                      margin="normal"
                    />          
                  </div>
                  <div className='formItem'> 
                      <TextField
                        id="med-suspensionDoseRangeCanine"
                        label="Dose Range Canine :"
                        className={classes.textField}
                        name='suspensionDoseRangeCanine'
                        type="string"
                        autoComplete="current-suspensionDoseRangeCanine"
                        value={this.state.suspensionDoseRangeCanine}
                        onChange={this.handleInputChange}
                        margin="normal"
                      />          
                    </div>
                </form>
              </Grid>
              <Grid item>
                <form className={classes.container} noValidate autoComplete="off">
                <div className='formItem'> 
                    <TextField
                      id="med-suspensionDoseFeline"
                      label="Dose Feline :"
                      className={classes.textField}
                      name='suspensionDoseFeline'
                      type="string"
                      autoComplete="current-suspensionDoseFeline"
                      value={this.state.suspensionDoseFeline}
                      onChange={this.handleInputChange}
                      margin="normal"
                    />          
                  </div>
                  <div className='formItem'> 
                    <TextField
                      id="med-suspensionDoseRangeFeline"
                      label="Dose Range Feline :"
                      className={classes.textField}
                      name='suspensionDoseRangeFeline'
                      type="string"
                      autoComplete="current-suspensionDoseRangeFeline"
                      value={this.state.suspensionDoseRangeFeline}
                      onChange={this.handleInputChange}
                      margin="normal"
                    />          
                  </div>
                </form>
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
                  <form className={classes.container} noValidate autoComplete="off">
                    
                    <div className='formItem'>
                        <TextField
                              required
                              id="med-name"
                              label="Medication:"
                              className={classes.textField}
                              name='name'
                              type="string"
                              autoComplete="current-medname"
                              value={this.state.name}
                              onChange={this.handleInputChange}
                              margin="normal"
                              disabled={this.props.isNameDisabled}
                            />   
                      </div>
                      <div className='formItem'> 
                          <TextField
                            id="med-description"
                            label="Description :"
                            className={classes.textDescription}
                            name='description'
                            type="string"
                            autoComplete="current-description"
                            value={this.state.description}
                            onChange={this.handleInputChange}
                            margin="normal"
                          />                 
                      </div>
                                 
                    </form>
                  </Grid>
                  <Grid item >
                  <form className={classes.container} noValidate autoComplete="off">
                    <div className='formItem'>
                      <TextField
                            required
                            id="med-alias"
                            label="Alias :"
                            className={classes.textField}
                            name='alias'
                            type="string"
                            autoComplete="current-alias"
                            value={this.state.alias}
                            onChange={this.handleInputChange}
                            margin="normal"
                          />   
                    </div>                         
                    <div className='formItem'> 
                      <FormControlLabel
                        control={
                            <Checkbox
                              checked={this.state.controlled}
                              onChange={this.handleCheckboxChange('controlled')}
                              value="controlled"
                              color="secondary"
                            />
                          }
                          label="Controlled Medicine"
                      />                   
                    </div>    
                  </form>

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
             onClick={() => this.handleSave()}>
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