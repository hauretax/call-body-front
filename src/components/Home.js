import React, { Component    } from 'react';
import AddWeight from './addWeight'
import ShowWeight from './ShowWeihgt'

class Home extends Component {  
    render (){
        return (
            <div>
                Attention ebauche !!
                <ShowWeight />
                <AddWeight />
            </div>
        )
    }
}

export default Home;