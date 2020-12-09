import { TextField, Button } from '@material-ui/core'
import React, { Component } from 'react'
import {authFetch} from '../myModules/token-auth'
import addr from '../adress'
import './../scenes/add.css'


class AddWeight extends Component {
  state = {
    email: "u",
    weight: ""
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault(); 
    authFetch(addr + '/api/user/addWeight',{
      headers: { "Content-Type": "application/json" },
        method: 'POST',
        body: JSON.stringify(this.state),
      })
      .then(r => r.json())
      .then(this.props.add(this.state.weight))
  }; 

  render() {
    return (
      <div>
        <form id="add-Wheight" method="post" className="form-register" onSubmit={this.handleSubmit}>
            <TextField value={this.state.weight} onChange={this.handleChange} id="standard-basic" name="weight" label="entrer une masse" type="number" required/>
            <Button type="submit"> add </Button>
        </form>
      </div>
    )
  }
}

export default AddWeight
