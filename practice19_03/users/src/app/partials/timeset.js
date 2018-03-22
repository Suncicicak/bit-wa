import React, { Component } from "react";
import Clock from "react-live-clock";
import moment from "moment";




class TimeSet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: JSON.stringify(Date.now()),
            finalTime: "",
            id: ""
        }
    }

     convert(value) {
        return Math.floor(value/60) + ":" + (value % 60? value % 60 : '00')
    }



    timeConversion(millisec) {

        var seconds = (millisec / 1000).toFixed(1);

        var minutes = (millisec / (1000 * 60)).toFixed(1);

        var hours = (millisec / (1000 * 60 * 60)).toFixed(1);

        var days = (millisec / (1000 * 60 * 60 * 24)).toFixed(1);

        var weeks = (millisec / (1000 * 60 * 60 * 24 * 7)).toFixed(1);

        var months = (millisec / (1000 * 60 * 60 * 24 * 30)).toFixed(1);
 

        if (parseInt(seconds) < 60) {
            return parseInt(seconds) + " Sec";
        }  else if (parseInt(minutes) < 60) {
            return parseInt(minutes) + " Min " + parseInt(seconds%60) + " Sec";
         } else if (parseInt(hours) < 24) {
            return parseInt(hours) + " Hrs " + parseInt(minutes%60) + " Min " + parseInt(seconds%60) + " Sec";
        } else if(parseInt(days) < 7) {
            return parseInt(days) + " Days " + parseInt(hours%24) + " Hours" + parseInt(minutes%60) + " Min " + parseInt(seconds%60) + " Sec";
        } 
    }

    componentWillMount() {
       let id = setInterval(() => {
            //this.setState({ currentDate: JSON.stringify(Date.now()) })


            let currentDate = JSON.stringify(Date.now())
            let oldTime = new Date(JSON.parse(this.props.time))
            let newTime = Math.abs(currentDate - oldTime)
            let finalTime = this.timeConversion(newTime)
        //  let finalTime =   this.convert(newTime)
            this.setState({ finalTime })

        }, 1000);
        this.setState({
            id: id
        })
    }

    // componentWillUpdate(nextProps, nextState) {
    //     clearInterval(this.state.id)
    // }

    componentWillUnmount() {
        clearInterval(this.state.id)
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.currentDate !== this.state.currentDate) {
    //         let currentDate = this.state.currentDate
    //         let oldTime = new Date(JSON.parse(this.props.time))
    //         let newTime = Math.abs(currentDate - oldTime)
    //         let finalTime = this.timeConversion(newTime)
    //     //  let finalTime =   this.convert(newTime)
    //         this.setState({ finalTime })
    //     }
    // }

    render() {
        return (
            <div>
                <div>Time since last update {this.state.finalTime}</div>
                {/* <Clock  format={'HH:mm:ss'} ticking={true} timezone={'Europe/Belgrade'} /> */}
            </div>
        )
    }
}

export default TimeSet;