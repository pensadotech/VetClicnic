import React, { Component }from 'react';
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
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import APIappointment from '../../utils/APIappointment';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  position: {
    position: 'absolute',
    top: '383px',
    left: '607px'
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

class AppointCard extends Component {
  state = { 
      expanded: false,
      appointments: [],
      screenMode: 'list',
      targetAppoint: ''
    };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  loadAppointData = () => {
    APIappointment.findOne()
      .then(res => {
        this.setState({ appointments: res.data })
      })
      .catch(err => console.log(err))
  };

  handleAppointAddSelection = () => {
    // change screen mode to Appointment ADD mode
    this.setState({ screenMode: 'add' })
  };

  handleAppointUpdateSelection = (tgtApnt) => {
    // change screen mode to Appointment EDIT mode, and store target-appoint
    this.setState({ screenMode: 'edit', targetAppoint: tgtApnt })
  };

  handleAppointDeleteSelection = (tgtApnt) => {
    // Change screen mode to Appointment DELETE mode, and store target-appointment
    this.setState({ screenMode: 'delete', targetAppoint: tgtApnt })
  };









  
  renderView = () => {

    const { classes } = this.props;

    if (this.state.screenMode === 'add')

  };

  render() {
    const { classes } = this.props;

    return (
      {this.renderView()};
  }
}

AppointCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppointCard);


/* <Card className={classes.card}>
  <CardHeader
    avatar={
      <Avatar aria-label="Recipe" className={classes.avatar}>
        A
            </Avatar>
    }
    action={
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    }
    title="Patient Appointment"
    subheader="January 07, 2019"
  />
  <CardMedia
    className={classes.media}
    image="/static/images/cards/paella.jpg"
    title="Paella dish"
  />
  <CardContent>
    <Typography component="p">
      Brief description of appointment
          </Typography>
  </CardContent>
  <CardActions className={classes.actions} disableActionSpacing>
    <IconButton aria-label="Add to favorites">
      <FavoriteIcon />
    </IconButton>
    <IconButton aria-label="Share">
      <ShareIcon />
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
      <Typography paragraph>Patient Information:</Typography>
      <Typography paragraph>
        'Patient info'
            </Typography>
      <Typography paragraph>
        'Patient info'
            </Typography>
      <Typography paragraph>
        'Patient info'
            </Typography>
      <Typography>
        'Patient info'
            </Typography>
    </CardContent>
  </Collapse>
</Card>
    ); */
