import { Checkbox } from '@material-ui/core';
import React, { Component    } from 'react';
import submit from '../myModules/submit';

class Register extends Component {  
    state = {
        email: '',
        name: '',
        password: '',
        goal: '',
        age: '',
        type: '',
        calo: ''
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
        "&password=" + this.state.password +
        "&name=" + this.state.name +
        "&goal=" + this.state.goal +
        "&age=" + this.state.age +
        "&type=" + this.state.type +
        "&calo=" + this.state.calo
        submit(data, "POST", "http://localhost:3000/auth/signup", this.action)
    };

    render () {
        return (
        <div>
            <fieldset>
                <h1>info perso</h1>
                <form id="user" action="" method="post" className="form-register" onSubmit={this.handleSubmit}>
                    <div className="form-register">
                        <label htmlFor="name">Enter youtttr name: </label>
                        <input type="text" name="name" id="name" 
                        value={this.state.name} onChange={this.handleChange} required/>
                    </div>
                    <div className="form-register">
                        <label htmlFor="password">Enter your password: </label>
                        <input type="text" name="password" id="password" required
                        value={this.state.password} onChange={this.handleChange}/>
                    </div>
                    <div className="form-register">
                        <label htmlFor="email">Enter your email: </label>
                        <input type="text" name="email" id="email" required
                        value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    <div className="form-register">
                    <label htmlFor="goal">Enter your goal: </label>
                    <input type="number" name="goal" id="goal" required
                    value={this.state.goal} onChange={this.handleChange}/>
                    </div>
                    <div className="form-register">
                        <label htmlFor="age">Enter your age: </label>
                        <input type="number" name="age" id="age" required
                        value={this.state.age} onChange={this.handleChange}/>
                    </div>
                    <div className="form-register">
                    <Checkbox
                        value="checkedA"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                    />
                        <input type="radio" name="type" value = "1" checked={this.state.type === "1"} onChange={this.handleChange}/> 
                        <input type="radio" name="type" value = "2" checked={this.state.type === "2"} onChange={this.handleChange}/> 
                    </div>
                    <div className="form-register">
                        <label htmlFor= "calo"> metter le nombre de callorie que vous shouaiter manger par jour </label>
                        <input type="number" name="calo" id="calo" required
                        value={this.state.calo} onChange={this.handleChange}/>
                    </div>
                    <div className="form-register">
                    <input type="submit" value="c est partie !"/>
                    </div>
                </form>
            </fieldset> 
        </div>
        )
}
}

export default Register;