import React from 'react';
import Grid from '@material-ui/core/Grid';
import GatsbyLink from 'gatsby-link';
import { isMobileOnly } from 'react-device-detect';

import { withStyles } from '@material-ui/core/styles';
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
    root: {
        // display: 'block',
        // flexDirection: 'column',
        // alignItems: 'flex-start',
        backgroundColor: theme.palette.common.white,
    },
    main: {
        width: '100%',
        minHeight: '100vh',
        paddingBottom: 79,
        // display: 'block',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: theme.spacing.unit * 3,
        paddingBottom: theme.spacing.unit * 3,
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
    },
    home: {
        color: theme.palette.primary['500'],
        textDecoration: 'none',
    },
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
            <div className={classes.root}>
                <Grid container spacing={0} className={classes.main}>
                    <Grid item xs={0} md={1}/>
                    <Grid item xs={12} md={10} className={classes.header}>
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
                    <Grid item xs={0} md={1}/>
                    {this.props.children()}
                </Grid>
                <div className={classes.footer}>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default withRoot(withStyles(styles)(DetailTemplate));
