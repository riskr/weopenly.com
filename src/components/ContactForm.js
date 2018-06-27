import React, {Component, Fragment} from "react";

import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import withRoot from '../withRoot';

const styles = theme => ({
    media: {
        minWidth: "100px",
        minHeight: "100px",
        backgroundPosition: "center",
        borderRadius: "50%",
        boxShadow: `0px 0px 10px 5px ${theme.palette.primary["A200"]}`
    },
    bootstrapRoot: {
        padding: 0,
        'label + &': {
            marginTop: theme.spacing.unit * 3
        },
        marginBotton: theme.spacing.unit
    },
    mediaContainer: {
        paddingTop: 24,
        borderRadius: 3,
        cursor: 'pointer',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: `0 0 10px 5px ${theme.palette.primary["A200"]}`
    },
    bootstrapInput: {
        borderRadius: 3,
        backgroundColor: theme.palette.primary['50'],
        color: theme.palette.primary['200'],
        border: '1px solid #ced4da',
        padding: '10px 12px 12px 12px',
        width: '200px',
        transition: theme.transitions.create(['border-color', 'box-shadow'])
    }
});

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            success: false,
            failure: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit = e => {
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
    };

    handleChange = e => this.setState({
        [e.target.name]: e.target.value
    });

    render() {
        const {classes} = this.props;
        const {name, email, message} = this.state;
        return (
            <Fragment>
            <form onSubmit={this.handleSubmit} data-netlify="true" data-netlify-honeypot="bot-field" className={classes.container} name="getInTouch">

                <label className={classes.bootstrapFormLabel}>
                    <input placeholder="your@email.com" className={classes.bootstrapInput} type="email" name="email" value={name} onChange={this.handleChange}/>
                </label>
                <Button variant="outlined" type="submit" className={classes.button}>
                    Get updates
                </Button>
            </form>
                {this.state.success ? (<Typography variant="caption" component="p">
                    Thank you, we will reach out when we have updates :)
                </Typography>) : null }
                {this.state.failure ? (<Typography variant="caption" component="p">
                     Oops, something went wrong :(
                </Typography>) : null }
            </Fragment>
        );
    }
}

export default withRoot(withStyles(styles)(ContactForm));
