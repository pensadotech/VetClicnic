import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import PrintIcon from '@material-ui/icons/Print';
import SaveIcon from '@material-ui/icons/Save';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';
import classNames from 'classnames';
import CancelIcon from '@material-ui/icons/Cancel';
import Paper from '@material-ui/core/Paper';
import { emphasize } from '@material-ui/core/styles/colorManipulator';
import Plumbs from '../../images/plumbs.jpg'
import Slider from '@material-ui/lab/Slider';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
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
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  root: {
    flexGrow: 1,
    height: 250,
  },
  button: {
    margin: theme.spacing.unit,
  },
  slider: {
    padding: '22px 0px',
  },
  avatar: {
    backgroundColor: red[500],
    margin: 10,
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

class RecipeReviewCard extends React.Component {
  state = {
    expanded: false,
    hours: 0,
    days: 0,
    notes: "",
    removeMe: false,
    value: null
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSliderChange = (event, value) => {
    value = value.toFixed(2)
    this.setState({ value });
  };

  handleRouteChange = name => value => {
    this.setState({
      [name]: value,
    });
  };

  componentWillMount = (props) => {
    this.setState({
      hours: this.props.medication.hours,
      days: this.props.medication.days,
      removeMe: false
    })
    if (this.props.mL === 0) {
      let formatmL = ((this.props.low + this.props.hi) / 2).toFixed(2)
      this.setState({
      value: formatmL
      })
    } else {
      this.setState({value: this.props.mL.toFixed(2)})
    }
  }

  renderRangeVariant = (props) => {
    if (this.props.mL !== 0 && this.props.boxSize !== 0){
      return(
        <>
      <Typography component="p">
            {this.props.boxSize}mL will last for {parseInt(this.props.boxSize / this.state.value/(24 / this.state.hours))} days.
          </Typography>
          </>
      )
    } else if (this.props.low !== 0 && this.props.boxSize !== 0){
      return(
        <>
        <Typography component="p">
            Dosage range: {this.props.low.toFixed(2)} to {this.props.hi.toFixed(2)} mL. ({this.props.medication.suspension.doseRangeCanine[0]} to {this.props.medication.suspension.doseRangeCanine[1]} mg/kg)
          </Typography>
        <Typography component="p">
            Current dose: {(this.state.value*this.props.medication.suspension.premade[0].concentration/(this.props.patient.weight/2.2)).toFixed(2)} mg/kg
          </Typography>
        <Typography component="p">
          {this.props.boxSize}mL will last {parseInt(this.props.boxSize / this.state.value / (24 / this.state.hours))} days.
          </Typography>
          </>
      )
    }
  }

  render() {
    const { classes, theme } = this.props;
    const { value } = this.state;
    const selectStyles = {
      input: base => ({
        ...base,
        color: theme.palette.text.primary,
        '& input': {
          font: 'inherit',
        },
      }),
    };
    if (this.state.removeMe === false) {
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Rx" className={classes.avatar}>
              Rx
            </Avatar>
          }
          action={
            <IconButton>
              <CancelIcon onClick={() => this.setState({ removeMe: true })} />
            </IconButton>
          }
          title={this.props.patient.patientname}
          subheader={this.props.patient.ownername}
        />

        <CardContent>
          <Grid container spacing={24}>
          </Grid>
          <Typography component="p">
            {this.props.doctor}
          </Typography>
          <Typography component="p">
            {this.props.medication.name}: ({this.props.medication.alias[0]}) {this.props.boxSize !== 0 ? <>{this.props.boxSize}mL</>: null} {this.props.medication.suspension.premade[0].concentration}mg/mL
          </Typography>
          <Typography component="p">
            Give {this.state.value} mL {this.props.medication.name === "Meloxicam" ? <>({parseInt(this.props.patient.weight)} lb dose)</> : null} orally every {this.state.hours} hours for {this.state.days} days.
          </Typography>
          <Typography component="p">
            {this.state.notes}
          </Typography>
          <Typography component="p">
            {this.props.medication.suspension.alert}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <SaveIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <PrintIcon />
          </IconButton>
          <a href={this.props.medication.link} target="_blank">
            <Avatar src={Plumbs} className={classes.avatar} />
          </a>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
        <Grid container spacing={24}>
        <Grid item xs={12}>
            {this.renderRangeVariant()}
            {this.props.low? 
              <Slider
                classes={{ container: classes.slider }}
                value={value}
                aria-labelledby="label"
                onChange={this.handleSliderChange}
                min={this.props.low}
                max={this.props.hi}
              /> : null}
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-name"
                  type="number"
                  label="Hours"
                  className={classes.textField}
                  value={this.state.hours}
                  defaultValue={this.props.medication.hours}
                  onChange={this.handleChange('hours')}
                  margin="normal"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-name"
                  label="Days"
                  className={classes.textField}
                  value={this.state.days}
                  defaultValue={this.props.medication.days}
                  onChange={this.handleChange('days')}
                  margin="normal"
                  variant="outlined"
                  type="number"
                />
              </Grid>
            <TextField
              id="outlined-multiline-flexible"
              label="Notes"
              multiline
              rowsMax="4"
              value={this.state.multiline}
              onChange={this.handleChange('notes')}
              className={classes.textField}
              fullWidth
              margin="normal"
              variant="outlined"
              />
              </Grid>
          </CardContent>
        </Collapse>
      </Card>
    );
  }else {return(null)}}
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(RecipeReviewCard);
