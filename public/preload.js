window.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('chrome-version')
  if (element) {
    element.innerText = process.versions['chrome']
  }
})
