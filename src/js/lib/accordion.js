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
