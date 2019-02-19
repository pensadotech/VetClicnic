import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import dateFns from "date-fns"

// Components
import AppointCard from '../AppointCard'
// API
import APIappointment from '../../../../utils/APIappointment'

const styles = theme => ({
 
  avatar: {
    margin: ' 10px 0px 7px 40px',
  },
  card: {
    maxWidth: '90%',
    maxHeight: '90%', 
    borderRadius: '30px',
    boxShadow: '5px 5px 5px 5px rgb(82, 82, 100)',
    [theme.breakpoints.down('sm')]: {
      margin: '5px 10px 20px 20px',
     },
     [theme.breakpoints.up('md')]: {
      margin: '10px 10px 30px 20px',
     },
     [theme.breakpoints.up('lg')]: {
        margin: '10px 10px 50px 40px',
     }
  },
  btnReturn : {
    margin: '5px 0px 5px 30px',
  },
  header: {
    flexGrow: '1',
    flexBasis: '0',
    maxWidth: '100%',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#777',
  }
  
})

class CalendarDay extends Component {

  state = {
    selectedDate: new Date(),
    aptments: [],
    patients: [],
    doctors: [],
    targetAppoint: ''
  }

  componentDidMount = () => {
    // load appointmenst for teh day
    this.loadData(this.props.selectedDate) 
  }

  loadData = (selectedDate) => {
   
    // Prepare parameter for request
    let whereClause =  {selectedDate : selectedDate}
    // retreive appointments for the day
    APIappointment.getApointments(whereClause)
      .then(res => {
        this.setState({ 
          aptments: res.data,
          selectedDate: selectedDate
        })  
      })
      .catch(err => console.log(err))
  }
  
  renderHeader = () => {

    const { classes } = this.props;
    const dateFormat = "DD MMMM YYYY"
    
    return (
      <div className={classes.header}>
        <span>
          {dateFns.format(this.state.selectedDate, dateFormat)}
        </span>
      </div>
    )
  }

  rendelrList () {

    if (this.state.aptments.length > 0) {
       return (
        <div>
            {
              this.state.aptments.map((appt, index) => (
                <AppointCard key={index}
                  appt={appt} 
                  leftbuttonColor='primary'
                  leftButtonLabel='Update' 
                  handleLeftButtonSelection={this.props.handleLeftButtonSelection}  
                  rightbuttonColor='secondary'
                  rightButtonLabel='Remove' 
                  handleRightButtonSelection={this.props.handleRightButtonSelection}
                  isDisabled={false}
                />
              ))
            }
        </div>

       )
    } else {
      return (
        <> 
         No Appointments found!
        </>
      )
    }
  }

  render () {

    const { classes } = this.props;
    
    return (
      <>
         
         <Card className={classes.card}>
           <CardActions>
             <Button 
                 size='large' 
                 variant='contained' 
                 color={this.props.returnbuttonColor}
                 className={classes.btnReturn}
                 onClick={() => this.props.handleReturnButton()}>
                   {this.props.returnButtonLabel}
                </Button>
               
             </CardActions>
             <CardContent> 
               {this.renderHeader()}            
               {this.rendelrList()}
             </CardContent>
         </Card>

      </>
    )    
  }

}

CalendarDay.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CalendarDay)