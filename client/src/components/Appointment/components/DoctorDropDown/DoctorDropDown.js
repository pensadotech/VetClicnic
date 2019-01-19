import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
    selectedOption: '',
    selectedName: '',
    labelWidth: 0
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef),
      selectedName : this.props.selectedName
    });
  }

  render() {
    const { classes } = this.props;
    
   

    return (
      <form className={classes.root} autoComplete="off">
        
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-helper">{this.props.mainLabel}</InputLabel>
          <Select
            value={this.props.selectedName}
            onChange={this.props.handleSelection}
            name={this.props.fieldName}
            input={<Input name="selectedOption" id="age-helper" />}
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
      </form>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);
