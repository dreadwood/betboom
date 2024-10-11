'use strict'

/**
 * utils.js
 */
window.utils = {
  /**
   * @param {JSON} data
   * @param {string} url
   * @return {Promise<Response>}
   */
  async sendData(data, url) {
    return await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      mode: 'no-cors'
    })
  }
}

/**
 * accordion.js
 */
;(() => {
  const accordions = document.querySelectorAll('.js-accordion')

  if (accordions.length === 0) {
    return
  }

  accordions.forEach((it) => {
    const btn = it.querySelector('.js-accordion-btn')
    const content = it.querySelector('.js-accordion-content')

    if (!btn || !content) {
      return
    }

    btn.addEventListener('click', () => {
      it.classList.toggle('show')

      if (it.classList.contains('show')) {
        content.style = `height: ${content.scrollHeight}px;`
      } else {
        content.style = ''
      }
    })
  })
})()

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

/**
 * form-field-group.js
 */
;(() => {
  const fieldGroup = document.querySelectorAll('.js-field-group')

  if (fieldGroup.length === 0) {
    return
  }

  fieldGroup.forEach((it) => {
    const element = it.querySelector('.js-field-group-example')
    const btn = it.querySelector('.js-field-group-btn')

    if (!element || !btn) {
      return
    }

    btn.onclick = () => copyElemnt(element, it)
  })

  /**
   * @param {HTMLDivElement} element
   * @param {HTMLDivElement} container
   */
  function copyElemnt(element, container) {
    const copy = element.cloneNode(true)

    /** @type {HTMLInputElement | null} */
    const field = copy.querySelector('.js-field-group-field')

    /** @type {HTMLLabelElement | null} */
    const label = copy.querySelector('.js-field-group-label')

    /** @type {HTMLInputElement | null} */
    const btnField = copy.querySelector('.js-field-group-btn')

    if (!field || !btnField) {
      return
    }

    label.textContent = label.textContent.replace(/\*/g, '')

    field.value = ''
    field.classList.remove('js-field-required')
    field.removeAttribute('id')
    field.removeAttribute('required')

    btnField.classList.add('minus')
    btnField.onclick = () => copy.remove()

    container.appendChild(copy)
  }
})()

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
