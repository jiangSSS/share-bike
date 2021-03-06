import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../header/header.css"
import { formatDate } from "../../../utils"
import axios from "axios"
import { connect } from "react-redux"
// const  formDate = utils.formatDate
class Header extends Component {
    state = {
        time: "",
        weather: ""
    }
    getTime = () => {
        setInterval(() => {
            let unixdate = new Date().getTime()
            let timeStr = formatDate(unixdate)
            this.setState({
                time: timeStr
            })
        }, 1000)
    }
    getWeather (){
        axios.get(`http://t.weather.sojson.com/api/weather/city/101050112`).then(res => {
            // console.log(res)
            let weather = res.data.data.forecast[0]
            console.log(weather)
            let weatherStr = `${weather.low} ~ ${weather.high}  ${weather.fx} ${weather.fl}`
            this.setState({
                weather: weatherStr
            })
        })
    }
    componentWillMount() {
        this.getTime()
        this.getWeather()
    }
    render() {
        return (
            <div className="header-warp">
                <div className="user-info clearfix">
                    <div className="flr">
                        <Link to="/logout" className="logout">退出</Link>
                    </div>
                    <div className="user-detail flr">
                        欢迎 <span className="username">姜盛</span>
                    </div>
                </div>
                <div className="weather-warp clearfix">
                    <div className="breadcrumd fll">
                        {this.props.menuText}
                    </div>
                    <div className="weather flr">
                        <div className="date fll">
                            {this.state.time}
                        </div>
                        <div className="weather-detail fll">
                            {this.state.weather}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// connect 接受两个参数(mapStateToProps)(mapActionToprops)  这两个参数都是函数
export default connect(
    function mapStateToProps(state) {
        return {
            menuText: state.menuItemText
        }
    }
)(Header)