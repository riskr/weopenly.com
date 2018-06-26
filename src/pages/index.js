import React from 'react';
import PropTypes from 'prop-types';
import Helmet from "react-helmet";
import GatsbyLink from "gatsby-link";

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import withRoot from '../withRoot';


const Link = ({ children, to, ...other }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to);

  // Use gatsby-link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink to={to} {...other}>
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a href={to} target="_blank" {...other}>
      {children}
    </a>
  );
};


const styles = theme => ({
  "@global": {
    html: {
      background: theme.palette.common.white,
      WebkitFontSmoothing: "antialiased", // Antialiasing.
      MozOsxFontSmoothing: "grayscale", // Antialiasing.
      height: "100%"
    },
    body: {
      margin: 0,
      padding: 0,
      height: "100vh",
      background: theme.palette.common.white,
      width: "100%",
      overflowWrap: "break-word",
      overflowY: "scroll",
      overflowX: "hidden"
    },
    "body>div": {
      display: "block",
      height: "100%"
    },
    "body>div>div": {
      display: "block",
      height: "100%"
    }
  },
  root: {
    width: "100%",
    height: "100%",
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headline: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    color: theme.palette.primary['500']
  },
  heroSection: {
    marginTop: theme.spacing.unit * 12,
    marginBotton: theme.spacing.unit* 16,
  },
features:{
  marginTop: theme.spacing.unit * 16,
  marginBotton: theme.spacing.unit * 16,
},
  bootstrapRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3
    },
    marginBotton: theme.spacing.unit
  },
  getInTouch: {
    marginTop: theme.spacing.unit * 12,
    marginBottom: theme.spacing.unit * 6,
  },
  submit: {
    marginTop: theme.spacing.unit * 6
  },
  card: {
    minHeight: '160px',
    boxShadow: `0 0 10px 5px ${theme.palette.primary["A200"]}`,
    borderTop : `6px solid ${theme.palette.primary["500"]}`
  },
  bootstrapInput: {
    borderRadius: 3,
    backgroundColor: theme.palette.primary['50'],
    color: theme.palette.primary['200'],
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '8px 12px 10px 12px',
    width: 'calc(100% - 24px)',

    transition: theme
      .transitions
      .create(['border-color', 'box-shadow'])
  }
});


const SearchIcon = props => (
  <svg
    fill="none"
    stroke= "#AB93FF"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1}
    viewBox="4 4 24 24"
    width="4em"
    height="4em"
    style={{'position': 'absolute', 'opacity': '0.5'}}
    {...props}>
    <circle cx={10.5} cy={10.5} r={7.5}/>
    <path d="M21 21l-5.2-5.2"/>
  </svg>
);

const Gov = props => (
<svg stroke = "#AB93FF"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1}
    viewBox="40 80 102 102"
    width="4em"
    height="8em"
    style={{ 'position': 'absolute', 'opacity': '0.5' }}{...props}>
    <path
      d="M66.083 49.11H18.92c-2.125 0-2.784-2.877-.87-3.802l41.713-19.695a8 8 0 0 1 6.831 0l41.713 19.695c1.914.925 1.256 3.801-.87 3.801H101M77.917 49.109h-2.834M25 92V50M101 50v42M107.68 105h-89c-2.141 0-3.593-2.178-2.77-4.154l2.5-6A3 3 0 0 1 21.18 93h84a3 3 0 0 1 2.769 1.846l2.5 6c.823 1.976-.629 4.154-2.77 4.154zM37 92.11v-29a6 6 0 1 1 12 0v29M77 92.11v-29a6 6 0 1 1 12 0v29M57 92.11v-29a6 6 0 1 1 12 0v29"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}/>
  </svg>
);


class Index extends React.Component {

  render() {
    const {classes} = this.props;

    return (
      <Grid container spacing={0}>
        <Helmet defaultTitle={`Openly`} titleTemplate={`%s | Openly`}>
          <meta name="og:type" content="website"/>
          <meta name="og:site_name" content="weopenly.com"/>
          <link
            rel="canonical"
            href={`https://weopenly.com${this.props.location.pathname}`}/>
          <meta
            property="og:url"
            content={`https://weopenly.com${this.props.location.pathname}`}/>
          <html lang="en"/>
        </Helmet>

        <Grid item xs={1} md={3}></Grid>
        <Grid item xs={10} md={6} className={classes.heroSection}>
          <Typography
            variant="display3"
            align="center"
            component="h1"
            className={classes.headline}
            gutterBottom>
            Delightful governance
          </Typography>
          <Typography
            variant="body1"
            align="center"
            component="p"
            className={classes.subhead}
            gutterBottom>
            We think that accessing finding and getting gov services should be delightful.
            We're building tools to enable seamless local government interactions with
            citizen, and businesses
          </Typography>
          <Grid item xs={12} align="center" className={classes.submit}>
            <Button component={Link} to="/about" variant="outlined" size="small" color="primary" className={classes.button}>
              Read our story
        </Button>
          </Grid>
        </Grid>
        <Grid item xs={1} md={3}></Grid>

        <Grid item xs={12} >
          <Grid container spacing={0} className={classes.features}>

          <Grid item md={2}/>
          <Grid item xs={12} md={3}>
            <Card className={classes.card}>
              <SearchIcon  />
              <CardContent>
                <Typography gutterBottom variant="display1" component="h1">
                  Localgov.fyi
                </Typography>
                <Typography variant="body1" component="p">
                  Search engine to find local government services
                </Typography>
              </CardContent>
              <CardActions>
                  <IconButton component={Link} to="https://localgov.fyi" color="primary" className={classes.button} aria-label="Go to localgov.fyi">
                      <ExitToAppIcon />
                  </IconButton>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={2}/>
            <Grid item xs={12} md={3}>
            <Card className={classes.card}>
                <Gov />
              <CardContent>
                <Typography gutterBottom variant="display1" component="h1">
                  Spotlight
                </Typography>
                <Typography variant="body1" component="p">
                  The fastest way to access gov services
                </Typography>
              </CardContent>
              <CardActions>
                  <IconButton component={Link} to="/spotlight" color="primary" className={classes.button} aria-label="Go to openly spotlight search">
                    <ExitToAppIcon />
                  </IconButton>
              
              </CardActions>
            </Card>
            </Grid>
            <Grid item xs={12} md={2} />
        </Grid>
        </Grid>
        <Grid item xs={1} md={2}></Grid>
        <Grid item xs={10} md={8} align="center" className={classes.getInTouch}>
          <TextField
            defaultValue="email"
            id="bootstrap-input"
            InputProps={{
            disableUnderline: true,
            classes: {
              root: classes.bootstrapRoot,
              input: classes.bootstrapInput
            }
          }}
            InputLabelProps={{
            className: classes.bootstrapFormLabel
          }}/>
          <Button variant="outlined" className={classes.button}>
            Get updates
          </Button>

        </Grid>
        <Grid item xs={1} md={2}></Grid>
      </Grid>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
};


export const query = graphql`
  query indexQuery {
search : imageSharp(id : {
  regex: "/search/"
}) {
  resize(width : 30, height : 30, cropFocus : NORTHWEST grayscale : true) {
    src
  }
}
  }
`
export default withRoot(withStyles(styles)(Index));
