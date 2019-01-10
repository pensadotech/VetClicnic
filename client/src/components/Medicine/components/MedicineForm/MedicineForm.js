import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import ColorizeIcon from '@material-ui/icons/Colorize'
// API
import APImeds from '../../../../utils/APImeds'
// Local style
import './MedicineForm.css'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 250,
  },
  margin: {
    margin: theme.spacing.unit,
  },
  card: {
    minWidth: 175,
    maxHeight: 620,
    margin: '10px 20px 0px 20px',  
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  }
})

class MedicineForm extends Component {
  
  state ={
    mode: '',
    med: '',
    _id : '',
    name: '',
    alias: '',
    description: '',
    controlled: '',
    userError: ''
  }
  
  componentDidMount = () => {
    if(this.props.med !== '') {
      this.setState({
        mode: this.props.mode,
        med: this.props.med,
         _id: this.props.med._id, 
         name: this.props.med.name,
         alias: this.props.med.alias,
         description: this.props.med.description,
         controlled: this.props.med.controlled
      })
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value })  
  }

  handleCheckboxChange = name => event => {
    this.setState({ [name]: event.target.checked });
  }

  handleSave = () => {
    if (this.state.mode === 'edit') {
      // EDIT MODE: Validate 
      if (this.state.name === '' || this.state.description === '' )  {    
        this.setState({userError: 'Please provide medicine name and description'}) 
       } else {

          // translate
          let newMed ={
            _id: this.state._id,
            name: this.state.name,
            alias: this.state.alias,
            description: this.state.description,
            controlled: this.state.controlled
          }

          // send information back 
          this.props.handleLeftButtonSelection(newMed)
       }

    } else {
       // ADD MODE: Validate
       if (this.state.name === '' || this.state.description === '' )  {    
        this.setState({userError: 'Please provide medicine name and description'}) 
       } else {
          
          // translate
          let newMed ={
            name: this.state.name,
            alias: this.state.alias,
            description: this.state.description,
            controlled: this.state.controlled
          }
          
          // Check if user already exist 
          APImeds.findOne(this.state.name)
            .then(res => {  

              if(res.data !== null) {
                this.setState({userError: `The medicine name "${res.data.name}" already exist, please provide a new one`})  
              } else {
                // send information back 
                this.props.handleLeftButtonSelection(newMed)
              }           
           })
           .catch(err => console.log(err))   
                     
       }
    }
  }

  render() {
    
    const { classes } = this.props
    
    return ( 
      <>
        <Card className={classes.card}> 
          <CardContent> 
            <p className='userError'>{this.state.userError}</p>
            <form className={classes.container} noValidate autoComplete="off">
              <div className='formItem'>
                <TextField
                      required
                      id="med-name"
                      label="Medicine Name :"
                      className={classes.textField}
                      name='name'
                      type="string"
                      autoComplete="current-medname"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                      margin="normal"
                      disabled={this.props.isNameDisabled}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <ColorizeIcon />
                          </InputAdornment>
                        ),
                      }}
                    />   
              </div>
              <div className='formItem'>
                <TextField
                      required
                      id="med-alias"
                      label="Alias :"
                      className={classes.textField}
                      name='alias'
                      type="string"
                      autoComplete="current-alias"
                      value={this.state.alias}
                      onChange={this.handleInputChange}
                      margin="normal"
                    />   
              </div>
              <div className='formItem'> 
                  <TextField
                    id="med-description"
                    label="Description :"
                    className={classes.textField}
                    name='description'
                    type="string"
                    autoComplete="current-description"
                    value={this.state.description}
                    onChange={this.handleInputChange}
                    margin="normal"
                  />                    
              </div>
              
              <div className='formItem'> 
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.controlled}
                        onChange={this.handleCheckboxChange('controlled')}
                        value="controlled"
                        color="primary"
                      />
                    }
                    label="Controlled"
                  />                   
              </div>
            </form>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained" color={this.props.leftbuttonColor}  
                onClick={() => this.handleSave()}>{this.props.leftButtonLabel}
            </Button>
            <Button size="small" variant="contained" color={this.props.rightbuttonColor} 
                onClick={() => this.props.handleRightButtonSelection(this.props.med)}>
                {this.props.rightButtonLabel}
            </Button>
          </CardActions>    
        </Card>
      </>

    ) // return()

  } // render()

} // class MedicineForm

MedicineForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MedicineForm)