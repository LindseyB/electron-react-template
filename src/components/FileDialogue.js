import React from 'react'
import srtParser2 from 'srt-parser-2'

import SrtEntry from './SrtEntry'

export default class FileDialogue extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subtitles: [],
      subtitlesLoaded: false,
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
        console.log(result)
        this.setState({ subtitles: result, subtitlesLoaded: true })
      }
      reader.onerror = function () {
        document.getElementById('fileContents').innerHTML = 'error reading file'
      }
    })
  }

  componentDidMount() {
    this.fileSelector = this.buildFileSelector()
  }

  handleFileSelect = (e) => {
    e.preventDefault()
    this.fileSelector.click()
  }

  renderSubtitles() {
    return this.state.subtitles.map((sub) => (
      <SrtEntry subtitle={sub.text} id={sub.id} key={sub.id} />
    ))
  }

  renderFileSelect() {
    return (
      <>
        <button onClick={this.handleFileSelect}>Select SRT file</button>
        <div id="fileContents"></div>
      </>
    )
  }

  render() {
    if (this.state.subtitlesLoaded) {
      return this.renderSubtitles()
    }

    return this.renderFileSelect()
  }
}
