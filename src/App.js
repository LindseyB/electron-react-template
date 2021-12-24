import React from 'react'
import SrtFileDialogue from './components/SrtFileDialogue'
import { Columns, Container, Heading } from 'react-bulma-components'

import './styles/App.scss'
import 'bulma/css/bulma.min.css'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showDone: false,
    }
  }

  doneProcessing = () => {
    this.setState({ showDone: true })
  }

  render() {
    return (
      <Container>
        <Columns>
          <Columns.Column p={4} m={4}>
            <Heading>Sturdy Engine</Heading>
            {this.state.showDone ? null : (
              <SrtFileDialogue onDoneProcessing={this.doneProcessing} />
            )}
          </Columns.Column>
        </Columns>
      </Container>
    )
  }
}
