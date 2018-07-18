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
    headline: {
        marginTop: theme.spacing.unit * 9,
        marginBottom: theme.spacing.unit * 3,
        color: theme.palette.primary['500'],
    },
    trendsSectionLeft: {
        marginTop: theme.spacing.unit * 4
    },
    heroSectionLeft: {
        marginTop: theme.spacing.unit * 16,
        marginBottom: theme.spacing.unit *4
    },
    dashboardSection: {
        paddingTop: theme.spacing.unit * 4,
        paddingBottom: theme.spacing.unit * 4,
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
        paddingTop: theme.spacing.unit * 4,
        paddingBottom: theme.spacing.unit * 4,
        background: theme.palette.primary['500'],
        boxShadow: `0 0 1px 1px ${theme.palette.primary["50"]}`
    },
    heroSection: {
        height: '100vh',
        background: '#fff',
        marginBottom: -82,
        paddingBottom: theme.spacing.unit * 8,
    },
    heroSectionTop: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: theme.spacing.unit * 24,
    },
    heroSectionRight: {
        marginTop: theme.spacing.unit * 8,
        marginBottom: theme.spacing.unit * 4
    },
    getAccessSection: {
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
        boxShadow: `0 0 2px 2px #fafafa`
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
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        borderRadius: 3,
        padding: '10px 12px 12px 12px',
        marginBottom: theme.spacing.unit,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
    },
    bootstrapInputMobile: {
        width: '300px',
        // color: theme.palette.primary['200'],
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        borderRadius: 3,
        padding: '10px 12px 12px 12px',
        marginBottom: theme.spacing.unit,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
    },
    bootstrapTextArea: {
        width: '500px',
        // color: theme.palette.primary['200'],
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        borderRadius: 3,
        padding: '10px 12px 12px 12px',
        marginBottom: theme.spacing.unit / 2,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
    },
    submitButton: {
        backgroundColor: theme.palette.common.white,
    },
    submitStatus: {
        color: theme.palette.common.white,
    },
    whiteText: {
        color: theme.palette.common.white,
    },
    display1: {
        marginTop: theme.spacing.unit * 2,
    },
    subheading: {
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
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
                "form-name": "getAccess",
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
                    <title>{`Openly Serve`} </title>
                    <meta name="description" content={`Openly serve for local businesses `} />
                </Helmet>
                 {/* hero section end */}

                {/* hero section start */}
                <Grid container className={classes.heroSection} spacing={0}>
                    <Grid xs={1} item sm={1} md={2}/>
                        {!isMobileOnly
                        ? (
                            <Fragment>
                                <Grid item xs={12} md={8} className={classes.heroSectionTop}>
                                    <Typography
                                        variant="display3"
                                        className={classes.headerTitle}
                                    >
                                        The easiest way to file
                                    </Typography>
                                    <Typography
                                        variant="display3"
                                        gutterBottom
                                        className={classes.headerTitle}
                                    >
                                        your government paperwork.
                                    </Typography>
                                    <Typography align="left" variant="body1" component="span">
                                        We help small businesses to keep track of all their compliance requirements
                                    </Typography>
                                    <Typography align="left" variant="body1" component="span">
                                        and file them at a single place seamlessly online.
                                    </Typography>
                                </Grid>
                            </Fragment>
                        )
                        : (
                            <Fragment>
                                <Grid item xs={10} className={classes[heroSectionRight]}>
                                    <Typography
                                        align="center"
                                        variant="display3"
                                        component="h1"
                                        gutterbottom
                                        className={classes.headline}
                                    >
                                        The easiest way to file your government paperwork.
                                    </Typography>
                                    <Typography align="center" variant="body1" component="span">
                                        We help small businesses to keep track of all their compliance requirements and file them at a single place seamlessly online.
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
                                        Compliance made simple.
                                    </Typography>
                                    <Typography
                                        align="left"
                                        className={classes.trendsSectionleftHeader}
                                        variant="body2"
                                        component="span"
                                    >
                                        Get a snapshot of all compliance requirements for your business
                                    </Typography>
                                    <Typography
                                        align="left"
                                        className={classes.trendsSectionleftHeader}
                                        variant="body2"
                                        component="span"
                                    >
                                        and file them online.
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
                                            title="Compliance"
                                            alt="compliance screenshot"
                                            className={classes.image}
                                            sizes={this.props.data.serve1.sizes}
                                        />
                                    </Animate>

                                </Grid>
                            </Fragment>
                        )
                        : (
                            <Fragment>
                                <Grid item xs={10} className={classes[heroSectionLeft]}>
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
                                            title="Compliance"
                                            alt="compliance screenshot"
                                            sizes={this.props.data.serve1.sizes}
                                        />
                                    </Animate>
                                </Grid>
                                <Grid item xs={1} />
                                <Grid item xs={1} />
                                <Grid item xs={10} className={classes[heroSectionRight]}>
                                    <Typography align="center" variant="display1" component="h1" gutterbottom className={[classes.whiteText, classes.display1]}>
                                        Compliance made simple.
                                    </Typography>
                                    <Typography align="center" variant="subheading" component="span" className={[classes.whiteText, classes.subheading]}>
                                        Get a snapshot of all compliance requirements for your business and file them online.
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
                                        easeType="linear"
                                    >
                                        <Img
                                            title="Manage"
                                            alt="manage screenshot"
                                            className={classes.image}
                                            sizes={this.props.data.serve2.sizes}
                                        />
                                    </Animate>

                                </Grid>
                                <Grid item md={1}/>
                                <Grid item xs={10} sm={10} md={4} className={classes[trendsSectionLeft]}>
                                    <Typography
                                        align="right"  
                                        variant="display1"
                                        component="h1"
                                        gutterBottom
                                    >
                                        Manage all records securely.
                                    </Typography>
                                    <Typography
                                        align="right"
                                        variant="body2"
                                        component="span"
                                    >
                                        Keep a record of all your business compliance documents
                                    </Typography>
                                    <Typography
                                        align="right"
                                        variant="body2"
                                        component="span"
                                    >
                                        secured in one place.
                                    </Typography>
                                </Grid>
                            </Fragment>
                        )
                        : (
                            <Fragment>
                                <Grid item xs={1}/>
                                <Grid item xs={10} className={classes[heroSectionLeft]}>
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
                                            title="Manage"
                                            alt="manage screenshot"
                                            className={classes.image}
                                            sizes={this.props.data.serve2.sizes}
                                        />
                                    </Animate>
                                </Grid>
                                <Grid item xs={1} />
                                <Grid item xs={1} />
                                <Grid item xs={10} className={classes[heroSectionRight]}>
                                    <Typography align="center" variant="display1" gutterbottom className={classes.display1}>
                                        Manage all records securely.
                                    </Typography>
                                    <Typography align="center" variant="subheading" className={classes.subheading}>
                                        Keep a record of all your business compliance documents secured in one place.
                                    </Typography>
                                </Grid>
                            </Fragment>
                        )}

                    <Grid item item xs={1} sm={1} md={0}/>
                </Grid>
                {/* dashboard section end */}

                {/* get in touch section start */}
                <Grid container className={classes.getAccessSection} spacing={0}>
                    <Grid item>
                        <div className={classes.formTitle}>
                            <Typography
                                className={classes.trendsSectionleftHeader}
                                variant="display1"
                                component="h1"
                                gutterBottom
                            >
                              Get Early Access
                            </Typography>
                        </div>
                        <form
                            name="getAccess"
                            onSubmit={this.handleSubmit}
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            className={classes.form}
                        >
                            <div>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Name of your business"
                                    value={name}
                                    onChange={this.handleChange}
                                    className={!isMobileOnly ? classes.bootstrapInput : classes.bootstrapInputMobile}
                                />
                            </div>
                            <div>
                                <input
                                    name="location"
                                    type="text"
                                    placeholder="Location"
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
    query serveImageQuery {
        serve1: imageSharp(id: { regex: "/serve1/" }) {
            sizes {
                ...GatsbyImageSharpSizes_tracedSVG
            }
        }
        serve2: imageSharp(id: { regex: "/serve2/"}) {
            sizes {
                ...GatsbyImageSharpSizes_tracedSVG
            }
        }
    }
`;

export default withRoot(withStyles(styles)(Index));
