import React, { Component    } from 'react';
import Graphe from './Graphe';
import {isLoggedIn, logout} from '../myModules/token-auth';
import {Button, IconButton} from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import { Redirect } from 'react-router-dom'
import UserParam from './UserParam';

class Home extends Component { 
    state = {
        retry: this.props.ok,
        connected: true
    }
    //pour verifier si la personne est co
 
    componentDidMount() {
        this.setState ({retry: null});
        this.setState({connected: isLoggedIn()})
    }
    

    //pour deco la personne
    clickbait = () => {
        logout();
        this.setState({connected: false});
    }
    render (){
        //cessit est immonde et doit etre corriger . mais pour le moment flemme (explication sur git kraken)
        if (!(this.state.connected) && this.state.retry !== 'ok') {
            console.log("error home page : not connected")
           return <Redirect to={`/login`} />
          }
        else{
            return ( 
                <div>
                    Attention ebauche !! (si rien ne saffiche recharger la page sinons connecter vous)
                    <Graphe value='weight' indice='masse (kg)'/>
                    <Graphe value='calo' indice='calorie'/>
                    <Button color="secondary" onClick={this.clickbait}> logout</Button>
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <SettingsIcon />
                    </IconButton>
                    <UserParam/>
                </div>
            )  
        }  
    }
}

export default Home;