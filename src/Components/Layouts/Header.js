import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export class Header extends Component {
    render() {
        return (
    <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Exercises DataBase
          </Typography>
        </Toolbar>
    </AppBar>
        )
    }
}

export default Header
