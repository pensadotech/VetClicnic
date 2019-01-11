import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import PetsIcon from '@material-ui/icons/Pets'
// API bridge for express routes
import APIpatient from '../../utils/APIpatient'
import PatientCard from './components/PatientCard'

const styles = {
  avatar: {
    margin: ' 10px 0px 0px 50px'
  },
  pageHead : {
    color:'white',
    margin: '7px 0px 0px 20px'
  },
}

class Patient extends Component {
  state = {
    patients: []
  }
   
  componentDidMount() {
    this.loadPatients()
  }
  
  loadPatients = () => {
    APIpatient.getPatients()
    .then( r => {
      this.setState({ patients: r.data})
    })
    .catch(e => console.log(e))
  }  
   
  render() {
    const { classes } = this.props
    return (
      <>
       {/* <Grid container spacing={0}>    
            <Grid item> 
              <Avatar className={classes.avatar}>
                <PetsIcon /> 
              </Avatar>
            </Grid>
            <Grid item> 
              <h1 className={classes.pageHead}>Patients</h1>
              <h3 className={classes.h3}>{this.state.patients[0]}</h3>
            </Grid>
          </Grid> */}

        {this.state.patients.map( (p, i) => {
            return (
            <PatientCard key={i}
                 patient={p}  
             />
            )
        })}
      </>
    )
  }
}

Patient.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Patient)