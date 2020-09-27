import React, { Component } from 'react'
import classes from './BarChart.module.css'
import { HorizontalBar } from "react-chartjs-2";

class BarChat extends Component {
  state={
    featured:'',
    latest:'',
    months:'',
    popular:'',
    performance:''
  }
  componentDidMount(){
    let chartBarpage = localStorage.getItem('accountdata') === null ? []: JSON.parse(localStorage.getItem('accountdata'));
    //  let chartfeatured = chartlinepage['dasbhoardPage']['latestHits']['featured'] ;
    //  let chartlatest = chartlinepage['dasbhoardPage']['latestHits']['latest'] ;
    //  let chartmonths = chartlinepage['dasbhoardPage']['latestHits']['months'] ;
    //  let chartpopular = chartlinepage['dasbhoardPage']['latestHits']['popular'] ;
    let chartPerformance=chartBarpage['dasbhoardPage']['performance'];
   console.log(chartPerformance);
    this.setState({
      // featured:chartfeatured,
      // latest:chartlatest,
      // months:chartmonths,
      // popular:chartpopular
      performance:chartPerformance
    })
    
  }
  
      render() {
        const data = {
          // labels: this.state.months,
          labels:Object.keys(this.state.performance),
          datasets: [
            {
              label: "#of Hits",
              data: Object.values(this.state.performance),
              fill: true,
              backgroundColor:      [ '#4ED6B8',
               '#3889FC',
              '#A8D582',
              '#D7D768',
              '#9D66CC',
              '#F7604D',
             '#DB9C3F'],
              borderColor: "rgb(247,96,77)",
              barThickness: 3,
              
            }
            
           
          ],
        };
        const options= {
          legend: {
               labels: {
                    fontColor: 'white',
                    fontSize: 14
                   }
                },
          title: {
              display: true,
              fontColor: '#fff',
              text: 'Hits',
              position: "left",
              fontSize: 16,
              
          }     ,
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true,
                      fontColor: '#fff',
                      fontSize: 8,
                     
              
                  },
              }],
            xAxes: [{
                  ticks: {
                      fontColor: '#fff',
                      fontSize: 12,
                      maxBarThickness: 100,
                    
                      
                  },
              }]
             
          } 
        
        }
      

        return (
          <div className={classes.tm_bg_primary_dark}>
            <h2 className={classes.latest}>Performance</h2>
            <HorizontalBar data={data} options={options}/>
          </div>
         );
      }
}

export default BarChat