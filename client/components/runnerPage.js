import React from 'react'
import {updatePageWithText, sendRunnerStats} from './runnerMapUtils'
import Map from './map'
import StatsTable from './statsTable'


let timeoutId = null

function startSharingStats(id) {
  alert('sharing stats')
  updatePageWithText('Started sharing stats.')
  sendRunnerStats(id)
  timeoutId = setInterval(sendRunnerStats, 3000, id)
}

function stopSharingStats() {
  clearTimeout(timeoutId)
  alert('not sharing stats')
  updatePageWithText('Stopped sharing stats.')
}

export default function runnerPage(props) {
  if (!navigator.geolocation) {
    return <div>'geolocation not supported'</div>
  } else {
    return (
      <React-fragment>
        <Map />
        <div>
          <button type="submit" onClick={() => sendRunnerStats(props.id)}>
            Send Current Position
          </button>
        </div>
        <div>
          <button type="submit" onClick={() => startSharingStats(props.id)}>
            Start Sharing Location Stats
          </button>
        </div>
        <div>
          <button type="submit" onClick={stopSharingStats}>
            Stop Sharing Location Stats
          </button>
        </div>
        <StatsTable />
        <div id="log" />
      </React-fragment>
    )
  }
}
