import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import ColorizeIcon from '@material-ui/icons/Colorize'
// API
import APImeds from '../../../../utils/APImeds'
// Local style
import './MedicineForm.css'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 330,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 250,
  },
  margin: {
    margin: theme.spacing.unit,
  },
  card: {
    minWidth: 175,
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
  groupField : {
    border: '3 solid gray'
  },
  userError : {
    color: 'red'
  }
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
    controlled: '',

    injectableAvailable : '',
    injectableConcentration : '',
    injectableDoseCanine : '',
    injectableDoseRangeCanine : [''],
    injectableDoseFeline : '',
    injectableDoseRangeFeline : [''],
    injectableRoutes : [''],
    
    tabletAvailable : '',
    tabletSizes : [''],
    tabletDoseCanine : '',
    tabletDoseRangeCanine : [''],
    tabletDoseFeline : '',
    tabletDoseRangeFeline : [''],

    capsuleAvailable : '',
    capsuleSizes : [''],
    capsuleDoseCanine : '',
    capsuledoseRangeCanine: [''],
    capsuledoseFeline: '',
    capsuledoseRangeFeline: [''],
    
    suspensionAvailable : '',
    suspensionDoseCanine: '',
    suspensionDoseRangeCanine: [''],
    suspensionDoseFeline: '',
    suspensionDoseRangeFeline: [''],

    userError: ''
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

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value })  
  }

  handleCheckboxChange = name => event => {
    this.setState({ [name]: event.target.checked });
  }
  

  getInjectableObject = (mode) => {
    
    let injectableDoseRangeCanine = ['']
    let injectableDoseRangeFeline = ['']

    if (mode === 'edit') {
      injectableDoseRangeCanine = this.state.injectableDoseRangeCanine
      injectableDoseRangeFeline = this.state.injectableDoseRangeFeline
    }
    else {
      injectableDoseRangeCanine = this.translateListToArray(this.state.injectableDoseRangeCanine)
      injectableDoseRangeFeline = this.translateListToArray(this.state.injectableDoseRangeFeline)
    }

    let injectableObj = {
      available: this.state.injectableAvailable,
      concentration: this.state.injectableConcentration,
      doseCanine: this.state.injectableDoseCanine,
      doseRangeCanine: injectableDoseRangeCanine,
      doseFeline:this.state.injectableDoseFeline,
      doseRangeFeline: injectableDoseRangeFeline,
      routes: this.state.injectableRoutes
    }

    return injectableObj
  }

  getTabletObj = (mode) => {
     
    let tabletSizes = ['']
    let tabletDoseRangeCanine = ['']
    let tabletDoseRangeFeline = ['']

    if (mode === 'edit') {
      tabletSizes = this.state.tabletSizes
      tabletDoseRangeCanine = this.state.tabletDoseRangeCanine
      tabletDoseRangeFeline = this.state.tabletDoseRangeFeline
    }
    else {
      tabletSizes = this.translateListToArray(this.state.tabletSizes)
      tabletDoseRangeCanine = this.translateListToArray(this.state.tabletDoseRangeCanine)
      tabletDoseRangeFeline = this.translateListToArray(this.state.tabletDoseRangeFeline)
    }

    let tabletObj = {
      available: this.state.tabletAvailable,
      tabletSizes: tabletSizes,
      doseCanine: this.state.tabletDoseCanine,
      doseRangeCanine: tabletDoseRangeCanine,
      doseFeline: this.state.tabletDoseFeline,
      doseRangeFeline: tabletDoseRangeFeline
    }

    return tabletObj
  }

  getCapsuleObj = (mode) => {
     
    let capsuleSizes = ['']
    let capsuledoseRangeCanine = ['']
    let capsuledoseRangeFeline = ['']

    if (mode === 'edit') {
      capsuleSizes = this.state.capsuleSizes
      capsuledoseRangeCanine = this.state.capsuledoseRangeCanine
      capsuledoseRangeFeline = this.state.capsuledoseRangeFeline
    }
    else {
      capsuleSizes = this.translateListToArray(this.state.capsuleSizes)
      capsuledoseRangeCanine = this.translateListToArray(this.state.capsuledoseRangeCanine)
      capsuledoseRangeFeline = this.translateListToArray(this.state.capsuledoseRangeFeline)
    }

    let capsuleObj = {
      available: this.state.capsuleAvailable,
      capsuleSizes: capsuleSizes,
      doseCanine: this.state.capsuleDoseCanine,
      doseRangeCanine: capsuledoseRangeCanine,
      doseFeline: this.state.capsuledoseFeline,
      doseRangeFeline: capsuledoseRangeFeline
    }

    return capsuleObj

  }

  getSuspensionObj = (mode) => {
    
    let suspensionDoseCanine = ['']
    let suspensionDoseRangeFeline = ['']

    if (mode === 'edit') {
      suspensionDoseCanine = this.state.suspensionDoseCanine
      suspensionDoseRangeFeline = this.state.suspensionDoseRangeFeline
    }
    else {
      suspensionDoseCanine = this.translateListToArray(this.state.suspensionDoseCanine)
      suspensionDoseRangeFeline = this.translateListToArray(this.state.suspensionDoseRangeFeline)
    }

    let suspensionObj = {
      available: this.state.suspensionAvailable,
      doseCanine: suspensionDoseCanine,
      doseRangeCanine: this.state.suspensionDoseRangeCanine,
      doseFeline: this.state.suspensionDoseFeline,
      doseRangeFeline: suspensionDoseRangeFeline
    }

    return suspensionObj
  }

  translateListToArray = (tgtList) => {

    console.log('tgtList',tgtList)

    let tgtArray = ['']

    if (Array.isArray(tgtList)) {
      tgtArray = tgtList
    } else if (tgtList !== '') {
        tgtArray = tgtList.split(',')
    }  

    console.log('tgtArray',tgtList)

    return tgtArray
  }

  handleSave = () => {
    if (this.state.mode === 'edit') {
      // EDIT MODE: Validate 
      if (this.state.name === '' || this.state.description === '' )  {    
        this.setState({userError: 'Please provide medication name and description'}) 
       } else {
            
          // get children objects
          let injectableObj = this.getInjectableObject(this.state.mode)          
          let tabletObj = this.getTabletObj(this.state.mode)
          let capsuleObj = this.getCapsuleObj(this.state.mode)
          let suspensionObj = this.getSuspensionObj(this.state.mode)

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
          console.log('injectableObj',this.state.mode)
          let injectableObj = this.getInjectableObject(this.state.mode) 

          console.log('tabletObj',this.state.mode)         
          let tabletObj = this.getTabletObj(this.state.mode)

          console.log('capsuleObj',this.state.mode)    
          let capsuleObj = this.getCapsuleObj(this.state.mode)

          console.log('suspensionObj',this.state.mode) 
          let suspensionObj = this.getSuspensionObj(this.state.mode)
          
          // translate elements into an array
          console.log('aliasArr',this.state.mode) 
          let aliasArr = this.translateListToArray(this.state.alias) 
          
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

  render() {
    
    const { classes } = this.props
    const { spacing } = this.state

    return ( 
      <>
       <div>
          
       <Card className={classes.card}> 
       <CardContent>
          <p className={classes.userError}>{this.state.userError}</p>
          <Grid container className={classes.root} spacing={16}>
            <Grid item xs={12}>
                  <div>
                    <h2>Medicine</h2>
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
                          <TextField
                            id="med-description"
                            label="Description :"
                            className={classes.textField}
                            name='description'
                            type="string"
                            autoComplete="current-description"
                            value={this.state.description}
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
                                      color="primary"
                                    />
                                  }
                                  label="Controlled Medicine"
                              />                   
                            </div>      
                    </form>
                  </div>
            </Grid>
            <Grid item xs={12}>
              <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                   <Grid item>
                      <Card className={classes.card}> 
                      <CardContent>
                          <h2>Injectable</h2>
                          <div>
                          <form noValidate autoComplete="off">    
                              <div className='formItem'> 
                                  <FormControlLabel
                                    control={
                                      <Checkbox
                                        checked={this.state.injectableAvailable}
                                        onChange={this.handleCheckboxChange('injectableAvailable')}
                                        value="injectableAvailable"
                                        color="primary"
                                      />
                                    }
                                    label="Available"
                                  />                   
                              </div>
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
                                      id="med-doseRangeFeline"
                                      label="Dose Range Feline :"
                                      className={classes.textField}
                                      name='injectableDoseRangeFeline'
                                      type="string"
                                      autoComplete="current-doseRangeFeline"
                                      value={this.state.injectableDoseRangeFeline}
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
                          </div>                     
                      </CardContent>
                      </Card> 
                   </Grid>
                   <Grid item>
                      <Card className={classes.card}> 
                      <CardContent>
                          <h2>Tablet</h2>
                          <div>
                          <form noValidate autoComplete="off">  
                            <div className='formItem'> 
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={this.state.tabletAvailable}
                                      onChange={this.handleCheckboxChange('tabletAvailable')}
                                      value="tabletAvailable"
                                      color="primary"
                                    />
                                  }
                                  label="Available"
                                />                   
                            </div>
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

                         </div>               
                      </CardContent>
                      </Card> 
                   </Grid>
                   <Grid item>
                      <Card className={classes.card}> 
                      <CardContent>
                          <h2>Capsule</h2>
                          <div>
                          <form noValidate autoComplete="off">  
                            <div className='formItem'> 
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={this.state.capsuleAvailable}
                                      onChange={this.handleCheckboxChange('capsuleAvailable')}
                                      value="capsuleAvailable"
                                      color="primary"
                                    />
                                  }
                                  label="Available"
                                />                   
                            </div>
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
                          
                         </div>               
                      </CardContent>
                      </Card>
                   </Grid>
                   <Grid item>
                      <Card className={classes.card}> 
                      <CardContent>
                         <h2>Suspension</h2>
                         <div>
                          <form noValidate autoComplete="off">  
                            <div className='formItem'> 
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={this.state.suspensionAvailable}
                                      onChange={this.handleCheckboxChange('suspensionAvailable')}
                                      value="suspensionAvailable"
                                      color="primary"
                                    />
                                  }
                                  label="Available"
                                />                   
                            </div>
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
                          
                         </div> 
                      </CardContent>
                      </Card>
                   </Grid>
              </Grid>
            </Grid>
          </Grid>
         
       </CardContent>

       <CardActions>
            <Button size="small" variant="contained" color={this.props.leftbuttonColor}  
                onClick={() => this.handleSave()}>{this.props.leftButtonLabel}
            </Button>
            <Button size="small" variant="contained" color={this.props.rightbuttonColor} 
                onClick={() => this.props.handleRightButtonSelection(this.props.med)}>
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