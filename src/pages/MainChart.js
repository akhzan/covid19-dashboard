/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-curly-newline */
import React from 'react'
import {
  CartesianGrid,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import dayjs from 'dayjs'

const xAxisFormatter = (item, format = 'DD MMM') => dayjs(item).format(format)

const MainChart = ({ data }) => {
  return (
    <div>
      <div className="app-card app-chart__main">
        <div className="app-chart__main-title">Daily Change</div>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart margin={{ left: -10 }} data={data}>
            <XAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={xAxisFormatter}
              dataKey="name"
              minTickGap={20}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              domain={['dataMax+50', 'dataMin-1']}
            />
            <CartesianGrid
              axisLine={false}
              tickLine={false}
              strokeDasharray="3 3"
            />
            {/* {children} */}
            <Line
              strokeWidth={2}
              dot={{ r: 0 }}
              name="Confirmed"
              type="natural"
              dataKey="confirmed"
              stroke="#58afcf"
              fill="#F7F8FF"
              activeDot={{ r: 6 }}
            />
            <Line
              strokeWidth={2}
              dot={{ r: 0 }}
              name="Recovered"
              type="natural"
              dataKey="recovered"
              stroke="#0c943b"
              fill="#F7F8FF"
              activeDot={{ r: 6 }}
            />
            <Line
              strokeWidth={2}
              dot={{ r: 0 }}
              name="Deaths"
              type="natural"
              dataKey="deaths"
              stroke="#f51711"
              fill="#F7F8FF"
              activeDot={{ r: 6 }}
            />
            <Line
              strokeWidth={2}
              dot={{ r: 0 }}
              name="On Treatment"
              type="natural"
              dataKey="treatment"
              stroke="#ffc13d"
              fill="#F7F8FF"
              activeDot={{ r: 6 }}
            />
            <Legend />
            <Tooltip
              labelFormatter={(item) => xAxisFormatter(item, 'DD MMM YYYY')}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="app-card app-chart__main">
        <div className="app-chart__main-title">Cummulative</div>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart margin={{ left: -10 }} data={data}>
            <XAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={xAxisFormatter}
              dataKey="name"
              minTickGap={20}
            />
            <YAxis axisLine={false} tickLine={false} />
            <CartesianGrid
              axisLine={false}
              tickLine={false}
              strokeDasharray="3 3"
            />
            {/* {children} */}
            <Line
              strokeWidth={2}
              dot={{ r: 0 }}
              name="Confirmed"
              type="natural"
              dataKey="confirmedCumm"
              stroke="#58afcf"
              fill="#F7F8FF"
              activeDot={{ r: 6 }}
            />
            <Line
              strokeWidth={2}
              dot={{ r: 0 }}
              name="Recovered"
              type="natural"
              dataKey="recoveredCumm"
              stroke="#0c943b"
              fill="#F7F8FF"
              activeDot={{ r: 6 }}
            />
            <Line
              strokeWidth={2}
              dot={{ r: 0 }}
              name="Deaths"
              type="natural"
              dataKey="deathsCumm"
              stroke="#f51711"
              fill="#F7F8FF"
              activeDot={{ r: 6 }}
            />
            <Line
              strokeWidth={2}
              dot={{ r: 0 }}
              name="On Treatment"
              type="natural"
              dataKey="treatmentCumm"
              stroke="#ffc13d"
              fill="#F7F8FF"
              activeDot={{ r: 6 }}
            />
            <Legend />
            <Tooltip
              labelFormatter={(item) => xAxisFormatter(item, 'DD MMM YYYY')}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default MainChart
