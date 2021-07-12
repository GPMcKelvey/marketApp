import React, {Component} from 'react';
import './AuthStyle.css';
// import APIURL from '../../helpers/environment';

import {Dialog, Button, withStyles, Theme, Box} from '@material-ui/core';
import {purple} from '@material-ui/core/colors';

// const ColorButton = withStyles((Theme) => ({
//     root: {
//       color: theme.palette.getContrastText(purple[300]),
//       backgroundColor: purple[300],
//       '&:hover': {
//         backgroundColor: purple[400],
//       },
//     },
//   }))(Button);


export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            modal: props.loginModal
        }
    }

    
    handleSubmit = (event) => {
        // event.preventDefault();
        // fetch(`${APIURL}/users/login`, {
        //      method: 'POST',
        //      body: JSON.stringify({
        //          user:{
        //              username: this.state.username, 
        //              password: this.state.password 
        //             }}),
        //      headers: new Headers({
        //           'Content-Type': 'application/json'
        //      })
        //  })
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data);
        //     this.props.updateToken(data);
        // })
        this.props.exitHandler();
    }

    inputHandler = (e) => {
        const value = e.target.value;
        this.setState({
                ...this.state,
                [e.target.name]: value,
            })
    }


    render() {
        return (
            <div>
                <Dialog open={this.state.modal} className='login'>  
                    <div id='loginDiv'>
                        <h1 className='header'>Login</h1>
                            <form className='form-inputs' onSubmit={this.handleSubmit}>    
                                <label> Username: </label>
                                <Box>
                                    <input id='username' name= 'username' type= 'text' onChange={this.inputHandler} value={this.state.username} >   
                                    </input></Box>
                                <br/>
                                <label> Password:</label>
                                <Box>
                                    <input id='password' name='password' type='password' onChange={this.inputHandler} value={this.state.password}>
                                    </input></Box>
                                <br />
                                <Box display='flex'>
                                <Box m={1} p={1}>
                                <Button className='form-input-btn' onClick={this.handleSubmit}>Submit</Button>
                                </Box>
                                <Box m={1} p={1}>
                                <Button className= 'form-input-btn' onClick={this.props.exitHandler}>Exit</Button>
                                </Box>
                                </Box>
                            </form>
                    </div>
                </Dialog>
            </div>
        )
    }
}