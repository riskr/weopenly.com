import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import withRoot from '../withRoot';

const styles = theme => ({
  container: {
    height: '60vh',
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 12,
  },
  title: {
    marginBottom: theme.spacing.unit * 3,
  },
  section: {
    color: theme.palette.primary['500'],
    marginBottom: theme.spacing.unit * 2,
  },
  headline: {
    fontSize: '1.25rem',
    marginBottom: theme.spacing.unit * 3,
  },
  body: {
    marginBottom: theme.spacing.unit * 2,
  },
});

class Privacy extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.container}>
        <Grid item md={1}/>
        <Grid item md={10}>
          <Typography align="left" variant="display2" className={classes.title}>
            Privacy Policy
          </Typography>
        </Grid>
        <Grid item md={1}/>
        <Grid item md={1}/>
        <Grid item md={10}>
          <Typography variant="display1" className={classes.section}>Evergov</Typography>
          <Typography variant="headline" className={classes.headline}>What, how, and why:</Typography>
          <Typography className={classes.body}>
            We track user interactions such as, searches, suggestion clicks, page views, and external link clicks, browser fingerprint, type of browser, type of device, and ip address.
          </Typography>
          <Typography className={classes.body}>
            We use these data points to understand anonymized user interactions with multiple components. This data helps us to understand searches that didn’t perform well, and to fine tune the user experience on a regular basis.
          </Typography>
          <Typography className={classes.body}>
            All of the data we track is for internal purposes only, and we plan to keep it so.
          </Typography>
        </Grid>
        <Grid item md={1}/>
      </Grid>
    );
  }
}

Privacy.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Privacy));
