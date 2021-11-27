import React from 'react'
import PropTypes from 'prop-types'
import { Form, Panel } from 'react-bulma-components'

import 'bulma/css/bulma.min.css'

export default class SrtEntry extends React.Component {
  render() {
    return (
      <Panel.Block renderAs="label">
        <Form.Field>
          <Form.Control>
            <Form.Checkbox class="checkbox" data-subtitle-index={this.props.id}>
              {this.props.subtitle}
            </Form.Checkbox>
          </Form.Control>
        </Form.Field>
      </Panel.Block>
    )
  }
}

SrtEntry.propTypes = {
  subtitle: PropTypes.string,
  id: PropTypes.string,
}
