import React, { Component } from 'react';


import { Button, withStyles, Theme, Box, AppBar } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

import Login from './Login';
import Signup from './Signup';
import greenerTogether from '../assets/greenerLogo.PNG';

// const ColorButton = withStyles((Theme) => ({
//     root: {
//       color: theme.palette.getContrastText(purple[300]),
//       backgroundColor: purple[300],
//       '&:hover': {
//         backgroundColor: purple[400],
//       },
//     },
//   }))(Button);


export default class Auth extends Component{
    constructor (props) {
        super(props)
        this.state = {
            loginModal: false,
            signupModal: false
        }
    };

    signupModalHandler = () => {
        this.setState({
            signupModal: true
        })
    }

    loginModalHandler = () => {
        this.setState({
            loginModal: true
        })
    }

    exitHandler = () => {
        this.setState({
            loginModal: false,
            signupModal: false
        })
    }

    render() {
        return(
            <div>
                <AppBar>
                <Box display='flex' justifyContent='center' className='appBar'>
                    <Box justifyContent='left'>
                        <img src={greenerTogether} style={{maxWidth: '10%'}}></img>
                    </Box>
                    <Box display='flex' flexGrow='7' alignSelf= 'center' justifySelf='center'>
                        <Box m={2} p={1} >
                        <Button variant="contained" color='primary' onClick={this.signupModalHandler}>Sign Up</Button>
                        </Box>
                        <Box m={2} p={1}>
                        <Button variant="contained" onClick={this.loginModalHandler}>Login</Button>
                        </Box>
                    </Box>
                </Box>
                </AppBar>
                {this.state.loginModal ? <Login updateToken={this.props.updateToken} exitHandler={this.exitHandler} loginModal={this.state.loginModal} /> : null}
                {this.state.signupModal ? <Signup updateToken={this.props.updateToken} exitHandler={this.exitHandler} signupModal={this.state.signupModal} /> : null}
            </div>
        )
    }
} 