import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Fab from '@material-ui/core/Fab';
import PetsIcon from '@material-ui/icons/Pets'
import AddIcon from '@material-ui/icons/Add'
//Components
import PatientCard from './components/PatientCard'
import PatientForm from './components/PatientForm'
import PatientView from './components/PatientView'
// API bridge for express routes
import APIpatient from '../../utils/APIpatient'
import APIsession from '../../utils/APIsession'

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: `0 ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: ' 10px 0px 7px 40px',
  },
  fab: {
    margin: theme.spacing.unit,
    boxShadow: '5px 5px 5px 5px rgb(82, 82, 100)',
  },
  pageHeadContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center' ,
    color: 'white',
    margin: '7px 0px 7px 20px',
    // backgroundColor: 'rgb(4, 138, 4)',
    borderRadius: '10px',
    boxShadow: '5px 5px 5px 5px rgb(82, 82, 100)',
  },
  pageHead: {
    color: 'white',
    margin: '7px 50px 7px 20px',
  },
  pageHeadDelete: {
    color: 'red',
    fontWeight: 'bold',
    margin: '7px 0px 0px 20px',
    backgroundColor: 'white',
    maxWidth: 230,
    borderRadius: '10px',
    boxShadow: '5px 5px 5px 5px rgb(82, 82, 100)',
    padding: '0px 0px 0px 10px' 
  },
  pageHeadUpdate: {
    color: 'blue',
    fontWeight: 'bold',
    margin: '7px 0px 0px 20px',
    backgroundColor: 'white',
    maxWidth: 325,
    borderRadius: '10px',
    boxShadow: '5px 5px 5px 5px rgb(82, 82, 100)',
    padding: '0px 0px 0px 10px' 
  },
  formContainer: {
    maxWidth: 400,
    maxHeight: 600,
  },
 
}) 

class Patient extends Component {

  state = {
    sessionUser: '',
    patients: [],
    screenMode: 'list',
    targetPatient: ''
  }
   
  componentDidMount() {
    this.loadData()    
  }
  
  loadData = () => {    
    // have user logged-in
    APIsession.getSessionUser()
      .then(r => {  
        let sessionUser = r.data
        this.setState({ sessionUser : sessionUser }) 
        this.loadPatients()
      })
      .catch(err => console.log(err))
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

  handlePatientViewSelection = (tgtPat) => {
    // Change screen mode to User DELETE mode, and store target-med
    this.setState({ screenMode: 'view', targetPatient: tgtPat })
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
        <div className={classes.pageHeadUpdate}>
            <h2 >
            Add new patient
            </h2>
          </div>
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
            <div className={classes.pageHeadUpdate}>
              <h2>
              Update patient information
              </h2>
            </div>
            <PatientForm 
              mode={this.state.screenMode}
              patient={this.state.targetPatient}
              leftbuttonColor='primary'
              leftButtonLabel='Save'
              handleLeftButtonSelection={this.handleSavePatient}
              rightbuttonColor='default'
              rightButtonLabel='Cancel'   
              handleRightButtonSelection={this.handleCancel}
              isNameDisabled={false}
            />
          </>
      ) // return()

    } else if (this.state.screenMode === 'delete') {

      return(
        <>
          <div>
            <div className={classes.pageHeadDelete}>
              <h2>
                Delete this patient?
              </h2>
            </div>
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
    
    } else  if (this.state.screenMode === 'view') {
      return(
        <>
            <div className={classes.pageHeadUpdate }>
              <h2>
                Patient information
              </h2>
            </div>
            <PatientView 
              mode={this.state.screenMode}
              patient={this.state.targetPatient}
              rightbuttonColor='primary'
              rightButtonLabel='Return'  
              handleRightButtonSelection={this.handleCancel} 
            />
         
        </>
      ) // return()
    } else {

      return(
        <>
          <Grid container spacing={0}>
          <div className={classes.pageHeadContainer}>
            <Grid item>
              <Avatar className={classes.avatar}>
                <PetsIcon /> 
              </Avatar>          
            </Grid>
            <Grid item>            
              <h2 className={classes.pageHead}>
                Patients
              </h2>                 
            </Grid>             
            </div>  
            <Grid item>
              <Fab 
                aria-label="Add" 
                color="secondary" 
                className={classes.fab}
                disabled = {this.state.sessionUser.isAdmin ? false : true} 
                onClick={() => this.handlePatientAddSelection()}>
                <AddIcon />
              </Fab>
            </Grid>    
          </Grid>
        
        <div className={classes.root}> 
        <Grid container spacing={8}
                alignContent='center'
                style={{ margin: 'auto'}}>
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
                   isDisabled={this.state.sessionUser.isAdmin ? false : true} 
                   handleRightButtonSelection={this.handlePatientDeleteSelection}
                   viewThirdButton={true}
                   viewButtonColor={this.state.sessionUser.isAdmin ? 'default' : 'primary'} 
                   viewButtonLabel='View'
                   handleViewButtonSelection={this.handlePatientViewSelection}   
                 />   
              ))
            }
          </Grid>
          </div>

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