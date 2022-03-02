// events
window.addEventListener('load', e => {
  // darkMode
  let darkMode = false
  const main = document.getElementById('main')
  const darkModeToggle = document.getElementById('darkmode-toggle')
  darkModeToggle.addEventListener('click', (e) => {
    e.preventDefault()
    darkMode = !darkMode
    main.classList.toggle('dark')
    if (darkMode) {
      darkModeToggle.src = './icons/light/light-mode.svg'
    } else {
      darkModeToggle.src = './icons/light/dark-mode.svg'
    }
  })

  const content = document.getElementById('content')
  // open navigation
  const navigavionToggle = document.getElementById('navigation-toggle')
  const navigationMobile = document.getElementById('navigation-mobile')

  navigavionToggle.addEventListener('click', (e) => {
    navigationMobile.classList.remove('hidden')
    content.classList.add('overflow-hidden')
  })

  // close navigation
  const navigationClose = document.getElementById('navigation-close')
  navigationClose.addEventListener('click', (e) => {
    e.preventDefault()
    navigationMobile.classList.add('hidden')
    content.classList.remove('overflow-hidden')
  })
  // submit contact information
  const fieldName = document.getElementById('field-name')
  const fieldEmail = document.getElementById('field-email')
  const fieldMessage = document.getElementById('field-message')

  const btnSend = document.getElementById('btn-send')
  const btnClear = document.getElementById('btn-clear')

  let fieldNameErr = false
  let fieldEmailErr = false
  let fieldMessageErr = false

  // clear fields form
  btnClear.addEventListener('click', (e) => {
    e.preventDefault()
    if (fieldNameErr) {
      fieldName.classList.replace('field-error', 'field-normal')
    }
    if(fieldEmailErr) {
      fieldEmail.classList.replace('field-error', 'field-normal')
    }
    if(fieldMessageErr) {
      fieldMessage.classList.replace('field-error', 'field-normal')
    }
    fieldName.value = ''
    fieldEmail.value = ''
    fieldMessage.value = ''
  })

  // send contact information
  btnSend.addEventListener('click', (e) => {
    if (!fieldName.value) {
      fieldName.classList.replace('field-normal', 'field-error')
      fieldNameErr = true
    }

    if (!fieldEmail.value) {
      fieldEmail.classList.replace('field-normal', 'field-error')
      fieldEmailErr = true
    }

    if (!fieldMessage.value) {
      fieldMessage.classList.replace('field-normal', 'field-error')
      fieldMessageErr = true
    }
  })

  fieldName.addEventListener('keydown', (e) => {
    if (fieldNameErr) {
      fieldName.classList.replace('field-error', 'field-normal')
    }
  })
  fieldEmail.addEventListener('keydown', (e) => {
    if(fieldEmailErr) {
      fieldEmail.classList.replace('field-error', 'field-normal')
    }
  })
  fieldMessage.addEventListener('keydown', (e) => {
    if(fieldMessageErr) {
      fieldMessage.classList.replace('field-error', 'field-normal')
    }
  })
})
