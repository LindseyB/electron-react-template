import React from 'react'
import PropTypes from 'prop-types'
import { Form, Panel } from 'react-bulma-components'

import 'bulma/css/bulma.min.css'

export default class SrtEntry extends React.Component {
  render() {
    return (
      <Panel.Block>
        <Form.Field>
          <Form.Control>
            <Form.Checkbox checked={this.props.checked}>{this.props.subtitle}</Form.Checkbox>
          </Form.Control>
        </Form.Field>
      </Panel.Block>
    )
  }
}

SrtEntry.propTypes = {
  subtitle: PropTypes.string,
  id: PropTypes.string,
  checked: PropTypes.bool,
}
