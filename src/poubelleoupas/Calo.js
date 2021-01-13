import React, { Component    } from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import {getId, authFetch} from '../myModules/token-auth'
import addr from '../adress'
import AddCalo from './AddCalo';
const date = require('../myModules/getDate')

class ShowCalo extends Component{
state = {
    userId: getId(),
    data: []
}

    // ajout du poids en directe
add = calo => {
  const d = this.state.data
  const time = date.getDate()
  if (d[d.length - 1].date === time){
    d[d.length - 1].calo += Number(calo);
    this.setState({data:[...d]})
  }
  else{
    let newCalo = {
      "date" : time,
      "calo" : calo,
    }
    this.setState({
      data:[...this.state.data, newCalo]
    });
  }
}

componentDidMount() {
  authFetch(addr + '/api/user/calo',{
    headers: { "Content-Type": "application/json" },
      method: 'POST',
      body: `{"userId":"`+ getId() + `"}` ,
    })
    .then(r => r.json())
    .then(data => this.setState({ data: data}))
}

render(){
    return (
        <div style={{width:800 , height:400, margin: 60}}>
          <ResponsiveContainer>
              <LineChart
                data={this.state.data }
                margin={{
                  top: 16,
                  right: 16,
                  bottom: 0,
                  left: 24,
                }}
              >
                <XAxis dataKey="date" stroke={'#8884d8'} />
                <YAxis stroke={'#8884d8'}>
                  <Label
                    angle={270}
                    position="left"
                  >
                    masse (Kg)
                  </Label>
                </YAxis>
                <Line type="monotone" dataKey="weight" stroke={'#8884d8'} dot={false} />
              </LineChart>
              </ResponsiveContainer>
              <AddCalo  add = {this.add}/>
          </div>
    );
  }
}
export default ShowCalo