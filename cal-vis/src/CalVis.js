
import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types';
//import CalendarHeatmap from 'react-calendar-heatmap'
import CalendarHeatmap from './react-calendar-heatmap-index'
import * as H from './react-calendar-heatmap-index'
//import * as H from './react-calendar-heatmap/src/helpers'
import './react-calendar-heatmap-styles.css'
import {format} from 'd3-format'
import _ from 'supergroup'
//import * as d3 from 'd3'
import RSTooltip from './Tooltip'

function customOnClick(value) {
  if (value) {
    alert(`Clicked on ${value.date.toDateString()} with value ${value.count}`);
  }
}
function classForValue(value) {
  return githubClassForValue(value)
}
function githubClassForValue(value) {
  if (!value) {
    return 'color-empty';
  }
  return `color-github-${value.count}`;
}
function customTitleForValue(value) {
  return value ? `You're hovering over ${value.date.toDateString()} with value ${value.count}` : null;
}
export default class CalVis extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.hover = this.hover.bind(this)
    this.squares = this.squares.bind(this)
    this.squareRef = this.squareRef.bind(this)
    this.squareRefs = []
  }
  squareRef(ref) {
    let index = ref.getAttribute('data-index')
    this.squareRefs[index] = ref
  }
  hover(evt, value, cal) {
    if (this.state.hoverDate !== value) {
      this.setState({ hoverValue: value, targetContent: this.squareRefs[4] })
    }
  }
  squares(value, index, mday, cal, d={}, props={}) {
    let [hy, hm, hd] = value.heb
    //if (cal !== this) debugger
    return (
      <g className="square">
        <rect
          width={d.ss}
          height={d.ss}
          className={cal.getClassNameForIndex(index)}
          onClick={cal.handleClick.bind(cal, value)}
          onMouseOver={e => cal.handleMouseOver(e, value, this.hover,
          
            // send this square to target somehow
          
          )}
          onMouseLeave={e => cal.handleMouseLeave(e, value, this.hover)}
          {...cal.getTooltipDataAttrsForIndex(index)}
        >
          <title>{cal.getTitleForIndex(index)}</title>
          {/*FIX*/}
        </rect>
        { mday === 1
            ? <path fill="transparent" strokeWidth={d.gs} stroke="#449" d={`M ${-d.gs/2} ${-d.gs/2} V ${d.ss + d.gs}`} />
            : ''
        }
        { mday <= 7
            ? <path fill="transparent" strokeWidth={d.gs} stroke="#449" d={`M ${-d.gs} ${-d.gs/2} H ${d.ss}`} />
            : ''
        }
        { mday === 1
            ? <path fill="transparent" strokeWidth={d.gs} stroke="#449" d={`M ${-d.gs/2} ${-d.gs/2} V ${d.ss + d.gs}`} />
            : ''
        }
        { mday <= 7
            ? <path fill="transparent" strokeWidth={d.gs} stroke="#449" d={`M ${-d.gs} ${-d.gs/2} H ${d.ss}`} />
            : ''
        }
      </g>
    )
  }
  render() {
    let {calHeatmapProps={}, centerDate=new Date(), jd, heb} = this.props
    let window = [-230, 250]
    let startDate = H.shiftDate(centerDate, window[0])
    let endDate = H.shiftDate(centerDate, window[1])
    let junk = H
    console.log(junk,H)
    calHeatmapProps = Object.assign( {
            //horizontal:false,
            //startDate,
            //endDate,
            startDate: H.shiftDate(startDate, 100),
            endDate: H.shiftDate(endDate, -100),
            values: 
              _.range(window[1] - window[0]).map(
                i=>{
                  let date = H.shiftDate(startDate,i)
                  return {
                      date: H.shiftDate(startDate, i),count:'0',
                      mday: date.getDate(),
                      mdays: new Date(date.getFullYear(), date.getMonth()+1, 0),
                      jd: jd + i,
                      heb: H.jd_to_hebrew(jd + i),
                    }
                }),
        }, calHeatmapProps)
    console.log(calHeatmapProps)
    const customTooltipDataAttrs = { 'data-toggle': 'tooltip' };
    return  <div style={{clear:'both'}}>
              <RSTooltip 
                  popperContent={<div>POPPER!!!! <DateDesc jsDate={(this.state.hoverValue && this.state.hoverValue.date) || centerDate} /></div>}
                  targetContent={
                    this.state.targetContent 
                      ? this.state.targetContent
                      : <div>Here's the date: {centerDate.toString()}</div>
                    }
                  targetProps={{
                    style:{ width: 620, height: 120, background: '#b4da55', }
                  }}
                  popperProps={{
                    style:{ width: 620, height: 120, background: '#b4da55', }
                  }}
              />
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
                {"\u2651"}
                {"\u2652"}
                {"\u2653"}
                {"\u2648"}
                {"\u2649"}
                {"\u264A"}
                {"\u264B"}
                {"\u264C"}
                {"\u264D"}
                {"\u264E"}
                {"\u264F"}
                {"\u2650"}
                {"\u2651"}
{"\uD83C\uDF11"}
{"\uD83C\uDF12"}
{"\uD83C\uDF13"}
{"\uD83C\uDF14"}
{"\uD83C\uDF15"}
{"\uD83C\uDF16"}
{"\uD83C\uDF17"}
{"\uD83C\uDF18"}
<br/>
<br/>
<br/>

    

              <div className='cal-vert'>
                  Gregorian<br/>
                  <CalendarHeatmap {...calHeatmapProps} 
                      classForValue={classForValue}
                      tooltipDataAttrs={customTooltipDataAttrs}
                      titleForValue={customTitleForValue}
                      onClick={customOnClick}
                      //textContent={textContent}
                      horizontal={false}
                      squareRef={this.squareRef}
                      squareContents={
                        (value, index, cal, d={}, props={}) => (
                          <g>
                            {this.squares(value, index, value.mday, cal, d, props)}
                            {dateText(value, index, value.mday, cal, d, props, 'greg')}
                          </g>
                        )
                      }
                  />
              </div>
              <div className='cal-vert'>
                  Hebrew<br/>
                  <CalendarHeatmap {...calHeatmapProps} 
                      type='hebrew'
                      classForValue={classForValue}
                      //tooltipDataAttrs={customTooltipDataAttrs}
                      //titleForValue={customTitleForValue}
                      onClick={customOnClick}
                      //textContent={textContent}
                      horizontal={false}
                      squareContents={
                        (value, index, cal, d={}, props={}) => (
                          <g>
                            {this.squares(value, index, value.heb[2], cal, d, props)}
                            {dateText(value, index, value.heb[2], cal, d, props, 'heb')}
                          </g>
                        )
                      }
                  />
              </div>
              <div className='cal-vert'>
                  Moon<br/>
                  <CalendarHeatmap {...calHeatmapProps} 
                      type='moon'
                      classForValue={classForValue}
                      //tooltipDataAttrs={customTooltipDataAttrs}
                      //titleForValue={customTitleForValue}
                      onClick={customOnClick}
                      //textContent={textContent}
                      horizontal={false}
                      squareContents={
                        (value, index, cal, d={}, props={}) => (
                          <g>
                            {this.squares(value, index, value.heb[2], cal, d, props, 'moon')}
                            {moons(value, index, cal, d, props)}
                          </g>
                        )
                      }
                  />
              </div>
              <br/>
            </div>

  }
}


