/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { COLORS } from '../config/chart'

const types = {
  confirmed: 'jumlah_kasus',
  recovered: 'jumlah_sembuh',
  deaths: 'jumlah_meninggal',
}

const Location = ({ locations }) => {
  const [type, setType] = useState('confirmed')
  const highestConfirmed =
    locations.reduce(
      (prev, curr) => (curr[types[type]] >= prev ? curr[types[type]] : prev),
      0,
    ) * 1.2
  return (
    <div className="app-card app-location">
      <div className="app-location__control">
        <div>
          <button
            className={type === 'confirmed' ? '--confirmed' : ''}
            type="button"
            onClick={() => setType('confirmed')}>
            Confirmed
          </button>
          <button
            className={type === 'recovered' ? '--recovered' : ''}
            type="button"
            onClick={() => setType('recovered')}>
            Recovered
          </button>
          <button
            className={type === 'deaths' ? '--deaths' : ''}
            type="button"
            onClick={() => setType('deaths')}>
            Deaths
          </button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={locations}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            nameKey="key"
            dataKey={types[type]}>
            {locations.map((entry, index) => (
              <Cell
                fill={COLORS[index % COLORS.length]}
                key={`cell-${index}`}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className="app-location__list">
        {locations.map((loc, index) => (
          <div key={loc.key} className="app-location__item">
            <div className="app-location__item-left">
              <div className="app-location__item-title">
                {loc.key === 'DKI JAKARTA'
                  ? 'DKI Jakarta'
                  : loc.key.toLowerCase()}
              </div>
              <div
                className="app-location__item-bar"
                style={{
                  borderBottomColor: COLORS[index % COLORS.length],
                  width: `${(loc[types[type]] / highestConfirmed) * 100}%`,
                }}
              />
            </div>
            <div>{loc[types[type]]}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Location
