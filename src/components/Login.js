  import { AppBar, TextField, Typography, Button } from '@material-ui/core'
import React from 'react'
import submit from '../myModules/submit'

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

  handleSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    let data =  "email=" + this.state.email +
                "&password=" + this.state.password 
    submit(data, "POST", "http://localhost:3000/auth/login", this.action)
  };

  render() {
    return (
      <div>
      <AppBar position="static">
      <Typography  variant="h6" noWrap>
            Login
          </Typography>
      </AppBar>
        <form id="login-user" method="post" className="form-register" onSubmit={this.handleSubmit}>
          <div>
            <TextField value={this.state.email} onChange={this.handleChange} id="standard-basic" name="email" label="email"  required/>
          </div>
            <TextField value={this.state.password} onChange={this.handleChange} id="standard-basic" name="password" label="password" type="password" required/>
            <Button type="submit">
              coucou
              </Button>
        </form>
      </div>
    )
  }
}

export default Login
