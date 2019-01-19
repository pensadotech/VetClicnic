import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'


import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import PetsIcon from '@material-ui/icons/Pets'
// API
import APIpatient from '../../../../utils/APIpatient'
// Local style
import './PatientForm.css'
import { Grid } from "@material-ui/core";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
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
        maxHeight: 620, 
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
      }
})

class PatientForm extends Component {

    state = {
        mode: '',
        patientname: '',
        __id: '',
        ownername: '',
        weight: '',
        phone: '',
        userError: '',

    }

    componentDidMount = () => {
        if(this.props.patientname !== '') {
            this.setState( {
                mode: this.props.mode,
                patientname: this.props.patientname,
                __id: this.props.__id,
                weight: this.props.weight,
                ownername: this.props.ownername,
                phone: this.props.phone,
                species: this.props.species
            })
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState( { [name] : value})
    }




    handleSave = () => {
        if (this.state.mode === 'edit') {
          // EDIT MODE: Validate 
          if (this.state.patientname === '' || this.state.ownername === '' )  {    
            this.setState({userError: 'Please provide patient name and owner name'}) 
           } else {
    
              // translate
              let newPatient ={
                _id: this.state._id,
                patientname: this.state.patientname,
                ownername: this.state.ownername,
                weight: this.state.weight,
                phone: this.state.phone,
                species: this.props.species
              }
    
              // send information back 
              this.props.handleLeftButtonSelection(newPatient)
           }
    
        } else {
           // ADD MODE: Validate
           if (this.state.patientname === '' || this.state.ownername === '' )  {    
            this.setState({userError: 'Please provide patient name and owner name'}) 
           } else {
              
              // translate
              let newPatient ={
                patientname: this.state.patientname,
                ownername: this.state.ownername,
                weight: this.state.weight,
                phone: this.state.phone,
                species: this.props.species
                // formNumber: this.props.patientsLength
              }
              
              // Check if user already exist 
              APIpatient.findOne(this.state.patientname)
                .then(r => {  

                  if(r.data !== null ) {
                    this.setState({userError: `The patient name "${r.data.patientname}" already exist, please provide a new one`})  
                  } else {
                    // send information back 
                    this.props.handleLeftButtonSelection(newPatient)
                  }           
               })
               .catch(err => console.log(err))   
                         
           }
        }
      }

      render() {

          const { classes } = this.props

        return(
            <>
        <Card className={classes.card}> 
          <CardContent> 
            <p className='userError'>{this.state.userError}</p>
            <form className={classes.container} noValidate autoComplete="off">
              <div className='formItem'>
                <TextField
                      required
                      id="patient-name"
                      label="Patient Name :"
                      className={classes.textField}
                      name='patientname'
                      type="string"
                      autoComplete="current-patientname"
                      value={this.state.patientname}
                      onChange={this.handleInputChange}
                      margin="normal"
                      disabled={this.props.isNameDisabled}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PetsIcon />
                          </InputAdornment>
                        ),
                      }}
                    />   
              </div>
              <div className='formItem'>
                <TextField
                      required
                      id="owner name"
                      label="Owner Name :"
                      className={classes.textField}
                      name='ownername'
                      type="string"
                      autoComplete="current-ownername"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                      margin="normal"
                    />   
              </div>
              <div className='formItem'> 
                  <TextField
                    id="species"
                    label="Species :"
                    className={classes.textField}
                    name='species'
                    type="string"
                    autoComplete="current-species"
                    value={this.state.species}
                    onChange={this.handleInputChange}
                    margin="normal"
                  />                    
              </div>
              <div className='formItem'> 
                  <TextField
                    id="breed"
                    label="Breed :"
                    className={classes.textField}
                    name='breed'
                    type="string"
                    autoComplete="current-breed"
                    value={this.state.breed}
                    onChange={this.handleInputChange}
                    margin="normal"
                  />                    
              </div>
              <div className='formItem'> 
                  <TextField
                    id="weight"
                    label="Weight :"
                    className={classes.textField}
                    name='weight'
                    type="string"
                    autoComplete="current-weight"
                    value={this.state.weight}
                    onChange={this.handleInputChange}
                    margin="normal"
                  />                    
              </div>
              <div className='formItem'> 
                  <TextField
                    id="phone"
                    label="Phone :"
                    className={classes.textField}
                    name='phone'
                    type="string"
                    autoComplete="current-phone"
                    value={this.state.phone}
                    onChange={this.handleInputChange}
                    margin="normal"
                  />                    
              </div>
           
            </form>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained" color={this.props.leftbuttonColor}  
                onClick={() => this.handleSave()}>{this.props.leftButtonLabel}
            </Button>
            <Button size="small" variant="contained" color={this.props.rightbuttonColor} 
                onClick={() => this.props.handleRightButtonSelection(this.props.patientname)}>
                {this.props.rightButtonLabel}
            </Button>
          </CardActions>    
        </Card> 
      </>

        ) //return ()

      } //render()

} // class PatientForm

PatientForm.propTypes = {
    classes: PropTypes.object.isRequired,
  }

export default withStyles(styles)(PatientForm)