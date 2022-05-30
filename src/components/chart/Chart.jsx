import "./chart.scss"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  {
    name: 'January',
    total: 1200,
    profit: 600,
  },
  {
    name: 'February',
    total: 2100,
    profit: 300,
  },
  {
    name: 'March',
    total: 2400,
    profit: 1600,
  },
  {
    name: 'April',
    total: 1457,
    profit: 500,
  },
  {
    name: 'May',
    total: 500,
    profit:150,
  },
  {
    name: 'June',
    total: 1200,
    profit:390,
  },
];

function Chart({aspect, title,height}) {
  return (
    <div className="chart">
      <div className="title">Last 6 Months</div>
        <AreaChart aspect={aspect}
          width={900}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="total" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="profit" stackId="1" stroke="#82ca9d" fill="#82ca9d" />

        </AreaChart>
    </div>
  )
}

export default Chart