import React, { Component } from 'react'
import './App.css'

// components
import Navbar from './components/Navbar'
import MainMenu from './components/MainMenu'
import LoginView from './components/LoginView'

// API bridge for express routes
import API from './utils/API'

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
     // have user loged-in
    API.getSessionUser()
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
      API.signIn(user)
      .then( r => {
        let sessionUser = r.data
        if (sessionUser === '') {
          this.setState({userError: 'Invalid user name and passoword'})
        } else {
          this.setState({ sessionUser : sessionUser, userName: '', userPwd: '', userEmail: '',userError: ''})  
        }
         
      })
      .catch(err => console.log(err))

    } else {
      // SIGN OUT
      API.signOut(this.state.sessionUser)
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
          <Navbar 
             sessionUser={this.state.sessionUser}
             handleLogingAction={this.handleLogingAction}/>
          <MainMenu />
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
