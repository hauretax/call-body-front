import React, { Component    } from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import {getId, authFetch} from '../myModules/token-auth'
import addr from '../adress'
import AddWeight from '../components/addWeight';
const date = require('../myModules/getDate')

class ShowWeight extends Component{
state = {
    userId: getId(),
    data: []
}

    // ajout du poids en directe
add = weight => {
  const d = this.state.data
  const time = date.getDate()
  console.log(d[d.length - 1].date)
  if (d[d.length - 1].date === time){
    d[d.length - 1].weight = weight;
    this.setState({data:[...d]})
  }
  else{
    let neweight = {
      "date" : time,
      "weight" : weight,
    }
    this.setState({
      data:[...this.state.data, neweight]
    });
  }
  //this.setState({ data })
}

componentDidMount() {
  authFetch(addr + '/api/user/weight',{
    headers: { "Content-Type": "application/json" },
      method: 'POST',
      body: `{"userId":"`+ getId() + `"}` ,
    })
    .then(r => r.json())
    .then(data => this.setState({ data: data}) )
  }

render(){
  console.log("and this one")
  console.log(this.state.data)
    return (
        <div style={{width:800 , height:400}}>
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
              <AddWeight  add = {this.add}/>
          </div>
    );
  }
}
export default ShowWeight