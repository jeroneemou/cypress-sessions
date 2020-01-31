describe('Test', () => {
  it ('runs tests', () => {
    expect(1).to.eq(1)
    expect('hello world').to.include('world')
  })

  it ('logs', () => {
    cy.log('Something', 1)
    cy.log('Something', [1,3,3453])
    cy.log('Something', { a: 'b'})
    cy.log('Something', 'beautiful')
  })
})
