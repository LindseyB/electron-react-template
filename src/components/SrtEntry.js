import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-bulma-components';

import 'bulma/css/bulma.min.css'

export default class SrtEntry extends React.Component {
  render() {
    return (
      <Form.Field>
        <Form.Control>
          <Form.Checkbox>
            {this.props.subtitle}
          </Form.Checkbox>
        </Form.Control>
      </Form.Field>
    )
  }
}

SrtEntry.propTypes = {
  subtitle: PropTypes.string,
  id: PropTypes.string,
}
