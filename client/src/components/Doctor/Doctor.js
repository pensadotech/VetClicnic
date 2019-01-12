import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import SettingsIcon from '@material-ui/icons/Settings'
import Fab from '@material-ui/core/Fab';
import ColorizeIcon from '@material-ui/icons/Colorize'
import AddIcon from '@material-ui/icons/Add';

// Components
import DoctorCard from './components/DoctorCard'
import DoctorForm from '../Doctor/components/DoctorForm/DoctorForm'

// API
import APIdoctors from '../../utils/APIdoctor'
// Local style
import './Doctor.css'


// class Doctor extends Component {

//   state = {
//     doctors: []
//   }

//   componentDidMount() {
//     this.loadDoctors()
//   }

//   loadDoctors = () => {
//     APIdoctors.getDoctors()
//       .then(res => {
//         console.log(res.data)
//         this.setState({ doctors: res.data })
//       })
//       .catch(err => console.log(err))
//   }


//   render() {

//     return (
//       <>
//         {
//           this.state.doctors.map((doctor, index) => {
//             return (
//               <div>
//                 <h3><strong>{doctor.name}</strong></h3>
//                 <p>{doctor.phone}</p>
//                 <p>{doctor.mobilePhone}</p>
//                 <p>{doctor.email}</p>
//               </div>
//             )
//           })
//         }
//       </>
//     )
//   }
// }

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
        console.log(res.data)
        this.setState({ meds: res.data })
      })
      .catch(err => console.log(err))
  }
  
  handleMedAddSelection = () => {
    // change screen mode to user ADD mode
    this.setState({ screenMode: 'add' })
  }
  
  handleMedUpdateSelection = (tgtDoctor) => {
    // change screen mode to user EDIT mode, and store target-user
    this.setState({ screenMode: 'edit', targetDoctor: tgtDoctor })
  }
  
  handleMedDeleteSelection = (tgtDoctor) => {
    // Change screen mode to User DELETE mode, and store target-user
    this.setState({ screenMode: 'delete', targetDoctor: tgtDoctor })
  }
  handleCreateDoctor =(tgtDoctor) => {
     
    // create new user
    APIdoctors.createUpdateMed(tgtDoctor)
      .then(r => {       
        // Restore main view
        this.setState({screenMode: 'list',targetDoctor: ''}) 
        // reload the data
        this.loadDoctors()
      })
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
            Add new medicine
          </h1>
          <DoctorForm 
             mode={this.state.screenMode}
            med=''
            leftbuttonColor='primary'
            leftButtonLabel='Add'
            handleLeftButtonSelection={this.handleCreateMed}
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
            Update medicine information
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
            isNameDisabled={true}
          />
        </>
      ) // return()

    } else  if (this.state.screenMode === 'delete') {

      return(
        <>
          <div>
            <h1 className={classes.pageHead}>
              Do you want to delete this Medicine?
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
              <ColorizeIcon /> 
              </Avatar>
            </Grid>
            <Grid item>
              <h1 className={classes.pageHead}>Doctors</h1>
            </Grid>
            <Grid item>
              <Fab color="secondary" aria-label="Add" className={classes.fab}>
                <AddIcon  onClick={() => this.handleDoctorAddSelection()}/>
              </Fab>
            </Grid>
          </Grid>
        
          <Grid>
            {
              this.state.doctors.map((doctor, index) => (
                <div>
                  console.log(doctor, index)
                 <DoctorCard 
                   key={index}
                   doctor={doctor}
                   leftbuttonColor='primary'
                   leftButtonLabel='Update'
                   handleLeftButtonSelection={this.handleUpdateSelection}
                   rightbuttonColor='secondary'
                   rightButtonLabel='Remove'
                  isDisabled={false}
                  handleRightButtonSelection={this.handleMedDeleteSelection}
                 />
                 </div>
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