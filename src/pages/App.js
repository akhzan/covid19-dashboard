import React from 'react'

import Title from './Title'
import Summary from './Summary'
import MainChart from './MainChart'
import update from '../data/update.json'

const App = () => {
  const { total, penambahan, harian } = update.update
  const data = harian.map((h) => ({
    name: h.key_as_string,
    deaths: h.jumlah_meninggal.value,
    confirmed: h.jumlah_positif.value,
    treatment: h.jumlah_dirawat.value,
    recovered: h.jumlah_sembuh.value,
    deathsCumm: h.jumlah_meninggal_kum.value,
    confirmedCumm: h.jumlah_positif_kum.value,
    treatmentCumm: h.jumlah_dirawat_kum.value,
    recoveredCumm: h.jumlah_sembuh_kum.value,
  }))
  return (
    <div className="app">
      <Title />
      <div className="app-left">
        <Summary total={total} penambahan={penambahan} />
        <MainChart data={data} />
      </div>
    </div>
  )
}

export default App
