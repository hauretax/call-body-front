import { TextField, Button } from '@material-ui/core'
import React from 'react'
import submit from '../myModules/submit'

class AddWeight extends React.Component {
  state = {
    email: "hh",
    weight: ""
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
                "&weight=" + this.state.weight
    submit(data, "POST", "http://localhost:3000/api/user/addWeight", this.action)
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
