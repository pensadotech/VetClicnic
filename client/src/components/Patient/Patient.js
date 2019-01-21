import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Fab from '@material-ui/core/Fab';
import PetsIcon from '@material-ui/icons/Pets'
import AddIcon from '@material-ui/icons/Add'
// API bridge for express routes
import APIpatient from '../../utils/APIpatient'
//Components
import PatientCard from './components/PatientCard'
import PatientForm from './components/PatientForm'

const styles = theme => ({
    avatar: {
      margin: ' 10px 0px 0px 50px'
    },
    pageHead : {
      color:'white',
      margin: '7px 0px 0px 20px'
    },
    fab: {
      margin: theme.spacing.unit
    }
  }) 

class Patient extends Component {

  state = {
    patients: [],
    screenMode: 'list',
    targetPatient: ''
  }
   
  componentDidMount() {
    this.loadPatients()
  }
  
  loadPatients = () => {
    APIpatient.getPatients()
    .then( r => {
      this.setState({ patients: r.data })
    })
    .catch(e => console.log(e))
  }  

  handlePatientAddSelection = () => {
    //changes the screen mode to ADD Patient
    this.setState( {screenMode: 'add'})
  }

  handlePatientUpdateSelection = (tgtPat) => {
    //changes the screen mode to EDIT Patient, and store target-patient
    this.setState( {screenMode: 'edit', targetPatient: tgtPat})
  }

  handlePatientDeleteSelection = (tgtPat) => {
    //changes the screen mode to DELETE Patient, and store target-patient
    this.setState( {screenMode: 'delete', targetPatient: tgtPat})
  }

  handleCreatePatient = (tgtPat) => {

      //creates new patient
      APIpatient.createUpdatePatient(tgtPat)
        .then(r => {
          //restores the main view
          this.setState({
            screenMode: 'list',
            targetPatient: ''
          })
          //reloads the data
          this.loadPatients()
        })
        .catch(e => console.log(e))
  }

  handleSavePatient = (tgtPat) => {

      //save updated user data
      APIpatient.updatePatient(tgtPat._id, tgtPat)
        .then(r => {
          //restores the main view
          this.setState({
            screenMode: 'list',
            targetPatient: ''
          })
          //reload the data
          this.loadPatients()
        })
        .catch(e => console.log(e))
  }
   
  handleDeletePatient = (tgtPat) => {
      //deletes the patient
      APIpatient.deletePatient(tgtPat._id)
        .then(r => {
          //restores the mainview
          this.setState({
            screenMode: 'list',
            targetPatient: ''
          })
          //reloads the data
          this.loadPatients()
        })
        .catch(e => console.log(e))
  }

  handleCancel = (tgtPat) => {
      //reload the data
      this.loadPatients()
      // Just reset selected user and change screen mode to list
      this.setState({
        screenMode: 'list',
        targetPatient: ''
      })
   }


  renderView = () => {
    const { classes } = this.props

    if(this.state.screenMode === 'add') {

      return(
        <>
        <h1 className={classes.pageHead}>
          Add new patient
        </h1>
        <PatientForm 
          mode={this.state.screenMode}
          patient=''
          leftbuttonColor='primary'
          leftButtonLabel='Add'
          handleLeftButtonSelection={this.handleCreatePatient}
          rightbuttonColor='default'
          rightButtonLabel='Cancel'   
          handleRightButtonSelection={this.handleCancel}
          isNameDisabled={false}
        />
      </>
      ) //return()

    }  else if (this.state.screenMode === 'edit') {

        return(
          <>
            <h1 className={classes.pageHead}>
              Update patient information
            </h1>
            <PatientForm 
              mode={this.state.screenMode}
              patient={this.state.targetPatient}
              leftbuttonColor='primary'
              leftButtonLabel='Save'
              handleLeftButtonSelection={this.handleSavePatient}
              rightbuttonColor='default'
              rightButtonLabel='Cancel'   
              handleRightButtonSelection={this.handleCancel}
              isNameDisabled={true}
            />
          </>
      ) // return()

    } else if (this.state.screenMode === 'delete') {

      return(
        <>
          <div>
            <h1 className={classes.pageHead}>
              Do you want to delete this patient?
            </h1>
            <PatientCard
                   patient={this.state.targetPatient}
                   leftbuttonColor='secondary'
                   leftButtonLabel='Delete'
                   handleLeftButtonSelection={this.handleDeletePatient}
                   rightbuttonColor='default'
                   rightButtonLabel='Cancel'
                  isDisabled={false}
                  handleRightButtonSelection={this.handleCancel}
                 />   
          </div>
        </>
      ) //return
    
    } else {

      return(
        <>
          <Grid container spacing={0}>
          <Grid item>
            <Avatar className={classes.avatar}>
            <PetsIcon /> 
            </Avatar>
          </Grid>
          <Grid item>
            <h1 className={classes.pageHead}>Patients</h1>
          </Grid>
          <Grid item>
            <Fab color="secondary" aria-label="Add" 
                 className={classes.fab}
                 onClick={() => this.handlePatientAddSelection()}>
              <AddIcon  />
            </Fab>
          </Grid>
        </Grid>

        <Grid alignContent='center'
              style={{ margin: 'auto', marginLeft: '5%' }}
              container spacing={32}>
            {
              this.state.patients.map((patient, index) => (
                 <PatientCard
                   key={index}
                   patient={patient}
                   leftbuttonColor='primary'
                   leftButtonLabel='Update'
                   handleLeftButtonSelection={this.handlePatientUpdateSelection}
                   rightbuttonColor='secondary'
                   rightButtonLabel='Remove'
                  isDisabled={false}
                  handleRightButtonSelection={this.handlePatientDeleteSelection}
                 />   
              ))
            }
          </Grid>
            
        </>
      ) //return()
    
    }
  } 

  render() {
   
    return (
      <>
      {this.renderView()}
      </>
      
    )
  }
}

Patient.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Patient)