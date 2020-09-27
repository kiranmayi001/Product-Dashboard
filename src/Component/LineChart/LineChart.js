import React, { Component } from 'react'
import classes from './LineChart.module.css'
import { Line } from "react-chartjs-2";


class Linechart extends Component {
  state={
    featured:'',
    latest:'',
    months:'',
    popular:''
  }
  componentDidMount(){
    let chartlinepage = localStorage.getItem('accountdata') === null ? []: JSON.parse(localStorage.getItem('accountdata'));
     let chartfeatured = chartlinepage['dasbhoardPage']['latestHits']['featured'] ;
     let chartlatest = chartlinepage['dasbhoardPage']['latestHits']['latest'] ;
     let chartmonths = chartlinepage['dasbhoardPage']['latestHits']['months'] ;
     let chartpopular = chartlinepage['dasbhoardPage']['latestHits']['popular'] ;
   // console.log(chartline)
    this.setState({
      featured:chartfeatured,
      latest:chartlatest,
      months:chartmonths,
      popular:chartpopular
    })
    
  }
  
      render() {
        const data = {
          labels: this.state.months,
          datasets: [
            {
              label: "Featured",
              data: this.state.featured,
              fill: true,
              backgroundColor: "rgba(67,92,112,0.1)",
              borderColor: "rgb(71,183,183)"
            },
            {
              label: "Latest",
              data: this.state.latest,
              fill: true,
              backgroundColor: "rgba(67,92,112,0.1)",
              borderColor: "rgb(233,90,121)"
            },
            {
              label: "Popular",
              data: this.state.popular,
              fill: true,
              backgroundColor: "rgba(67,92,112,0.1)",
              borderColor: "rgb(137,92,229)"
            },
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
              fontSize: 16
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
                      
                  },
              }]
          } 
        
        }
      

        return (
          <div className={classes.tm_bg_primary_dark}>
            <h2 className={classes.latest}>Latest Hits</h2>
            <Line data={data} options={options}/>
          </div>
         );
      }
}

export default Linechart