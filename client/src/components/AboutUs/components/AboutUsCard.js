import React, { Component } from "react"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import HighlightIcon from '@material-ui/icons/Highlight';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  card: {
    width: '275px',
    height: '550px',
    margin: '1rem',
    backgroundColor: 'darkgrey',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  }, 
  media: {
    height: '3rem',
    paddingTop: '56.25%', // 16:9
    margin: '1rem',
  },
  avatar: {
    backgroundColor: 'blueviolet',
  },
  title: {
    fontSize: '1rem',
  }
});

class AboutUsCard extends Component {

  render() {
    const { classes } = this.props;

    return (
    <Grid > 
      <Grid container item>
      <Card className={classes.card}>
        <CardHeader classes={{
        title: classes.title
      }}
          avatar={
            <Avatar aria-label="Developer" 
            className={classes.avatar}
            >
              BLUe
            </Avatar>
          }
          title={this.props.developername} 
        />
        <CardMedia
         className={classes.media}
          image={this.props.image} 
        />
        <CardContent>
          <Typography component="p">
            Skills: {this.props.skills}
          </Typography>
          <br/>
          <Typography component="p">
            Hobbies: {this.props.hobbies}
          </Typography>
        </CardContent>
        <CardActions>
        <Typography component="p">
            <Icon aria-label="Contact">
                <EmailIcon />
            </Icon>
            Email: {this.props.email}      
        </Typography>
        <br/>
        </CardActions>
        <Typography> 
            <Icon aria-label="GitHub">
                <HighlightIcon />
            </Icon>
            Github: {this.props.github}
        </Typography>
      </Card>
      </Grid>
    </Grid>  
    );
  }
}

AboutUsCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutUsCard);
