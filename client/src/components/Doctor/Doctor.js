import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import SettingsIcon from '@material-ui/icons/Settings'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
// Components
// API
import APIdoctors from '../../utils/APIdoctor'
// Local style
import './Doctor.css'


class Doctor extends Component {

  state = {
    doctors: []
  }

  componentDidMount() {
    this.loadDoctors()
  }

  loadDoctors = () => {
    APIdoctors.getDoctors()
      .then(res => {
        console.log(res.data)
        this.setState({ doctors: res.data })
      })
      .catch(err => console.log(err))
  }


  render() {

    return (
      <>
        {
          this.state.doctors.map((doctor, index) => {
            return (
              <div>
                <h3><strong>{doctor.name}</strong></h3>
                <p>{doctor.phone}</p>
                <p>{doctor.mobilePhone}</p>
                <p>{doctor.email}</p>
              </div>
              )
          })
        }
      </>
    )
  }
}

Doctor.propTypes = {
  classes: PropTypes.object.isRequired
}

export default Doctor