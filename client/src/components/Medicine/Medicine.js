import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Fab from '@material-ui/core/Fab';
import ColorizeIcon from '@material-ui/icons/Colorize'
import AddIcon from '@material-ui/icons/Add'
// Components
import MedCard from './components/MedicineCard'
import MedForm from './components/MedicineForm'
import MedView from './components/MedicineView'
// API
import APImeds from '../../utils/APImeds'
import APIsession from '../../utils/APIsession'

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

class Medicine extends Component {
   
  state = {
    sessionUser: '',
    meds: [],
    screenMode: 'list',
    targetMed: ''
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
        this.loadMeds()   
      })
      .catch(err => console.log(err))
  }

  loadMeds = () => {
    APImeds.getMeds()
      .then(res => {
        this.setState({ meds: res.data })
      })
      .catch(err => console.log(err))
  }
  
  handleMedAddSelection = () => {
    // change screen mode to user ADD mode
    this.setState({ screenMode: 'add' })
  }
  
  handleMedUpdateSelection = (tgtMed) => {
    // change screen mode to user EDIT mode, and store target-med
    this.setState({ screenMode: 'edit', targetMed: tgtMed })
  }
  
  handleMedDeleteSelection = (tgtMed) => {
    // Change screen mode to User DELETE mode, and store target-med
    this.setState({ screenMode: 'delete', targetMed: tgtMed })
  }

  handleMedViewSelection = (tgtMed) => {
    // Change screen mode to User DELETE mode, and store target-med
    this.setState({ screenMode: 'view', targetMed: tgtMed })
  }

  handleCreateMed =(tgtMed) => {
     
    console.log('create-med',tgtMed)
    
    // tst
    this.setState({screenMode: 'list',targetMed: ''}) 

    // create new user
    APImeds.createUpdateMed(tgtMed)
      .then(r => {       
        // Restore main view
        this.setState({screenMode: 'list',targetMed: ''}) 
        // reload the data
        this.loadMeds()
      })
      .catch(err => console.log(err))
  }

  handleSaveMed = (tgtMed) => {
     
    console.log('save-med',tgtMed)

    // Save updated user data    
    APImeds.updateMed(tgtMed._id, tgtMed)
      .then(r => {  
        // Restore main view
       this.setState({screenMode: 'list', targetMed: ''})  
       // reload the data
      this.loadMeds()
      })
      .catch(err => console.log(err))
  }

  handleDeleteMed = (tgtMed) => {
    // delete user    
    APImeds.deleteMed(tgtMed._id)
      .then(r => {  
        // Restore main view
        this.setState({screenMode: 'list',targetMed: ''})  
        // reload the data
        this.loadMeds()  
      })
      .catch(err => console.log(err)) 
  }
  
  handleCancel = (tgtMed) => {
    // reload the data
    this.loadMeds()
    // Just reset selected user and change screen mode to list
    this.setState({ screenMode: 'list', targetMed: '' })
  }

  renderView = () => {

    const { classes } = this.props
     
    if (this.state.sessionUser) {
      
      if (this.state.screenMode === 'add') {
          
        return(
          <>
            <h1 className={classes.pageHead}>
              Add new medicine
            </h1>
            <MedForm 
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
            <MedForm 
              mode={this.state.screenMode}
              med={this.state.targetMed}
              leftbuttonColor='primary'
              leftButtonLabel='Save'
              handleLeftButtonSelection={this.handleSaveMed}
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
                Do you want to delete this Medicine?
              </h1>
              <MedCard 
                    med={this.state.targetMed}
                    userSession={this.state.sessionUser}
                    leftbuttonColor='secondary'
                    leftButtonLabel='Delete'
                    handleLeftButtonSelection={this.handleDeleteMed}
                    rightbuttonColor='default'
                    rightButtonLabel='Cancel'
                    handleRightButtonSelection={this.handleCancel}
                    viewThirdButton={false}
                    viewButtonColor='primary'
                    viewButtonLabel='View'
                    handleViewButtonSelection={this.handleMedViewSelection}   
                  />   
            </div>
          </>
        ) // return

      } else  if (this.state.screenMode === 'view') {
          
        return(
          <>
            <h1 className={classes.pageHead}>
              View medicine information
            </h1>
            <MedView 
              mode={this.state.screenMode}
              med={this.state.targetMed}
              rightbuttonColor='primary'
              rightButtonLabel='Return'  
              handleRightButtonSelection={this.handleCancel} 
            />
          </>
        ) // return()
          
      }else {
        
        return(
          <>
              <Grid container spacing={0}>
              <Grid item>
                <Avatar className={classes.avatar}>
                <ColorizeIcon /> 
                </Avatar>
              </Grid>
              <Grid item>
                <h1 className={classes.pageHead}>Medications</h1>
              </Grid>
              <Grid item>
                <Fab color="secondary" aria-label="Add" className={classes.fab} 
                     disabled = {this.state.sessionUser.isAdmin ? false : true}
                     onClick={() => this.handleMedAddSelection()}
                     >
                  <AddIcon />
                </Fab>
              </Grid>
            </Grid>
          
            <div>
              {
                this.state.meds.map((med, index) => (
                  <MedCard 
                    key={index}
                    med={med}
                    userSession={this.state.sessionUser}
                    leftbuttonColor='primary'
                    leftButtonLabel='Update'
                    handleLeftButtonSelection={this.handleMedUpdateSelection}
                    rightbuttonColor='secondary'
                    rightButtonLabel='Remove'
                    handleRightButtonSelection={this.handleMedDeleteSelection}
                    viewThirdButton={true}
                    viewButtonColor='primary'
                    viewButtonLabel='View'
                    handleViewButtonSelection={this.handleMedViewSelection}                  
                  />   
                ))
              }
            </div>
              
          </>
        ) // return()

      }

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

Medicine.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Medicine)