describe('Get', () => {
  // https://docs.cypress.io/api/commands/get.html

  it ('data attribute', () => {
    cy.visit('/')
    const headline = cy.get('[data-cy=content] > h1')
    headline.should('contain.html', 'Hello World')
    // Propagate to callback
    headline.should(($el) => {
      expect($el).to.have.html('Hello World')
    })
    // cy.get('[data-cy=title]')
  })
  function findAndFill(dataAtt:string, content: string) {
    cy.get(`[data-cy=${dataAtt}]`).type(content)
  }
  it ('profile', () => {
    cy.visit('/login')
    findAndFill('loginInput', 'admin');

    // cy.get('[data-cy=loginInput]').type('admin')
    // cy.get('[data-cy=loginPassword').type('asdf1234')
    // cy.get('[data-cy=submitButton]').click()


    // Selectors
    // cy.get('#my-id')
    // cy.get('.your-class')
    // cy.get('div')
    // cy.get('form')
    // cy.get('section')
    // cy.get('input')
    // cy.get('form .my-class')
    // cy.get('[data-cy=loginInput]')


  })

  // it ('class', function () {
  //   cy.visit('/')

  //   cy.get('.content')
  //   // versus
  //   cy.get('[data-cy=content]')
  // })

  // // https://docs.cypress.io/api/commands/within.html
  // it ('within', () => {

  //   cy.visit('/login')

  //   cy.get('form').within(($el) => {
  //     // Faster!
  //     cy.get('input')
  //     cy.root().submit()
  //   })
  // })
})
