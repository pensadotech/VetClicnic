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

class RecipeReviewCard extends React.Component {
  state = {
    expanded: false,
    hours: 0,
    days: 0,
    quantity: 0,
    notes: ""
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
    hours: this.props.medication.hours,
    days: this.props.medication.days,
  })
}
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Rx" className={classes.avatar}>
              Rx
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
          <Grid container spacing={12}>
            <Grid item xs={6}>
              <Typography component="p">
                {this.props.medication.name}:({this.props.medication.alias[0]}) {this.props.capSize}mg
          </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography component="p">
                Quantity: {Math.ceil(24 / this.state.hours * this.state.days * this.props.numCaps)}
              </Typography>
            </Grid>
          </Grid>
            <Typography component="p">
            Give {this.props.numTabs} capsule(s) every {this.state.hours} hours for {this.state.days} days.
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
            <Typography paragraph></Typography>
            <Grid container spacing={12}>
              <Grid item xs={6}>
                <TextField
                  id="outlined-name"
                  type="number"
                  label="Hours"
                  className={classes.textField}
                  value={this.state.hours}
                  onChange={this.handleChange('hours')}
                  defaultValue={this.props.medication.hours}
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
                  onChange={this.handleChange('days')}
                  defaultValue={this.props.medication.days}
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
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
