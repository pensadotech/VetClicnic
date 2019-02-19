import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';
import Button from '@material-ui/core/Button';
import { emphasize } from '@material-ui/core/styles/colorManipulator';
import APImeds from '../../utils/APImeds'
import APIpatients from '../../utils/APIpatient'
import Grid from '@material-ui/core/Grid'
import PatientCard from '../Patient/components/PatientCard'
import APIdoctors from '../../utils/APIdoctor'
import calcInjectable from '../../calculations/injectCalc'
import calcTablet from '../../calculations/tabletCalc'
import calcCapsule from '../../calculations/capsuleCalc'
import calcSuspension from '../../calculations/suspensionCalc'
import TabletSigCard from './tabletSigCard'
import InjectSigCard from './injectSigCard'
import CapsuleSigCard from './capsuleSigCard'
import SuspensionSigCard from './suspensionSigCard'

let suggestions = []
let patientSuggestions = []
let ownerSuggestions = []
let chartSuggestions = []
let doctorSuggestions = []

APIdoctors.getDoctors()
  .then(res => {
    res.data.map(doctor => {
      let temp = {
        label: doctor.name
      }
      doctorSuggestions.push(temp)
    })
  })

APIpatients.getPatients()
  .then(res => {
    res.data.map(pet => {
      let temp = {
        label: pet.patientname
      }
      patientSuggestions.push(temp)
      let tempOwner = {
        label: pet.ownername
      }
      ownerSuggestions.push(tempOwner)
      let tempChart = {
        label: pet.chartNumber
      }
      chartSuggestions.push(tempChart)
    })
  })

function compare(a, b) {
  if (a.label < b.label)
    return -1;
  if (a.label > b.label)
    return 1;
  return 0;
}

APImeds.getMeds()
  .then(res => {
    res.data.map(med => {
      let temp = {
        label: med.name
      }
      suggestions.push(temp)
      for (let i = 0; i < med.alias.length; i++) {
        if (med.alias[i] !== "") {

          let tempAlias = {
            label: med.alias[i]
          }
          suggestions.push(tempAlias)
        }
      }
    })
    suggestions.sort(compare);
  })
  .catch(err => console.log(err))

suggestions.map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label,
}));
patientSuggestions.map(patient => ({
  value: patient.label,
  label: patient.label,
}));
ownerSuggestions.map(owner => ({
  value: owner.label,
  label: owner.label,
}));
chartSuggestions.map(chart => ({
  value: chart.label,
  label: chart.label,
}));
doctorSuggestions.map(doctor => ({
  value: doctor.label,
  label: doctor.label,
}));

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 250,
    [theme.breakpoints.down('sm')]: {
      margin:'1px 2px 1px 2px',
     },
     [theme.breakpoints.up('md')]: {
      margin:'10px 10px 10px 10px',
     },
     [theme.breakpoints.up('lg')]: {
      margin:'10px 20px 10px 20px',
     }
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'flex',
    padding: 0,
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
      0.08,
    ),
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 16,
  },
  paper: {
    // position: 'absolute',
    zIndex: 1,
    margin: theme.spacing.unit * 2,
    left:0,
    right: 0,
    border: '2px solid gray'
  },
  divider: {
    height: theme.spacing.unit * 5,
  },
});

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function showTypes(props) {
  APImeds.findOne(this.state.single)
    .then(res => {
    })
    .catch(err => console.log(err))
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
      {...props.selectProps.textFieldProps}
    />
  );
}

