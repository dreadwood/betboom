/**
 * block-application.js
 */
;(() => {
  /** @type {NodeListOf<HTMLInputElement>} */
  const fieldRequired = document.querySelectorAll('.js-field-required')

  /** @type {HTMLButtonElement | null} */
  const submitBtn = document.querySelector('.js-submit-btn')

  fieldRequired.forEach((it) => {
    it.addEventListener('input', () =>
      it.parentElement.classList.remove('error')
    )

    it.addEventListener('blur', () => {
      if (it.value.length === 0) {
        it.parentElement.classList.add('error')
      }
    })
  })

  submitBtn.addEventListener('click', (evt) => {
    fieldRequired.forEach((it) => {
      if (
        (it.tagName === 'INPUT' &&
          it.type !== 'checkbox' &&
          it.value.length === 0) ||
        (it.tagName === 'INPUT' && it.type === 'checkbox' && !it.checked) ||
        (it.tagName === 'TEXTAREA' && it.value.length === 0)
      ) {
        it.parentElement.classList.add('error')
        evt.preventDefault()
      }
    })
  })
})()
