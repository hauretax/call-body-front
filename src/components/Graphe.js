import React, { Component} from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, ReferenceLine } from 'recharts';
import {getId, authFetch} from '../myModules/token-auth'
import AddValue from './AddValue';
import addr from '../adress'
import { green } from '@material-ui/core/colors';
const date = require('../myModules/getDate')
//import AddWeight from './addWeight';


class ShowGraph extends Component{
state = {
    userId: getId(),
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
    console.log(this.data)
}
//value represente la valeur de val. 
  add = value => {
    const val = this.value
    const time = date.getDate()
    if (typeof this.state.data === 'undefined' || this.state.data === null ){
      const d = []
      d[0] = {date : time, [val] : value}
      this.setState({data:[...d]})
    }
    else{
      const d = this.state.data
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
  }

render(){
  console.log(this.state.data)
  if(typeof this.state.data === 'undefined' ||this.state.data === null ){
    return(<div><AddValue  add = {this.add} value={this.value}/></div>)
  }
   else {
    return (
        <div style={{width:'calc(100% - 20px)', height:400, margin: 60, backgroundColor:green}}>
              <ResponsiveContainer width="60%" height="100%">
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
                <ReferenceLine y={90}  stroke="red" />
              </LineChart>
              </ResponsiveContainer>
            <AddValue  add = {this.add} value={this.value}/>
            {this.props.moreC}
          </div>
    );
  }}
}
export default ShowGraph