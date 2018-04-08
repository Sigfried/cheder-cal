import React, { Component } from 'react';
import logo from './logo.svg';
import './Cal.css';
import _ from 'supergroup'
import CalVis, {DateDesc, commify, splitGregDate} from './CalVis'
import * as H from './react-calendar-heatmap/src'

// https://github.com/mourner/suncalc
//import SunCalc from 'suncalc'

// draw moon phases: https://github.com/codebox/js-planet-phase
//
//

const sliderStyle = {
  width: '500px',
  height: '20px',
}
class App extends Component {
  constructor(props) {
    super(props)
    const jsDate = new Date()
    this.state = {
      jsDate,
    }
    this.setGregCent = this.setGregCent.bind(this)
    this.setGregYear = this.setGregYear.bind(this)
    this.setGregDay = this.setGregDay.bind(this)
    this.setGregMonth = this.setGregMonth.bind(this)
  }
  setGregCent(inp) {
    let {jsDate, } = this.state
    let cent = Number(inp.target.value)
    let newDate = new Date(jsDate)
    newDate.setFullYear(jsDate.getFullYear() % 100 + cent)
    this.setState({jsDate:newDate, })
  }
  setGregYear(inp) {
    let {jsDate, } = this.state
    let sliderYear = Number(inp.target.value) // the year chosen by user on slider, 0-99 CE or -99-0 BCE
    let century = (jsDate.getFullYear() < 0 ? Math.ceil : Math.floor)(jsDate.getFullYear()/100) * 100
    let newDate = new Date(jsDate)  // currently chosen date
    newDate.setFullYear(century + sliderYear)
    this.setState({jsDate:newDate, })
  }
  setGregDay(inp) {
    let {jsDate, } = this.state
    let day = Number(inp.target.value)
    let newDate = new Date(jsDate)
    newDate.setDate(day)
    this.setState({jsDate:newDate, })
  }
  setGregMonth(inp) {
    let {jsDate, } = this.state
    let month = Number(inp.target.value)
    let newDate = new Date(jsDate)
    newDate.setMonth(month)
    this.setState({jsDate:newDate, })
  }

  render() {
    let {jsDate, } = this.state
    let [gy, gm, gd] = splitGregDate(jsDate)
    let jd = H.gregorian_to_jd(gy, gm, gd)
    let heb = H.jd_to_hebrew(jd)
    let [hy, hm, hd] = heb
    return (
      <div className="main">
        <div style={{clear:'both'}} >
          <DateDesc jsDate={jsDate} />
          <div className="slider">
            Change century  &nbsp;&nbsp; {Math.floor(jsDate.getFullYear() / 100) * 100}
            <br/>
            <span>6,600 BCE</span>{ }
            <span>
              <input  style={sliderStyle}
                      type="range" min="-6600" max="5000" step="100"
                      width="500px"
                      name="gcent" 
                      value={jsDate.getFullYear()}
                      onChange={this.setGregCent}
              />
            </span>{ }
            <span>5,000 CE</span>{ }
          </div>
          <div className="slider">
            Change year &nbsp;&nbsp; {jsDate.getFullYear() % 100}
            <br/>
            <span>
                { jsDate.getFullYear() < 0 ? -99 : 0}
            </span>{ }
            <span>
              <input  style={sliderStyle}
                      type="range" 
                      min={ jsDate.getFullYear() < 0 ? -99 : 0}
                      max={ jsDate.getFullYear() < 0 ? 0 : 99}
                      step="1"
                      width="500px"
                      name="gyear" 
                      value={jsDate.getFullYear() % 100}
                      onChange={this.setGregYear}
              />
            </span>{ }
            <span>
                { jsDate.getFullYear() < 0 ? 0 : 99}
            </span>{ }
          </div>
          <div className="slider">
            Change month &nbsp;&nbsp; {H.monthLabel(jsDate.getMonth())}
            <br/>
            <span>1</span>{ }
            <span>
              <input  style={sliderStyle}
                      type="range" min="0" max="11" step="1"
                      width="500px"
                      name="gmonth" 
                      value={jsDate.getMonth()}
                      onChange={this.setGregMonth}
              />
            </span>{ }
            <span>12</span>{ }
          </div>
          <div className="slider">
            Change day  &nbsp;&nbsp; {jsDate.getDate()}
            <br/>
            <span>1</span>{ }
            <span>
              <input  style={sliderStyle}
                      type="range" min="1" max="31" step="1"
                      width="500px"
                      name="gday" 
                      value={jsDate.getDate()}
                      onChange={this.setGregDay}
              />
            </span>{ }
            <span>31</span>{ }
          </div>
        </div>
        <CalVis centerDate={jsDate} jd={jd} heb={heb}/>
      </div>
    )
  }
}


export default App
/*  setDateToToday  --  Preset the fields in
    the request form to today's date.  */

