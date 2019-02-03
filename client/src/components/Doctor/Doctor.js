import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Fab from '@material-ui/core/Fab'
import FaceIcon from '@material-ui/icons/Face'
import AddIcon from '@material-ui/icons/Add'
// Components
import DoctorCard from './components/DoctorCard'
import DoctorForm from './components/DoctorForm'
// API
import APIdoctors from '../../utils/APIdoctor'

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: `0 ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: ' 10px 0px 0px 50px'
  },
  pageHead: {
    color: 'white',
    margin: '7px 0px 0px 20px'
  },
  pageHeadDelete: {
    color: 'red',
    fontWeight: 'bold',
    margin: '7px 0px 0px 20px',
    backgroundColor: 'white',
    maxWidth: 220,
    borderRadius: '10px',
    boxShadow: '5px 5px 5px 5px rgb(82, 82, 100)',
    padding: '0px 0px 0px 10px' 
  },
  pageHeadUpdate: {
    color: 'blue',
    fontWeight: 'bold',
    margin: '7px 0px 0px 20px',
    backgroundColor: 'white',
    maxWidth: 350,
    borderRadius: '10px',
    boxShadow: '5px 5px 5px 5px rgb(82, 82, 100)',
    padding: '0px 0px 0px 10px' 
  },
  formContainer: {
    maxWidth: 400,
    maxHeight: 600,
  },
  fab: {
    margin: theme.spacing.unit
  }
})

class Doctor extends Component {
   
  state = {
    doctors: [],
    screenMode: 'list',
    targetDoctor: ''
  }
  
  componentDidMount() {
    this.loadDoctors()
  }

  loadDoctors = () => {
    APIdoctors.getDoctors()
      .then(res => {
        this.setState({ doctors: res.data })
      })
      .catch(err => console.log(err))
  }
  
  handleDoctorAddSelection = () => {
    // change screen mode to user ADD mode
    this.setState({ screenMode: 'add' })
  }
  
  handleDoctorUpdateSelection = (tgtDoctor) => {
    // change screen mode to user EDIT mode, and store target-user
    this.setState({ screenMode: 'edit', targetDoctor: tgtDoctor })
  }
  
  handleDoctorDeleteSelection = (tgtDoctor) => {
    // Change screen mode to User DELETE mode, and store target-user
    this.setState({ screenMode: 'delete', targetDoctor: tgtDoctor })
  }
  handleCreateDoctor =(tgtDoctor) => {
  //create new user
    APIdoctors.createUpdateDoctor(tgtDoctor)
      .then(r => {       
        // Restore main view
        this.setState({screenMode: 'list',targetDoctor: ''}) 
        // reload the data
        this.loadDoctors()
      })
      // Shows errors in the inspector
      .catch(err => console.log(err))
  }

  handleSaveDoctor = (tgtDoctor) => {
    // Save updated user data    
    APIdoctors.updateDoctor(tgtDoctor._id,tgtDoctor)
      .then(r => {  
        // Restore main view
       this.setState({screenMode: 'list',targetDoctor: ''})  
       // reload the data
      this.loadDoctors()
      })
      .catch(err => console.log(err))
  }

  handleDeleteDoctor = (tgtDoctor) => {
    // delete doctor    
    APIdoctors.deleteDoctor(tgtDoctor._id)
      .then(r => {  
        // Restore main view
        this.setState({screenMode: 'list',targetDoctor: ''})  
        // reload the data
        this.loadDoctors()  
      })
      .catch(err => console.log(err)) 
  }
  
  handleCancel = (tgtDoctor) => {
    // reload the data
    this.loadDoctors()
    // Just reset selected user and change screen mode to list
    this.setState({ screenMode: 'list', targetDoctor: '' })
  }

  renderView = () => {

    const { classes } = this.props
    
    if (this.state.screenMode === 'add') {
        
      return(
        <>
         <div className={classes.pageHeadUpdate}>
            <h2 >
            Add new a doctor
            </h2>
          </div>
          <DoctorForm 
            mode={this.state.screenMode}
            doctor=''
            leftbuttonColor='primary'
            leftButtonLabel='Add'
            handleLeftButtonSelection={this.handleCreateDoctor}
            rightbuttonColor='default'
            rightButtonLabel='Cancel'   
            handleRightButtonSelection={this.handleCancel}
            isNameDisabled={false}
          />
        </>
      ) // return()

    } else  if (this.state.screenMode === 'edit') {

      return(
        <>
          <div className={classes.pageHeadUpdate}>
              <h2>
              Update doctor information
              </h2>
          </div>
          <DoctorForm 
            mode={this.state.screenMode}
            doctor={this.state.targetDoctor}
            leftbuttonColor='primary'
            leftButtonLabel='Save'
            handleLeftButtonSelection={this.handleSaveDoctor}
            rightbuttonColor='default'
            rightButtonLabel='Cancel'   
            handleRightButtonSelection={this.handleCancel}
            isNameDisabled={false}
          />
        </>
      ) // return()

    } else  if (this.state.screenMode === 'delete') {

      return(
        <>
          <div>
          <div className={classes.pageHeadDelete}>
              <h2>
                Delete this doctor?
              </h2>
            </div>
            <DoctorCard 
                   doctor={this.state.targetDoctor}
                   leftbuttonColor='secondary'
                   leftButtonLabel='Delete'
                   handleLeftButtonSelection={this.handleDeleteDoctor}
                   rightbuttonColor='default'
                   rightButtonLabel='Cancel'
                  isDisabled={false}
                  handleRightButtonSelection={this.handleCancel}
                 />   
          </div>
        </>
      ) // return

    } else {

      return(
        <>

            <Grid container spacing={0}>
            <Grid item>
              <Avatar className={classes.avatar}>
                <FaceIcon /> 
              </Avatar>
            </Grid>
            <Grid item>
              <h1 className={classes.pageHead}>Doctors</h1>
            </Grid>
            <Grid item>
              <Fab aria-label="Add" 
                   color="secondary"  
                   className={classes.fab}
                   onClick={() => this.handleDoctorAddSelection()}>
                <AddIcon />
              </Fab>
            </Grid>
          </Grid>
          
          <div className={classes.root}> 
          <Grid container spacing={8}>
            {
              this.state.doctors.map((doctor, index) => (
                 <DoctorCard 
                   key={index}
                   doctor={doctor}
                   leftbuttonColor='primary'
                   leftButtonLabel='Update'
                   handleLeftButtonSelection={this.handleDoctorUpdateSelection}
                   rightbuttonColor='secondary'
                   rightButtonLabel='Delete'
                  isDisabled={false}
                  handleRightButtonSelection={this.handleDoctorDeleteSelection}
                 />
              ))
            }
          </Grid>
          </div>
            
        </>
      ) // return()

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

Doctor.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Doctor)