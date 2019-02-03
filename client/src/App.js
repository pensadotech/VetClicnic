import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// components
import Navbar from './components/Navbar'
import MainMenu from './components/MainMenu'
import LoginView from './components/LoginView'
import Patient from './components/Patient'
import Doctor from './components/Doctor'
import Calc from './components/Calc'
import Medicine from './components/Medicine'
import Appointment from './components/Appointment'
import Prescription from './components/Prescription'
import AboutUs from './components/AboutUs'
import Admin from  './components/Admin'

// API bridge for express routes
import APIsession from './utils/APIsession'

// Local style
import './App.css'

class App extends Component {
  state = {
    sessionUser: '',
    userName: '',
    userPwd: '',
    userEmail: '',
    userError: ''
  };

  componentDidMount = () => {
    this.retrevieSessionUser()
  }

  retrevieSessionUser = () => {    
     // have user logged-in
    APIsession.getSessionUser()
    .then(r => {  
      let sessionUser = r.data
      this.setState({ sessionUser : sessionUser })   
    })
    .catch(err => console.log(err))
  }
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value })  
  }

  handleLogingAction = () => { 

    if (this.state.sessionUser === '' && (this.state.userName === '' || this.state.userPwd === '') )  {    
      this.setState({userError: 'Please provide user name and passoword'})
    } else if (this.state.sessionUser === '') {   

      let user = { 
        username: this.state.userName,
        password: this.state.userPwd,
        email: this.state.userEmail
      }  
       
      // SIGN-IN
      APIsession.signIn(user)
        .then( r => {
          let sessionUser = r.data

          if (sessionUser === '') {
            this.setState({userError: 'Invalid user name orpassoword'})
          } else {
            this.setState({ sessionUser : sessionUser, userName: '', userPwd: '', userEmail: '',userError: ''})  
          }
          
        })
        .catch(err => console.log(err))

    } else {
      // SIGN OUT
      APIsession.signOut(this.state.sessionUser)
        .then(r => {
          let sessionUser = ''
          this.setState({ sessionUser : sessionUser, userName: '', userPwd: '', userEmail: '',userError: '' })
        })
        .catch(err => console.log(err))
    }

  }

  renderPage = () => {
    
    if (this.state.sessionUser === '') {
      return (
        <>
         <LoginView 
              userName={this.state.userName}
              userPwd={this.state.userPwd}
              userEmail={this.state.userEmail}
              userError={this.state.userError}
              handleInputChange={this.handleInputChange}
              handleLogingAction={this.handleLogingAction}/>
        </>
      )     
     } else {
       return(
         <>  
           <Router> 
            <div>
               <Navbar 
                 sessionUser={this.state.sessionUser}
                 handleLogingAction={this.handleLogingAction}/>
               <Route exact path='/' component={MainMenu} />              
               <Route path='/patients' component={Patient } />
               <Route path='/doctors' component={Doctor} />
               <Route path='/medicines' component={Medicine} />
               <Route path='/appointments' component={Appointment} />
               <Route path='/prescriptions' component={Prescription} />
               <Route path='/calc' component={Calc} />         
               <Route path='/aboutus' component={AboutUs} /> 
               <Route path='/admin' component={this.state.sessionUser.isAdmin ? Admin : MainMenu} />           
             </div>
           </Router>             
         </>
       )     
     }       
  }

  render() {
    return (
      <>       
         {this.renderPage()}       
      </>
    )
  }
}

export default App;
