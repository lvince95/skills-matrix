import {
  Area,
  AreaChart,
  Label,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Oct 2023",
    Angular: 5,
    Python: 10,
    ".NET": 15,
  },
  {
    name: "Nov 2023",
    Angular: 8,
    Python: 11,
    ".NET": 16,
  },
  {
    name: "Dec 2023",
    Angular: 8,
    Python: 16,
    ".NET": 18,
  },
  {
    name: "Jan 2024",
    Angular: 10,
    Python: 14,
    ".NET": 20,
  },
  {
    name: "Feb 2024",
    Angular: 14,
    Python: 14,
    ".NET": 22,
  },
  {
    name: "Mar 2024",
    Angular: 12,
    Python: 13,
    ".NET": 21,
  },
  {
    name: "Apr 2024",
    Angular: 13,
    Python: 16,
    ".NET": 19,
  },
];

export default function TeamAreaChart() {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          {/* <CartesianGrid stroke="grey" strokeDasharray="5 5" /> */}
          <XAxis dataKey="name" />
          <YAxis type="number"></YAxis>
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="Python"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey=".NET"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}
