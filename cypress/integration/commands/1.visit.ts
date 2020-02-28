describe('Visit / Request', () => {
  // https://docs.cypress.io/api/commands/visit.html

  it('visits', () => {
    cy.visit('')
    cy.visit('/')
    cy.visit('/blog')
    // cy.visit('/asdasd')
  })

  it('Basic Auth', () => {
    // https://jigsaw.w3.org/HTTP/Basic/
    // guest / guest
    cy.visit('https://jigsaw.w3.org/HTTP/Basic/', {
      auth: {
        username: 'guest',
        password: 'guest'
      }
    }) // make it work
  })

  it('Query params', () => {
    // Search for something
    // Good for pagination i.e. 100th page
    cy.visit('https://duckduckgo.com', { // ?q=cypressjs
      qs: {
        q: 'cypressjs'
      }
    })
  })

  // Example for API's
  it('requests', () => {
    // Request
    cy.request('https://jsonplaceholder.cypress.io/comments').should((response) => {
      cy.log('Response', response)
      expect(response.body).to.have.length(500)
      expect(response).to.have.property('headers')
      expect(response).to.have.property('duration')
    })
  })

})
