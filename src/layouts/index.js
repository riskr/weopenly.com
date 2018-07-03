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
    // root: {
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'flex-start',
    // },
    header: {
        margin: theme.spacing.unit * 3,
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
});

class DetailTemplate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        const {classes} = this.props;

        return (
            <div>
                <Grid container spacing={0}>
                    <Grid item md={1}/>
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
                    <Grid item md={1}/> 
                    {this.props.children()}
                </Grid>
                <Footer />
            </div>
        );
    }
}

export default withRoot(withStyles(styles)(DetailTemplate));
