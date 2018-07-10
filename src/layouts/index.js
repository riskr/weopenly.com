import React, { Fragment } from 'react';
import GatsbyLink from 'gatsby-link';
import { isMobileOnly } from 'react-device-detect';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import withRoot from '../withRoot';
import Footer from '../components/Footer';

const Link = ({
    children,
    to,
    ...other
}) => {
    // Tailor the following test to your environment. This example assumes that any
    // internal link (intended for Gatsby) will start with exactly one slash, and
    // that anything else is external.
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
    main: {
        width: '100%',
        minHeight: '100vh',
        display: 'block',
        paddingBottom: 79,
    },
    children: {
        textAlign: 'left',
    },
    header: {
        padding: theme.spacing.unit * 3,
        display: 'flex',
        justifyContent: 'space-between'
    },
    home: {
        color: theme.palette.primary['500'],
        textDecoration: 'none',
    },
    // floatingButton: {
    //     color: theme.palette.common.white,
    //     background: theme.palette.primary['700'],
    //     position: 'fixed',
    //     bottom: theme.spacing.unit * 2,
    //     right: theme.spacing.unit * 2,
    //     zIndex: 1
    // },
    button: {
        textTransform: 'none',
    },
    text: {
        color: 'rgba(30, 30, 50,0.54)'
    },
    footer: {
        width: '100%',
        alignSelf: 'flex-end',
        marginTop: -79,
    },
});

class DetailTemplate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;

        return (
            <Fragment>
                <Grid container spacing={0} align="center" className={classes.main}>
                    <Grid item xs={1}/>
                    <Grid item xs={10} className={classes.header}>
                        <div>
                            <Typography align="left" variant="headline" component="span">
                                <Link className={classes.home} to="/">
                                    Openly
                                </Link>
                            </Typography>
                        </div>
                        <div>
                            <Button className={classes.button} size="small" component={Link} to="/terms">
                                <Typography variant="body2" className={classes.text}>Terms</Typography>
                            </Button>
                            <Button className={classes.button} size="small" component={Link} to="/privacy">
                                <Typography variant="body2" className={classes.text}>Privacy</Typography>
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={1}/>
                    <div className={classes.children}>
                        {this.props.children()}
                    </div>
                </Grid>
                <div className={classes.footer}>
                    <Footer />
                </div>
            </Fragment>
        );
    }
}

export default withRoot(withStyles(styles)(DetailTemplate));
