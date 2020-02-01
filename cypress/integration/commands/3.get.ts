describe('Get', () => {
  // https://docs.cypress.io/api/commands/get.html

  it ('data attribute', () => {
    cy.visit('/')
    cy.get('[data-cy=title]')
  })

  it ('class', () => {
    cy.visit('/')

    cy.get('.content')
    // versus
    cy.get('[data-cy=content]')
  })

  // https://docs.cypress.io/api/commands/within.html
  it ('within', () => {

    cy.visit('/login')

    cy.get('form').within(($el) => {
      // Faster!
      cy.get('input')
      cy.root().submit()
    })
  })
})
