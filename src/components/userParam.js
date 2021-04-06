import { Component } from 'react';
import Change from "./Submitable/Change";
import './styles/params.css'

class UserParam extends Component {

    render() {
        return (
            <div className = {this.props.c} > change what u need
                <Change item="goal" type="input" />
                <Change item="calo" type="input" />
                <Change item="tauxg" type="input" reset='true' />
                <Change item="multa" type="input" />
                <Change item="pertp" type="input" reset='true' />
            </div>
        )
    }

}

export default UserParam