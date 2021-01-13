const date = require('../myModules/getDate')

exports.weight = (weight) => {
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

    exports.calo = (calo, d) => {
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
