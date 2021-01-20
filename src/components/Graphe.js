import React, { Component} from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import {getId, authFetch} from '../myModules/token-auth'
import AddValue from './AddValue';
import addr from '../adress'
const date = require('../myModules/getDate')
//import AddWeight from './addWeight';


class ShowGraph extends Component{
state = {
    userId: getId(),
    data: []
}
value = this.props.value

componentDidMount() {
  authFetch(addr + '/api/user/'+this.value,{
    headers: { "Content-Type": "application/json" },
      method: 'POST',
      body: `{"userId":"`+ getId() + `"}` ,
    })
    .then(r => r.json())
    .then(data => this.setState({ data: data}) )
  }
//value represente la valeur de val. 
  add = value => {
    const val = this.value
    const d = this.state.data
    const time = date.getDate()
    if (d[d.length - 1].date === time){
        if(val === 'calo')
          d[d.length - 1].calo += Number(value);
        else if(val === 'weight')
          d[d.length - 1].weight = value;
        this.setState({data:[...d]})
    }
    else{
      let newValue = {
        "date" : time,
      }
      newValue[val] = value
      this.setState({
        data:[...this.state.data, newValue]
      });
    }
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
                    {this.props.indice}
                  </Label>
                </YAxis>
                <Line type="monotone" dataKey={this.value} stroke={'#8884d8'} dot={false} />
              </LineChart>
              </ResponsiveContainer>
            <AddValue  add = {this.add} value={this.value}/>
          </div>
    );
  }
}
export default ShowGraph