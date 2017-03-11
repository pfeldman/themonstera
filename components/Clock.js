import React, { PropTypes } from 'react'

class Clock extends React.Component {
  format(t) {
    return `${this.pad(t.getUTCHours())}:${this.pad(t.getUTCMinutes())}:${this.pad(t.getUTCSeconds())}`
  }

  pad(n) {
    return n < 10 ? `0${n}` : n
  }

  render() {
    const { light, lastUpdate } = this.props

    return (
      <div className={light ? 'light' : ''}>
        {this.format(new Date(lastUpdate))}
        <style jsx>{`
          div {
            padding: 15px;
            display: inline-block;
            color: #82FA58;
            font: 50px menlo, monaco, monospace;
            background-color: #000;
          }
          .light {
            background-color: #999;
          }
        `}</style>
      </div>
    )
  }
}

Clock.propTypes = {
  light: PropTypes.bool,
  lastUpdate: PropTypes.number
}

export default Clock