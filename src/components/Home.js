import React, { Component } from 'react';
import Graphe from './Graphe';
import SwitchComponent from './SwitchComponent';
import { isLoggedIn, logout, getId } from '../myModules/token-auth';
import { Button, IconButton } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import { Redirect } from 'react-router-dom'
import UserParam from './UserParam';
import Bodyvalue from '../myModules/getBodyValue'
//import getB from '../myModules/getBodyValue'
//import {getId} from '../myModules/token-auth'

class Home extends Component {
    state = {
        retry: this.props.ok,
        connected: true
    }
    //pour verifier si la personne est co

    componentDidMount() {
        this.setState({ retry: null });
        //const test = new Bodyvalue(getId())
        //const body = new getB(getId())
    }



    //pour deco la personne
    clickbait = () => {
        logout();
        this.setState({ connected: false });
    }
    render() {
        if (localStorage.getItem('profile') === 'true') {
            return (
                <div> {localStorage.getItem('weights')} </div>
            )
        }
        else {
            return (<Redirect to={`/login`} />)
        }
        //cessit est immonde et doit etre corriger . mais pour le moment flemme (explication sur git kraken)
       /*if (!(this.state.connected) && this.state.retry !== 'ok') {
            console.log("error home page : not connected")
            return <Redirect to={`/login`} />
        }
        else {
            return (
                <div>
                    Attention ebauche !! (si rien ne saffiche recharger la page sinons connecter vous)
                    <SwitchComponent components={[
                        {
                            name: 'calorie',
                            data: <Graphe value='calo' indice='calorie' />,
                        },
                        {
                            name: 'masse',
                            data: <Graphe value='weight' indice='masse (kg)' />,
                        },
                        {
                            name: 'samarchepasptdr',
                            data: 'lol',
                        },
                    ]} />

                    <Button color="secondary" onClick={this.clickbait}> logout</Button>
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <SettingsIcon />
                    </IconButton>
                    <UserParam />
                </div>
            )
                 } */
    }
}
//<Graphe value='weight' indice='masse (kg)'/>
//<Graphe value='calo' indice='calorie'/>

export default Home;