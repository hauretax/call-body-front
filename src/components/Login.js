  import { AppBar, TextField, Typography, Button } from '@material-ui/core'
  import {isLoggedIn, login} from '../myModules/token-auth'
import React from 'react'
import Home from './Home'
import addr from '../adress'

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    connected: isLoggedIn()
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  action = (response) => {
      console.log(response)
  }


  handleSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault(); 
    console.log(JSON.stringify(this.state));
    fetch(addr + '/auth/login',{
      headers: { "Content-Type": "application/json" },
        method: 'POST',
        body: JSON.stringify(this.state),
      })
      .then(r => r.json())
      .then(token => { 
        login(token) 
        console.log(1)
      })
      .then(() => {this.setState({connected: true})} )/*
   formSubmitEvent.preventDefault();
    let data =  "email=" + this.state.email +
                "&password=" + this.state.password 
    submit(data, "POST", "http://localhost:3000/auth/login", this.action)*/
  };

  render() {
    if (this.state.connected) {
      return <Home ok='ok'/>
    }
    return (
      <div>
        <AppBar position="static">
        <Typography  variant="h6" noWrap>
              Login
            </Typography>
        </AppBar>
        <form id="login-user" method="post" className="form-register" onSubmit={this.handleSubmit}>
          <div>
            <TextField value={this.state.email} onChange={this.handleChange} id="s" name="email" label="email"  required/>
          </div>
            <TextField value={this.state.password} onChange={this.handleChange} id="standard-basic" name="password" label="password" type="password" required/>
            <Button type="submit">
              coucou
              </Button>
        </form>
        <a href="/register"> je n est pas de compte </a>
      </div>
    )
  }
}

export default Login
