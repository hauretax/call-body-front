import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, ReferenceLine } from 'recharts';
import { getId, authFetch } from '../myModules/token-auth'
import AddValue from './AddValue';
import addr from '../adress'
import { green } from '@material-ui/core/colors';
const date = require('../myModules/getDate')
//import AddWeight from './addWeight';


class ShowGraph extends Component {
  state = {
    userId: getId(),
  }
  show = 0;
  value = this.props.graphe[this.show].value
  indice = this.props.graphe[this.show].indice
  name = this.props.graphe[this.show].name
  componentDidMount() {
    this.setState({ data: JSON.parse(localStorage.getItem(this.props.graphe[this.show].index)) });
    this.setState({ graphe: this.props.graphe[this.show] });

  }
  //value represente la valeur de val. 
  add = value => {
    const d = this.state.data || []
    if (value.date === d[d.length - 1].date){
      d[d.length-1] = value
      this.setState({ data: [...d] })
    }
    else{
      d[d.length] = value
      this.setState({ data: [...d] })
    }
    /* const val = this.value
    const time = date.getDate()
    if (typeof this.state.data === 'undefined' || this.state.data === null) {
      const d = []
      d[0] = { date: time, [val]: value }
      this.setState({ data: [...d] })
    }
    else {
      const d = this.state.data
      if (d[d.length - 1].date === time) {
        //fonctionnement as changer avec un props suplementaire (add / replace)
        if (val === 'calo')
          d[d.length - 1].calo += Number(value);
        else if (val === 'weight')
          d[d.length - 1].weight = value;
        this.setState({ data: [...d] })
      }
      else {
        let newValue = {
          "date": time,
        }
        newValue[val] = value
        this.setState({
          data: [...this.state.data, newValue]
        });
      }
    }*/
  }

  switchM = (e) => {
    this.show = e.target.id;
    this.setState({ data: JSON.parse(localStorage.getItem(this.props.graphe[this.show].index))});
    this.value = this.props.graphe[this.show].value
    this.indice = this.props.graphe[this.show].indice
    this.name = this.props.graphe[this.show].name
  }

  render() {
    console.log(this.state.data)
    if (!(localStorage.getItem('weights'))) {
      return (<div><AddValue add={this.add} value={this.value} />
        <div>
          <p> {this.show}</p>
          {this.props.components.map((item, id) => (
            <button onClick={this.switchM} key={id} id={id}>{item.name}</button>
          ))}
        </div>
      </div>)
    }
    else {
      return (
        <div style={{ width: 'calc(100% - 20px)', height: 400, margin: 60, backgroundColor: green }}>
          <button onClick={this.clickbait}> heho</button>
          <ResponsiveContainer width="60%" height="100%">
            <LineChart
              data={this.state.data}
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
                  {this.indice}
                </Label>
              </YAxis>
              <Line type="monotone" dataKey={this.value} stroke={'#8884d8'} dot={false} />
              <ReferenceLine y={90} stroke="red" />
            </LineChart>
          </ResponsiveContainer>
          <AddValue add={this.add} value={this.value} />
          {this.props.moreC}

          <p> {this.show}</p>
          {this.props.graphe.map((item, id) => (
            <button onClick={this.switchM} key={id} id={id}>{item.name}</button>
          ))}
        </div>
      );
    }
  }
}
export default ShowGraph