import React from "react";

function buildFileSelector(){
  const fileSelector = document.createElement('input');
  fileSelector.setAttribute('type', 'file');
  fileSelector.setAttribute('multiple', 'multiple');
  fileSelector.onchange = processFile;
  return fileSelector;
}

function processFile(e) {
  Array.from(e.target.files).forEach(file => {
    var reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = function (evt) {
        // TODO: update to process as SRT files
        document.getElementById("fileContents").innerHTML = evt.target.result;
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
        <button onClick={this.handleFileSelect}>Select files</button>
        <div id="fileContents"></div>
      </>
    )
  }
}