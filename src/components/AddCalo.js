import { TextField, Button } from '@material-ui/core'
import React, { Component } from 'react'
import { authFetch } from '../myModules/token-auth'
import addr from '../adress'

class AddCalo extends Component {
    state = {
        email: "u",
        calo: ""
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
        authFetch(addr + '/api/user/addcalo', {
            headers: { "Content-Type": "application/json" },
            method: 'POST',
            body: JSON.stringify(this.state),
        })
            .then(r => r.json())
            .then(this.props.add(this.state.calo))
    };

    render() {
        return (
            <div>
                <form id="add-calo" method="post" className="form-register" onSubmit={this.handleSubmit}>
                    <TextField value={this.state.calo} onChange={this.handleChange} id="standard-basic" name="calo" label="entrer un nombre de calories" type="number" required />
                    <Button type="submit"> add </Button>
                </form>
            </div>
        )
    }
}

export default AddCalo
