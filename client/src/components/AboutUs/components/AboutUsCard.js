import React, { Component } from "react"
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
import EmailIcon from '@material-ui/icons/Email';
import HighlightIcon from '@material-ui/icons/Highlight';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
  card: {
    maxWidth: 400,
    backgroundColor: 'darkgrey',
  },
  media: {
    height: '3rem',
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  avatar: {
    backgroundColor: 'blueviolet',
  },
});

class AboutUsCard extends Component {

  render() {
    const { classes } = this.props;
    console.log(this.props)
    // console.log(classes)

    return (
      <Card 
      className={classes.card}
      >
        <CardHeader
          avatar={
            <Avatar aria-label="Developer" 
            className={classes.avatar}
            >
              BLUe
            </Avatar>
          }
           devlopername={this.props.developername}
            
        />
        <CardMedia
         className={classes.media}
          image={this.props.image}
          developername=""
        />
        <CardContent>
          <Typography component="p">
            Skills: {this.props.skills}
          </Typography>
          <Typography component="p">
            Hobbies: {this.props.hobbies}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
        <Typography component="p">
            Email
            <IconButton aria-label="Contact">
                <EmailIcon />
            </IconButton>
        </Typography>
        <Typography component="p">
          GitHub
            <IconButton aria-label="GitHub">
                <HighlightIcon />
            </IconButton>
        </Typography>    
          
        </CardActions>
        
      </Card>
    );
  }
}

AboutUsCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutUsCard);
