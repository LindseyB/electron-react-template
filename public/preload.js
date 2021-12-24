const { execSync } = require('child_process')
//const fs = require('fs');
const pathToFfmpeg = require('ffmpeg-static')

window.addEventListener('generate', (e) => {
  const videoFile = e.detail.videoFileName
  const subtitles = e.detail.subtitles
  const ffmpeg = pathToFfmpeg

  const kebabCase = (str) =>
    str
      .match(/[A-Z]{2,}(?=[A-Z][a-z0-9]*|\b)|[A-Z]?[a-z0-9]*|[A-Z]|[0-9]+/g)
      .filter(Boolean)
      .map((x) => x.toLowerCase())
      .join('-')

  const removeHtml = (str) => str.replace(/<[^>]*>?/gm, '')
  const padIndex = (idx) => idx.toString().padStart(5, '0')

  //if (!fs.existsSync('gif')) fs.mkdir('temp')

  for (const sub of subtitles) {
    let startTime = sub.startTime.replace(',', '.')
    let endTime = sub.endTime.replace(',', '.')
    let durationTime = getDurationString(startTime, endTime)

    let fileName = `${padIndex(sub.id)}-${kebabCase(removeHtml(sub.text))}`
    generatePalette(ffmpeg, startTime, durationTime, videoFile)
    generateGif(ffmpeg, startTime, durationTime, videoFile, fileName)
  }
})

function generatePalette(ffmpeg, startTime, durationTime, videoFile) {
  execSync(
    `${ffmpeg} -y -ss ${startTime} -t ${durationTime} -i ${videoFile} -filter_complex "[0:v] palettegen" palette.png`,
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`)
        return
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`)
        return
      }
      console.log(`stdout: ${stdout}`)
    },
  )
}

function generateGif(ffmpeg, startTime, durationTime, videoFile, fileName) {
  execSync(
    `${ffmpeg} -y -ss ${startTime} -t ${durationTime} -i ${videoFile} -i palette.png -filter_complex "[0:v][1:v] paletteuse" ${fileName}.gif`,
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`)
        return
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`)
        return
      }
      console.log(`stdout: ${stdout}`)
    },
  )
}

function getDurationString(startTime, endTime) {
  let startDate = new Date(`September 18, 1990 ${startTime}`)
  let endDate = new Date(`September 18, 1990 ${endTime}`)
  let diffMillis = new Date(endDate - startDate)

  return msToTime(diffMillis)
}

function msToTime(duration) {
  var milliseconds = Math.floor(duration % 1000),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = hours < 10 ? '0' + hours : hours
  minutes = minutes < 10 ? '0' + minutes : minutes
  seconds = seconds < 10 ? '0' + seconds : seconds

  return hours + ':' + minutes + ':' + seconds + '.' + milliseconds
}