const dateText = (value, index, mday, cal, d={}, props={}, calType) => {
  //if (calType === 'heb') { debugger }
  return (
    <text
      key={'t'+index}
      style={{fontSize:d.ss*.4, pointerEvents:'none', }}
      width={d.ss * .8}
      height={d.ss * .8}
      x={d.ss * .5}
      y={d.ss * .5}
      textAnchor='middle'
      alignmentBaseline='middle'
      onClick={cal.handleClick.bind(cal, value)}
      onMouseOver={e => cal.handleMouseOver(e, value, this.hover)}
      onMouseLeave={e => cal.handleMouseLeave(e, value, this.hover)}
      
      {...cal.getTooltipDataAttrsForIndex(index)}
    >
      {mday}
    </text>
  )
}
const moons = (value, index, cal, d={}, props={}) => {
  return (
    <g key={'t'+index} >
    {H.moon(value.date)}
    </g>
  )
}

export class DateDesc extends Component {
  render() {
    let {jsDate, } = this.props
    let [gy, gm, gd] = splitGregDate(jsDate)
    let jd = H.gregorian_to_jd(gy, gm, gd)
    let heb = H.jd_to_hebrew(jd)
    let [hy, hm, hd] = heb
    return (
      <div className="main">
        <div style={{clear:'both'}} >
          <div>
            Julian day: {commify(jd)}
          </div>
          <div>
            Javascript date: {jsDate.toString()}
          </div>
          <div>
            Gregorian date: {gd} {H.monthLabel(gm, 'gregorian', 0)} {gy}
          </div>
          <div>
            Hebrew date: {hd} {H.monthLabel(hm,'hebrew')} {hy}
          </div>
          <div>
            Moon phase: {H.moon_phase(jsDate)} {H.moon(jsDate, 20)}
          </div>
        </div>
      </div>
    )
  }
}
export const commify = format(',')
export function splitGregDate(date) {
  return [
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  ]
}
