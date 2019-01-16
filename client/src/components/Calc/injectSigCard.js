import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PrintIcon from '@material-ui/icons/Print';
import SaveIcon from '@material-ui/icons/Save';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import Select from 'react-select';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';
import classNames from 'classnames';
import CancelIcon from '@material-ui/icons/Cancel';
import Paper from '@material-ui/core/Paper';

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
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
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
    route: null,
    routes: null
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
      [name]: value,
    });
  };

  componentWillReceiveProps = (props) => {
    this.setState({
      hours: this.props.medication.hours,
      days: this.props.medication.days,
      routes: this.props.medication.injectable.routes
    })
  }

  componentWillMount = () => {
   let routeSuggestions = this.props.medication.injectable.routes.map(route => ({
      value: route,
      label: route,
    }))
    this.setState({
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

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Inj" className={classes.avatar}>
              Inj
            </Avatar>
          }
          title={this.props.patient.patientname}
          subheader={this.props.patient.ownername}
        />

        <CardContent>
          <Grid container spacing={12}>
            <div className="mui--text-caption">
              {this.props.patient.phone} {this.props.patient.address}
            </div>
          </Grid>
          <Typography component="p">
            {this.props.doctor}
          </Typography>
          <Typography component="p">
            {this.props.medication.name}: ({this.props.medication.alias[0]}) {this.props.medication.injectable.concentration}mg/mL
          </Typography>
          <Typography component="p">
            Give {this.props.dose.mL} mL {this.state.route}.
          </Typography>
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
            <Select
              id="types"
              classes={classes}
              styles={selectStyles}
              value={this.state.chosen}
              options={this.state.routes}
              onChange={this.handleRouteChange('route')}
              components={components}
              placeholder="Select Route"
              isClearable
            />
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
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(RecipeReviewCard);
