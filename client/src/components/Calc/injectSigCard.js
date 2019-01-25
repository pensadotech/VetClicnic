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
import Select from 'react-select';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';
import classNames from 'classnames';
import CancelIcon from '@material-ui/icons/Cancel';
import Paper from '@material-ui/core/Paper';
import { emphasize } from '@material-ui/core/styles/colorManipulator';
import Plumbs from '../../images/plumbs.jpg'

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
    quantity: 0,
    notes: "",
    route: "",
    routes: null,
    removeMe: false
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleRouteChange = name => value => {
    this.setState({
      [name]: value.label,
    });
  };

  componentDidMount = (props) => {
    let routeSuggestions = []

    this.props.medication.injectable.routes.map(route => {
      let tempRoute = {
        label: route,
      }

      routeSuggestions.push(tempRoute)
    })

    routeSuggestions.map(suggestion => ({
      value: suggestion.label,
      label: suggestion.label,
    }));
    this.setState({
      hours: this.props.medication.hours,
      days: this.props.medication.days,
      removeMe: false,
      routes: routeSuggestions
    })
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
    if (this.state.removeMe === false) {
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Inj" className={classes.avatar}>
              Inj
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
            {this.props.medication.name}: ({this.props.medication.alias[0]}) {this.props.medication.injectable.concentration}mg/mL
          </Typography>
            {this.props.dose.mL !== 0 ? 
            <> 
          <Typography component="p">
            Give {this.props.dose.mL} mL {this.state.route}.
          </Typography>
             </> : <>
              <Typography component="p">
                Give {this.state.mL} mL {this.state.route}.
          </Typography>
             <Typography component="p">
                Dosage range: {this.props.dose.low} to {this.props.dose.hi} mL. ({this.props.medication.injectable.doseRangeCanine[0]} to {this.props.medication.injectable.doseRangeCanine[1]} mg/kg)
          </Typography>
          </>}
          <Typography component="p">
            {this.state.notes}
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
            <Select
              id="types"
              classes={classes}
              styles={selectStyles}
              value={this.state.route}
              options={this.state.routes}
              onChange={this.handleRouteChange('route')}
              components={components}
              placeholder="Select Route"
              isClearable
              />
              </Grid>
              </Grid>
            <Grid item xs={12}>
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
  } else {return(null)}
}
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(RecipeReviewCard);
