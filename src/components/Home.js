import React, { Component    } from 'react';
import Weight from './Weight';
import Calo from './Calo'
import {isLoggedIn, logout,getId} from '../myModules/token-auth';
import {Button, IconButton} from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import { Redirect } from 'react-router-dom'

class Home extends Component { 
    state = {
        retry: this.props.ok,
        connected: true
    }
    //pour verifier si la personne est co
 
    componentDidMount() {
        this.setState ({retry: null});
        this.setState({connected: isLoggedIn()})
        console.log(getId());
    }
    

    //pour deco la personne
    clickbait = () => {
        logout();
        this.setState({connected: false});
    }
    render (){
        //cessit est immonde et doit etre corriger . mais pour le moment flemme (explication sur git kraken)
        
        console.log(this.state.connected)
        console.log(this.state.retry)
        if (!(this.state.connected) && this.state.retry !== 'ok') {
            console.log("error home page : not connected")
           return <Redirect to={`/login`} />
          }
        else{
            return ( 
                <div>
                    Attention ebauche !! (si rien ne saffiche recharger la page sinons connecter vous)
                    <Weight />
                    <Calo  />
                    <Button color="secondary" onClick={this.clickbait}> logout</Button>
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <SettingsIcon />
                    </IconButton>
                </div>
            )  
        }  
    }
}

export default Home;