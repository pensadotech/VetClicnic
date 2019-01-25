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
import CancelIcon from '@material-ui/icons/Cancel';
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
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
    margin: 10,
  },
});

class RecipeReviewCard extends React.Component {
  state = {
    expanded: false,
    hours: 0,
    days: 0,
    quantity: 0,
    notes: "",
    removeMe: false,
    difference: 0
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  componentWillReceiveProps = (props) => {
    this.setState({
      removeMe: this.props.removeMe,
    })
  }

  componentDidMount = (props) => {
    this.setState({
      hours: this.props.medication.hours,
      days: this.props.medication.days,
    })
  }


  renderSuggestedDose = (medication, patient) => {
    let med = medication.tablet
    let diff = ((medication.tablet.doseCanine - this.props.mgkg) / medication.tablet.doseCanine * 100 * -1).toFixed(2)

    if (med.doseCanine !== 0) {
      if (patient.species === "Canine") {
        return (
          <>
            <Typography component="p">
              Target dose for a dog is {med.doseCanine} mg/kg
          </Typography>
            <Typography component="p">
              Current dosing is {this.props.mgkg.toFixed(2)} mg/kg. Difference of {diff}%
          </Typography>
          </>
        )
      } else if (patient.species === "Feline") {
        return (
          <>
            <Typography component="p">
              Target dose for a cat is {med.doseFeline} mg/kg
          </Typography>
            <Typography component="p">
              Current dosing is {this.props.mgkg.toFixed(2)} mg/kg. Difference of {diff}%
          </Typography>
          </>
        )
      }} else if (med.doseRangeCanine[0] !== 0) {
        if (patient.species === "Canine") {
          return (
            <>
              <Typography component="p">
                Target dose for a dog is between {med.doseRangeCanine[0]} and {med.doseRangeCanine[1]} mg/kg
          </Typography>
              <Typography component="p">
                Current dosing is {this.props.mgkg.toFixed(2)} mg/kg.
          </Typography>
            </>
          )
        } else if (patient.species === "Feline") {
          return (
            <>
              <Typography component="p">
                Target dose for a cat is between {med.doseRangeFeline[0]} and {med.doseRangeFeline[1]} mg/kg
          </Typography>
              <Typography component="p">
                Current dosing is {this.props.mgkg.toFixed(2)} mg/kg.
          </Typography>
            </>
          )
        }
      }
    }

    render() {
      const { classes } = this.props;
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
              <Grid container spacing={24}>
                <Grid item xs={8}>
                  <Typography component="p">
                    {this.props.medication.name}:({this.props.medication.alias[0]}) {this.props.tabSize}mg
          </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography component="p">
                    Quantity: {Math.ceil(24 / this.state.hours * this.state.days * this.props.numTabs)}
                  </Typography>
                </Grid>
              </Grid>
              <Typography component="p">
                Give {this.props.numTabs} tablet(s) every {this.state.hours} hours for {this.state.days} days.
              </Typography>
              {this.props.medication.name === "Prednisone" || this.props.medication.name === "Trimeprazine Tartrate with Prednisolone"? <> <Typography component="p">
                Then give {this.props.numTabs} tablet(s) every {this.state.hours*2} hours for {this.state.days} days.
              </Typography> 
                <Typography component="p">
                Then give {this.props.numTabs} tablet(s) every other day for {this.state.days} days.
              </Typography></> : null}
              <Typography component="p">
                {this.state.notes}
              </Typography>
              <Typography component="p">
                {this.props.medication.tablet.alert}
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
                {this.renderSuggestedDose(this.props.medication, this.props.patient)}
                <Grid container spacing={24}>
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
      } else { return (null) }
    }
  }

  RecipeReviewCard.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(RecipeReviewCard);
