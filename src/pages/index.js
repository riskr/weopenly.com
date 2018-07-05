import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from "react-helmet";
import GatsbyLink from "gatsby-link";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import ContactForm from '../components/ContactForm';

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
      height: "100%",
    },
    body: {
      margin: 0,
      padding: 0,
      height: "100vh",
      background: theme.palette.common.white,
      width: "100%",
      overflowWrap: "break-word",
      overflowY: "scroll",
      overflowX: "hidden",
    },
    "body>div": {
      display: "block",
      height: "100%",
    },
    "body>div>div": {
      display: "block",
      height: "100%",
    },
  },
  root: {
    width: "100%",
    height: "100%",
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headline: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    color: theme.palette.primary['500'],
  },
  headlineMobile: {
    marginTop: theme.spacing.unit * 3,
    // marginBottom: theme.spacing.unit * 3,
    color: theme.palette.primary['500'],
  },
  headlineTop: {
    marginTop: 88,
  },
  headlineTopMobile: {
    marginTop: theme.spacing.unit * 8,
  },
  headlineAbove: {
    marginTop: theme.spacing.unit * 12,
    color: theme.palette.primary['500'],
  },
  headlineAboveMobile: {
    marginTop: theme.spacing.unit * 4,
    color: theme.palette.primary['500'],
  },
  headlineBetween: {
    color: theme.palette.primary['500'],
  },
  headlineBelow: {
    marginBottom: theme.spacing.unit * 3,
    color: theme.palette.primary['500'],
  },
  headlineBelowMobile: {
    // marginBottom: theme.spacing.unit * 3,
    color: theme.palette.primary['500'],
  },
  subheadMobile: {
    marginTop: -8,
  },
  heroSection: {
    marginTop: theme.spacing.unit * 12,
    marginBotton: theme.spacing.unit* 16,
  },
  heroSectionMobile: {
    marginTop: theme.spacing.unit * 3,
    marginBotton: theme.spacing.unit* 4,
  },
  features:{
    marginTop: '4rem',
    marginBotton: '4rem',
    // position: 'absolute',
    // bottom: theme.spacing.unit * 16,
  },
  featuresMobile:{
    marginTop: '2rem',
    marginBotton: '2rem',
    // position: 'absolute',
    // bottom: 0,
  },
  cardContentMobile: {
    marginBottom: -16,
  },
  cardActionsMobile: {
    marginTop: -16,
    // marginBottom: -16,
  },
  getInTouch: {
    marginTop: theme.spacing.unit * 12,
    marginBottom: theme.spacing.unit * 6,
  },
  getInTouchMobile: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 6,
  },
  submit: {
    marginTop: theme.spacing.unit * 6,
  },
  card: {
    minHeight: '160px',
    position: 'relative',
    boxShadow: `0 0 10px 5px ${theme.palette.primary["A200"]}`,
    borderTop : `6px solid ${theme.palette.primary["500"]}`,
  },
  cardMobile: {
    minHeight: '128px',
    position: 'relative',
    boxShadow: `0 0 10px 5px ${theme.palette.primary["A200"]}`,
    borderTop : `6px solid ${theme.palette.primary["500"]}`,
  },
  link: {
    textDecoration: 'none',
  },
  section1: {
    height: '100vh',
    marginTop: -88,
    // marginBottom: -88,
  },
  section2: {
    height: '100vh',
    background: theme.palette.primary['500'],
  },
  white: {
    color: theme.palette.common.white,
  },
  section3: {
    height: '100vh',
    marginBottom: -79,
  },
  section3Mobile: {
    height: '100vh',
    marginBottom: -141,
  },
  // fabWrapper: {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   bottom: theme.spacing.unit * 3,
  // },
  fab: {
    left: '50%',
    marginLeft: -28,
    position: 'fixed',
    bottom: theme.spacing.unit * 3,
    background: theme.palette.common.white,
  },
  fabMobile: {
    left: '50%',
    marginLeft: -18,
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    background: theme.palette.common.white,
  },
  icon: {
    fontSize: 36,
    color: theme.palette.primary['500'],
  },
  buttonMobile: {
    marginTop: -8,
    marginBottom: -8,
    marginLeft: -4,
  },
});


