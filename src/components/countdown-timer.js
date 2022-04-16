import React, { Component } from 'react';

class Countdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    componentDidMount () {
        setInterval(() => {
            var obj = this.countdown()
            this.setState({
                days: obj.days,
                hours: obj.hours,
                minutes: obj.minutes,
                seconds: obj.seconds
            })
        }, 1000)
    }

    countdown() {
        var date = new Date()
        var eventDate = new Date(2022, 10, 31)

        var currentTime = date.getTime();
        var eventTime = eventDate.getTime();
        //Remaining time in seconds
        var remTime  = eventTime - currentTime;

        var seconds = Math.floor(remTime / 1000)
        var minutes = Math.floor(seconds / 60)
        var hours = Math.floor(minutes / 60)
        var days = Math.floor(hours / 24)

        hours %= 24
        minutes %= 60
        seconds %= 60

        hours = (hours < 10) ? "0" + hours:hours;
        minutes = (minutes < 10) ? "0" + minutes:minutes;
        seconds = (seconds < 10) ? "0" + seconds:seconds;

        return {
            days:days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        }
    }

    render() { 
        return (
        <div id='root' className="container">
            <div className="countdown">
            <h1>iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor</h1>
            <table>
                <tr className="info">
                    <td id="days">{this.state.days}</td>
                    <td id="hours">{this.state.hours}</td>
                    <td id="minutes">{this.state.minutes}</td>
                    <td id="seconds">{this.state.seconds}</td>
                </tr>

                <tr>
                    <td><h1>Day</h1></td>
                    <td><h1>Hr</h1></td>
                    <td><h1>Min</h1></td>
                    <td><h1>Sec</h1></td>
                </tr>
            </table>
            
            <a href="/" alt="">Sign Up Now</a>
            </div> 
        </div>
        )
    }
}
 
export default Countdown;