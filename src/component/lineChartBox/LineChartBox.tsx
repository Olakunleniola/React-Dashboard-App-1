import "./linechartbox.scss";
import { Link } from "react-router-dom";
import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts";

type Props = {
  color: string;
  icon: string;
  title: string;
  number: number | string;
  chartData: object[];
  dataKey: string;
  percentage: number;
}

const LineChartBox = (props: Props) => { 
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon} alt="icon" />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="/" style={{color: props.color}}>View All</Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 70 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <p className="percentage" style={{color: props.percentage > 0 ? "limegreen" : "tomato"}}>{props.percentage}</p>
          <p className="duration">this month</p>
        </div>
      </div>
    </div>
  );
};

export default LineChartBox;
