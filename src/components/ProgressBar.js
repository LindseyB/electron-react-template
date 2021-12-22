import React from 'react'
import PropTypes from 'prop-types'
import { Progress } from 'react-bulma-components'

import 'bulma/css/bulma.min.css'

export default class ProgressBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
    }
  }

  render() {
    return <Progress color="link" max={this.props.maxCount} value={this.state.value} />
  }
}

ProgressBar.propTypes = {
  maxCount: PropTypes.number,
}
