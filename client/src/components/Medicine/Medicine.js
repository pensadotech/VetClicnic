import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Fab from '@material-ui/core/Fab';
import ColorizeIcon from '@material-ui/icons/Colorize'
import AddIcon from '@material-ui/icons/Add'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip'
// Components
import MedCard from './components/MedicineCard'
import MedForm from './components/MedicineForm'
import MedView from './components/MedicineView'
// API
import APImeds from '../../utils/APImeds'
import APIsession from '../../utils/APIsession'

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflowX: 'auto',
    padding: `0 ${theme.spacing.unit * 3}px`,
    // margin:'0px 10px 0px 10px',
    borderRadius: '30px',
    boxShadow: '5px 5px 5px 5px rgb(82, 82, 100)',
    [theme.breakpoints.down('sm')]: {
      margin: '15px 5px 0px 5px',
     },
     [theme.breakpoints.up('md')]: {
      margin: '20px 10px 0px 10px',
     },
     [theme.breakpoints.up('lg')]: {
      margin: '20px 20px 0px 20px',
     }
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
    // backgroundColor: 'rgb(165, 2, 143)',
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
    maxWidth: 250,
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
  chipTitle: {   
    [theme.breakpoints.down('sm')]: {
      margin: '2px 5px 0px 5px',
      fontSize: 12,
     },
     [theme.breakpoints.up('md')]: {
      margin: '7px 10px 0px 10px',
      fontSize: 14,
     },
     [theme.breakpoints.up('lg')]: {
        margin: '10px 20px 0px 20px',
        fontSize: 14,
     }
  },
  chip: {
    margin: theme.spacing.unit,
  },
  table: {
    minWidth: 700,   
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
})

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: 'rgb(68, 1, 59)',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

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

    //Save updated user data    
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
    this.setState({ screenMode: 'view'})
  }

  handleReturn = (tgtMed) => {
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
            <div className={classes.pageHeadUpdate}>
              <h2>
              Add new medicine
              </h2>
            </div>
            <MedForm 
              mode={this.state.screenMode}
              med=''
              leftbuttonColor='primary'
              leftButtonLabel='Add'
              handleLeftButtonSelection={this.handleCreateMed}
              rightbuttonColor='default'
              rightButtonLabel='Cancel'   
              handleRightButtonSelection={this.handleReturn}
              isNameDisabled={false}
            />
          </>
        ) // return()

      } else if (this.state.screenMode === 'edit') {

        return(
          <>
            <div className={classes.pageHeadUpdate}>
              <h2>
              Update medicine information
              </h2>
            </div>
            <MedForm 
              mode={this.state.screenMode}
              med={this.state.targetMed}
              leftbuttonColor='primary'
              leftButtonLabel='Save'
              handleLeftButtonSelection={this.handleSaveMed}
              rightbuttonColor='default'
              rightButtonLabel='Cancel'   
              handleRightButtonSelection={this.handleCancel}
            />
          </>
        ) // return()

      } else if (this.state.screenMode === 'delete') {

        return(
          <>
            <div>
              <div className={classes.pageHeadDelete}>
                <h2>
                Delete this Medicine?
                </h2>
              </div>
              <MedCard 
                    med={this.state.targetMed}
                    userSession={this.state.sessionUser}
                    leftbuttonColor='secondary'
                    leftButtonLabel='Delete'
                    handleLeftButtonSelection={this.handleDeleteMed}
                    rightbuttonColor='default'
                    rightButtonLabel='Cancel'
                    handleRightButtonSelection={this.handleCancel}
    
                  />   
            </div>
          </>
        ) // return

      } else if (this.state.screenMode === 'view') {
          
        return(
          <>
            <div className={classes.pageHeadUpdate }>
              <h2>
                  Medicine information
              </h2>
            </div>
            <MedView 
              mode={this.state.screenMode}
              med={this.state.targetMed}
              leftbuttonColor='primary'
              leftButtonLabel='Update'
              isLeftButtonDisabled={this.state.sessionUser.isAdmin ? false : true} 
              handleLeftButtonSelection={this.handleMedUpdateSelection}
              rightbuttonColor='secondary'
              rightButtonLabel='Delete'
              isRightButtonDisabled={this.state.sessionUser.isAdmin ? false : true}
              handleRightButtonSelection={this.handleMedDeleteSelection}
              thirdbuttonColor='default'
              thirdButtonLabel='Return'
              handleThirdButtonSelection={this.handleReturn}
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
                  <ColorizeIcon /> 
                </Avatar>
              </Grid>
              <Grid item>
                <h2 className={classes.pageHead}>
                   Medicines
                </h2>
              </Grid>
              </div>    
              <Grid item>
                <Fab 
                 aria-label="Add"
                 color="secondary"  
                 className={classes.fab} 
                 disabled = {this.state.sessionUser.isAdmin ? false : true}
                 onClick={() => this.handleMedAddSelection()}>
                 <AddIcon />
                </Fab>
              </Grid>      
            </Grid>

            <Chip
              label='controlled'
              className={classes.chipTitle}
              color='secondary'
            /> 
     
            <div>
            <Paper className={classes.root}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <CustomTableCell>Medicine</CustomTableCell>
                    <CustomTableCell align="left">Description</CustomTableCell>
                    <CustomTableCell align="center">Injectable</CustomTableCell>
                    <CustomTableCell align="center">Tablet</CustomTableCell>
                    <CustomTableCell align="center">Capsule</CustomTableCell>
                    <CustomTableCell align="center">Suspension</CustomTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                   {
                     this.state.meds.map((med, index) => (
                      <TableRow className={classes.row} key={index}>
                        <CustomTableCell component="th" scope="row">
                        <Chip
                          label={med.name} 
                          className={classes.chip}
                          color={med.controlled ? 'secondary' : 'default'}
                          onClick={() => this.handleMedViewSelection(med)}
                         /> 
                        </CustomTableCell>
                        <CustomTableCell align="left">     
                          {med.description}
                        </CustomTableCell>
                        <CustomTableCell align="center">
                          <Chip
                            label={med.injectable.available ? 'I' : '.'} 
                            className={classes.chip}
                            color={med.injectable.available ? 'primary' : 'default'} 
                          />
                        </CustomTableCell>
                        <CustomTableCell align="center">
                          <Chip
                            label={med.tablet.available ? 'T' : '.'} 
                            className={classes.chip}
                            color={med.tablet.available ? 'primary' : 'default'} 
                          />
                        </CustomTableCell>
                        <CustomTableCell align="center">
                          <Chip
                            label={med.capsule.available ? 'C' : '.'} 
                            className={classes.chip}
                            color={med.capsule.available ? 'primary' : 'default'} 
                          />
                        </CustomTableCell>
                        <CustomTableCell align="center">
                          <Chip
                            label={med.suspension.available ? 'S' : '.'} 
                            className={classes.chip}
                            color={med.suspension.available ? 'primary' : 'default'} 
                          />
                        </CustomTableCell>
                       </TableRow>
                     ))
                   }
                </TableBody>
              </Table>
            </Paper>
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