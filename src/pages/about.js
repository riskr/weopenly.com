import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Helmet from "react-helmet";
import Grid from '@material-ui/core/Grid';
import { isMobileOnly } from 'react-device-detect';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import withRoot from '../withRoot';

const styles = theme => ({
  aboutContent: {
    paddingTop: theme.spacing.unit * 16
  },
  aboutContentRight: {
    background: theme.palette.primary['400'],
    height: '100vh',
    display: 'flex',
    alignItems: 'center'
  },
  heroSection: {
    marginTop: theme.spacing.unit * 12,
    marginBotton: theme.spacing.unit* 16,
  },
  headline: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    color: theme.palette.primary['500'],
  },
  headline2: {
    color: theme.palette.primary['500'],
  },
  getInTouchEmail: {
    color: '#fff'
  },
});

class Index extends React.Component {
  render() {
    const {classes} = this.props;

    return (
      <Grid container spacing={16}>{/*
        <Grid item xs={1} />
        <Grid item xs={10} className={classes.aboutContentHeader}>
          <Helmet>
            <title>{`Openly | Localgov.fyi`}
            </title>
            <meta
              name="description"
              content={`Openly, organizing world's governance information`}
            />
          </Helmet>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={1} />
        <Grid item xs={10} className={classes.heroSection}>
          <Typography
            variant="display3"
            align="center"
            component="h1"
            className={classes.headline}
            gutterBottom
          >
            We are on a mission to make every government service accessible online.
          </Typography>
          <Typography
            variant="body1"
            align="center"
            component="p"
            className={classes.subhead}
          >
            We believe that unhindered access to government services is essential to move our society forward.
          </Typography>
          <Typography
            variant="body1"
            align="center"
            component="p"
            className={classes.subhead}
            gutterBottom
          >
            We are starting by making it easier than ever to find any local government service with our search and integrate it into any government website.
          </Typography>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Typography
            variant="display3"
            align="center"
            component="h1"
            className={classes.headline}
          >
            Making it easier to find government services is just a start. We want to enable delightful governance delivered at your convenience.
          </Typography>
          <Typography
            variant="body1"
            align="center"
            component="p"
            className={classes.subhead}
          >
            We are a small team (& a large support network) building Openly and finding our way through the labyrinth of governance.
          </Typography>
        </Grid>
        <Grid item xs={1} />*/}
      </Grid>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Index));
