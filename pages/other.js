import React from 'react'
import { initStore } from '../store'
import { startClock } from '../actions/startClock'
import withRedux from 'next-redux-wrapper'
import Page from '../components/Page'

class Counter extends React.Component {
  static getInitialProps ({ store, isServer }) {
    console.log(isServer)
    store.dispatch({ type: 'TICK', light: !isServer, ts: Date.now() })
    return { isServer }
  }

  componentDidMount () {
    this.timer = this.props.dispatch(startClock())
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <Page title={'Other Page ' + (this.props.isServer ? 'from server' : 'from client')} linkTo='/' />
    )
  }
}

export default withRedux(initStore)(Counter)