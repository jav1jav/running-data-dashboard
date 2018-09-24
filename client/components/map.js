import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'

mapboxgl.accessToken =
  'pk.eyJ1IjoiamF2aWVyY2FyZXkiLCJhIjoiY2ptYjN4aG5pMDEwcjNwbnF1M2twYW91ZSJ9.UITbabUfCeSDBAXMykIMvw'

/**
 * COMPONENT
 */

class Map extends React.Component {
  map

  // constructor(props) {
  //   super(props)
    // this.state = {
    //   lng: -122.48369693756104,
    //   lat: 37.83381888486939,
    //   zoom: 15,
    //   coords: []
    // }
  // }

  componentDidMount() {
    const coordinates = this.props.coordinates
    console.log('map.js | cdm | coordinates from props: ', coordinates)
    let lng = -122.48369693756104
    let lat = 37.83381888486939
    let zoom = 15
    if(coordinates.length > 0) {
       lng = coordinates[coordinates.length-1][0]
       lat = coordinates[coordinates.length-1][1]
       zoom = 15
    }


    // if(coordinates.length > 0) {
    //   this.setState({
    //     lng: coordinates[coordinates.length-1][0],
    //     lat: coordinates[coordinates.length-1][1],
    //     zoom: 15,
    //     coords: coordinates
    //   })
    // }


    // const {lng, lat, zoom} = this.state

    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom
    })

  }

  updateLayer() {
    this.map.addLayer({
      id: 'route' + this.props.coordinates.length,
      type: 'line',
      source: {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: this.props.coordinates
          }
        }
      },
      layout: {
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': '#888',
        'line-width': 8
      }
    })
  }

  // updateLayer2() {
  //   this.setState({
  //     coords: data.slice(0, ++counter)
  //   })
  // }

  render() {
    // if (this.state.coords.length !== this.props.coordinates.length) {
    //   this.setState({
    //     coords: this.props.coordinates
    //   })
    // }


    console.log('rendering | props', this.props)
    this.map && this.props.coordinates.length > 0 && this.updateLayer()

    //const {lng, lat, zoom} = this.state

    return (
      <div id='map' style={{width: 100+ '%', height: 600 }} />
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    sessionID: state.sessionID,
    coordinates: state.stat
  }
}

export default connect(mapState)(Map)

/**
 * PROP TYPES
 */
Map.propTypes = {
  sessionID: PropTypes.string
}
