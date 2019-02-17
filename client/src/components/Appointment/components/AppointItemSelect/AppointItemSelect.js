import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class SimpleSelect extends Component {

  state = {
    labelWidth: 0
  }

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef),
    });
  }

  render() {

    const { classes } = this.props

    return (
      <div className={classes.root} autoComplete="off">        
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="item-selection">{this.props.mainLabel}</InputLabel>
          <Select
            value={this.props.selectedName}
            onChange={this.props.handleSelection}
            name={this.props.selectedfieldName} 
            input={<Input name="select" id="item-selection"/>}        
          >
            {            
              this.props.itemArr.map((item, index) => (
                <option 
                   key={index}
                   value={this.props.table === 'patient' ? item.patientname : item.name}>
                     {this.props.table === 'patient' ? item.patientname : item.name}
                </option>  
             ))          
            }  
          </Select>
          <FormHelperText>Select a {this.props.mainLabel}</FormHelperText>
        </FormControl>

      </div>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleSelect)
