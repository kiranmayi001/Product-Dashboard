import React, { Component } from 'react'
import classes from "./Pie.module.css";

import {Pie} from 'react-chartjs-2'; //import Pie module from react-chart-js-2
class Piechart extends Component {
state={
    paikey:'',
    paivalue:''
}
componentDidMount(){
    let paichartpage = localStorage.getItem('accountdata') === null ? []: JSON.parse(localStorage.getItem('accountdata'));
  //  let userData = Object.values(barchartpage['accountsPage']) 
    let paichartfeatured = Object.values(paichartpage['dasbhoardPage']['storage'])
    let paichartlable = Object.keys(paichartpage['dasbhoardPage']['storage'])
   this.setState({
        paikey:paichartfeatured,
        paivalue:paichartlable
    })
    
  }
    render() {
        const mydata = {
            labels: this.state.paikey,
            datasets: [{
                data: this.state.paikey,
                backgroundColor: [
                    '#A8D582',
                    '#4ED6B8',
                    '#F7604D',
                ],
                
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
               ]
           }]
        };
        const options= {
            legend: {
                 labels: {
                      fontColor: 'white',
                      fontSize: 14
                     }
                  }
                }
        return (
            <div className={classes.tm_bg_primary_dark}>
            <h2 className={classes.storage}>Storage Information</h2>
           <Pie data={mydata} options={options}/>
            </div>
        )
    }
}

export default Piechart
