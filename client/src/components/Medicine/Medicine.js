import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import ColorizeIcon from '@material-ui/icons/Colorize'

const styles = {
  avatar: {
    margin: ' 10px 0px 0px 50px'
  },
  pageHead : {
    color:'white',
    margin: '7px 0px 0px 20px'
  },
}

class Medicine extends Component {
   
  render() {

    const { classes } = this.props
    return (
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
          </Grid>
      </>
    )
  }
}

Medicine.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Medicine)