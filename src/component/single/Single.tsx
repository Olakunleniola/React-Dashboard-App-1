import {
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import "./single.scss";

type Props = {
  id: number;
  img?: string;
  title: string;
  info: object;
  chart: {
    dataKeys: { name: string; color: string }[];
    data: object[];
  };
  activities: { time?: string; text: string }[];
};

function Single({ id, img, title, info, chart, activities }: Props) {
  return (
    <div className="single">
      {/* left side */}
      <div className="view">
        {/* info */}
        <div className="info">
          {/* topInfo */}
          <div className="topInfo">
            {img && <img src={img} alt="img" />}
            <h1>{title}</h1>
            <button>Update</button>
          </div>
          {/* details */}
          <div className="details">
            {Object.entries(info).map((info) => (
              <div className="item" key={info[0]}>
                <span className="itemTitle">{info[0]}:</span>
                <span className="itemValue">{info[1]}</span>
              </div>
            ))}
          </div>
        </div>

        <hr />
        {/* chart */}
        <div className="chart">
          {chart && (
            <ResponsiveContainer width="90%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {chart.dataKeys.map((data) => (
                  <Line
                    key={data.name}
                    type="monotone"
                    dataKey={data.name}
                    stroke={data.color}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
      {/* right side */}
      <div className="activites">
        <h2>Latest Activites</h2>
        {activities && (
          <ul>
            {activities.map((activity, idx) => (
              <li key={idx + "akeem"}>
                <div>
                  <p className="activity">{activity.text}</p>
                  <time>{activity.time ?? "No time provided"}</time>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );  
}

export default Single;
