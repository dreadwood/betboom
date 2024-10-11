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

    /** @type {HTMLInputElement | null} */
    const btnField = copy.querySelector('.js-field-group-btn')

    if (!field || !btnField) {
      return
    }

    const num = container.children.length + 1

    field.value = ''
    field.removeAttribute('id')
    field.removeAttribute('required')

    btnField.classList.add('minus')
    btnField.onclick = () => copy.remove()

    container.appendChild(copy)
  }
})()
