import React, { Component } from 'react';
import Linechart from '../../Component/LineChart/LineChart';
import BarChat from '../../Component/BarChart/BarChart';
import Notifications from '../../Component/Notifications/Notifications';
import "./Dashboard.css";
import PieChart from '../../Component/PieChart/PieChart';
import Order from '../../Component/Orders/Order'

export default class Dashboard extends Component {
    render() {
        return (
            <div class="container">
            <div class="row">
                <div class="col">
                    <p class="text-white mt-5 mb-5">Welcome back, <b>Admin</b></p>
                </div>
            </div>
            {/* <!-- row --> */}
            <div class="row tm-content-row">
                <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
                    {/* <div class="tm-bg-primary-dark tm-block">
                        <h2 class="tm-block-title">Latest Hits</h2>
                        <canvas id="lineChart"></canvas>
                    </div> */}
                    <Linechart/>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
                    {/* <div class="tm-bg-primary-dark tm-block">
                        <h2 class="tm-block-title">Performance</h2>
                        <canvas id="barChart"></canvas>
                    </div> */}
                    <BarChat/>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
                    {/* <div class="tm-bg-primary-dark tm-block tm-block-taller">
                        <h2 class="tm-block-title">Storage Information</h2>
                        <div id="pieChartContainer">
                            <canvas id="pieChart" class="chartjs-render-monitor" width="200" height="200"></canvas>
                        </div>                        
                    </div> */}
                    <PieChart/>
                </div>
            <Notifications/>
                            <div class="col-12 tm-block-col">
                        
                    <div class="tm-bg-primary-dark tm-block tm-block-taller tm-block-scroll">
                        {/* <h2 class="tm-block-title">Orders List</h2> */}
                        <Order/>
                       {/* Order */}
                    </div>
                </div>
            </div>
        </div>
        )
    }
}


