import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';

import './Header.scss';


class Header extends Component {
    state = {
        'page': 'home'
    };

    handleChange = (event, newValue) => {
        this.setState({
            page: newValue
        });
        console.log(this.props);
        console.log(this.props.history);
        this.props.history.push(`/${newValue}`);
    }

    handleFormsClick = () => {
        console.log('forms click');
        console.log(this.props.history);
        // this.props.history.push('/forms/');
    }

    handleFieldsClick = () => {
        console.log('fields click');
    }

    handleGroupsClick = () => {
        console.log('groups click');
    }

    handleLogoutClick = () => {
        console.log('Log out click');
    }

    render() {
        return (
            <div>

                <AppBar className="navbar"
                    position="static"
                >
                    <Toolbar className="navbar__toolbar">
                        <Typography className="navbar__logo"
                            variant="h6"
                        >
                            NgFg
                        </Typography>

                        {/* <Link className="navbar__link"
                            component="button">
                            Forms
                        </Link> */}

                        <Button className="navbar__link"
                                onClick={this.handleFormsClick}
                        >
                            Forms
                        </Button>
                        <Button className="navbar__link"
                                onClick={this.handleFieldsClick}
                        >
                            Fields
                        </Button>
                        <Button className="navbar__link"
                                onClick={this.handleGroupsClick}
                        >
                            Groups
                        </Button>

                        <Button className="navbar__btn"
                            onClick={this.handleLogoutClick}
                        >
                            Log Out
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withRouter(Header);