function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function SingleValue(props) {
  return (
    <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

function ValueContainer(props) {
  return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

function MultiValue(props) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={classNames(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused,
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  );
}

function Menu(props) {
  return (
    <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
      {props.children}
    </Paper>
  );
}

const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
};

class IntegrationReactSelect extends React.Component {
  state = {
    single: null,
    medication: {},
    patient: null,
    avail: [],
    chosen: "",
    pet: "",
    owner: "",
    chart: 0,
    doctor: "",
    tabletDose: [],
    suspensionDose: [],
    injectableDose: [],
    capsuleDose: []

  };

  handlePatientChange = name => value => {
    this.setState({
      [name]: value,
    })
    if (value !== null) {
      APIpatients.findOne(value.label)
        .then(res => {
          this.setState({
            patient: res.data,
            pet: { label: res.data.patientname },
            owner: { label: res.data.ownername },
            chart: { label: res.data.chartNumber }
          })
        }).catch(err => console.log(err))
    }
  }



  handleOwnerChange = name => value => {
    this.setState({
      [name]: value,
    });
    if (value !== null) {
      APIpatients.findByOwner(value.label)
        .then(res => {
          this.setState({
            patient: res.data,
            pet: { label: res.data.patientname },
            owner: { label: res.data.ownername },
            chart: { label: res.data.chartNumber }
          })
        }).catch(err => console.log(err))
    }
  }

  handleChartChange = name => value => {
    this.setState({
      [name]: value,
    });
    if (value !== null) {
      APIpatients.findByChart(value.label)
        .then(res => {
          this.setState({
            patient: res.data,
            pet: { label: res.data.patientname },
            owner: { label: res.data.ownername },
            chart: { label: res.data.chartNumber }
          })
        }).catch(err => console.log(err))
    }
  }

  handleTypeChange = name => value => {
    this.setState({
      [name]: value,
    });
  }

  handleDoctorChange = name => value => {
    this.setState({
      [name]: value,
    });
  }

  handleChange = name => value => {
    this.setState({
      [name]: value,
    });
    this.setState({
      chosen: ""
    });

    if (value !== null) {

      APImeds.findOne(value.label)
        .then(res => {
          this.setState({ medication: res.data })
          let tempArr = []
          if (res.data.injectable.available === true) {
            tempArr.push({ label: "Injectable" })
          }
          if (res.data.tablet.available === true) {
            tempArr.push({ label: "Tablet" })
          }
          if (res.data.capsule.available === true) {
            tempArr.push({ label: "Capsule" })
          }
          if (res.data.suspension.available === true) {
            tempArr.push({ label: "Suspension" })
          }
          tempArr.map(type => ({
            value: type.label,
            label: type.label,
          }))
          this.setState({ avail: tempArr })
        })
        .catch(err => console.log(err))
    }


  };


  chooseCalc = (chosen, medication, patient) => {
    if (chosen === "Injectable") {
      let injectDose = calcInjectable(medication, patient)
      this.setState({ injectableDose: injectDose })
    }
    if (chosen === "Suspension") {
      let suspDose = calcSuspension(medication, patient)
      this.setState({ suspensionDose: suspDose })
    }
    if (chosen === "Tablet") {
      let tabDose = calcTablet(medication, patient)
      this.setState({ tabletDose: tabDose })
    }
    if (chosen === "Capsule") {
      let capDose = calcCapsule(medication, patient)
      this.setState({ capsuleDose: capDose })
    }
  }

  renderSig = (chosen) => {
    if (chosen === "Tablet") {
      return (
        <>
          {this.state.tabletDose.map(dose => (
            <TabletSigCard
              medication={this.state.medication}
              patient={this.state.patient}
              doctor={this.state.doctor.label}
              tabSize={dose.tabSize}
              numTabs={dose.numTabs}
              mgkg={dose.mgkg}
              removeMe={false}
              key={dose.numTabs+dose.tabSize}
            />
          ))}
          <br/>
        </>
      );
    } else if (chosen === "Injectable" ) {
      return (
         <>
          {this.state.injectableDose.map(dose => (
          <InjectSigCard
            medication={this.state.medication}
            patient={this.state.patient}
            doctor={this.state.doctor.label}
            dose={dose}
          />
          ))}
        </>
      )
    } else if (chosen === "Capsule") {
        return (
          <>
              {this.state.capsuleDose.map(dose => (
                  <CapsuleSigCard
                  medication={this.state.medication}
                  patient={this.state.patient}
                  doctor={this.state.doctor.label}
                  capSize={dose.capSize}
                  numCaps={dose.numCaps}
                  mgkg={dose.mgkg}
                  removeMe={false}
                  key={dose.numCaps+dose.capSize}
                  />
              ))}  
            
          </>
          );
    } else if (chosen === "Suspension") {
      return (
        <>
        {this.state.suspensionDose.map(dose => (
          <SuspensionSigCard
            medication={this.state.medication}
            patient={this.state.patient}
            doctor={this.state.doctor.label}
            boxSize={dose.boxSize}
            daysWillLast={dose.daysWillLast}
            mgkg={dose.mgkg}
            mL={dose.mL}
            low={dose.low}
            hi={dose.hi}
            removeMe={false}
            key={dose.boxSize + dose.mgkg}
          />
        ))}
        </>
      );
     }
  }

  render() {
    const { classes, theme } = this.props;

    const selectStyles = {
      input: base => ({
        ...base,
        color: theme.palette.text.primary,
        '& input': {
          font: 'inherit',
        },
      }),
    };

    return (
      <div className={classes.root}>
        <Paper>
          <NoSsr>
            <Grid container spacing={24}>

              <Grid item xs={4} >
                <Select
                  id="petname"
                  classes={classes}
                  styles={selectStyles}
                  options={patientSuggestions}
                  components={components}
                  value={this.state.pet}
                  onChange={this.handlePatientChange('pet')}
                  placeholder="Patient Name"
                  isClearable
                />
              </Grid>
              <Grid item xs={4} >
                <Select
                  id="ownername"
                  classes={classes}
                  styles={selectStyles}
                  options={ownerSuggestions}
                  components={components}
                  value={this.state.owner}
                  onChange={this.handleOwnerChange('owner')}
                  placeholder="Owner Name"
                  isClearable
                />
              </Grid>
              <Grid item xs={4} >
                <Select
                  id="chartnum"
                  classes={classes}
                  styles={selectStyles}
                  options={chartSuggestions}
                  components={components}
                  value={this.state.chart}
                  onChange={this.handleChartChange('chart')}
                  placeholder="Chart #"
                  isClearable
                />
              </Grid>
              <Grid item xs={12}>
                <Select
                  id="doctors"
                  classes={classes}
                  styles={selectStyles}
                  options={doctorSuggestions}
                  components={components}
                  value={this.state.doctor}
                  onChange={this.handleDoctorChange('doctor')}
                  placeholder="Select a doctor"
                  isClearable
                />
              </Grid>
              <Grid item xs={6}>
                <Select
                  id="meds"
                  classes={classes}
                  styles={selectStyles}
                  options={suggestions}
                  components={components}
                  value={this.state.single}
                  onChange={this.handleChange('single')}
                  placeholder="Select a medication"
                  isClearable
                />
              </Grid>
              <Grid item xs={6}>
                <Select
                  id="types"
                  classes={classes}
                  styles={selectStyles}
                  value={this.state.chosen}
                  options={this.state.avail}
                  onChange={this.handleTypeChange('chosen')}
                  components={components}
                  placeholder="Select Type"
                  isClearable
                />
              </Grid>
            </Grid>
          </NoSsr>
          <Button 
            variant="contained" 
            color="primary" 
            className={classes.button}
            onClick={() => { this.chooseCalc(this.state.chosen.label, this.state.medication, this.state.patient) }} >
            Calculate
          </Button>
        </Paper>
        <br />
        <Grid container spacing={24}>
          <Grid item xs={2}></Grid>
          <Grid item xs={3}>
            {this.state.patient !== null? <><PatientCard patient={this.state.patient} /> </> : null}         
          </Grid>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={3}>
            {this.renderSig(this.state.chosen.label)}
          </Grid>
          <Grid item xs={2}>
          </Grid>
        </Grid>
      </div>
    );
  }
}

IntegrationReactSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(IntegrationReactSelect);