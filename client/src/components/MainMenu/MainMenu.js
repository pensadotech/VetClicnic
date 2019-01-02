import React, { Component } from "react"
import './MainMenu.css';
//Material UI
import Grid from '@material-ui/core/Grid'

class MainMenu extends Component {
   
  render() {

    return (
      <>
       <div>
         <Grid container spacing={16}>
           <Grid item>
              
              <div className='menuBlock doctors'>Doctors</div> 
           </Grid>
           <Grid item>
             <div className='menuBlock patients'>Patients</div>
            </Grid>
            <Grid item>
            <div className='menuBlock medicines'>Medicines</div>
            </Grid>
            <Grid item>
            <div className='menuBlock prescriptions'>Prescriptions</div>
            </Grid>
            <Grid item>
            <div className='menuBlock appointments'>Appointments</div>
            </Grid>
          </Grid>
        </div>
      </>
    )
  }
}

export default MainMenu