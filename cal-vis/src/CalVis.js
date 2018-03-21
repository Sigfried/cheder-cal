
import React, { Component } from 'react'
//import CalendarHeatmap from 'react-calendar-heatmap'
import CalendarHeatmap from './react-calendar-heatmap/src'
import * as H from './react-calendar-heatmap/src'
//import * as H from './react-calendar-heatmap/src/helpers'
import './react-calendar-heatmap/src/styles.css'
import _ from 'supergroup'
//import * as d3 from 'd3'

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
  render() {
    let {calHeatmapProps={}, centerDate=new Date(), } = this.props
    let startDate = H.shiftDate(centerDate, -400)
    let endDate = H.shiftDate(centerDate, 400)
    calHeatmapProps = Object.assign( {
            //horizontal:false,
            startDate,
            endDate,
            values: 
              _.range(801).map(
                i=>{
                  let date = H.shiftDate(startDate,i)
                  return {
                      date: H.shiftDate(startDate, i),count:'0',
                      mday: date.getDate(),
                      mdays: new Date(date.getFullYear(), date.getMonth()+1, 0)
                    }
                }),
        }, calHeatmapProps)
    console.log(calHeatmapProps)
    const customTooltipDataAttrs = { 'data-toggle': 'tooltip' };
    return  <div style={{clear:'both'}}>
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

    

              <div className='cal-vert'>
                  <CalendarHeatmap {...calHeatmapProps} 
                      classForValue={classForValue}
                      tooltipDataAttrs={customTooltipDataAttrs}
                      titleForValue={customTitleForValue}
                      onClick={customOnClick}
                      //textContent={textContent}
                      horizontal={false}
                      squareContents={
                        (value, index, cal, d={}, props={}) => (
                          <g>
                            {squares(value, index, cal, d, props)}
                            {gDate(value, index, cal, d, props)}
                          </g>
                        )
                      }
                  />
              </div>
              <div className='cal-vert'>
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
                            {squares(value, index, cal, d, props)}
                            {gDate(value, index, cal, d, props)}
                          </g>
                        )
                      }
                  />
              </div>
              <div className='cal-vert'>
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
                            {squares(value, index, cal, d, props)}
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


const squares = (value, index, cal, d={}, props={}) => {
  return (
    <g>
      <rect
        width={d.ss}
        height={d.ss}
        className={cal.getClassNameForIndex(index)}
        onClick={cal.handleClick.bind(cal, value)}
        onMouseOver={e => cal.handleMouseOver(e, value)}
        onMouseLeave={e => cal.handleMouseLeave(e, value)}
        {...cal.getTooltipDataAttrsForIndex(index)}
      >
        <title>{cal.getTitleForIndex(index)}</title>
      </rect>
      { value.mday === 1
          ? <path fill="transparent" strokeWidth={d.gs} stroke="#449" d={`M ${-d.gs/2} ${-d.gs/2} V ${d.ss + d.gs}`} />
          : ''
      }
      { value.mday <= 7
          ? <path fill="transparent" strokeWidth={d.gs} stroke="#449" d={`M ${-d.gs} ${-d.gs/2} H ${d.ss}`} />
          : ''
      }
      { value.mday === 1
          ? <path fill="transparent" strokeWidth={d.gs} stroke="#449" d={`M ${-d.gs/2} ${-d.gs/2} V ${d.ss + d.gs}`} />
          : ''
      }
      { value.mday <= 7
          ? <path fill="transparent" strokeWidth={d.gs} stroke="#449" d={`M ${-d.gs} ${-d.gs/2} H ${d.ss}`} />
          : ''
      }
    </g>
  )
}
const gDate = (value, index, cal, d={}, props={}) => {
  return (
    <text
      key={'t'+index}
      style={{fontSize:d.ss*.4}}
      width={d.ss * .8}
      height={d.ss * .8}
      x={d.ss * .5}
      y={d.ss * .5}
      textAnchor='middle'
      alignmentBaseline='middle'
      onClick={cal.handleClick.bind(cal, value)}
      onMouseOver={e => cal.handleMouseOver(e, value)}
      onMouseLeave={e => cal.handleMouseLeave(e, value)}
      {...cal.getTooltipDataAttrsForIndex(index)}
    >
      {value.date.getDate()}
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
















/*
function d3_bostock_version() {
  var width = 960,
      height = 136,
      cellSize = 17;

  var formatPercent = d3.format(".1%");

  var color = d3.scaleQuantize()
      .domain([-0.05, 0.05])
      .range(["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"]);

  var svg = d3.select("body")
    .selectAll("svg")
    .data(d3.range(1990, 2011))
    .enter().append("svg")
      .attr("width", width)
      .attr("height", height)
    .append("g")
      .attr("transform", "translate(" + ((width - cellSize * 53) / 2) + "," + (height - cellSize * 7 - 1) + ")");

  svg.append("text")
      .attr("transform", "translate(-6," + cellSize * 3.5 + ")rotate(-90)")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      .attr("text-anchor", "middle")
      .text(function(d) { return d; });

  var rect = svg.append("g")
      .attr("fill", "none")
      .attr("stroke", "#ccc")
    .selectAll("rect")
    .data(function(d) { return d3.timeDays(new Date(d, 0, 1), new Date(d + 1, 0, 1)); })
    .enter().append("rect")
      .attr("width", cellSize)
      .attr("height", cellSize)
      .attr("x", function(d) { return d3.timeWeek.count(d3.timeYear(d), d) * cellSize; })
      .attr("y", function(d) { return d.getDay() * cellSize; })
      .datum(d3.timeFormat("%Y-%m-%d"));

  svg.append("g")
      .attr("fill", "none")
      .attr("stroke", "#000")
    .selectAll("path")
    .data(function(d) { return d3.timeMonths(new Date(d, 0, 1), new Date(d + 1, 0, 1)); })
    .enter().append("path")
      .attr("d", pathMonth);

  d3.csv("dji.csv", function(error, csv) {
    if (error) throw error;

    var data = d3.nest()
        .key(function(d) { return d.Date; })
        .rollup(function(d) { return (d[0].Close - d[0].Open) / d[0].Open; })
      .object(csv);

    rect.filter(function(d) { return d in data; })
        .attr("fill", function(d) { return color(data[d]); })
      .append("title")
        .text(function(d) { return d + ": " + formatPercent(data[d]); });
  });
  function pathMonth(t0) {
    var t1 = new Date(t0.getFullYear(), t0.getMonth() + 1, 0),
        d0 = t0.getDay(), w0 = d3.timeWeek.count(d3.timeYear(t0), t0),
        d1 = t1.getDay(), w1 = d3.timeWeek.count(d3.timeYear(t1), t1);
    return "M" + (w0 + 1) * cellSize + "," + d0 * cellSize
        + "H" + w0 * cellSize + "V" + 7 * cellSize
        + "H" + w1 * cellSize + "V" + (d1 + 1) * cellSize
        + "H" + (w1 + 1) * cellSize + "V" + 0
        + "H" + (w0 + 1) * cellSize + "Z";
  }
}
*/

