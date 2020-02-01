// https:// docs.cypress.io/api/commands/should.html
describe('Should', () => {
  it ('mobile screenshot', () => {
    cy
      .get('nav')                          // yields <nav>
      .should('be.visible')                // yields <nav>
      .should('have.css', 'font-family')   // yields 'sans-serif'
      .and('match', /serif/)
  })

})