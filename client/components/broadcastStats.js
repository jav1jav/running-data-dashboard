import React from 'react';
import { EventEmitter } from "events"
export const broadcaster = new EventEmitter

let counter = 0

const data = [
  [-122.48369693756104, 37.83381888486939],
  [-122.48348236083984, 37.83317489144141],
  [-122.48404026031496, 37.83114119107971],
  [-122.48404026031496, 37.83049717427869],
  [-122.48348236083984, 37.829920943955045],
  [-122.48356819152832, 37.82954808664175],
  [-122.48507022857666, 37.82944639795659],
  [-122.48610019683838, 37.82880236636284],
  [-122.48695850372314, 37.82931081282506],
  [-122.48700141906738, 37.83080223556934],
  [-122.48751640319824, 37.83168351665737],
  [-122.48803138732912, 37.832158048267786],
  [-122.48888969421387, 37.83297152392784],
  [-122.48987674713133, 37.83263257682617],
  [-122.49043464660643, 37.832937629287755],
  [-122.49125003814696, 37.832429207817725],
  [-122.49163627624512, 37.832564787218985],
  [-122.49223709106445, 37.83337825839438],
  [-122.49378204345702, 37.83368330777276]
]


function sendRunnerStats(lat, lng, userId = 1, shouldBroadcast = true) {
  data.slice(0, ++counter)
  shouldBroadcast && broadcaster.emit('sendRunnerStats', lat, lng, userId);
}

export default function broadcastStats () {
  return (
    <div><button type='submit' onClick={sendRunnerStats}>Send Stats</button></div>
  )
}