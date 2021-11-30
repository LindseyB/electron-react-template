const { exec } = require('child_process')

window.addEventListener('generate', (e) => {
  console.log(e)
  exec('dir', (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`)
      return
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`)
      return
    }
    console.log(`stdout: ${stdout}`)
  })
})
