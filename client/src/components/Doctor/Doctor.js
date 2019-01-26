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
// Local style
import './Doctor.css'

const styles = theme => ({
  avatar: {
    margin: ' 10px 0px 0px 50px'
  },
  pageHead: {
    color: 'white',
    margin: '7px 0px 0px 20px'
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
          <h1 className={classes.pageHead}>
            Add new a Doctor
          </h1>
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
          <h1 className={classes.pageHead}>
            Update doctor information
          </h1>
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
            <h1 className={classes.pageHead}>
              Do you want to remove this Doctor?
            </h1>
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
              <Fab color="secondary" aria-label="Add" 
                   className={classes.fab}
                   onClick={() => this.handleDoctorAddSelection()}>
                <AddIcon />
              </Fab>
            </Grid>
          </Grid>
        
          <Grid alignContent='center'
            style={{ margin: 'auto',marginLeft: '5%' }}
            container spacing={32}>
            {
              this.state.doctors.map((doctor, index) => (
                 <DoctorCard 
                   key={index}
                   doctor={doctor}
                   leftbuttonColor='primary'
                   leftButtonLabel='Update'
                   handleLeftButtonSelection={this.handleDoctorUpdateSelection}
                   rightbuttonColor='secondary'
                   rightButtonLabel='Remove'
                  isDisabled={false}
                  handleRightButtonSelection={this.handleDoctorDeleteSelection}
                 />
              ))
            }
          </Grid>
            
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