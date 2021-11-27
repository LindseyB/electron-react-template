import React from 'react'
import PropTypes from 'prop-types'
import { Form, Panel } from 'react-bulma-components'

export default class Search extends React.Component {
  render() {
    return (
      <Panel.Block>
        <Form.Field style={{ flex: 1 }}>
          <Form.Control fullwidth={true}>
            <Form.Input
              placeholder="filter"
              type="text"
              onChange={this.props.onChange}
              style={{ width: '100%' }}
            />
          </Form.Control>
        </Form.Field>
      </Panel.Block>
    )
  }
}

Search.propTypes = {
  onChange: PropTypes.func,
}
