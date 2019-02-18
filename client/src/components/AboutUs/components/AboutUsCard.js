import React, { Component } from "react"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
// import HighlightIcon from '@material-ui/icons/Highlight';
import HighlightIcon from '@material-ui/icons/Usb';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip'
import PersonIcon from '@material-ui/icons/Person'

const styles = theme => ({
  card: {
    minWidth: 290,
    maxWidth: 400,
    maxHeight: 700, 
    minHeight: 260, 
    backgroundColor: 'lightgrey',
    borderRadius: '30px',
    boxShadow: '5px 5px 5px 5px rgb(82, 82, 100)',
    [theme.breakpoints.down('sm')]: {
      margin: '15px 10px 0px 20px',
     },
     [theme.breakpoints.up('md')]: {
      margin: '30px 10px 0px 20px',
     },
     [theme.breakpoints.up('lg')]: {
        margin: '50px 10px 0px 20px',
     }
  },
  chip: {
    margin: theme.spacing.unit,
    fontSize: 20,
  },
  media: {
    width: '120px',
    height: '120px',
    paddingTop: '80.25%', // 16:9
    // margin: '30px 35px 20px 40px',
    border: '5px solid lightgray',
    borderRadius: '90px',
  },
  
  bigAvatar: {
    margin: 10,
    width: 90,
    height: 90,
  },

  container: {
    display: 'flex',
    flexWrap: 'wrap',
  }, 
 
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    margin: '0px 0px 2px 10px',
  },
  name: {
    fontSize: 18,
    margin: '0px 0px 5px 10px',   
    fontWeight: 'bold'
  },
  info: {
    fontSize: 14,
    margin: '0px 0px 0px 20px',
  }
});

class AboutUsCard extends Component {

  render() {
    const { classes } = this.props;
    
    let mailTo = 'mailto:' 
               + this.props.email
               + '?Subject=Information request'

    return (
      <>     
      <Card className={classes.card}>
        <CardContent>
          <Chip
            avatar={<Avatar><PersonIcon/></Avatar>}
            label={this.props.developername}  
            className={classes.chip}
            color= "primary"
          />
         
         <Grid container spacing={0}>               
            <Grid item>
            <Grid container spacing={0}> 
               <Grid item>
                  <Avatar 
                  alt={this.props.developername} 
                  src={this.props.image} 
                  className={classes.bigAvatar} />
               </Grid>
               <Grid item>
                  <Typography component="p">
                    <Icon aria-label="Contact">
                      <EmailIcon />
                    </Icon>
                    <a href={mailTo}
                      target="_top">
                      {this.props.email}
                    </a>   
                  </Typography>
                  <Typography> 
                    <Icon aria-label="GitHub">
                        <HighlightIcon />
                     </Icon>
                     <a target="_blank" 
                       href={this.props.github}>
                      {this.props.github}
                     </a>
                    </Typography>
               </Grid>
            </Grid>           
              <Typography component="p"
                 className={classes.info}>
                Skills: <b>{this.props.skills}</b>
              </Typography>
              <Typography component="p"
                 className={classes.info}>
                Hobbies: {this.props.hobbies}
              </Typography>     
            </Grid>
            <Grid item>
              
            </Grid>     

         </Grid>
        </CardContent> 
      </Card>
    </>
    )
  }
}

AboutUsCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutUsCard);
