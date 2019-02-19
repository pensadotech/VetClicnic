import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import GradientIcon from '@material-ui/icons/Gradient'
import Auto from "./autocomplete"
import APImeds from '../../utils/APImeds'
import APIpatient from '../../utils/APIpatient'

const styles = theme => ({
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
}) 

class Calc extends Component {
   
  state = {
    meds: [],
    patients: []
  }

  componentDidMount() {
    this.loadMeds()
    this.loadPatients()
  }

  loadMeds = () => {
    APImeds.getMeds()
      .then(res => {
        this.setState({ meds: res.data })
      })
      .catch(err => console.log(err))
  }

  loadPatients = () => {
    APIpatient.getPatients()
      .then(res => {
        this.setState({ patients: res.data })
      })
      .catch(err => console.log(err))
  }  

  render() {

    const { classes } = this.props
    return (
      <>
       <Grid container spacing={0}> 
       <div className={classes.pageHeadContainer}>   
          <Grid item> 
            <Avatar className={classes.avatar}>
              <GradientIcon /> 
            </Avatar>
          </Grid>
          <Grid item> 
            <h2 className={classes.pageHead}>
             Dosage Calculator
            </h2>
          </Grid>
        </div> 
        </Grid>
         
        <br/>
        <Auto/>
        
      </>
    )
  }
}

Calc.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Calc)
