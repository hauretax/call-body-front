import { AppBar, TextField, Typography, Button } from '@material-ui/core'
import { isLoggedIn, login } from '../myModules/token-auth'
import React from 'react'
import addr from '../adress'
import { Redirect } from 'react-router-dom'



class Login extends React.Component {
  state = {
    email: "",
    password: ""
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  action = (response) => {
    console.log(response)
  }

  setValue = (profile) =>{
    localStorage.setItem('profile', "true");
    localStorage.setItem('goal', JSON.stringify(profile.goal));
    localStorage.setItem('weights', JSON.stringify(profile.weight));
    localStorage.setItem('calories', JSON.stringify(profile.calo));
    console.log(profile.weight);
    window.location.reload();
  }

  handleSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    fetch(addr + '/auth/login', {
      headers: { "Content-Type": "application/json" },
      method: 'POST',
      body: JSON.stringify(this.state),
    })
      .then(r => r.json())
      .then((token) => {
        login(token);
        this.setValue(token.profile);
      })
    //  .then((profile) => {console.log(profile);})
    //localStorage.profile = JSON.stringify(profile);} )
    /*
formSubmitEvent.preventDefault();
let data =  "email=" + this.state.email +
            "&password=" + this.state.password 
submit(data, "POST", "http://localhost:3000/auth/login", this.action)*/
  };

  render() {
    if (localStorage.getItem('profile') === 'true') {
      return (<Redirect to={`/home`} />)
    }
    return (
      <div>
        <AppBar position="static">
          <Typography variant="h6" noWrap>
            Login
            </Typography>
        </AppBar>
        <form id="login-user" method="post" className="form-register" onSubmit={this.handleSubmit}>
          <div>
            <TextField value={this.state.email} onChange={this.handleChange} id="s" name="email" label="email" required />
          </div>
          <TextField value={this.state.password} onChange={this.handleChange} id="standard-basic" name="password" label="password" type="password" required />
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
