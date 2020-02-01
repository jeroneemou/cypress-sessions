describe('Viewport / screenshot', () => {
  // https:// docs.cypress.io/api/commands/viewport.html


  it ('mobile screenshot', () => {
    cy.viewport('iphone-x')
    cy.visit('/')
    cy.screenshot()
  })
})