const SearchIcon = props => (
  <svg
    fill="none"
    stroke= "#AB93FF"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1}
    viewBox = "0 0 40 60"
    width = "4em"
    height = "5em"
    style={{'position': 'absolute', 'opacity': '0.5', right: '0', bottom: '0'}}
    {...props}
  >
    <g
      fill="none"
      stroke="#AB93FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
    >
      <circle cx={32} cy={25} r={16} strokeWidth={2} />
      <path d="M40.9 44.1l-2.1-4.6" />
      <path strokeWidth={1} d="M40.9 44.1L46 55" />
      <path d="M36.2 13.7c2.7 1 4.9 2.9 6.3 5.3" />
    </g>
  </svg>
);

const Gov = props => (
  <svg stroke = "#AB93FF"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1}
    viewBox="0 0 80 80"
    width="4em"
    height="8em"
    style={{ 'position': 'absolute', 'opacity': '0.5', right: '0', bottom: '0' }}{...props}
  >
    <path
      d="M66.083 49.11H18.92c-2.125 0-2.784-2.877-.87-3.802l41.713-19.695a8 8 0 0 1 6.831 0l41.713 19.695c1.914.925 1.256 3.801-.87 3.801H101M77.917 49.109h-2.834M25 92V50M101 50v42M107.68 105h-89c-2.141 0-3.593-2.178-2.77-4.154l2.5-6A3 3 0 0 1 21.18 93h84a3 3 0 0 1 2.769 1.846l2.5 6c.823 1.976-.629 4.154-2.77 4.154zM37 92.11v-29a6 6 0 1 1 12 0v29M77 92.11v-29a6 6 0 1 1 12 0v29M57 92.11v-29a6 6 0 1 1 12 0v29"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
    />
  </svg>
);


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: 2,
    };
    // this.handleScroll = this.handleScroll.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // componentDidMount() {
  //   window.addEventListener('scroll', this.handleScroll);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // }

  // handleScroll(event) {
  //   if (event.srcElement.body.scrollTop === 0) this.setState({ section: 2 });
  // }

  handleClick() {
    if (this.state.section < 3) this.setState({ section: this.state.section + 1 });
    else this.setState({ section: 1 });

    document.querySelector(`#section${this.state.section}`).scrollIntoView({
      behavior: 'smooth'
    });
  }

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        {!isMobile
        ? <Fragment>
          <div id="section1" className={classes.section1}>
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
                  className={[classes.headline, classes.headlineTop]}
                  gutterBottom
                >
                  Governance made delightful.
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  component="p"
                  className={classes.subhead}
                >
                  We believe that finding and getting government services should be simple.
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  component="p"
                  className={classes.subhead}
                >
                  We're building tools to make local government interactions seamless for all.
                </Typography>
              </Grid>
              <Grid item xs={1} md={3}></Grid>

              <Grid item xs={12} >
                <Grid container spacing={0} className={classes.features}>

                  <Grid item md={2}/>
                  <Grid item xs={12} md={3}>
                    <Link to="https://localgov.fyi" className={classes.link}>
                      <Card className={classes.card}>
                        <CardContent>
                          <Typography gutterBottom variant="display1" component="h1">
                            Localgov.fyi
                          </Typography>
                          <Typography variant="body1" component="p">
                            Find any local government service instantly.
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <IconButton component={Link} to="https://localgov.fyi" color="primary" className={classes.button} aria-label="Go to localgov.fyi">
                            <ExitToAppIcon />
                          </IconButton>
                        </CardActions>
                      </Card>
                    </Link>
                  </Grid>
                  <Grid item xs={12} md={2}/>
                  <Grid item xs={12} md={3}>
                  <Link to="/spotlight" className={classes.link}>
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography gutterBottom variant="display1" component="h1">
                          Spotlight
                        </Typography>
                        <Typography variant="body1" component="p">
                          Powerful localized search for gov websites.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <IconButton component={Link} to="/spotlight" color="primary" className={classes.button} aria-label="Go to openly spotlight search">
                          <ExitToAppIcon />
                        </IconButton>
                      </CardActions>
                    </Card>
                  </Link>
                  </Grid>
                  <Grid item xs={12} md={2} />
                </Grid>
              </Grid>
              <Grid item xs={12} className={classes.fabWrapper}>
              </Grid>
            </Grid>
          </div>
          <div id="section2" className={classes.section2}>
            <Grid container>
              <Grid item xs={1} />
              <Grid item xs={10} className={classes.heroSection}>
                <Typography
                  variant="display3"
                  align="center"
                  component="h1"
                  className={[classes.headlineAbove, classes.white]}
                >
                  We are on a mission
                </Typography>
                <Typography
                  variant="display3"
                  align="center"
                  component="h1"
                  className={[classes.headlineBetween, classes.white]}
                >
                  to make every government
                </Typography>
                <Typography
                  variant="display3"
                  align="center"
                  component="h1"
                  className={[classes.headlineBelow, classes.white]}
                  gutterBottom
                >
                  service accessible online.
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  component="p"
                  className={[classes.subhead, classes.white]}
                >
                  We believe that unhindered access to government services
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  component="p"
                  className={[classes.subhead, classes.white]}
                >
                  is essential to move our society forward.
                </Typography>
              </Grid>
              <Grid item xs={1} />
            </Grid>
          </div>
          <div id="section3" className={classes.section3}>
            <Grid container>
              <Grid item xs={1} />
              <Grid item xs={10} className={classes.heroSection}>
                <Typography
                  variant="display3"
                  align="center"
                  component="h1"
                  className={classes.headlineAbove}
                >
                  Making it easier to find government
                </Typography>
                <Typography
                  variant="display3"
                  align="center"
                  component="h1"
                  className={classes.headlineBelow}
                >
                  services is just a start.
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  component="p"
                  className={classes.subhead}
                >
                  We want to enable delightful governance delivered at your convenience.
                </Typography>
              </Grid>
              <Grid item xs={1} />
              <Grid item xs={1} md={2}></Grid>
              <Grid item xs={10} md={8} align="center" className={classes.getInTouch}>
                <ContactForm />
              </Grid>
              <Grid item xs={1} md={2}></Grid>
            </Grid>
          </div>
          <Button variant="fab" onClick={this.handleClick} className={classes.fab}>
            {this.state.section > 1
              ? <ExpandMore className={classes.icon}/>
              : <ExpandLess className={classes.icon}/>}
          </Button>
        </Fragment>
        : <Fragment>
          <div id="section1" className={classes.section1}>
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
              <Grid item xs={10} md={6} className={classes.heroSectionMobile}>
                <Typography
                  variant="display3"
                  align="center"
                  component="h1"
                  className={[classes.headlineMobile, classes.headlineTopMobile]}
                  gutterBottom
                >
                  Governance made delightful.
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  component="p"
                  className={classes.subhead}
                >
                  We believe that finding and getting
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  component="p"
                  className={classes.subhead}
                >
                  government services should be
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  component="p"
                  className={classes.subhead}
                >
                  simple. We're building tools
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  component="p"
                  className={classes.subhead}
                >
                  to make local government
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  component="p"
                  className={classes.subhead}
                >
                  interactions seamless for all.
                </Typography>
              </Grid>
              <Grid item xs={1} md={3}></Grid>

              <Grid item xs={12} >
                <Grid container spacing={0} className={classes.featuresMobile}>

                  <Grid item md={2}/>
                  <Grid item xs={12} md={3}>
                    <Link to="https://localgov.fyi" className={classes.link}>
                      <Card className={classes.cardMobile}>
                        <CardContent className={classes.cardContentMobile}>
                          <Typography gutterBottom variant="display1" component="h1">
                            Localgov.fyi
                          </Typography>
                          <Typography variant="body1" component="p">
                            Find any local government service instantly.
                          </Typography>
                        </CardContent>
                        <CardActions className={classes.cardActionsMobile}>
                          <IconButton component={Link} to="https://localgov.fyi" color="primary" className={classes.buttonMobile} aria-label="Go to localgov.fyi">
                            <ExitToAppIcon />
                          </IconButton>
                        </CardActions>
                      </Card>
                    </Link>
                  </Grid>
                  <Grid item xs={12} md={2}/>
                  <Grid item xs={12} md={3}>
                  <Link to="/spotlight" className={classes.link}>
                    <Card className={classes.cardMobile}>
                      <CardContent className={classes.cardContentMobile}>
                        <Typography gutterBottom variant="display1" component="h1">
                          Spotlight
                        </Typography>
                        <Typography variant="body1" component="p">
                          Powerful localized search for gov websites.
                        </Typography>
                      </CardContent>
                      <CardActions className={classes.cardActionsMobile}>
                        <IconButton component={Link} to="/spotlight" color="primary" className={classes.buttonMobile} aria-label="Go to openly spotlight search">
                          <ExitToAppIcon />
                        </IconButton>
                      </CardActions>
                    </Card>
                  </Link>
                  </Grid>
                  <Grid item xs={12} md={2} />
                </Grid>
              </Grid>
              <Grid item xs={12} className={classes.fabWrapper}>
              </Grid>
            </Grid>
          </div>
          <div id="section2" className={classes.section2}>
            <Grid container>
              <Grid item xs={1} />
              <Grid item xs={10} className={classes.heroSectionMobile}>
                <Typography
                  variant="display3"
                  align="center"
                  component="h1"
                  className={[classes.headlineAboveMobile, classes.white]}
                >
                  We are on a mission
                </Typography>
                <Typography
                  variant="display3"
                  align="center"
                  component="h1"
                  className={[classes.headlineBetween, classes.white]}
                >
                  to make every government
                </Typography>
                <Typography
                  variant="display3"
                  align="center"
                  component="h1"
                  className={[classes.headlineBelowMobile, classes.white]}
                  gutterBottom
                >
                  service accessible online.
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  component="p"
                  className={[classes.subhead, classes.white, classes.subheadMobile]}
                >
                  We believe that unhindered access to government services is essential
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  component="p"
                  className={[classes.subhead, classes.white]}
                >
                  to move our society forward. We are starting by making it easier than ever
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  component="p"
                  className={[classes.subhead, classes.white]}
                >
                  to find any local government service with our search and integrate it into any government website.
                </Typography>
              </Grid>
              <Grid item xs={1} />
            </Grid>
          </div>
          <div id="section3" className={classes.section3Mobile}>
            <Grid container>
              <Grid item xs={1} />
              <Grid item xs={10} className={classes.heroSectionMobile}>
                <Typography
                  variant="display3"
                  align="center"
                  component="h1"
                  className={classes.headlineAboveMobile}
                >
                  Making it easier to find government services
                </Typography>
                <Typography
                  variant="display3"
                  align="center"
                  component="h1"
                  className={classes.headlineBelow}
                >
                  is just a start.
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  component="p"
                  className={[classes.subhead, classes.subheadMobile]}
                  gutterBottom
                >
                  We want to enable delightful governance delivered at your convenience.
                </Typography>
              </Grid>
              <Grid item xs={1} />
              <Grid item xs={1} md={2}></Grid>
              <Grid item xs={10} md={8} align="center" className={classes.getInTouchMobile}>
                <ContactForm />
              </Grid>
              <Grid item xs={1} md={2}></Grid>
            </Grid>
          </div>
          <Button variant="fab" mini onClick={this.handleClick} className={classes.fabMobile}>
            {this.state.section > 1
              ? <ExpandMore className={classes.icon}/>
              : <ExpandLess className={classes.icon}/>}
          </Button>
        </Fragment>}
      </div>
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
