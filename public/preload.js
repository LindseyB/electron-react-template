const { exec } = require('child_process')
//const fs = require('fs');
const pathToFfmpeg = require('ffmpeg-static')

window.addEventListener('generate', (e) => {
  const videoFile = e.detail.videoFileName
  const subtitles = e.detail.subtitles
  const ffmpeg = pathToFfmpeg
  console.log(e)

  //if (!fs.existsSync('gif')) fs.mkdir('temp')

  /* How to generate and use a palette for ffmpeg
$ ffmpeg -ss 61.0 -t 2.5 -i StickAround.mp4 -filter_complex "[0:v] palettegen" palette.png
$ ffmpeg -ss 61.0 -t 2.5 -i StickAround.mp4 -i palette.png -filter_complex "[0:v][1:v] paletteuse" prettyStickAround.gif
*/

  for (const sub of subtitles) {
    let startTime = sub.startTime.replace(',', '.')
    let endTime = sub.endTime.replace(',', '.')
    let durationTime = getDurationString(startTime, endTime)

    console.log(`start: ${startTime} duration: ${durationTime}`)
    let fileName = 'test'
    exec(
      `${ffmpeg} -ss ${startTime} -t ${durationTime} -i ${videoFile} -f gif ${fileName}.gif`,
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

  console.log('path to ffmpeg', pathToFfmpeg)
})

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
