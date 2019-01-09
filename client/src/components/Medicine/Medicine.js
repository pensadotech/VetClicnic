import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Fab from '@material-ui/core/Fab';
import ColorizeIcon from '@material-ui/icons/Colorize'
import AddIcon from '@material-ui/icons/Add';
import APImeds from '../../utils/APImeds'

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
    meds: [],
    screenMode: 'list'
  }
  
  componentDidMount() {
    this.loadMeds()
  }

  loadMeds = () => {
    APImeds.getMeds()
      .then(res => {

        console.log(res.data)

        this.setState({ meds: res.data })
      })
      .catch(err => console.log(err))
  }
  
  handleUserAddSelection = () => {
    // change screen mode to user ADD mode
    this.setState({ screenMode: 'add' })
  }

  renderView = () => {

    const { classes } = this.props
    
    if (this.state.screenMode === 'add') {
        
      return(
        <>
         <h3>Add moder for medicienes</h3>
        </>
      )
      
    } else  if (this.state.screenMode === 'edit') {

    } else  if (this.state.screenMode === 'delete') {

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
              <h1 className={classes.pageHead}>Medicines</h1>
            </Grid>
            <Grid item>
              <Fab color="secondary" aria-label="Add" className={classes.fab}>
                <AddIcon  onClick={() => this.handleUserAddSelection()}/>
              </Fab>
            </Grid>
          </Grid>
        
            <div>
              {
                  this.state.meds.map((med, index) => (
                    <div>
                    <p>{index}</p>
                    <h3>{med.name}</h3>
                    <p>{med.description}</p>
                    </div>
                  ))
              }
              </div>
            
        </>
      )
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