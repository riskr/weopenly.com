import React from "react";
import Grid from '@material-ui/core/Grid';
import GatsbyLink from "gatsby-link";
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import withRoot from '../withRoot';
import Button from '@material-ui/core/Button';
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
        width: "100%",
        height: "100%",
        margin: 0,
        padding: 0
    },
    header: {
        margin: theme.spacing.unit * 3,
        display: 'flex',
        justifyContent: 'space-between'
    },
    floatingButton: {
        color: theme.palette.common.white,
        background: theme.palette.primary['700'],
        position: 'fixed',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
        zIndex: 1
    }
});

class DetailTemplate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;

        return (
            <Grid container spacing={0}>
                <Grid item md={1}/>
                <Grid item xs={10} className={classes.header}>
                    <div>
                        <Typography align="left" variant="headline" component="span">
                            <Link style={{textDecoration: 'none'}} to="/">
                                Openly
                            </Link>
                        </Typography>
                    </div>
                    <div>
                        <Button size="small" component={Link} to="/about">
                            Who we are
                        </Button>
                        <Button size="small" component={Link} to="/terms">
                            Terms
                        </Button>
                        <Button size="small" component={Link} to="/privacy">
                            Privacy
                        </Button>
                    </div>
                </Grid>
                <Grid item md={1}/> {this
                    .props
                    .children()}
            </Grid>
        );
    }
}

export default withRoot(withStyles(styles)(DetailTemplate));
