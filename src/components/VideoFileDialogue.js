import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileVideo } from '@fortawesome/free-solid-svg-icons'
import { Button, Icon, Panel } from 'react-bulma-components'

import 'bulma/css/bulma.min.css'

export default class VideoFileDialogue extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fileName: null,
    }
  }

  componentDidMount() {
    this.fileSelector = this.buildFileSelector()

    console.log('here')
    const event = new Event('generate')
    window.dispatchEvent(event)
  }

  buildFileSelector = () => {
    const fileSelector = document.createElement('input')
    fileSelector.setAttribute('type', 'file')
    fileSelector.setAttribute('accept', 'video/*')
    fileSelector.onchange = this.processFile
    return fileSelector
  }

  processFile = (e) => {
    Array.from(e.target.files).forEach((file) => {
      let fileName = file.path
      this.props.onFileSelect(fileName)
      this.setState({ fileName: fileName })
    })
  }

  handleFileSelect = (e) => {
    e.preventDefault()
    this.fileSelector.click()
  }

  render() {
    if (!this.state.fileName) {
      return (
        <Panel.Block>
          <Button onClick={this.handleFileSelect} fullwidth>
            Select video file
          </Button>
        </Panel.Block>
      )
    }

    return (
      <Panel.Block>
        <Icon color="info" size="medium">
          <FontAwesomeIcon icon={faFileVideo} />
        </Icon>
        {this.state.fileName}
      </Panel.Block>
    )
  }
}

VideoFileDialogue.propTypes = {
  onFileSelect: PropTypes.func,
}
