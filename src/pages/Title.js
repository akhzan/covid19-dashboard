/* eslint-disable react/jsx-no-target-blank */
import React from 'react'

const Title = () => {
  return (
    <div className="app-title">
      <div className="app-title__title --bold">Covid 19 - Indonesia</div>
      <div className="app-title__description">
        Last updated data: 07/07/2020
      </div>
      <div className="app-title__description">
        The purpose of this page is for experimental research only. If
        you&apos;re looking for data accuracy please refer to{' '}
        <span>
          <a target="_blank" href="https://covid19.go.id/">
            Covid19.go.id
          </a>
        </span>
      </div>
    </div>
  )
}

export default Title
