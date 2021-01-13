import { Component } from 'react';
import Change from "./Submitable/Change";

class UserParam extends Component {

    render() {
        return (
            <div> change what u need 
                <Change item="goal"/>
                <Change item="calo"/>
            </div>

           
        )
    }

}

export default UserParam