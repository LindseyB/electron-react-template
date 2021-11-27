import React from 'react'
import FileDialogue from './components/FileDialogue'
import { Columns, Container, Heading } from 'react-bulma-components';

import './styles/App.scss'
import 'bulma/css/bulma.min.css'


function App() {
  return (
    <Container>
      <Columns>
        <Columns.Column p={4} m={4}>
          <Heading>Sturdy Engine</Heading>
          <FileDialogue />
        </Columns.Column>
      </Columns>
    </Container>
  )
}

export default App
