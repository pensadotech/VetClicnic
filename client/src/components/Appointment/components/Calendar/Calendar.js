import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import dateFns from "date-fns"
import Avatar from '@material-ui/core/Avatar'
import EventIcon from '@material-ui/icons/Event'
// API
import APIappointment from '../../../../utils/APIappointment'

// Local style
import './Calendar.css'

const styles = theme => ({
  avatar: {
     [theme.breakpoints.down('sm')]: {
      width: '30px',
      height: '30px', 
      margin: '30px 0px 0px 10px',
     },
     [theme.breakpoints.up('md')]: {
      width:  '45px',
      height: '45px',
      margin: '15px 0px 0px 20px',
     },
     [theme.breakpoints.up('lg')]: {
      width:  '45px',
      height: '45px',
      margin: '20px 0px 0px 30px',
     }    
  },
})

class Calendar extends Component {

  state = {
    currentMonth: new Date(),
    selectedDate: new Date(),
    aptments: [],
  }

  componentDidMount = () => {
    // load appointmenst for the month
    this.loadAppointData(this.state.currentMonth) 
  }

  loadAppointData = (selectedDate) => {
    // Prepare parameter for request
    let whereClause =  {selectedMonth : selectedDate}
    // retreive appointments for the month
    APIappointment.getApointments(whereClause)
     .then(res => {
       this.setState({ aptments: res.data }) 
    })
    .catch(err => console.log(err))
  }

  renderHeader = () => {

    const dateFormat = "MMMM YYYY"

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>
            {dateFns.format(this.state.currentMonth, dateFormat)}
          </span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">
             chevron_right
          </div>
        </div>
      </div>
    )
  }
  
  renderDays = ()  => {

    const dateFormat = "dddd"
    let days = []

    let startDate = dateFns.startOfWeek(this.state.currentMonth);
    
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      )
    }

    return <div className="days row">{days}</div>
  }
  
  renderCells = () => {
    
    const { classes } = this.props;

    const { currentMonth, selectedDate } = this.state
    const monthStart = dateFns.startOfMonth(currentMonth)
    const monthEnd = dateFns.endOfMonth(monthStart)
    const startDate = dateFns.startOfWeek(monthStart)
    const endDate = dateFns.endOfWeek(monthEnd)

    const dateFormat = "D"
    let rows = []
    
    let days = []
    let day = startDate
    let formattedDate = ""
    
    while (day <= endDate) {

      for (let i = 0; i < 7; i++) {

        formattedDate = dateFns.format(day, dateFormat)
        const cloneDay = day

        // Appointment  available for the day
        let dayWithApnt = this.doesTheDayhasAppointments(this.state.aptments,cloneDay)
        
        days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            key={day}
            onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
            <div>
              {dayWithApnt 
               ? (
                  <Avatar className={classes.avatar}>
                    <EventIcon />
                  </Avatar>
                 )
               : ''}
              
            </div>
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    
    return <div className="body">{rows}</div>;

  }
  
  doesTheDayhasAppointments = (aptmArr,tgtDay) => {   
    const dateFormat = "D M YYYY" 
    for(let i = 0; i < aptmArr.length; i++) {
       let day = aptmArr[i].date
       if( dateFns.format(day, dateFormat) === dateFns.format(tgtDay, dateFormat)) {
          return true
       }
    }
    return false
  }
  
  onDateClick = (day) => {  
    this.setState({selectedDate: day});  
    this.props.handleDaySelection(day)
  }
  
  nextMonth = () => {
    let nextMonth = dateFns.addMonths(this.state.currentMonth, 1)
    this.setState({currentMonth: nextMonth})
    // load appointmenst for the month
    this.loadAppointData(nextMonth) 
  }
  
  prevMonth = () => {
    let prevMonth = dateFns.subMonths(this.state.currentMonth, 1)
    this.setState({currentMonth: prevMonth})
    // load appointmenst for the month
    this.loadAppointData(prevMonth)
  }

  render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    )
  }
}

Calendar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Calendar)