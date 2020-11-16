import React, { Component    } from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import submit from '../myModules/submit'

// Generate Sales Data
class ShowWeight extends Component{
state = {
    data: []
}

createData(time, amount) {
  return { time, amount };
}

action = (response) => {
    console.log(response)
    this.setState({ data: JSON.parse(response) })
    console.log(this.state.data)
}

componentDidMount() {
    let data =  "email=hh"
        submit( data, "POST", "http://localhost:3000/api/user/weight", this.action)
}

render(){
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
        </div>
  );
        }
}
export default ShowWeight