import React, { useEffect, useRef } from "react";
import Container from "../components/Container";
import Button from "../components/Button";
import * as d3 from "d3";

const Graph = () => {
	const svgRef = useRef();

	const width = 480;
	const height = 150;

	const _svg = useRef();
	const _generateScaledLine = useRef();

	const graphData = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

	useEffect(() => {
		// SETUP SVG
		_svg.current = d3
			.select(svgRef.current)
			.attr("viewBox", `0 0 480 150`)
			.style("background", "transparent")
			.style("overflow", "visible")
			.style("margin-bottom", 115)
			.style("margin-top", 15)
			.style("margin-right", "calc(8% + 40px)")
			.style("margin-left", "calc(8% + 40px)");

		// X & Y SCALES
		const xScale = d3
			.scaleLinear()
			.domain([0, graphData.length - 1])
			.range([0, width]);
		const yScale = d3.scaleLinear().domain([0, 60]).range([height, 0]);

		// X & Y AXIS
		const xAxis = d3
			.axisBottom(xScale)
			.ticks(graphData.length)
			.tickFormat((i) => i);
		const yAxis = d3.axisLeft(yScale).ticks(5);

		_svg.current
			.append("g")
			.call(xAxis)
			.attr("transform", `translate(0, ${height})`);
		_svg.current.append("g").call(yAxis);

		// X & Y AXIS LABELS
		_svg.current
			.append("text")
			.attr("class", "x-label")
			.attr("x", width / 2)
			.attr("y", height + 40)
			.text("n")
			.style("font-style", "italic");

		_svg.current
			.append("text")
			.attr("class", "y-label")
			.attr("text-anchor", "end")
			.attr("dy", 0 - 40)
			.attr("x", -30)
			.attr("transform", "rotate(-90)")
			.text("fibonacci(n)")
			.style("font-style", "italic");

		// DRAW LINE
		_generateScaledLine.current = d3
			.line()
			.x((d, i) => xScale(i))
			.y(yScale)
			.curve(d3.curveCardinal);
	});

	const drawGraph = () => {
		// DATA FOR SVG
		_svg.current
			.selectAll(".line")
			.data([graphData])
			.join("path")
			.attr("d", (d) => _generateScaledLine.current(d))
			.attr("fill", "none")
			.attr("stroke", "#1E90FF");
	};

	const Chart = () => <svg ref={svgRef} style={{}}></svg>;

	return (
		<Container>
			<Button
				text="Draw"
				icon={
					<span
						class="glyphicon glyphicon-pencil"
						style={{ fontSize: 24 }}
					></span>
				}
				_isShown={true}
				page="graph"
				_onClick={drawGraph}
			/>
			<Chart />
		</Container>
	);
};

export default Graph;
