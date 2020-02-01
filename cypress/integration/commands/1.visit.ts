describe('Visit / Request', () => {
  // https://docs.cypress.io/api/commands/visit.html

  it('visits', () => {
    cy.visit('/')
    // cy.visit('https://google.com/')
  })

  it('Basic Auth', () => {
    // https://jigsaw.w3.org/HTTP/Basic/
  })

  it('requests', () => {
    cy.request('https://jsonplaceholder.cypress.io/comments').should((response) => {
      expect(response.body).to.have.length(500)
      expect(response).to.have.property('headers')
      expect(response).to.have.property('duration')
    })
  })

})
