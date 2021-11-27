import React from 'react'
import srtParser2 from 'srt-parser-2'
import { Button, Message, Panel } from 'react-bulma-components'

import SrtEntry from './SrtEntry'
import Search from './Search'

import 'bulma/css/bulma.min.css'
import '../styles/FileDialogue.scss'

export default class FileDialogue extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subtitles: [],
      subtitlesLoaded: false,
      error: null,
    }
  }

  buildFileSelector = () => {
    const fileSelector = document.createElement('input')
    fileSelector.setAttribute('type', 'file')
    fileSelector.onchange = this.processFile
    return fileSelector
  }

  processFile = (e) => {
    Array.from(e.target.files).forEach((file) => {
      var reader = new FileReader()
      reader.readAsText(file, 'UTF-8')
      reader.onload = (evt) => {
        var parser = new srtParser2()
        var result = parser.fromSrt(evt.target.result)
        if (result.length == 0) {
          this.setState({
            error: "Couldn't find any subtitles in that file, are you sure it was a subtitle file?",
          })
        } else {
          this.setState({ subtitles: result, subtitlesLoaded: true })
        }
      }
      reader.onerror = function () {
        this.setState({ error: "Error reading file, are you sure it's an SRT?" })
      }
    })
  }

  componentDidMount() {
    this.fileSelector = this.buildFileSelector()
  }

  componentDidUpdate() {
    this.fileSelector = this.buildFileSelector()
  }

  handleFileSelect = (e) => {
    e.preventDefault()
    this.fileSelector.click()
  }

  renderSubtitles() {
    return (
      <Panel>
        <Panel.Header display="flex" justifyContent="space-between">
          Subtitles
          <Button remove onClick={this.clearSubtitles} />
        </Panel.Header>
        <Search onChange={this.filterSubtitles} />
        <div id="subtitles-container">
          {this.state.subtitles.map((sub, index) =>
            !this.state.filter ||
            sub.text.toLowerCase().includes(this.state.filter) ||
            sub.checked ? (
              <SrtEntry
                subtitle={sub.text}
                index={index}
                key={sub.id}
                onChange={this.onSubtitleChange}
              />
            ) : (
              ''
            ),
          )}
        </div>
        <Panel.Block>
          <Button.Group hasAddons m="auto">
            <Button outlined onClick={() => this.setAll(false)}>
              Uncheck All
            </Button>
            <Button outlined onClick={() => this.setAll(true)}>
              Check All
            </Button>
            <Button outlined>Process All</Button>
          </Button.Group>
        </Panel.Block>
      </Panel>
    )
  }

  renderFileSelect() {
    return (
      <>
        <Button onClick={this.handleFileSelect}>Select SRT file</Button>
      </>
    )
  }

  clearErrors = () => {
    this.setState({ error: null })
  }

  clearSubtitles = () => {
    this.setState({ error: null, subtitles: [], subtitlesLoaded: false })
  }

  // This is decidedly not the react way to do this
  setAll = (status) => {
    let subtitles = this.state.subtitles

    for (const item of document.querySelectorAll('[data-subtitle-index]')) {
      item.checked = status
    }

    for (const sub of subtitles) {
      sub['checked'] = status
    }

    this.setState({ subtitles: subtitles })
  }

  filterSubtitles = (e) => {
    this.setState({ filter: e.target.value.toLowerCase() })
  }

  onSubtitleChange = (e) => {
    let subtitles = this.state.subtitles
    let index = parseInt(e.target.dataset.subtitleIndex)

    subtitles[index].checked = !subtitles[index].checked
    this.setState({ subtitles: subtitles })
  }

  renderError = () => {
    return (
      <Message color="danger" m={6}>
        <Message.Header>
          <span>Error</span>
          <Button remove onClick={this.clearErrors} />
        </Message.Header>
        <Message.Body>{this.state.error}</Message.Body>
      </Message>
    )
  }

  render() {
    if (this.state.subtitlesLoaded) {
      return this.renderSubtitles()
    }

    if (this.state.error) {
      return this.renderError()
    }

    return this.renderFileSelect()
  }
}
