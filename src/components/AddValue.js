import { TextField, Button } from '@material-ui/core'
import React, { Component } from 'react'
import {getId, authFetch} from '../myModules/token-auth'
import addr from '../adress'
import './../scenes/add.css'


class AddValue extends Component {
  state = {
    userId: getId()
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    let tmp = JSON.stringify(this.state)
    console.log(tmp)
    authFetch(addr + '/api/user/add'+ this.props.value,{
      headers: { "Content-Type": "application/json" },
        method: 'POST',
        body: tmp,
      })
      .then(r => r.json())
      .then(this.props.add(this.state[this.props.value]))
  };

  render() {
    return (
      <div>
        <form id={'add' + this.props.value} method="post" className="form-register" onSubmit={this.handleSubmit}>
            <TextField value={this.state.value} name={this.props.value} onChange={this.handleChange} id="standard-basic" label="entrer une masse" type="number" required/>
            <Button type="submit"> add </Button>
        </form>
      </div>
    )
  }
}

export default AddValue
