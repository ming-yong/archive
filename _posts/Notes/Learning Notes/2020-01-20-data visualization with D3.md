---
title: fcc | Data Visualization with D3
description: Learning notes about Data Visualization with D3.
categories: [Notes] 
tags: [Learning Notes]
---

## References

- [freeCodeCamp "Data Visualization Certification"](https://www.freecodecamp.org/)

## Work with data

```js
//--add document elements
//select():selects one element(the first one found) from the document.
//append():appends an HTML node to a selected item, and returns a handle to that node.
//text() method either sets the text of the selected node, or gets the current text.
d3.select("ul")
  .append("li")
  .text("Very important item");
//selectAll(): select a group of elements, it returns an array of HTML nodes.

//--working with data
//creating 3 new li, 
//data() is used to attach data to DOM elements
//enter() is used to create new elements
const dataset = ["a", "b", "c"];
d3.select("ul").selectAll("li")
  .data(dataset)
  .enter()
  .append("li")
  .text("New item");//New item *3

//--work with dynamic data
const dataset = ["a", "b", "c"];
d3.select("ul").selectAll("li")
  .data(dataset)
  .enter()
  .append("li")
  .text((d)=>"letter " d);//letter a, letter b, letter c
```

## Work with style

```js
//--add inline styling to elements
selection.style("color","blue");

//--change style based on data
selection..style("color",(d)=>(d<20)?"red":"green");

//--add classes
selection.attr("class", "container");

//--update height of an element dynamically
.style("height",(d) => d+"px")//continue
```

## Work with charts

```js
//--change the presentation of a bar chart
.style("margin", "2px")
.style("height", (d) => (10*d + "px"))//continue

//--SVG(scalable vector graphics) in d3
const svg = d3.select("body")
.append("svg")
.style("height",h)
.style("width",w)
.attr("class","svg");

//--display shapes with svg
.append("rect")
.attr("width","25")
.attr("height","100")
.attr("x","0")
.attr("y","0")//continue

//--create a bar for each data point in the set
//rect has to be append to a svg
svg.selectAll("rect")
  .data(dataset)//any method that's chained after data() is run once for each item in the data set.
  .enter()
  .append("rect")
  .attr("x", (d, i) => {
    return i*30;// d is the data point value, i is the index of the data point in the array
  })
  .attr("y", 0)
  .attr("width", 25)
  .attr("height", 100);

//--dynamically change the height of each bar
.attr("height", (d, i) => d*3);

//--invert svg elements
.attr("y", (d, i) => h-d*3);
//y = h - m * d
//y location = height of svg - data point * how many times you want the height of each data point is

//--change the colour of an svg element
.attr("fill","navy");

//--add label to d3 elements
.append("text")
.attr("x", (d, i) => i * 30)
.attr("y", (d, i) => h  - 3 * d - 3)
.text((d)=>d);

//--style d3 labels
.style("font-size","25px")
.attr("fill","red");

//--hover effect
.bar:hover {
  fill: brown;
}
.attr("class","bar");

//--add a tooltip to a d3 element
.append("title")
.text(d=>d);

//--create a Scatterplot with svg circles
svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx",(d)=>d[0])//measure from top of the svg as well
    .attr("cy",(d)=>h-d[1])//show the chart right-side-up and not inverted
    .attr("r",5);

//--add labels to Scatter Plot circles
    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
      .attr("x",(d)=>d[0]+5)
      .attr("y",(d)=>h-d[1])
      .text((d)=>d[0] + ", "+d[1])
```

## Work with scale

```js
//--create a linear scale with d3
const scale = d3.scaleLinear();
const output = scale(50);//scaling factor

//--set a domain and a range on scale
// Set a domain
// The domain covers the set of input values
scale.domain([50, 480]);//data ranging from 50 to 480
// Set a range
// The range covers the set of output values
scale.range([10, 500]);//output between 10 to 500 units
scale(50) // Returns 10
scale(480) // Returns 500
scale(325) // Returns 323.37
scale(750) // Returns 807.67
d3.scaleLinear()

//--finding max and min value
const exampleData = [34, 234, 73, 90, 6, 52];
d3.min(exampleData) // Returns 6
d3.max(exampleData) // Returns 234

const locationData = [[1, 7],[6, 3],[8, 3]];
// Returns the smallest number out of the first elements
const minX = d3.min(locationData, (d) => d[0]);
// minX compared 1, 6, and 8 and is set to 1
const positionData = [[1, 7, -4],[6, 3, 8],[2, 9, 3]];//positionData for 3D array
const output = d3.max(positionData,(d)=>d[2]);//Returns 8

//--dynamic scales
const padding = 30;
const xScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, (d) => d[0])])//0 to max
  .range([padding, w - padding]);//svg size
const yScale = d3.scaleLinear()
  .domain([0,d3.max(dataset,(d)=>d[1])])
  .range([h-padding,padding]); //keep the right-side-up

//--use a predefined scale to place elements
//for circles
.attr("cx", (d)=>xScale(d[0]))
.attr("cy", (d)=>yScale(d[1]))
.attr("r", "5");
//for text
.attr("x",(d)=>xScale(d[0]+10))
.attr("y",(d)=>yScale(d[1]))

//--add axes to a visualization
const xAxis = d3.axisBottom(xScale);//axisLeft for y
svg.append("g")//g for group
   .attr("transform", "translate(0, " + (h - padding) + ")")//from (x,0) for y
   .call(xAxis);
```

## Final

```js
const dataset = [
              [ 34,     78 ],
              [ 109,   280 ],
              [ 310,   120 ],
              [ 79,   411 ],
              [ 420,   220 ],
              [ 233,   145 ],
              [ 333,   96 ],
              [ 222,    333 ],
              [ 78,    320 ],
              [ 21,   123 ]
            ];

const w = 500;
const h = 500;
const padding = 60;

const xScale = d3.scaleLinear()
                  .domain([0, d3.max(dataset, (d) => d[0])])
                  .range([padding, w - padding]);

const yScale = d3.scaleLinear()
                  .domain([0, d3.max(dataset, (d) => d[1])])
                  .range([h - padding, padding]);

const svg = d3.select("body")
              .append("svg")
              .attr("width", w)
              .attr("height", h);

svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", (d) => xScale(d[0]))
    .attr("cy",(d) => yScale(d[1]))
    .attr("r", (d) => 5);

svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text((d) =>  (d[0] + "," + d[1]))
    .attr("x", (d) => xScale(d[0] + 10))
    .attr("y", (d) => yScale(d[1]))

const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);

svg.append("g")
    .attr("transform", "translate(0," + (h - padding) + ")")
    .call(xAxis);

svg.append("g")
.attr("transform","translate("+padding+" , 0)")
.call(yAxis);
```
