import { Chart } from "react-google-charts";

import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";

const options = {
  title: "Sales Over Time",
  curveType: "function",
  legend: { position: "bottom" },
  series: [{ color: "#F43F5E" }],
};
const SalesLineChart = ({ data }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  if (loading) return <LoadingSpinner></LoadingSpinner>;
  return (
    <>
      {loading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : data.length > 1 ? (
        <Chart
          chartType="LineChart"
          width="100%"
          data={data}
          options={options}
        />
      ) : (
        <>
          <LoadingSpinner></LoadingSpinner>
          <p className="text-center">Not enough data avaiable for this section</p>
        </>
      )}
    </>
  );
};
SalesLineChart.propTypes = {
  data: PropTypes.array,
};
export default SalesLineChart;
