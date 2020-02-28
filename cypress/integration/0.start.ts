describe('Login page', () => {
  // Welcome to cypress tutorial

  it ('test', () => {
    console.log('dont use console log') // console gets cleared every time its used
    // actual test
    cy.log('Test')

    cy.log(1);
  })
  
  it('should run test', () => {
    cy.log('random log')
  })

  it('second test', () => {
    cy.log('second test')
  })

  // CMD + SHIFT + / ... to comment

  before(() => {
    // runs once before all tests in the block
    cy.log('Before everything')
  })

  after(() => {
    // runs once after all tests in the block
    cy.log('Runs after everything')
  })

  beforeEach(() => {
    // runs before each test in the block
    cy.log('before each test')
  })

  afterEach(() => {
    // runs after each test in the block
    cy.log('after each test')
  })

})
