import React from 'react'
import PropTypes from 'prop-types'
import { Form, Panel } from 'react-bulma-components'

import 'bulma/css/bulma.min.css'

export default class SrtEntry extends React.Component {
  // Don't normally do this but the HTML in SRT files
  // is simple enough that this works, try a sanitizer
  removeHtml(text) {
    return text.replace(/<[^>]*>?/gm, '')
  }

  render() {
    return (
      <Panel.Block renderAs="label">
        <Form.Field>
          <Form.Control>
            <Form.Checkbox
              className="subtitle-check"
              data-subtitle-index={this.props.index}
              onChange={this.props.onChange}
              checked={this.props.checked}
            >
              {this.removeHtml(this.props.subtitle)}
            </Form.Checkbox>
          </Form.Control>
        </Form.Field>
      </Panel.Block>
    )
  }
}

SrtEntry.defaultProps = {
  checked: false,
}

SrtEntry.propTypes = {
  subtitle: PropTypes.string,
  onChange: PropTypes.func,
  index: PropTypes.number,
  checked: PropTypes.bool,
}
