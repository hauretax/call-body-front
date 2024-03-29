import React, { Component    } from 'react';
import { Redirect } from 'react-router-dom';
import addr from '../adress';

class Register extends Component {  
    state = {
        r: false,
        email: '',
        name: '',
        password: '',
        goal: '',
        age: '',
        type: '',
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    action = (response) => {
        console.log(response)
    }
    
    whatiDo(response) {
        if (response.status === 400)
            alert('le mail est dejas utiliser');
        if (response.status === 201)
            this.setState({ r: true })
    }

    handleSubmit = formSubmitEvent => { 
        formSubmitEvent.preventDefault();
        fetch(addr + '/auth/signup',{
          headers: { "Content-Type": "application/json" },
            method: 'POST',
            body: JSON.stringify(this.state)
          })
          .then(r => {this.whatiDo(r)})
    };

    render () {
        if (this.state.r)
            return(<Redirect to='/login' />)
        return (
        <div>
            <fieldset>
                <h1>info perso</h1>
                <form id="user" action="" method="post" className="form-register" onSubmit={this.handleSubmit}>
                    <div className="form-register">
                        <label htmlFor="name">Enter your name: </label>
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
                        <input type="submit" value="c est partie !"/>
                    </div>
                </form>
            </fieldset> 
            <a href="/login"> j' ai dejas un compte </a>
        </div>
        )
}
}

export default Register;