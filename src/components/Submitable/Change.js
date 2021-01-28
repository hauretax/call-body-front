import {getId, authFetch} from '../../myModules/token-auth'
import { Component } from 'react';
import addr from '../../adress';
 
 class Change extends Component {
    state ={
        userId: getId(),
        value: 10,
    }
    item = this.props.item;
    

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    whatiDo(response) {

        console.log(response.status + '{"userId":' + this.state.userId +',"param":"'+this.item +'","nb":"'+this.state.value +'"}')

    }

    handleSubmit = (formSubmitEvent, test) => { 
        formSubmitEvent.preventDefault();
        authFetch(addr + test,{
          headers: { "Content-Type": "application/json" },
            method: 'POST',
            body: '{"userId":"' + this.state.userId +'","param":"'+this.item +'","nb":"'+this.state.value +'"}',
          })
          .then(r => {this.whatiDo(r)})
    };
    render() {
        let reset
        if(this.props.reset)
            reset = <button type="submit" value="reset">reset</button>;
        return (
    <div>
        <form id={"user-" + this.item} className="change-thing" onSubmit={event => this.handleSubmit(event,'/api/user/change')}>
            <input type='number' name = "value"  value={this.state.value} onChange={this.handleChange}/>
            <div>
                <input type="submit" value="change"/>
                {reset}
            </div>
        </form>
    </div>
        )
    }
}

export default Change