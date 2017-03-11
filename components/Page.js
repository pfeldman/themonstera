import React, { PropTypes } from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'
import Clock from './Clock'

class Page extends React.Component {
  render() {
    const { lastUpdate, light, title, linkTo } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <Clock lastUpdate={lastUpdate} light={light} />
        <nav>
          <Link href={linkTo}><a>Navigate</a></Link>
        </nav>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    lastUpdate: state.tick.lastUpdate,
    light: state.tick.light
  }
}

Page.propTypes = {
  lastUpdate: PropTypes.number,
  light: PropTypes.bool,
  linkTo: PropTypes.string,
  title: PropTypes.string
}

export default connect(mapStateToProps)(Page)