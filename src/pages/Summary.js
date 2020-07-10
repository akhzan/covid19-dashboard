import React from 'react'

const Summary = ({ total, penambahan }) => {
  return (
    <div className="app-summary">
      <div className="app-card app-summary__item --blue">
        <div>
          <p>CONFIRMED</p>
          <div className="app-summary__item-number">
            {total.jumlah_positif.toLocaleString()}
          </div>
        </div>
        <div>+{penambahan.jumlah_positif.toLocaleString()}</div>
      </div>
      <div className="app-card app-summary__item --yellow">
        <div>
          <p>ON TREATMENT</p>
          <div className="app-summary__item-number">
            {total.jumlah_dirawat.toLocaleString()}
          </div>
        </div>
        <div>+{penambahan.jumlah_dirawat.toLocaleString()}</div>
      </div>
      <div className="app-card app-summary__item --green">
        <div>
          <p>RECOVERED</p>
          <div className="app-summary__item-number">
            {total.jumlah_sembuh.toLocaleString()}
          </div>
        </div>
        <div>+{penambahan.jumlah_sembuh.toLocaleString()}</div>
      </div>
      <div className="app-card app-summary__item --red">
        <div>
          <p>DEATHS</p>
          <div className="app-summary__item-number">
            {total.jumlah_meninggal.toLocaleString()}
          </div>
        </div>
        <div>+{penambahan.jumlah_meninggal.toLocaleString()}</div>
      </div>
    </div>
  )
}

export default Summary
