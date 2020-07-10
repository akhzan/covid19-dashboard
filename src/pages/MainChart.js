/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-curly-newline */
import React from 'react'
import {
  CartesianGrid,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

const MainChart = ({ data }) => {
  return (
    <div>
      <div className="app-card app-chart__main">
        <div className="app-chart__main-title">Daily Change</div>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart margin={{ left: -10 }} data={data}>
            <XAxis
              axisLine={false}
              tickLine={false}
              // tickFormatter={xAxisFormatter}
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
            <Area
              strokeWidth={2}
              dot={{ r: 2 }}
              name="Confirmed"
              type="natural"
              dataKey="confirmed"
              stroke="#58afcf"
              fill="#F7F8FF"
              activeDot={{ r: 6 }}
            />
            <Area
              strokeWidth={2}
              dot={{ r: 2 }}
              name="Recovered"
              type="natural"
              dataKey="recovered"
              stroke="#0c943b"
              fill="#F7F8FF"
              activeDot={{ r: 6 }}
            />
            <Area
              strokeWidth={2}
              dot={{ r: 2 }}
              name="Deaths"
              type="natural"
              dataKey="deaths"
              stroke="#f51711"
              fill="#F7F8FF"
              activeDot={{ r: 6 }}
            />
            <Area
              strokeWidth={2}
              dot={{ r: 2 }}
              name="On Treatment"
              type="natural"
              dataKey="treatment"
              stroke="#ffc13d"
              fill="#F7F8FF"
              activeDot={{ r: 6 }}
            />
            <Legend />
            <Tooltip isAnimationActive={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="app-card app-chart__main">
        <div className="app-chart__main-title">Cummulative</div>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart margin={{ left: -10 }} data={data}>
            <XAxis
              axisLine={false}
              tickLine={false}
              // tickFormatter={xAxisFormatter}
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
            <Area
              strokeWidth={2}
              dot={{ r: 2 }}
              name="Confirmed"
              type="natural"
              dataKey="confirmedCumm"
              stroke="#58afcf"
              fill="#F7F8FF"
              activeDot={{ r: 6 }}
            />
            <Area
              strokeWidth={2}
              dot={{ r: 2 }}
              name="Recovered"
              type="natural"
              dataKey="recoveredCumm"
              stroke="#0c943b"
              fill="#F7F8FF"
              activeDot={{ r: 6 }}
            />
            <Area
              strokeWidth={2}
              dot={{ r: 2 }}
              name="Deaths"
              type="natural"
              dataKey="deathsCumm"
              stroke="#f51711"
              fill="#F7F8FF"
              activeDot={{ r: 6 }}
            />
            <Area
              strokeWidth={2}
              dot={{ r: 2 }}
              name="On Treatment"
              type="natural"
              dataKey="treatmentCumm"
              stroke="#ffc13d"
              fill="#F7F8FF"
              activeDot={{ r: 6 }}
            />
            <Legend />
            <Tooltip isAnimationActive={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default MainChart
