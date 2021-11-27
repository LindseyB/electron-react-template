import React from 'react'
import SrtFileDialogue from './components/SrtFileDialogue'
import { Columns, Container, Heading } from 'react-bulma-components'

import './styles/App.scss'
import 'bulma/css/bulma.min.css'

function App() {
  return (
    <Container>
      <Columns>
        <Columns.Column p={4} m={4}>
          <Heading>Sturdy Engine</Heading>
          <SrtFileDialogue />
        </Columns.Column>
      </Columns>
    </Container>
  )
}

export default App
