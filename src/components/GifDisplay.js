import React from 'react'

export default class GifDisplay extends React.Component {
  render() {
    console.log(window.generatedGifs)
    return window.generatedGifs.map((gif) => {
      ;<img src={gif} />
    })
  }
}
