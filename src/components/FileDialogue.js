import React from "react";
import srtParser2 from "srt-parser-2";

function buildFileSelector(){
  const fileSelector = document.createElement('input');
  fileSelector.setAttribute('type', 'file');
  fileSelector.onchange = processFile;
  return fileSelector;
}

function processFile(e) {
  Array.from(e.target.files).forEach(file => {
    var reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = function (evt) {
        var parser = new srtParser2()
        var result = parser.fromSrt(evt.target.result);
        console.log(result);
    }
    reader.onerror = function () {
        document.getElementById("fileContents").innerHTML = "error reading file";
    }
  });
}

export default class FileDialogue extends React.Component {
  componentDidMount(){
    this.fileSelector = buildFileSelector();
  }

  handleFileSelect = (e) => {
    e.preventDefault();
    this.fileSelector.click();
  }

  render(){
    return (
      <>
        <button onClick={this.handleFileSelect}>Select SRT file</button>
        <div id="fileContents"></div>
      </>
    )
  }
}