import React, { Fragment } from 'react';
import Img from "gatsby-image";;
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Helmet from "react-helmet";
import { isMobileOnly } from 'react-device-detect';
import Animate from 'react-simple-animate';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import withRoot from '../withRoot';

const styles = theme => ({
    headerLogo: {
        marginTop: theme.spacing.unit *3,
        marginBottom: theme.spacing.unit * 3,
        color: theme.palette.primary['500'],
    },
    headerNav: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'flex-end'
    },
    trendsSectionLeft: {
        marginTop: theme.spacing.unit * 4
    },
    heroSectionLeft: {
        marginTop: theme.spacing.unit * 16,
        marginBottom: theme.spacing.unit *4
    },
    dashboardSection: {
        paddingtop: theme.spacing.unit * 2,
    },
    trendsSectionLeft: {
        marginTop: theme.spacing.unit * 8,
        marginBottom: theme.spacing.unit * 4
    },
    trendsSectionLeftMob:{
        marginTop: theme.spacing.unit * 8,
        marginBottom: theme.spacing.unit * 4
    },
    trendsSectionleftHeader: {
        color: theme.palette.common.white,
    },
    trendsSection: {
        paddingtop: theme.spacing.unit * 2,
        background: theme.palette.primary['500'],
        boxShadow: `0 0 1px 1px ${theme.palette.primary["50"]}`
    },
    heroSection: {
        background: '#fff',
        paddingBottom: theme.spacing.unit * 8
    },
    heroSectionRight: {
        marginTop: theme.spacing.unit * 8,
        marginBottom: theme.spacing.unit * 4
    },
    getInTouchSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: theme.palette.primary['500']
    },
    headerTitle: {
        color: theme.palette.primary['500']
    },
    image: {
        boxShadow: `0 0 15px 10px ${theme.palette.primary["A400"]}`
    },
    heroLogo: {
        fontSize: theme.spacing.unit *8,
        color: theme.palette.primary["700"]
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    formTitle: {
        display: 'flex',
        justifyContent: 'center',
    },
    bootstrapInput: {
        width: '500px',
        // color: theme.palette.primary['200'],
        backgroundColor: theme.palette.primary['50'],
        border: '1px solid #ced4da',
        borderRadius: 3,
        padding: '10px 12px 12px 12px',
        marginBottom: theme.spacing.unit,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
    },
    bootstrapInputMobile: {
        width: '300px',
        // color: theme.palette.primary['200'],
        backgroundColor: theme.palette.primary['50'],
        border: '1px solid #ced4da',
        borderRadius: 3,
        padding: '10px 12px 12px 12px',
        marginBottom: theme.spacing.unit,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
    },
    bootstrapTextArea: {
        width: '500px',
        // color: theme.palette.primary['200'],
        backgroundColor: theme.palette.primary['50'],
        border: '1px solid #ced4da',
        borderRadius: 3,
        padding: '10px 12px 12px 12px',
        marginBottom: theme.spacing.unit / 2,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
    },
    bootstrapTextAreaMobile: {
        width: '300px',
        // color: theme.palette.primary['200'],
        backgroundColor: theme.palette.primary['50'],
        border: '1px solid #ced4da',
        borderRadius: 3,
        padding: '10px 12px 12px 12px',
        marginBottom: theme.spacing.unit / 2,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
    },
    submitButton: {
        backgroundColor: theme.palette.primary['50'],
    },
    submitStatus: {
        color: theme.palette.common.white,
    },
    whiteText: {
        color: theme.palette.common.white,
    },
});

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
};

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            location: "",
            email: "",
            comment: "",
            success: false,
            failure: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        let currentLoc = '';
        if (window.location && window.location.pathname){
            currentLoc = window.location.pathname
        }

        fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: encode({
                "form-name": "getInTouch",
                "path": currentLoc,
                "email": this.state.email,
            })
        }).then(() => this.setState({
            success: true
        })).catch(error => this.setState({failure: true}));

        e.preventDefault();
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const { classes, data } = this.props;
        const {
            name,
            location,
            email,
            comment,
        } = this.state;
        const heroSectionLeft = classNames({
            'heroSectionLeft': !isMobileOnly,
            'heroSectionLeftMob': isMobileOnly
        });
        const heroSectionRight = classNames({
            'heroSectionRight': !isMobileOnly,
            'heroSectionRightMob': isMobileOnly
        });
        const dashboardSectionLeft = classNames({
            'dashboardSectionLeft': !isMobileOnly,
            'dashboardSectionLeftMob': isMobileOnly
        });
        const dashboardSectionRight = classNames({
            'dashboardSectionRight': !isMobileOnly,
            'dashboardSectionRightMob': isMobileOnly
        });
        const trendsSectionLeft = classNames({
            'trendsSectionLeft': !isMobileOnly,
            'trendsSectionLeftMob': isMobileOnly
        });
        const trendsSectionRight = classNames({
            'trendsSectionRight': !isMobileOnly,
            'trendsSectionRightMob': isMobileOnly
        });

        return (
            <Grid container spacing={0}>
                {/* header section start */}
                <Helmet>
                    <title>{`Openly spotlight | Localgov.fyi`} </title>
                    <meta name="description" content={`Openly spotlight for local governments `} />
                </Helmet>
                 {/* hero section end */}

                {/* hero section start */}
                <Grid container className={classes.heroSection} spacing={0}>
                    <Grid xs={1} item sm={1} md={2}/> {!isMobileOnly
                        ? (
                            <Fragment>
                                <Grid item xs={10} sm={10} md={4} className={classes[heroSectionLeft]}>
                                    <Typography
                                        className={classes.headerTitle}
                                        align="left"
                                        variant="display1"
                                        component="h1"
                                        gutterBottom
                                    >
                                        The fastest way to access gov services.
                                    </Typography>
                                    <Typography align="left" variant="caption" component="span">
                                      We think that accessing finding and getting gov services should be delightful. Spotlight is our first tool to give access to most important gov services online. 
                                    </Typography>
                                </Grid>
                                <Grid item md={1}/>
                                <Grid item xs={10} sm={3} md={3} className={classes[heroSectionRight]}>
                                    <Img
                                        title="Spotlight"
                                        alt="Spotlight search 1"
                                        className={classes.image}
                                        sizes={this.props.data.gal1.sizes}
                                    />
                                </Grid>
                            </Fragment>
                        )
                        : (
                            <Fragment>
                                <Grid item xs={10} sm={6} className={classes[heroSectionLeft]}>
                                    <Img
                                        title="Spotlight"
                                        alt="Spotlight search"
                                        sizes={this.props.data.gal1.sizes}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4} className={classes[heroSectionRight]}>
                                    <Typography align="center" variant="display1" component="h1" gutterbottom>
                                        The fastest way to access gov services.
                                    </Typography>
                                    <Typography align="center" variant="subheading" component="span">
                                        We think that accessing finding and getting gov services should be delightful.Spotlight is our first tool to give access to most important gov services online.
                                    </Typography>
                                </Grid>
                            </Fragment>
                        )}
                    <Grid item xs={1} sm={1} md={2}/> {/* hero section end */}
                </Grid>

                {/* trends section start */}
                <Grid container className={classes.trendsSection} spacing={0}>
                    <Grid item xs={1} sm={1} md={1}/> {!isMobileOnly
                        ? (
                            <Fragment>
                                <Grid item xs={10} sm={10} md={4} className={classes[trendsSectionLeft]}>
                                    <Typography
                                        align="left"
                                        className={classes.trendsSectionleftHeader}
                                        variant="display1"
                                        component="h1"
                                        gutterBottom
                                    >
                                      Integrates in a flash
                                    </Typography>
                                    <Typography
                                        align="left"
                                        className={classes.trendsSectionleftHeader}
                                        variant="caption"
                                        component="span">
                                        Add the Spotlight search to your gov website with just a line of code. That’s it.
                                    </Typography>
                                </Grid>
                                <Grid item md={1}/>
                                <Grid item xs={10} sm={10} md={6}>
                                    <Animate
                                        startAnimation
                                        startStyle={{
                                            "transform": "translateY(500px)"
                                        }}
                                        endStyle={{
                                            "transform": "translateY(0)"
                                        }}
                                        durationSeconds="0.5"
                                        easeType="linear"
                                    >
                                        <Img
                                            title="Trends"
                                            alt="Spotlight Trends"
                                            sizes={this.props.data.trends.sizes}
                                        />
                                    </Animate>

                                </Grid>
                            </Fragment>
                        )
                        : (
                            <Fragment>
                                <Grid item xs={10} sm={6} className={classes[heroSectionLeft]}>
                                    <Animate
                                        startAnimation
                                        startStyle={{
                                            "transform": "translateY(500px)"
                                        }}
                                        endStyle={{
                                            "transform": "translateY(0)"
                                        }}
                                        durationSeconds="0.5"
                                        easeType="linear"
                                    >
                                        <Img title="Trends" alt="Spotlight Trends" sizes={this.props.data.trends.sizes}/>
                                    </Animate>
                                </Grid>
                                <Grid item xs={12} sm={4} className={classes[heroSectionRight]}>
                                    <Typography align="center" variant="display1" component="h1" gutterbottom className={classes.whiteText}>
                                      Integrates in a flash
                                    </Typography>
                                    <Typography align="center" variant="subheading" component="span" className={classes.whiteText}>
                                       Add the Spotlight search to your gov website with just a line of code. That’s it.
                                    </Typography>
                                </Grid>
                            </Fragment>
                        )}

                    <Grid item item xs={1} sm={1} md={0}/> {/* trends section end */}
                </Grid>

                {/* dashboard section start */}
                <Grid container className={classes.dashboardSection} spacing={0}>
                    {!isMobileOnly
                        ? (
                            <Fragment>
                                <Grid item xs={10} sm={10} md={6}>
                                    <Animate
                                        startAnimation
                                        startStyle={{
                                        "transform": "translateY(500px)"
                                    }}
                                        endStyle={{
                                        "transform": "translateY(0)"
                                    }}
                                        durationSeconds="0.5"
                                        easeType="linear">
                                        <Img
                                            title="Services"
                                            alt="Spotlight Services"
                                            sizes={this.props.data.services.sizes}/>
                                    </Animate>

                                </Grid>
                                <Grid item md={1}/>
                                <Grid item xs={10} sm={10} md={4} className={classes[trendsSectionLeft]}>
                                    <Typography
                                        align="right"  
                                        variant="display1"
                                        component="h1"
                                        gutterBottom>
                                        A single record for all services
                                    </Typography>
                                    <Typography
                                        align="right"
                                        variant="caption"
                                        component="span">
                                       Understanding what services matter most to people is the starting point to make your gov service centered. Our dashboard is the starting point to get a glimpse of it. 
                                    </Typography>
                                </Grid>
                            </Fragment>
                        )
                        : (
                            <Fragment>
                                <Grid item xs={1}/>
                                <Grid item xs={10} sm={6} className={classes[heroSectionLeft]}>
                                    <Animate
                                        startAnimation
                                        startStyle={{
                                            "transform": "translateY(500px)"
                                        }}
                                        endStyle={{
                                            "transform": "translateY(0)"
                                        }}
                                        durationSeconds="0.5"
                                        easeType="linear"
                                    >
                                        <Img title="Services" alt="Spotlight Services" sizes={this.props.data.services.sizes}/>
                                    </Animate>
                                </Grid>
                                <Grid item xs={12} sm={4} className={classes[heroSectionRight]}>
                                    <Typography align="center" variant="display1" component="h1" gutterbottom>
                                        A single record for all services
                                    </Typography>
                                    <Typography align="center" variant="subheading" component="span">
                                       Understanding what services matter most to people is the starting point to make your gov service centered. Our dashboard is the starting point to get a glimpse of it. 
                                    </Typography>
                                </Grid>
                            </Fragment>
                        )}

                    <Grid item item xs={1} sm={1} md={0}/>
                </Grid>
                {/* dashboard section end */}

                {/* get in touch section start */}
                <Grid container className={classes.getInTouchSection} spacing={0}>
                    <Grid item>
                        <div className={classes.formTitle}>
                            <Typography
                                className={classes.trendsSectionleftHeader}
                                variant="display1"
                                component="h1"
                                gutterBottom
                            >
                              Get in touch to try Spotlight
                            </Typography>
                        </div>
                        <form
                            name="getInTouch"
                            onSubmit={this.handleSubmit}
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            className={classes.form}
                        >
                            <div>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                    value={name}
                                    onChange={this.handleChange}
                                    className={!isMobileOnly ? classes.bootstrapInput : classes.bootstrapInputMobile}
                                />
                            </div>
                            <div>
                                <input
                                    name="location"
                                    type="text"
                                    placeholder="City or Jurisdiction"
                                    value={location}
                                    onChange={this.handleChange}
                                    className={!isMobileOnly ? classes.bootstrapInput : classes.bootstrapInputMobile}
                                />
                            </div>
                            <div>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    value={email}
                                    onChange={this.handleChange}
                                    className={!isMobileOnly ? classes.bootstrapInput : classes.bootstrapInputMobile}
                                />
                            </div>
                            <div>
                                <textarea
                                    name="comment"
                                    type="text"
                                    rows={4}
                                    placeholder="Questions or comments"
                                    value={comment}
                                    onChange={this.handleChange}
                                    className={!isMobileOnly ? classes.bootstrapTextArea : classes.bootstrapTextAreaMobile}
                                />
                            </div>
                            <Button variant="contained" type="submit" className={classes.submitButton}>
                                Submit
                            </Button>
                        </form>
                        {this.state.success
                            ? <Typography variant="caption" component="p" className={classes.submitStatus}>
                                Thank you! We will be in touch shortly.
                            </Typography>
                            : null
                        }
                        {this.state.failure
                            ? <Typography variant="caption" component="p" className={classes.submitStatus}>
                                Oops, something went wrong :(
                            </Typography>
                            : null
                        }
                    </Grid>
                </Grid>
                {/* get in touch section end */}
            </Grid>
        );
    }
}

Index.propTypes = {
    classes: PropTypes.object.isRequired
};

export const query = graphql`
  query spotlightImageQuery {
    gal1: imageSharp(id: { regex: "/gal1/" }) {
    sizes {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    services: imageSharp(id: { regex: "/services/"}) {
      sizes {
            ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    gal2: imageSharp(id: { regex: "/gal2/"}) {
      sizes {
            ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    gal4: imageSharp(id: { regex: "/gal4/"}) {
       sizes {
            ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    trends: imageSharp(id: { regex: "/trends/"}) {
      sizes {
            ...GatsbyImageSharpSizes_tracedSVG
      }
    }
   
  }
`;

export default withRoot(withStyles(styles)(Index));
