import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { fibData } from "../../utils/fibonacci";

const Chart = ({ ref }) => {
	return <svg ref={ref}></svg>;
};

export default Chart;
