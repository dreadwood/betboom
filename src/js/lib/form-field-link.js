/**
 * form-field-link.js
 */
;(() => {
  const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9.-]+)(\.[a-zA-Z]{2,})?(\/.*)?$/

  /** @type {NodeListOf<HTMLInputElement>} */
  const fieldsLink = document.querySelectorAll('.js-field-link')

  fieldsLink.forEach((it) => {
    it.addEventListener('input', () => {
      if (!urlPattern.test(it.value)) {
        it.value = it.value.slice(0, -1)
      }
    })
  })
})()
