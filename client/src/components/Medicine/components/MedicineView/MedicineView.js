import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'

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
    suspensionDoseRangeFeline: [0],

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
                              margin="normal"
                              disabled={true}
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
                              margin="normal"
                              disabled={true}
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
                            margin="normal"
                            disabled={true}
                          />                 
                      </div>
                      <div className='formItem'> 
                              <FormControlLabel
                                control={
                                    <Checkbox
                                      checked={this.state.controlled}
                                      value="controlled"
                                      color="primary"
                                      disabled={true}
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
                                        value="injectableAvailable"
                                        color="primary"
                                        disabled={true}
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
                                    margin="normal"
                                    disabled={true}
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
                                  margin="normal"
                                  disabled={true}
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
                                      margin="normal"
                                      disabled={true}
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
                                  margin="normal"
                                  disabled={true}
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
                                      margin="normal"
                                      disabled={true}
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
                                      margin="normal"
                                      disabled={true}
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
                                      checked={this.state.tabletAvailable}                                      value="tabletAvailable"
                                      color="primary"
                                      disabled={true}
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
                                margin="normal"
                                disabled={true}
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
                                margin="normal"
                                disabled={true}
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
                                margin="normal"
                                disabled={true}
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
                                margin="normal"
                                disabled={true}
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
                                margin="normal"
                                disabled={true}
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
                                      value="capsuleAvailable"
                                      color="primary"
                                      disabled={true}
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
                                margin="normal"
                                disabled={true}
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
                                margin="normal"
                                disabled={true}
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
                                margin="normal"
                                disabled={true}
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
                                margin="normal"
                                disabled={true}
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
                                margin="normal"
                                disabled={true}
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
                                      value="suspensionAvailable"
                                      color="primary"
                                      disabled={true}
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
                                margin="normal"
                                disabled={true}
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
                                margin="normal"
                                disabled={true}
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
                                margin="normal"
                                disabled={true}
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
                                margin="normal"
                                disabled={true}
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