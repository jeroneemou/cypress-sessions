describe('First test', () => {

  // First test
  it ('runs tests', () => {
    expect(1).to.eq(1)
    expect('hello world').to.include('world')
  })

  it('load google', () => {
    cy.visit('https://google.com/')
  })

  it('load vw', () => {
    cy.visit('https://volkswagen.de/')
  })

  // https://docs.cypress.io/api/commands/log.html
  it ('logs', () => {
    cy.log('Something', 1)
    cy.log('Something', [1,3,3453])
    cy.log('Something', { a: 'b'})
    cy.log('Something', 'beautiful')
  })
})
