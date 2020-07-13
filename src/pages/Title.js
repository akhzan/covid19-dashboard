/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import dayjs from 'dayjs'

const Title = ({ date }) => {
  return (
    <div className="app-title">
      <h1 className="app-title__title --bold">Covid 19 - Indonesia</h1>
      <div className="app-title__description">
        Last updated data: {dayjs(date).format('DD/MM/YYYY')}
      </div>
      <div className="app-title__description">
        The purpose of this page is for experimental research only. If
        you&apos;re looking for data accuracy please refer to{' '}
        <span>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://covid19.go.id/">
            Covid19.go.id
          </a>
        </span>
      </div>
    </div>
  )
}

export default Title
