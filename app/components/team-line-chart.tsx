import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
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
    Python: 13,
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

export const TeamLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid stroke="grey" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis type="number">
          <Label
            offset={5}
            position="insideLeft"
            angle={270}
            style={{
              textAnchor: "middle",
              fontWeight: "bold",
            }}
          >
            No. of Developers
          </Label>
        </YAxis>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey=".NET" stroke="blue" strokeWidth={3} />
        <Line type="monotone" dataKey="Python" stroke="green" strokeWidth={3} />
        <Line type="monotone" dataKey="Angular" stroke="red" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
};
