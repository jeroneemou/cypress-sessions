describe('Visit', () => {

  // https://docs.cypress.io/api/commands/location.html

  it ('visits', () => {
    cy.visit('https://duckduckgo.com/')

    cy.get('#search_form_input_homepage').type('elon musk')
    cy.get('#search_button_homepage').click()

    cy.location().should((loc) => {
      expect(loc.hash).to.eq('')
      expect(loc.host).to.eq('duckduckgo.com')
      expect(loc.hostname).to.eq('duckduckgo.com')
      expect(loc.href).to.contain('https://duckduckgo.com/?q=elon+musk')
      expect(loc.origin).to.eq('https://duckduckgo.com')
      expect(loc.pathname).to.eq('/')
      expect(loc.protocol).to.eq('https:')
      expect(loc.search).to.contain('?q=elon+musk')
    })

    cy.url().should('include', '?q=elon+musk')
  })
})
